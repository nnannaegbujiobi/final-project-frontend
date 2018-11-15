

<template>
  <div class="signup">
    <div class="container">
      <!-- <form v-on:submit.prevent="submit()">
        <h1>Signup</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div>
        avatar: <input type="file" v-on:change="setFile($event)" ref="fileInput">
      </div>
        <div class="form-group">
          <label>Name:</label> 
          <input type="text" class="form-control" v-model="name">
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
        </div>

        <div class="form-group">
          <label>Bio:</label>
          <input type="text" class="form-control" v-model="bio">
        </div>
        <div class="form-group">
          <label>Level</label>
          <select v-model="level">
          <option disabled value="">Beginner </option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <div class="form-group">
          <label>Password confirmation:</label>
          <input type="password" class="form-control" v-model="passwordConfirmation">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form> -->
        <div class="smart-wrap">
            <div class="smart-forms smart-container wrap-3">
              
                <div class="form-header header-primary">
                    <h4><i class="fa fa-pencil-square"></i>Registration form</h4>
                  </div><!-- end .form-header section -->

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
                                <input type="text" name="name" v-model="name" class="gui-input" placeholder="name">
                                <span class="field-icon"><i class="fa fa-user"></i></span> 
                            </label>
                        </div><!-- end section -->
                        
                        <div class="section colm colm6">
                            <label class="field prepend-icon">
                                <input type="text" name="email" v-model="email" class="gui-input" placeholder="email">
                                <span class="field-icon"><i class="fa fa-envelope"></i></span>  
                            </label>
                        </div><!-- end section -->
                    </div><!-- end .frm-row section -->                                    
                
                  <div class="section">
                      <label class="field prepend-icon">
                          <input type="text" name="bio" v-model="bio" class="gui-input" placeholder="say something">
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
                    </div><!-- end section -->
                    <!-- end section -->
                    
                  
                  <div class="section">
                      <label class="field prepend-icon">
                          <input type="password" name="password" v-model="password" class="gui-input" placeholder="Create a password">
                            <span class="field-icon"><i class="fa fa-lock"></i></span>  
                        </label>
                    </div><!-- end section -->
                    
                  <div class="section">
                      <label class="field prepend-icon">
                          <input type="password" name="confirmPassword" v-model="passwordConfirmation" class="gui-input" placeholder="Retype your password">
                            <span class="field-icon"><i class="fa fa-unlock-alt"></i></span>  
                        </label>
                    </div><!-- end section -->
                    
                   <!--  <div class="spacer-t40 spacer-b30">
                      <div class="tagline"><span> 7 days free trial </span></div><!- .tagline -->
                    </div>  <!-- --> 
                    
                 <!--  <div class="section"> -->
                        <!-- <label class="option block">
                            <input type="checkbox" name="trial">
                            <span class="checkbox"></span> 
                           Sign me up for a  <a href="#" class="smart-link"> 7-day free PRO trial. </a>                   
                        </label> -->
                        <!-- <label class="option block spacer-t10">
                            <input type="checkbox" name="terms">
                            <span class="checkbox"></span> 
                            I agree to the  <a href="#" class="smart-link"> terms of use. </a>                   
                        </label>                       -->  
                    <!-- </div> --> <!-- end section   -->                     
                    
                </div><!-- end .form-body section -->
  
                  <button type="submit" v-on:click="submit()" class="button btn-primary"> Create Account</button>
                </div><!-- end .form-footer section -->
            </div>
          </div>

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
      gender:"",
      bio:"",
      level:"",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
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

      axios.post("http://localhost:3000/api/users", formData).then(response => {
        this.name = "";
        this.email = "";
        this.bio = "";
        this.gender = "";
        this.avatar = "";
        this.level = "";
        this.password = "";
        this.$refs.fileInput.value = "";
        this.$router.push("/login");
      });
    }
  }
};
</script>
