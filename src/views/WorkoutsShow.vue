<template>

  <div class="workouts-show">
    <div class="container">
      <!-- <h1>{{workout.id}}</h1> -->
      <!-- <h2>{{ workout.name }}</h2> -->
      <!-- <h3>{{ workout.time }}</h3> -->
      <img v-bind:src="workout.image">
      <!-- <h4>{{ workout.description }}</h4>
      <h5>{{workout.level}}</h5> -->

      <a v-on:click="completeWorkout()">Completed</a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      workout: {}
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/workouts/daily")
      .then(response => {
        this.workout = response.data;
        console.log(this.workout);
      });
  },
  methods: {
    completeWorkout: function() {
      var params = {workout_id: this.workout.id};
      axios.post("http://localhost:3000/api/user_workouts", params).then(response => {
        
        console.log(response.data);
        this.$router.push("/users/me");
      });
    }
  },
  computed: {}
};
</script>