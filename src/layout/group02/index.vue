<template>
	<div class="layout02">
		<section class="container">     
			<div class="nav-wrap">
				<navbar></navbar>
			</div>
			<app-main class="contents"></app-main>
		</section>
	</div>
      <!-- <div class="app-wrapper ">
            <navbar class="nav-bar"></navbar>
			<app-main class="main-container"></app-main>
      </div>       -->
</template>

<script>
import { AppMain, Navbar } from "./components";
export default {
      components:{
            AppMain,
            Navbar
      }
}
      
</script>
