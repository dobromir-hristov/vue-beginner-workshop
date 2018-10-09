// 1. Define route components.
var Foo = { template: '<div>foo</div>' }
var Bar = { template: '<div>bar</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
var routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
var router = new VueRouter({
  routes // short for `routes: routes`
})

var app = new Vue({
  el: '#app',
  router
})
