## Chapter 7

In this seventh chapter we will learn how to implement a multi page SPA with Vue Router. 

Each page is a Vue Component that is registered only locally to the Router. Navigation between pages happens with the included `router-link` component.

### Challenges

#### What I will do:
1. Define a component called **WesterosMapPage** that will represent our home page.
    - Create a component in **views/WesterosMapPage.vue**.
    - Move all of the logic from `App.vue` to **views/WesterosMapPage.vue**.
    - Move the `.map` element and its children into a template tag on **WesterosMapPage.vue**.
    - Add a single `<router-view></router-view>` component, replacing `.map` in **App.vue**.
2. Add **WesterosMapPage** to the router config
    - Import the **WesterosMapPage.vue** in `router.js`.
    - Create a route object for **WesterosMapPage** 
        - Add a path leading to `/`. 
        - Give it a name of **home**.
3. Enable the router in main.js
    - Uncomment the router import and its assignment on the Vue Instance
4. Test in the Browser - Should see the App working as before.
5. Define `houseId` as a prop on **Members**
6. Pass the `houseId` as a prop from the **House** component down to the `Members`component.

#### What you will do:
1. Create a component called **MemberPage** that will represent each **Member**'s personal page.
    - Create a `views/MemberPage.vue` component.
    - Add a div with a class of `member-page` to its template.
      - Add `{{$route.fullPath}}` inside `.member-page` - Do you know where does `$route` come from?
    - **Props:**
      - **houseId** - String
      - **memberId** - String
2. Add the **MemberPage** to the router config
    - Import the **MemberPage.vue** file in `router.js`.
    - Create a Router Page Object for **MemberPage**
      - Add a path of `/:houseId/:memberId`.
      - Give it a name of **member**.
      - Add `props: true` to its route config.
    - Test in Browser. Go to `/stark/jon-snow` and see if it shows the **url** in the template.
2. On the **Members** component
    - Change the **.member** element's template to have a `<router-link>` component. This way you will create a link to the **MemberPage**'s route passing `houseId` and `memberId` 
    as props - `:to="{ name: 'member', params: { houseId: houseId, memberId: member.id } }"`
3. Test in the browser! Clicking a name in the dropdown should show the **MemberPage**
4. Add a back button to the **WesterosMapPage** by using a `router-link`. - create a link to the home page - `<router-link :to={ name:'home' }">`

#### Bonus:
1. Create a **currentMember** computed property on **MemberPage** that filters out the members in the `houses` property to find the current member on the page.
    - Import the `houses` and assign to a `houses` data property on the **MemberPage** instance.
    - get the current house via `this.houses[this.houseId]` 
    - loop though it's `members` and return the member where `this.member.id === this.memberId`
    - be careful of the `this` context inside callbacks.
    - Display the `currentMember`'s name on the **MemberPage** template
