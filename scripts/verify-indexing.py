from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit
from html.parser import HTMLParser
import sys
import xml.etree.ElementTree as ET

root = Path(sys.argv[1] if len(sys.argv) > 1 else '_site')
origin = 'https://sn.jace.pro'
ns = '{http://www.sitemaps.org/schemas/sitemap/0.9}'
xml = ET.parse(root / 'sitemap.xml').getroot()
assert xml.tag == ns + 'urlset'
urls = [node.text for node in xml.findall(ns + 'url/' + ns + 'loc')]
assert urls and len(urls) == len(set(urls)), 'Sitemap must contain unique URLs'

class Links(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
        self.canonicals = []
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'a' and attrs.get('href'):
            self.links.append(attrs['href'])
        if tag == 'link' and attrs.get('rel') == 'canonical':
            self.canonicals.append(attrs.get('href'))

def output_file(url):
    path = unquote(urlsplit(url).path).lstrip('/')
    file = root / path
    return file / 'index.html' if path.endswith('/') or not path else file

broken = []
for url in urls:
    parsed = urlsplit(url)
    assert url.startswith(origin + '/') and not parsed.query and not parsed.fragment, url
    assert not any(part in parsed.path for part in ['/AGENTS/', '/IDEA/', '/admin/', '/sandboxes/']), url
    file = output_file(url)
    assert file.is_file(), f'Sitemap points to missing file: {url}'
    html = Links()
    html.feed(file.read_text())
    assert html.canonicals == [url], f'Incorrect canonical: {url}: {html.canonicals}'
    for href in html.links:
        target = urljoin(url, href)
        if urlsplit(target).netloc != 'sn.jace.pro' or href.startswith('#'):
            continue
        candidate = output_file(target)
        if not candidate.is_file() and not (candidate / 'index.html').is_file():
            broken.append((url, href))
assert not broken, f'Broken internal links: {broken[:20]}'
assert 'Sitemap: ' + origin + '/sitemap.xml' in (root / 'robots.txt').read_text()
assert 'noindex, follow' in (root / 'search/index.html').read_text()
print(f'Verified {len(urls)} unique sitemap URLs, canonical tags, robots.txt, and internal links')
