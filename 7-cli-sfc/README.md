### Target:

In the seventh chapter we will learn about Single File Components and how to use them with Vue CLI.

### Preparation:

You have two options:

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

You can directly start using the [Chapter 7 Starter Sandbox](https://codesandbox.io/s/oq6orqjrk5) on Codesandbox

### Vue CLI

Using vue cli, bootstrap a fresh project that we will transfer our components into.

1. Run the command `vue create westeros-map` inside the `7-cli-sfc` folder.
2. Select `Manual select features`.
3. Select **Babel, Router, Linter / Formatter** from the options using Space key + up/down arrows. Hit enter to continue to next step.
4. Click Enter on the `Use history mode for router?` question.
5. Select `ESLint + Standard config`.
6. Select `Lint on save`.
7. Select `In package.json`
8. Select `No` on `Save this as ...`

## Challenges

1. Add the `style.css` to the `index.html` inside the public folder.
2. Delete everything from `components` and `views` folders.
3. Move **House**, **Members** and **Member** components, each to a separate `SFC` file inside components folder.
    - Use the `@` alias to import elements from `src` folder. This makes later refactoring easier i.e. `import Member from '@/components/Member'`
    - `Members.vue` should have its template as a `template` tag inside the SFC. Rest stays the same.
    - `House.vue` should have its template as a `template` tag inside the SFC. Rest stays the same.
4. Move the `houses` data to a file inside `src/data/houses.js`. Use `export default {}` syntax to convert it to an ES module.
5. Move **WesterosMapPage** and **MemberPage** to the `views` folder as separate `.vue` SFC files.
    - both **WesterosMapPage** and **MemberPage.vue** should import the `houses` data and assign it to a local `houses` data property in the vue instance.
6. Move the router definition to the `router.js` file.
    - Import `WesterosMapPage.vue` and assign it to the **WesterosMapPage** page definition as its `component`.
    - Import `MemberPage.vue` and assign it to the **MemberPage** page definition as its `component`.

### Running the solution to see how it works

Go into the `solution` folder and run `npm install`. This will install all the dependencies.

After installation you can run:

```
npm run serve
```

This will run a node.js server and you can preview your website while developing.

### Lints and fixes files
```
npm run lint
```
