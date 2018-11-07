## Chapter 6

### Target

In this sixth chapter we will learn how to implement a multi page SPA with Vue Router. 

Each page is a Vue Component that is registered only locally to the Router. Navigation between pages happens with 
the included `router-view` component.

### Challenges

1. Move all the JavaScript logic to an `app.js` file. Add this file to `index.html`
2. Define a component called **WesterosMapPage** that will represent our home page.
    - Move all of the logic from the main Vue instance to **WesterosMapPage**.
    - Move main template into an `x-template` and assign it to **WesterosMapPage**. 
3. Create a router config and assign it to the **new VueRouter** instance.
    - You can use the base route config from [6-router/base/app.js](./base/app.js)
    - The **WesterosMapPage** needs to be assigned to `/` route path. Give it a name of `home`.
4. Change the main Vue instance’s template to a single `<router-view></router-view>` tag inside the `#app` div.
5. Assign the router instance to the main Vue instance.
6. Pass the `houseId` from the **House** component down through the `Members` and to the `Member` component.
7. Create a component called **MemberPage** that will represent each Member's page.
    - **Props:**
      - **houseId** - String
      - **memberId** - String
    - Add the `houses` global variable to a `houses` data property
    - Add `{{$route.fullPath}}` inside the template
    - Add the component to the router config as a page with dynamic route parameters - `/:houseId/:memberId`. 
    - Give it a name of **member**.
    - Add `props: true` to its route config
8. Change the **Member**’s template to use a `router-link` component and create a link to the **MemberPage**'s route passing `houseId` and `memberId` as props.
9. Create a **currentMember** computed property on **MemberPage** that filters out the members in the `houses` property to find the current member on the page.
    - get the current house via `this.houses[this.chouseId]` then loop though it's `members` and find the member where `member.id === memberId`
    - be careful of the `this` context inside callbacks.
    - Display the `currentMember`'s name on the **MemberPage** template
11. Add a back button to the **WesterosMapPage** by using a `router-link`.
