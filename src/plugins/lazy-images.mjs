export const lazyImages = {
  name: 'lazy-images',
  element: {
    filter: [],
    visit(node) {
      if (node.tagName !== 'img') {
        return;
      }

      return {
        ...node,
        properties: { loading: 'lazy', decoding: 'async', ...node.properties },
      };
    },
  },
};
