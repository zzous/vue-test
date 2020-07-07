<template>
      <div>
			<b-list-group>
				<b-list-group-item v-for="(menuItem, index) in sideMenuList" :key="index">{{menuItem.label}}</b-list-group-item>
			</b-list-group>

      </div>
</template>

<script>
	function createData(){
		let data = [];
		for (var i = 1; i < 10; i++) {

			data.push({
				label: "menu_"+(i),
				id: "menu"+(i)
			})
		}
		return data;

	}

	export default {
		data(){
			return {
				sideMenuList:createData()
			}
		}
	}

</script>