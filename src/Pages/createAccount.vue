<template>
   <div class="flex-grid justify-center">
        <div class="col-2">

            <form @submit.prevent="Register" class="card card-form">
                <h1 class="text-center">Login</h1>

                <div class="form-group">
                    <label for="email">Email</label>
                    <input id="email" v-model="email" type="text" class="form-input">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input id="password" v-model="password" type="password" class="form-input">
                </div>

                <div class="push-top">
                    <button type="submit" class="btn-blue btn-block">Log in</button>
                </div>

                <div class="form-actions text-right">
                    <a href="register.html">Create an account?</a>
                </div>
            </form>

            <div class="push-top text-center">
                <button  class="btn-red btn-xsmall"><i class="fa fa-google fa-btn"></i>Sign in with Google</button>
            </div>
        </div>
    </div>
<!-- </div> -->

</template>

<script>
import firebase from "../config/firebase"
export default {
    data() {
      return {
          email: "",
        password: ""
      }
    },
    methods: {
        Register() {
            if(this.email && this.password !== "") {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
         this.$router.push("/")
            }
      
        }
    }

}
</script>

<style>

</style>