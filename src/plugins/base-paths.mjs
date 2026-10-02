/*
 * Links and images written by hand in Markdown start at the site root, which is right when the site
 * is served from the root of its origin and wrong when it is served from a sub-path. Astro prefixes
 * the paths its own components emit, not these, so they are prefixed here instead. Registered only
 * when a base is configured, so a root deployment runs with no plugin at all.
 */
const CONTENT_ROOTS = ['/en/', '/cs/', '/screens/', '/diagrams/', '/raw/', '/r/'];

const ATTRIBUTE = { a: 'href', img: 'src' };

export const basePaths = (base) => {
  const prefix = base.replace(/\/$/, '');

  return {
    name: 'base-paths',
    element: {
      // Images reach this plugin before satteri rebuilds them, and an empty filter is how the
      // visitor is told to see every element rather than a named set.
      filter: [],
      visit(node) {
        const attribute = ATTRIBUTE[node.tagName];
        const value = node.properties?.[attribute];

        if (typeof value !== 'string' || !CONTENT_ROOTS.some((root) => value.startsWith(root))) {
          return;
        }

        // The visitor's return value is what gets written back, so a mutated node has to be
        // handed over rather than changed in place.
        return { ...node, properties: { ...node.properties, [attribute]: prefix + value } };
      },
    },
  };
};
