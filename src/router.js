

import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
// import About from "./views/About.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import UsersNew from "./views/UsersNew.vue";
import UsersShow from "./views/UsersShow.vue";
import WorkoutsShow from "./views/WorkoutsShow.vue";
import UserWorkoutsShow from "./views/UserWorkoutsShow.vue";
import WorkoutsIndex from "./views/WorkoutsIndex.vue";
import UsersEdit from "./views/UsersEdit.vue";
import UsersIndex from "./views/UsersIndex.vue";
import axios from 'axios';

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "home", component: Home },
    // { path: "/about", name: "about", component: About },
    { path: "/signup", name: "signup", component: Signup },
    { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout },
    { path: "/users/new", name: "users-new", component: UsersNew },
    { path: "/users/me", name: "users-show", component: UsersShow },
    { path: "/workouts/daily", name: "workouts-show", component: WorkoutsShow },
    { path: "/user_workouts/:id", name: "user_workouts-show", component: UserWorkoutsShow},
    {path: "/workouts", name:"workouts-index", component: WorkoutsIndex},
    {path: "/users/me/edit", name:"users-edit", component: UsersEdit},
    {path: "/users", name:"users-index", component: UsersIndex},
    
  ]
});
