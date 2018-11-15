<template>
  <div class="users-edit">
    <div class="container">
      <form v-on:submit.prevent="submit()">
      <div class="smart-wrap">
        <div class="smart-forms smart-container wrap-3">
          <!-- Start Form Head -->
            <div class="form-header header-primary">
              <h4><i class="fa fa-pencil-square"></i>EDIT</h4>
              <ul>
                <li class="text-danger" v-for="error in errors">{{ error }}</li>
              </ul>
            </div>
            <!-- end .form-header section -->

            <div class="form-body">      
              <div class="spacer-b30">
                <div class="tagline"><span style="color: #0bb4cd">Create Account </span></div><!-- .tagline -->
              </div>

              <div>
                avatar: <input type="file" v-on:change="setFile($event)" ref="fileInput">
              </div>
              
                <div class="frm-row">
                  <div class="section colm colm6">
                    <label class="field prepend-icon">
                      <input type="text" name="name" v-model="name" class="gui-input">
                      <span class="field-icon"><i class="fa fa-user"></i></span> 
                    </label>
                  </div><!-- end section -->
                  
                  <div class="section colm colm6">
                    <label class="field prepend-icon">
                      <input type="text" name="email" v-model="email" class="gui-input"> 
                      <span class="field-icon"><i class="fa fa-envelope"></i></span>  
                    </label>
                  </div> <!-- end section -->
              </div>
              <!-- end .frm-row section -->                                    
          
              <div class="section">
                <label class="field prepend-icon">
                  <input type="text" name="bio" v-model="bio" class="gui-input" >
                  <span class="field-icon"><i class="fa fa-envelope"></i></span>  
                </label>
              </div>
                
              <div class="section">
                <label>Level</label>
                <select v-model="level">
                  <option disabled value="">Beginner </option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
              <!-- end section -->
            <!-- end section -->
              
            <div class="section">
              <label class="field prepend-icon">
                <input type="text" name="password" placeholder="password" v-model="password" class="gui-input">
                <span class="field-icon"><i class="fa fa-lock"></i></span>  
              </label>
            </div>
                 <!-- end section -->
              
            <div class="section">
              <label class="field prepend-icon">
                <input type="text" name="confirmPassword" placeholder="confirm password" v-model="passwordConfirmation" class="gui-input" >
                <span class="field-icon"><i class="fa fa-unlock-alt"></i></span>  
              </label>
            </div> <!-- end section -->
          </div>                
            
          </div> <!-- end .form-body section -->
            <input value="edit user" type="submit" class="button btn-primary"> 
            <button class="button btn-danger" v-on:click="deleteUser(user)">Delete User</button>
          </div> <!-- end .form-footer section -->
        </form>
      </div>
       
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      name: "",
      email: "",
      bio: "",
      gender: "",
      avatar: "",
      level: "",
      password:"",
      passwordConfirmation:"",
      errors: []
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/users/me").then(function(response) {
      this.name = response.data.name;
      this.email = response.data.email;
      this.bio = response.data.bio;
      this.gender = response.data.gender;
      this.avatar = response.data.avatar;
      this.level = response.data.level;
      console.log(response.data);
    }.bind(this));

  },
  methods: {
    setFile: function(event) {
      if (event.target.files.length > 0) {
        this.avatar = event.target.files[0];
      }
    },

    submit: function() {
      var formData = new FormData();
      formData.append("name", this.name);
      formData.append("email", this.email);
      formData.append("bio", this.bio);
      formData.append("gender", this.gender);
      formData.append("avatar", this.avatar);
      formData.append("level", this.level);
      formData.append("password", this.password);
      
      axios
        .patch("http://localhost:3000/api/users/me", formData)
        .then(response => {
          this.$refs.fileInput.value = "";
          this.$router.push("/users/me");
        });
    },
    deleteUser: function(user) {
      axios
        .delete("http://localhost:3000/api/users/" + this.$route.params.id)
        .then(response => {
          delete axios.defaults.headers.common["Authorization"];
          localStorage.removeItem("jwt");
        });
    }
  }
};
</script>