## Chapter 2

### Target

In this second chapter we will learn what directives are, and how to render and manipulate dom elements with Vue. 

Directives are a simple, yet key part of Vue.js development and will be used heavily through out the course.

### Challenges

1. Use the [base/index.html](./base/index.html) as your starting point.
2. Copy that file to the `work` folder, where you will work from now on.

#### What I will do
1. Add a div with a class of **map** as a child of `#app`.
2. Create a div with a class of **house** inside `.map`
    - Check the houses data structure below on section [Houses Structure](./README.md#houses-structure)
4. Using the **stark** house from the `houses` variable, like: **houses.stark**.
    - Add a dynamic class on the `.house` div, binding it to `houses.stark.name`
    - Transform the `houses.stark.name` property to `toLowerCase` in the class binding.
    - Check in Browser - Red dot should appear where the house should be.
5. Add an `img` tag inside the `.house` div 
    - Bind the `src` attribute to **houses.stark.sigil**.
    - Check in Browser - should see the House sigil on the map.
    
#### What you will do
1. Loop over the **houses** data property by attaching a `v-for` directive on the `.house` div.
     - Set a dynamic **key** attribute on the `.house` div, equal to the current looped house index. Look into using `v-for="(house, houseId) in houses"` syntax.
2. Using the currently looped `house` variable
    - On the `.house` element change the class binding to **houseId** - `:class="houseId"`
    - On the `img` element change the src binding to **house.sigil** - `:img="house.sigil"`
    - Do you know what `house` is and where it comes from?
    - Check in the Browser to see if you see all the houses and their sigils.


#### Houses Structure
```js
    var houses = {
      stark: {
        name: 'Stark',
        sigil: 'https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest',
        members: [
          { id: 'eddard-stark', name: 'Eddard Stark' },
          { id: 'catelyn-stark', name: 'Catelyn Stark' },
          { id: 'robb-stark', name: 'Robb Stark' },
          // other
        ]
      },
      // other houses
    }
```
