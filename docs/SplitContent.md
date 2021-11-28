# Split Content

### Whppt component example

```js
const splitContent = {
  key: 'SplitContent', // A unique identifier for your conent component.
  name: 'Split Content', // This will be your components display name with the Whppt content sidebar.
  /*
   * this is the name registered via our `~/plugins/layouts.js` file.
   * The prefix (default: 'layout-') can be changed via the @whppt/layouts module options.
   */
  componentType: 'layout-split-content',
  /*
   * The init function is responsible for initialising the components content object.
   * The below content object is initialised with 4 properties (left, right, width and gap),
   * Theses are all required properties on the content object to be used within the split contents editors.
   */
  init: ({ $set }, content = {}) => {
    if (!content.width) $set(content, 'width', 6); // width: { type: Number, default: 6 }
    if (!content.gap) $set(content, 'gap', 1); // gap: { type: Number, default: 0 }
    if (!content.left) $set(content, 'left', []); // left: { type: Array, default: () => [] }
    if (!content.right) $set(content, 'right', []); // right: { type: Array, default: () => [] }

    return content;
  },
};
```

### Props

| Name    | Type   | Default                                                                                                                        | required | Description                                                          |
| ------- | ------ | ------------------------------------------------------------------------------------------------------------------------------ | -------- | -------------------------------------------------------------------- |
| content | Object | <code>{<br />&nbsp;&nbsp;left: [],<br />&nbsp;&nbsp;right: [],<br />&nbsp;&nbsp;width: 6,<br />&nbsp;&nbsp;gap: 0<br/>}<code/> | true     | The Whppt content item passed down from the whppt Content component. |
