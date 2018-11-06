## Chapter 5

### Target

In this fifth chapter we will learn about Vue components. Components are a vital part of the Vue ecosystem.

Components allow for small, reusable pieces of code, independent of one and other to be composed together, building 
larger and more complex applications. This keeps each component small and easy to maintain, test and extend later on.

Components can communicate with each other by passing props down to child components and by emitting events to parent components.

### Challenges

1. Extract `.house` into a **House** component
    - Use an `x-template` script and move the contents of `.house` to it.
    - **Props:**
      - **house** - _Object_
      - **currentHouse** - _String_
      - **houseId** - _String_ 
    - Should emit `house-change` event.
    - Move the `isVisible` method from the main Vue instance to a computed property on **House**. Update its usage on the `.members` div.
    - Bind a dynamic class to the `.house` element that sets a static class property equal to `houseId` and `is-active` based on `isVisible`. Use the array class binding syntax. `:class="[prop, { class1: prop1, class2: prop2 }]"`
    - **$emit** a `house-change` event on **@click** on the `.house`. Pass `houseId` as a payload of the event.
    - Set the `toggleHouse` method as a handler of `@house-change` event on `<house>` in the main Vue Instance. This way we can still toggle the dropdowns from inside the House component.
2. Extract `.members` into a **Members** component
    - Use an **ES6 template literal** and move the `.members` template to the component definition.
    - **Props:**
      - **members** - Array.
3. Extract `.member` into a **Member** component
    - Use a string as a template and move the `.member` template to the component definition.
    - **Props:**
      - **member** - String
4. The main vue instance should just have the `#app`,`.map` and a loop of `<house/>` components.

