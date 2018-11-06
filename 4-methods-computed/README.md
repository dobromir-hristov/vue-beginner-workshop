## Chapter 4

### Target

In this fourth chapter we will learn about methods and computed properties.

Methods in Vue.js allow for the creation of a cleaner and dryer code. Logic gets moved away from components to dedicated methods,
making templates clean and readable, while all the logic is kept in one easy to read place.

### Challenges

1. Define a `toggleHouse` method on the Vue instance
    - Make the method toggle the `currentHouse`.
    - Transform the `@click` expression on the `.house` to use the method.
    - Make sure it toggles the dropdown visibility on and off.
    - Use the same method to hide the dropdown when clicking the `.map`.
3. Transform the visibility check on the `.members` div to a `isVisible` method
    - It should accept the **houseId** as a parameter and compare it with the **currentHouse** property.
