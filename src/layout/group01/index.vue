<template>
	  	<div class="layout01">
			<section class="container">
				<div class="nav-wrap" >
					<navbar></navbar>
				</div>
			
				<div class="content-wrap">
					<sidebar class="side-menu"></sidebar>
					<app-main class="contents"></app-main>
				</div>
			</section>
		</div>


</template>

<script>
import { AppMain, Navbar, Sidebar } from "./components";
export default {
      components:{
            AppMain,
            Navbar,
            Sidebar 
	  },
	  
	  computed:{
		 
	  }
}
      
</script>

<style lang="scss" scoped>
      .app-wrapper {
            display:flex;
            flex-direction: column;
            border:1px solid #ff0000;

            .side-bar-container {
                  width:300px;
                  border:1px solid #ff0000;
            }
            .main-container {
                  flex:1;
                  .nav-bar {
                        height:40px;
                  }
            }
      }
</style>