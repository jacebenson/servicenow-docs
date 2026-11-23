"""Run after npm run build. Focused rendered API reference regressions."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = set()
        self.links = []
        self.canonicals = []
        self.description = None

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            self.ids.add(attrs['id'])
        if tag == 'a' and 'href' in attrs:
            self.links.append(attrs['href'])
        if tag == 'link' and attrs.get('rel') == 'canonical':
            self.canonicals.append(attrs.get('href'))
        if tag == 'meta' and attrs.get('name') == 'description':
            self.description = attrs.get('content')


root = Path('_site')
for name, title, anchors in [
    ('gliderecord', 'ServiceNow GlideRecord API: methods and examples',
     ['query', 'query-29', 'orderby', 'orderbydesc', 'insert', 'setuseengines', 'methods-available']),
    ('glideform', 'ServiceNow GlideForm API: g_form methods and examples',
     ['desktop-getvalue', 'desktop-setvalue', 'desktop-setmandatory', 'desktop-showfieldmsg',
      'desktop-115', 'desktop-setreadonly-178', 'mobile-setreadonly-46']),
]:
    html = (root / 'docs' / name / 'index.html').read_text()
    page = Page()
    page.feed(html)
    assert f'<title>{title}</title>' in html
    assert page.canonicals == [f'https://sn.jace.pro/docs/{name}/']
    assert page.description and 'ServiceNow' in page.description
    assert set(anchors) <= page.ids
    for href in page.links:
        if href.startswith('#'):
            assert unquote(href[1:]) in page.ids, (name, href)
        # Content cross-links. Shared navigation is covered by verify-indexing.py.
        if href.startswith('/docs/'):
            parts = urlsplit(href)
            target = root / parts.path.lstrip('/')
            if parts.path.endswith('/'):
                target /= 'index.html'
            assert target.is_file(), (name, href)
            if parts.fragment:
                linked = Page()
                linked.feed(target.read_text())
                assert unquote(parts.fragment) in linked.ids, (name, href)
    print(f'{name}: title, description, canonical, method anchors and content links verified')
