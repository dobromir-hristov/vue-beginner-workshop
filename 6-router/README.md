## Chapter 6

### Target

In this sixth chapter we will learn how to implement a multi page SPA with Vue Router. 

Each page is a Vue Component that is registered only locally to the Router. Navigation between pages happens with 
the included `router-view` component.

### Challenges

#### What I will do:
1. Copy `https://cdn.jsdelivr.net/npm/vue-router@3.0.1/dist/vue-router.js` into a script tag.
2. Define a component called **WesterosMapPage** that will represent our home page.
    - Move all of the logic from the main Vue instance to **WesterosMapPage**.
    - Move the `.map` element and its children into a `text/x-template` with an id of `#westeros-page`.
    - Add a `<router-view>` in its place.
    - Assign the template to **WesterosMapPage**. 
3. Create a router config and assign it to a **new VueRouter** instance.
    - You can checkout the base route config from [6-router/base/app.js](./base/app.js)
    - The **WesterosMapPage** needs to be assigned to `/` route path. Give it a name of `home`.
4. Assign the router instance to the main Vue instance.
5. Test in the Browser
6. Define `houseId` as a prop on **Members**
7. Pass the `houseId` as a prop from the **House** component down to the `Members`component.

#### What you will do:
1. Create a component called **MemberPage** that will represent each **Member**'s page.
    - Create an `text/x-template` script with id `#member-page`.
    - Add a div with a class of `member-page` to its template.
        - Add `{{$route.fullPath}}` inside `.member-page`
    - **Props:**
      - **houseId** - String
      - **memberId** - String
    - Add the **MemberPage** to the router config
      - Add a path of `/:houseId/:memberId`.
      - Give it a name of **member**.
      - Add `props: true` to its route config.
    - Test in Browser. Go to `/stark/jon-snow` and see if it shows the **url** in the template.
2. On the **Members** element
    - Add **houseId** as a prop of type `String`
    - Pass it from the`<house>` element to `<member>` via v-bind.
    - Change the **.member** element's template to use a `router-link` component. This way you will create a link to the **MemberPage**'s route passing `houseId` and `memberId` as props - `:to="{ name: 'member', params: { houseId: houseId, memberId: member.id } }"`
3. Test in the browser! Clicking a name in the dropdown should show the **MemberPage**
4. Add a back button to the **WesterosMapPage** by using a `router-link`.
    
#### Bonus:
1. Create a **currentMember** computed property on **MemberPage** that filters out the members in the `houses` property to find the current member on the page.
    - Add the `houses` global variable to a `houses` data property on the **MemberPage** instance.
    - get the current house via `this.houses[this.chouseId]` 
    - loop though it's `members` and return the member where `member.id === memberId`
    - be careful of the `this` context inside callbacks.
    - Display the `currentMember`'s name on the **MemberPage** template
