## Chapter 1

### Target

In this first chapter we will learn what Vue.js is and how to mount Vue to the dom. 

After that we will learn about moustache syntax and displaying a piece of data from the Vue instance's data property to the browser.

### Challenges

1. Use the [1-introduction/base/index.html](./base/index.html) as your starting point. 

#### What you will do
1. Define a dynamic data property inside the new Vue instance's data object.
2. Display the newly defined data property in the template using moustache syntax `{{ dataProperty }}`
3. Test in the Browser
4. Open your Browser console and run `app.dataProperty = 'Hello from VueBulgaria at Dopamine'` where `dataProperty` is your defined property. That string should auto appear in the browser.
5. Try using the Vue Devtools to test reactivity.
    - If you have issues with devtools, check [Usage Notes](https://github.com/vuejs/vue-devtools#important-usage-notes)
