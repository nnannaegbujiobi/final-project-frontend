<template>
  <div class="users-index">
    <div class="container">


      <h2> Employees of The Week: {{users.length}}</h2>
      <!-- <h1>{{users.id}}</h1>
      <h2>{{users.name }}</h2>
      <h3>{{users.calculated_progress }}</h3>
      <h3>{{users.badge_name}}</h3> -->
      <!-- <ol>
         <div v-for="user in users">
              
          <li><h4>Name: {{ user.name }}</h4></li>
          <h4>Progress: {{ user.progress}}%  </h4> 
          <h4>Badge_Name: {{ user.badge_name }}</h4>
       <-->
<ol>
       <div class="row">
                            <div class="col-md-4 col-sm-4 col-md-border" v-for="user in users">
                          

                               <div class="feature-box feature-box-secundary-one v-animation" data-animation="grow" data-delay="0">
                                  <div class="feature-box-icon small icon-shadow center-icon">
                                     <i class="ion-person-stalker v-icon"></i>
                                  </div>
                                  <div class="feature-box-text no-padding">
                                     <h3>{{user.name }}</h3>
                                
                                     <div class="feature-box-text-inner" >
                                        <p>
                                           <h4>Progress: {{ user.progress}}%  </h4> 
                                           <h4>Badge Name: {{ user.badge_name }}</h4>
                                        </p>
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </div>
                       <!-- </div> -->
    </ol>
    <button><router-link to="/users/me">Profile</router-link></button>
    </div>
    </div>
  </div>

</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      users: [],
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/users")
      .then(response => {
        console.log(response.data);
        this.users = response.data;
      });
  },
  // methods: {
  //   completeWorkout: function() {
  //     var params = {workout_id: this.workout.id};
  //     axios.post("http://localhost:3000/api/user_workouts", params).then(response => {
        
  //       console.log(response.data);
  //       this.$router.push("/users/me");
  //     });
  //   }
  // },
  computed: {}
};
</script>