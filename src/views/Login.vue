

<template>
  <!-- <div class="login">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Login</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>
  </div> -->
  <div class="login">
    <div class="container">
      <div class="row">

        <div class="col-md-8 offset-md-2">

                  <div class="smart-wrap">
                     <div class="smart-forms smart-container wrap-3">

                        <div class="form-header header-primary">
                           <h4><i class="fa fa-sign-in"></i>Login</h4>
                        </div><!-- end .form-header section -->
                        <ul>
                      <li class="text-danger" v-for="error in errors">{{ error }}</li>
                        </ul>
                        <form v-on:submit.prevent="submit()">
                           <div class="form-body">

                              <div class="spacer-b30">
                                 <div class="tagline"><span>Sign in  With </span></div><!-- .tagline -->
                              </div>

                              <div class="section">
                                 <a href="#" class="button btn-social facebook span-left"> <span><i class="fa fa-facebook"></i></span> Facebook </a>
                                 <a href="#" class="button btn-social twitter span-left">  <span><i class="fa fa-twitter"></i></span> Twitter </a>
                                 <a href="#" class="button btn-social googleplus span-left"> <span><i class="fa fa-google-plus"></i></span> Google+ </a>
                              </div><!-- end section -->

                              <div class="spacer-t30 spacer-b30">
                                 <div class="tagline"><span> Login </span></div><!-- .tagline -->
                              </div>

                              <div class="section">
                                 <label class="field prepend-icon">
                                    <input type="text" name="email" v-model="email" class="gui-input" placeholder="Enter email">
                                    <span class="field-icon"><i class="fa fa-user"></i></span>
                                 </label>
                              </div><!-- end section -->

                              <div class="section">
                                 <label class="field prepend-icon">
                                    <input type="password" name="password" v-model="password" class="gui-input" placeholder="Enter password">
                                    <span class="field-icon"><i class="fa fa-lock"></i></span>
                                 </label>
                              </div><!-- end section -->

                              
                           </div><!-- end .form-body section -->
                           <div class="form-footer">
                              <button type="submit" class="button btn-primary">Submit</button>
                           </div><!-- end .form-footer section -->
                        </form>
                     </div><!-- end .smart-forms section -->
                  </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import axios from "axios";

export default {
  template: "#login-page",
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("http://localhost:3000/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/users/me");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>
