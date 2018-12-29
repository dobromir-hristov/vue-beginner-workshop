## Chapter 6

### Target

In this sixth chapter we will learn how to work with **.vue** Single File Components.

We will be using Vue CLI to transform those **.vue** files into browser readable javascript files.

### Challenges

#### What I will do:
0. Showcase how a typical project is installed with Vue CLI.
1. Open a terminal window and go to the `6-cli-sfc/base` folder.
2. Run `npm install` or `yarn`.
    - This will install all the CLI dependencies for the project
3. Run `npm serve`
    - This will run a development server, allowing you to preview your website as you work on it.
    - Open the exposed link in the browser
    - Open your console to keep track of errors
4. Copy template and properties from the Main Vue Instance to the **App.vue** component.
    - leave out the `el` property, components don't need it
    - transform data to a factory function
5. Import the data from `src/data/houses.js` to App.vue
6. Move the **House** component definition to a **House.vue** file
    - Copy the **House** definition and move it to `6-cli-sfc/base/src/components/House.vue`.
    - Copy the **House** template from  the `#house-template` x-template to a `template` tag in **House.vue**
7. Import **House.vue** into **App.vue** and register it as a local component.
    
#### What you will do:
1. Move the **Member** component definition to a **Member.vue** file
    - Copy the **Member** definition and move it to `6-cli-sfc/base/src/components/Member.vue`.
    - Copy the **Member** template from  the `#member-template` x-template to a `template` tag in **Member.vue**
2. Import **Member.vue** into **House** and register it as a local component.
