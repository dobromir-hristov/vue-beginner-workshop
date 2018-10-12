### Target:

In the seventh chapter we will learn about Single File Components and how to use them with Vue CLI.

### Preparation:
Using vue cli, bootstrap a fresh project that we will transfer our components into.

1. Run the command `vue create westeros-map` inside the `7-cli-sfc` folder.
2. Select `Manual select features`.
3. Select **Babel, Router, Linter / Formatter** from the options using Space key + up/down arrows. Hit enter to continue to next step.
4. Click Enter on the `Use history mode for router?` question.
5. Select `ESLint + Standard config`.
6. Select `Lint on save`.
7. Select `In package.json`
8. Select `No` on `Save this as ...`

### Running the solution
Go into the `solution` folder and do `npm install`. This will install all the dependencies.

After installation you can run:

```
npm run serve
```

This will run a node.js server and you can preview your website while developing.

### Lints and fixes files
```
npm run lint
```

## Challenges

1. Add our `style.css` to the `index.html` inside the public folder.
2. Delete all from `components` and `views` folders.
3. Move House, Members and Member components each to a separate SFC file inside components folder.
    - Use the `@` alias to import elements from `src` folder. This makes later refactoring easier.
    - Member.vue should have its template as a `template` tag inside the SFC.
    - Members.vue should have its template as a `template` tag inside the SFC.
    - Members.vues should have `Member` registered as a local component.
    - House.vue should have its template as a `template` tag inside the SFC.
    - House.vue should have Members registered as a local component.
4. Save the `houses` data to a file inside `src/data/houses.js`. Use `export default` syntax to convert it to an ES module.
5. Move WesterosMapPage and MemberPage to the views folder as separate `.vue` SFC files.
    - WesterosMapPage.vue should have `Houses` registered as a local component.
    - WesterosMapPage.vue should import the `houses` data and assign it to a local `houses` data property in the vue instance.
    - MemberPage.vue should import the `houses` data, same as WesterosMapPage.
6. Move the router definition to the router.js file.
    - Import both WesterosMapPage and MemberPage separately and use the imported values for the `components` values in their router definitions.
