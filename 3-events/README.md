## Chapter 3

### Target

In this third chapter we will learn how to handle browser DOM events with Vue. 

Handling events like **click**, form **submit** or **drag** events is an indispensable part of every modern application. Vue.js makes handling events a piece of cake.

### Challenges

1. Add a **currentHouse** data property on the Vue instance.
2. Add a `@click` event listener on the `.house` element.
    - The event should store the currently looped **houseId** to the `currentHouse` property on the Vue instance.
    - Test if it works in Vue DevTools.
3. Create a div with a class of `.members` that is a sibling to the house's sigil image 
    - Test in Browser - should see empty data placeholders
4. Toggle the visibility of the `members` div 
    - Use a `v-if` or a `v-for` directive
    - Add an expression checking if `houseId === currentHouse` data property.
    - Test in Browser by clicking on house sigils.
5. ​Create a `.member` div as a child of `.members`.
    - Loop all the **members** of each **house** by attaching a `v-for` directive to the `.member` div
    - Don't forget to add a `:key` attribute that is bound to a `member.id`
    - Using `{{moustache}}` syntax, display the `member.name` property.
    - Test in Browser
7. Add a `click` event listener to the `.map` to close the dropdown. You can do that by resetting the currently selected one to `null`.
8. Add a `.stop` modifier to the `.members` click handler to **stop** the event from bubbling up.
    - Not doing so will cause the map click handler to close the dropdown, as the click handler will bubble up.
