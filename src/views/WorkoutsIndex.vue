<template>
  <div class="workouts-index">
    <!-- <div class = "container"> -->

    <h1>All Workouts</h1>
    <div v-for="workout in workouts">
      <h2>{{workout.name}}</h2>
      <h3>Time: {{workout.time}}</h3>
      <h4>Image: {{workout.image}}</h4>
      <h5>Description: {{workout.description}}</h5>
      <h6>Level: {{workout.level}}</h6>
    </div>
  </div>
  </div>
</template>

<style>
</style>


    <script>
import axios from "axios";
export default {
  data: function() {
    return {
      workouts: []
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/workouts")
      .then(response => {
        this.workouts = response.data;
      });
  },
  methods: {},
  computed: {}
};
</script>
  </body>
</html>
 -->