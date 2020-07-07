<template>
  <div id="app">
    <div id="nav">
		<router-link to="/">Login</router-link> |
      <router-link to="/group01">Group01</router-link> |
      <router-link to="/group02">Group02</router-link> |
	  <router-link to="/group02/hello">Group02-hello</router-link>
    </div>
	
	<router-view/>
	
  </div>
</template>
<script>
	export default {
		computed:{
			
		}
	}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
