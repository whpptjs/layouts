const { values, concat } = require('lodash');

const extractComponentImages = ({ content, definitionsArray }) => {
  return concat(
    ...content.map(item => {
      const contentDef = definitionsArray.find(def => def.componentType === item.componentType);

      if (contentDef && contentDef.extractImages) return contentDef.extractImages(item);

      return [];
    })
  );
};

const extractComponentLinks = ({ content, definitionsArray }) => {
  return concat(
    ...content.map(item => {
      const contentDef = definitionsArray.find(def => def.componentType === item.componentType);

      if (contentDef && contentDef.extractLinks) return contentDef.extractLinks(item);

      return [];
    })
  );
};

export default (definitions, prefix) => ({
  key: `${prefix}SplitContent`,
  name: 'Split Content',
  componentType: 'SplitContent',
  hideSpacingInContent: true,
  init: ({ $set }, content = {}) => {
    if (!content.width) $set(content, 'width', 6);
    if (!content.gap) $set(content, 'gap', 1);
    if (!content.left) $set(content, 'left', []);
    if (!content.right) $set(content, 'right', []);
    if (!content.fullWidth) $set(content, 'fullWidth', false);
    if (!content.reverse) $set(content, 'reverse', { mobile: false, desktop: false });
    // eslint-disable-next-line no-prototype-builtins
    if (!content.hasOwnProperty('matchHeight')) $set(content, 'matchHeight', false);

    return content;
  },
  extractImages: content => {
    const definitionsArray = values(definitions);

    const res = [
      ...extractComponentImages({ content: content.left, definitionsArray }),
      ...extractComponentImages({ content: content.right, definitionsArray }),
    ];

    return res;
  },
  extractLinks: content => {
    const definitionsArray = values(definitions);

    const res = [
      ...extractComponentLinks({ content: content.left, definitionsArray }),
      ...extractComponentLinks({ content: content.right, definitionsArray }),
    ];

    return res;
  },
});
