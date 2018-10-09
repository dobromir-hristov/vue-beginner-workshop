## Chapter 6

### Target

In this sixth chapter we will learn how to implement a multi page SPA with Vue Router. 

Each page is a Vue Component that is registered only locally to the Router. Navigation between pages happens with 
the included `router-view` component.

### Challenges

1. Extract all the javascript logic to a separate `app.js` file.
2. Create a component called `WesterosMapPage` that will represent our home page.
    - Move all of the logic from the main Vue instance to it.
3. Create a component called `MemberPage` that will represent our page.
    - For now just print out `$route.fullPath` in the template. Check if it works.
    - Define `houseId` and `memberId` props
4. Create a router config and assign it to the new Vue Router Instance.
5. Change the main Vue Instance’s template to a single <router-view></router-view> tag inside the #app div.
6. Pass the router instance to the main Vue Instance.
7. Routes should include:
    - The `WesterosMapPage` needs to be assigned to `/` route.
    - The `MemberPage` needs to have a dynamic route parameter - `/:houseId/:memberId`
8. Extract the `houses` to a global variable, imitating a global Store.
9. Use the `houses` var on both the `WesterosMapPage` and inside the `MemberPage` component.
10. Pass the houseId from the `House` component down through the `Members` and to the `Member` component.
11. Change the member’s template to use a router-link component and create a link to the `member` route passing `houseId` and `memberId`.
12. Create a `currentMember` computed property that filters out the members in the houses to find the current member on the page.
13. Display the `currentMember`'s name on the `MemberPage`
