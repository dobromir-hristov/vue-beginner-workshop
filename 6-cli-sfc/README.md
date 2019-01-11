## Chapter 6

### Target

In this sixth chapter we will learn how to work with **.vue** Single File Components.

We will be using Vue CLI to transform those **.vue** files into browser readable javascript files.

### Challenges

### Preparation:

You have two paths to choose from:

1. Use the [Codesandbox](https://codesandbox.io) sandbox and directly work there
    - You wont need to fiddle with Vue CLI, Node etc.
    - You still have the benefit of using .vue files and bundling
    - You can develop everywhere in the browser
    - You will not however be able to configure it like with the CLI
    - Uses old CLI version, wont be a problem for current exercises. 
2. Use the Vue CLI locally on PC
    - You need to have Node and NPM Installed
    - You need to download Vue CLI and install it globally 
    - You need to scaffold a new project (steps below)
    
### CodeSandbox
You can directly start using the [Chapter 6 Starter Sandbox](https://codesandbox.io/s/3qmjo9n8nm) on Codesandbox
You can go directly to step 4.

### Vue CLI
Using vue cli, we will install a fresh project that we will transfer our components into.

#### What I will do:
0. Showcase how a typical project is installed with Vue CLI.
1. Open a terminal window and go to the `6-cli-sfc/base` folder.
2. Run `npm install` or `yarn`.
    - This will install all the CLI dependencies for the project
3. Run `npm serve`
    - This will run a development server, allowing you to preview your website as you work on it.
    - Open the exposed link in the browser
    - Open your browser console to keep track of errors
4. Copy the template and properties from the Main Vue Instance to the **App.vue** component.
    - leave out the `el` property, components don't need it
    - transform data to a factory function
5. Import the data from `src/data/houses.js` to App.vue
6. Move the **House** component definition to a **House.vue** file
    - Copy the **House** definition to a script tag inside `6-cli-sfc/base/src/components/House.vue`.
    - Copy the **House** template from  the `#house-template` x-template to a `template` tag in **House.vue**
7. Import **House.vue** into **App.vue** and register it as a local component.
    
#### What you will do:
1. Move the **Members** component definition to a **Members.vue** file
    - Copy the **Members** definition and move it to a script tag inside `6-cli-sfc/base/src/components/Members.vue`.
    - Copy the **Members** template from  the `#member-template` x-template to a `template` tag in **Members.vue**
2. Import **Members.vue** into **House** and register it as a local component.
3. Test if all works in the Browser.
