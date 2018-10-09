## Chapter 3

### Target

In this third chapter we will learn how to handle browser DOM events with Vue. 

Handling events like click, form submit or drag events is an indispensable part of every modern application.
 Vue.js makes handling events a piece of cake.

### Challenges

1. Add a `click` event listener on each `house`. The event should store the current house’s slug to data property on the Vue instance called `currentHouse`  - Test if it works in Vue DevTools.
2. Create a `div` with a class of `members` that is a sibling to the sigil image - Test if visible in the browser.
3. Toggle the visibility of the `members` div with an expression checking if the current house is equal to the the stored one in `currentHouse`.
4. Loop all the house members inside the `members` div, by creating a div with a class of `member`.
5. Using `{{moustache}}` syntax, display the each `member`’s name.
6. Add a `click` handler to the `map` to close the dropdown. You need to reset the currently selected one.
7. Add a `.stop` modifier to the `members` click handler to **stop** the event from bubbling up.
