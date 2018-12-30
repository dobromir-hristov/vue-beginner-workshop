## Chapter 4

### Target

In this fourth chapter we will learn about methods and computed properties.

Methods in Vue.js allow for the creation of a cleaner and dryer code. Logic gets moved away from components to dedicated methods, making templates clean and readable, while all the logic is kept in one easy to read place.

### Challenges

#### What I will do:
1. Move all the javascript logic to an `app.js` file.
2. Move the event handler for showing the **members** dropdown to a method.
    - Define a `showHouse` method on the Vue instance
    - It should accept the `houseId` as a parameter
    - Copy the `currentHouse = houseId` logic
    - Set `showHouse` on the `.house` element's click handler. Pass the **houseId** as a parameter.
    - Check in the Browser. Make sure it shows the dropdown.
    - Use the `showHouse` method to hide the dropdown when clicking the `.map`.

#### What you will do:
1. Move the visibility check in the `v-if` on `.members` to a method
    - Define an `isVisible` method on the Vue instance.
    - It should accept the `houseId` as a parameter 
    - Return the result from comparing `houseId` param to the `currentHouse` data property. `this.currentHouse === houseId`
    - Test in Browser.

#### BONUS: 
1. Make the `showHouse` method toggle the dropdown off if its already visible.
