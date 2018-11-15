<template>
  <div class="user_workouts-show">
    <div class="container">
      <h2>{{ user_workout.user_name}}</h2>
      <h3>{{ user_workout.workout_name}}</h3>
      <h3>{{ user_workout.times_done }}</h3>
      
      <router-link to="/users/me">Back to index</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      user_workout: {}
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/user_workouts/" + this.$route.params.id)
      .then(response => {
        this.user_workout = response.data;
        console.log(this.user_workout);
      });
  },
  methods: {},
  computed: {}
};
</script>