## Chapter 5

### Target

In this fifth chapter we will learn about Vue components. Components are a vital part of the Vue ecosystem.

Components allow for small, reusable pieces of code, independent of one and other to be composed together, to build 
larger and more complex applications. This keeps each component small and easy to maintain, test and extend later on.

### Challenges

1. Extract House into a component
    - Use an `x-template` script and move the template above the main script definition.
    - Should accept `house` prop.
    - Should accept `currentHouse` prop.
    - Should emit `house-change` event.
    - Extract the `isVisible` method to a computed property on the House component.
    - Attach a dynamic class to the House component with the `houseId` and `is-active` toggled by isVisible.
2. Extract the Members into a component
    - Use a **template string** and move the template to the component definition.
    - Should accept `members` prop.
3. Extract the Member div into a component
    - Use a string as a template and move the template to the component definition.
    - Should accept a `member` prop
4. The main vue instance should just have the `#app`,`.map` and a loop of `<house/>` components.

