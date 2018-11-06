## Chapter 2

### Target

In this second chapter we will learn what directives are, and how to render and manipulate dom elements with Vue. 

Directives are a simple, yet key part of Vue.js development and will be used heavily through out the course.

### Challenges

1. Use the [base/index.html](./base/index.html) as your starting point.
2. Add a div with a class of **map** as a child of `#app`.
3. Create a div with a class of **house** inside `.map`
4. Find the **house** you were assigned to, from the `houses` variable inside the script tag.
    - Add a dynamic class on the `.house` div, binding it to the `name` of your house.
    - Transform to `toLowerCase` the house's name inside the `class` binding directive.
    - Check in Browser - Red dot should appear where the house should be.
5. Add an `img` tag inside the `.house` div and bind it's `src` attribute to the house’s **sigil**.
    - add a class of **sigil** to the image.
    - Check in browser - should see the House sigil on the map.
6. Loop over the **houses** data property by attaching a `v-for` directive on the `.house` div.
     - Set a dynamic **key** attribute on the `.house` div, equal to the current looped house index. Look into using `v-for="(house, houseId) in houses"` syntax.
6. Using  the currently looped `house` 
    - Bind the `img` src to the current house's **sigil**.
    - Bind the `house` class to the current `houseId`.
    - Check in the Browser to see if you see all the houses and their sigils.
