<template>
      <div class="container">
            <h4>login page</h4>
            <div class="row">
                  <div class="col-4"></div>
                  <form class="col-4">
                        <div class="form-group">
                              <label for="exampleInputEmail1">User id</label>
                              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
							  	v-model="editData.userId"
							  >
                              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                              <label for="exampleInputPassword1">Password</label>
                              <input type="password" class="form-control" id="exampleInputPassword1"
							  v-model="editData.password"
							  >
                        </div>
                        <div class="form-group form-check">
                              <input type="checkbox" class="form-check-input" id="exampleCheck1">
                              <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        
						<b-button variant="primary">Login</b-button>
                  </form>
                  <div class="col-4"></div>
            </div>
      </div>
</template>
 

<script>
      export default {
         data(){
               return {
                     editData:{
                        userId:"",
                        password:""
                     } 
               }
         },
      }
</script>


<style lang="scss" scoped>
</style>