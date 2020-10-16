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
    init: ({ $set }, content = {}) => {
      if (!content.width) $set(content, 'width', 6);
      if (!content.left) $set(content, 'left', []);
      if (!content.gap) $set(content, 'gap', 0);
      if (!content.right) $set(content, 'right', []);
      return content;
    },
};
```
 
### Props
| Name    | Type   | Default   | required | Description                                                          |
|---------|--------|-----------|----------|----------------------------------------------------------------------|
| content | Object | undefined | true     | The Whppt content item passed down from the whppt Content component. |

