// Read-only WebMCP tools for the sn.jace.pro ServiceNow documentation site.
// WebMCP is an early-preview browser API. The site works normally without it.
(() => {
  const modelContext = document.modelContext;
  if (!modelContext?.registerTool) return;

  const INDEX_URL = "/core/assets/js/search_index.json";
  let indexPromise = null;

  const loadIndex = () => {
    indexPromise ||= fetch(INDEX_URL, { credentials: "same-origin" }).then((response) => {
      if (!response.ok) throw new Error(`The documentation search index returned HTTP ${response.status}.`);
      return response.json();
    });
    return indexPromise;
  };

  // Index titles fall back to the source file path when a page has no title.
  const titleFor = (entry) => {
    const title = String(entry.title || "").trim();
    if (title && !title.startsWith("/") && !title.startsWith("./") && !title.endsWith(".md")) return title;
    const segments = new URL(entry.url, location.origin).pathname.split("/").filter(Boolean);
    const slug = segments[segments.length - 1] || "Documentation";
    return slug.replace(/[-_]+/g, " ");
  };

  const excerptFor = (text, term) => {
    const plain = decodeEntities(text);
    const at = plain.toLowerCase().indexOf(term);
    if (at < 0) return plain.slice(0, 240).trim();
    return plain.slice(Math.max(0, at - 80), at + 200).trim();
  };

  // The search index stores HTML-escaped content, so decode before showing it.
  const decodeEntities = (text) =>
    new DOMParser().parseFromString(String(text), "text/html").documentElement.textContent;

  const safeUrl = (value) => {
    const url = new URL(value, location.origin);
    if (url.origin !== location.origin) {
      throw new Error("Only pages on sn.jace.pro can be opened.");
    }
    return url;
  };

  const mainText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    doc.querySelectorAll("script, style, noscript, nav, header, footer, [aria-hidden='true']").forEach((el) => el.remove());
    return (doc.querySelector("main") || doc.body).innerText
      .replace(/[ \t]+/g, " ")
      .replace(/\n{3,}/g, "\n\n")
      .trim();
  };

  modelContext.registerTool({
    name: "sn_docs_search",
    description: "Search Jace Benson's unofficial ServiceNow developer documentation. Returns matching page titles, URLs, and excerpts. Read-only.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Words to find, for example GlideRecord or UI Builder." },
        limit: { type: "integer", description: "Maximum results to return, default 5." },
      },
      required: ["query"],
    },
    annotations: { readOnlyHint: true, untrustedContentHint: true },
    execute: async ({ query, limit }) => {
      const terms = String(query || "").toLowerCase().split(/\s+/).filter((term) => term.length > 1).slice(0, 8);
      if (!terms.length) return "Enter a search query.";
      const entries = await loadIndex();
      const scored = [];
      for (const entry of entries) {
        const title = titleFor(entry);
        const content = String(entry.content || "");
        const haystack = `${title} ${content}`.toLowerCase();
        let score = 0;
        for (const term of terms) {
          if (title.toLowerCase().includes(term)) score += 5;
          score += Math.min(haystack.split(term).length - 1, 10);
        }
        if (!score) continue;
        scored.push({ score, title, url: new URL(entry.url, location.origin).href, excerpt: excerptFor(content, terms[0]) });
      }
      const take = Math.max(1, Math.min(Number(limit) || 5, 10));
      const results = scored.sort((a, b) => b.score - a.score).slice(0, take);
      if (!results.length) return "No matching pages on sn.jace.pro.";
      return JSON.stringify(results.map(({ title, url, excerpt }) => ({ title, url, excerpt })));
    },
  });

  modelContext.registerTool({
    name: "sn_docs_read_page",
    description: "Read the visible text of a page on sn.jace.pro. Only pages on this site are allowed. Read-only.",
    inputSchema: {
      type: "object",
      properties: { url: { type: "string", description: "A sn.jace.pro URL or path, for example /docs/gliderecord/." } },
      required: ["url"],
    },
    annotations: { readOnlyHint: true, untrustedContentHint: true },
    execute: async ({ url }) => {
      const target = safeUrl(url);
      const response = await fetch(target.href, { credentials: "same-origin" });
      if (!response.ok) return `That page returned HTTP ${response.status}.`;
      const html = await response.text();
      const doc = new DOMParser().parseFromString(html, "text/html");
      const heading = doc.querySelector("h1")?.innerText?.trim() || doc.title || target.pathname;
      return `${heading}\n\n${mainText(html).slice(0, 12000)}`;
    },
  });
})();
