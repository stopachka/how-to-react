---
style: |
  .exerslide-slide .Center-wrapper {
    text-align: left;
  }
  .exerslide-slide h3 {
    font-weight: 500;
  }
---
```javascript
class Square extends React.Component {
  constructor() {
    super();
    this.state = {
      value: null,
    };
  }
```
- Change the `render` method to set the state `value` to `X` when the user clicks on the button.
- The `text` in the button should be what you set for `this.state.value`
