<template>
  <div class="users-show">
    <div class="row">

       <div class="col-md-6 pr-70">

          <div class="team-member">
             <div class="member-photo">
                <img class="img-responsive" :src="user.avatar">
             </div>
          </div>


       </div>

       <div class="col-md-6">
          <h2 class="section-title fw-4 fs-30 mt-60">
             {{ user.name }} </h2>
          
          <p class="primary-color"> Badge:
             {{user.badge_name}}
          </p>

          <div class="exp-separator">
             <div class="exp-separator-inner">
             </div>
          </div>

          <p class="lead fs-22">
             {{ user.bio }}
          </p>

          <p class="lh-26 mb-30">
             Level: {{user.level}}
          </p>

          <h4 class="clearfix mb-0">
             <!-- <i class="fa fa-phone mr-5 o-4"></i> --> <strong> Progress: {{user.progress}}%</strong>
          </h4>

          <p class="clearfix">
             <i class="fa fa-envelope-o mr-10 o-4"></i><a class="b-link fw-5" href="mailto:kevin@example.com">{{user.email}}</a>
          </p>
          <button> <router-link to="/users/me/edit">Edit</router-link> </button>

       </div>

    </div>
    <!-- <div class="container">
      <h1>{{ user.name }}</h1>
      <h2>{{ user.email }}</h2>
      <h3>{{ user.bio }}</h3>
      
      <img v-bind:src="user.avatar">
      <h6>Level: {{user.level}}</h6>
      <h6>Total Progress:  {{user.progress}}%</h6>
      <h6> Badge: {{user.badge_name}}</h6>
 -->
      <!-- <a href="/#/users/me/edit">Edit</a> -->
   


      <!-- <router-link to="/">Back to index</router-link> -->
    </div>
  </div>
</template>
<style>
  body {
    margin-top: 100px;
  }
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      user: {}
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/users/me")
      .then(response => {
        console.log(response.data);
        this.user = response.data;
      });
  },
  methods: {},
  computed: {}
};
</script>
