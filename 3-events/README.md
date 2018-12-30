## Chapter 3

### Target

In this third chapter we will learn how to handle browser DOM events with Vue. 

Handling events like **click**, form **submit** or **drag** events is an indispensable part of every modern application. Vue.js makes handling events a piece of cake.

### Challenges

#### What I will do:
1. Create a members dropdown
    - Add a div with a class of `.members` that is a sibling to the image element.
    - Test in Browser - should see empty data placeholders
2. Visualise each member inside the members dropdown
    - Add a `.member` div as a child of `.members`.
    - Loop the **house.members** by using a `v-for` directive on the `.member` div
    - Don't forget to add a `:key` attribute that is bound to a `member.id`
    - Using `{{moustache}}` syntax, display the `member.name` property.
    - Test in Browser
    
#### What you will do:
1. Add `currentHouse: null` in the data property on the Vue instance.
2. Toggle the visibility of the `.members` div.
    - Add a `v-if` or a `v-show` directive, setting its expression to `houseId === currentHouse`.
    - Test in Browser. All dropdowns should be hidden. Why?
3. Show the `.members` dropdown when clicking on a house.
    - Add a `@click` event listener on the `.house` element.
    - Set its expression to `currentHouse = houseId`.
    - Test in Browser by clicking on а house.
4. Close the `.members` dropdown when clicking away 
    - Add a `@click` event listener to the `.map` element.
    - Set its `@click` expression to `currentHouse = null`.
    - Test in the Browser by clicking on a house. The dropdown should be bugged and not open. Why? If you know share with others.
5. Fix the broken `.members` dropdown. 
    - Add a `.stop` modifier to the `@click` handler on `.house` element. This will stop it's click event from propagating up to the parents.
