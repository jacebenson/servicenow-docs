// START 11TY imports
import eleventyNavigationPlugin             from "@11ty/eleventy-navigation";
import { InputPathToUrlTransformPlugin }    from "@11ty/eleventy";
import { eleventyImageTransformPlugin }     from "@11ty/eleventy-img";
import { EleventyHtmlBasePlugin }           from "@11ty/eleventy";
import pluginRss                            from "@11ty/eleventy-plugin-rss";
// END 11TY imports

// START LibDoc imports
import libdocConfig                         from "./_data/libdocConfig.js";
import libdocFunctions                      from "./_data/libdocFunctions.js";
// END LibDoc imports
import { getLinks, getEntitlements } from "./_data/skus.js";
import { markdownEquivalentsPlugin } from "./_data/markdown-equivalents.js";

export default function(eleventyConfig) {
    // START PLUGINS
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
    eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(eleventyImageTransformPlugin, libdocFunctions.pluginsParameters.eleventyImageTransform());
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(markdownEquivalentsPlugin);
    // END PLUGINS

    // START FILTERS
    eleventyConfig.addAsyncFilter("autoids", libdocFunctions.filters.autoids);
    eleventyConfig.addAsyncFilter("embed", libdocFunctions.filters.embed);
    eleventyConfig.addAsyncFilter("cleanup", libdocFunctions.filters.cleanup);
    eleventyConfig.addAsyncFilter("dateString", libdocFunctions.filters.dateString);
    eleventyConfig.addAsyncFilter("datePrefixText", libdocFunctions.filters.datePrefixText);
    eleventyConfig.addAsyncFilter("toc", libdocFunctions.filters.toc);
    eleventyConfig.addAsyncFilter("sanitizeJSON", libdocFunctions.filters.sanitizeJson);
    eleventyConfig.addAsyncFilter("gitLastModifiedDate", libdocFunctions.filters.gitLastModifiedDate);
    // END FILTERS

    // START COLLECTIONS
    eleventyConfig.addCollection("myTags", libdocFunctions.collections.myTags);
    eleventyConfig.addCollection("postsByDateDescending", libdocFunctions.collections.postsByDateDescending);
    // END COLLECTIONS

    // START SHORTCODES
    eleventyConfig.addShortcode("alert", libdocFunctions.shortcodes.alert);
    eleventyConfig.addPairedShortcode("alertAlt", libdocFunctions.shortcodes.alert);
    eleventyConfig.addShortcode("embed", libdocFunctions.shortcodes.embed);
    eleventyConfig.addShortcode("icons", libdocFunctions.shortcodes.icons);
    eleventyConfig.addShortcode("icon", libdocFunctions.shortcodes.icon);
    eleventyConfig.addShortcode("iconCard", libdocFunctions.shortcodes.iconCard);
    eleventyConfig.addPairedShortcode("sandbox", libdocFunctions.shortcodes.sandbox);
    eleventyConfig.addPairedShortcode("sandboxFile", libdocFunctions.shortcodes.sandboxFile);
    eleventyConfig.addShortcode('tag', (arg) => `<div>${arg}</div>`);
    eleventyConfig.addShortcode('sku', getLinks);
    eleventyConfig.addShortcode('ent', getEntitlements);
    // END SHORTCODES

    // START FILE COPY
    eleventyConfig.addPassthroughCopy({ "src/sandboxes": "sandboxes" });
    eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
    eleventyConfig.addPassthroughCopy("core/assets");
    eleventyConfig.addPassthroughCopy({ "src/favicon.png": "favicon.png" });
    eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });
    // END FILE COPY

    eleventyConfig.addFilter("removeEscapedCharacted", function (value) {
        value = value.replace('\\:', '');
        return value;
    });

    return {
        dir: {
            input: "src",
            data: "../_data",
            includes: "../_includes"
        },
        pathPrefix: libdocConfig.htmlBasePathPrefix
    }
};
