<template>
  <div class="users-new">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>New User</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>name:</label> 
          <input type="text" class="form-control" v-model="name">
        </div>
        <div class="form-group">
          <label>email:</label>
          <input type="text" class="form-control" v-model="email">
        </div>
        <div class="form-group">
          <label>bio:</label>
          <input type="text" class="form-control" v-model="bio">
        </div>
        <div class="form-group">
          <label>gender:</label>
          <input type="text" class="form-control" v-model="gender">
        </div>
        <div>
        avatar: <input type="file" v-on:change="setFile($event)" ref="fileInput">
      </div>

        <div class="form-group">
          <label>level:</label>
          <input type="string" class="form-control" v-model="level">
        </div>
        <div class="form-group">
          <label>password:</label>
          <input type="string" class="form-control" v-model="password">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
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
      errors: [],
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
      formData.append(name, this.name);
      formData.append("email", this.email);
      formData.append("bio", this.bio);
      formData.append("gender", this.gender);
      formData.append("avatar", this.avatar);
      formData.append("level", this.level);
      formData.append("password", this.password);
      axios.post("http://localhost:3000/api/users/new", formData).then(response => {
        this.title = "";
        this.body = "";
        this.$refs.fileInput.value = "";
        this.$router.push("/users/me");
      });
    }
  },
};
  
</script>