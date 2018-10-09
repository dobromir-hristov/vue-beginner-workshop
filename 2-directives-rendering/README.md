## Chapter 2

### Target

In this second chapter we will learn what directives are and how to render data with Vue. 

Directives are a simple, yet key part of Vue.js development and will be used heavily during the course.

### Challenges

1. Add a div with a class of **map** as a child of **#app**.
2. Create a div with a class of **house**.
3. Pick your favourite _Great House of Westeros_ and dynamically bind a class property with the name of the house you chose.
The dynamic class needs to be transformed `toLowerCase` inside the class v-bind directive.
4. Add an `img` tag inside the `house` div and bind the house’s **sigil** to the `img` tag.
5. Using the already created `house` div, loop over the _Great Houses of Westeros_ by using `v-for` 
on the `houses` data property.
6. Use the currently looped `house` instead of the previously hard coded one to bind to the `img` src and the `house` class.
