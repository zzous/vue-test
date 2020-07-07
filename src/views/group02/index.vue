<template>
	<div>
	
		<div class="card-wrap">
			<div v-if="budongsanList && budongsanList.length">
				<b-card-group deck>
					<b-card v-for="(item, index) in budongsanList" :key="index" 
						title="Title" 
						:img-src="item.url" img-alt="Image" img-top>
					<b-card-text>
						{{item.text}}
					</b-card-text>
					<template v-slot:footer>
						<small class="text-muted">{{item.date}}</small>
					</template>
					</b-card>
				</b-card-group>
			</div>
			<div v-else class="no-data" style="height: 565px;">
				No Data
			</div>
		</div>
	</div>
</template>

<script>
	function createData(){
		let data = [
			{
				id:"budongsan01",
				url: "https://picsum.photos/300/300/?image=41", 
				text:"This is a wider card with supporting text below as a natural lead-in to additional content.  This content is a little bit longer.", 
				date: "Last updated 3 mins ago"
			}, {
				id:"budongsan02",
				url: "https://picsum.photos/300/300/?image=41", 
				text:"This card has supporting text below as a natural lead-in to additional content.", 
				date: "Last updated 3 mins ago"
			}, {
				id:"budongsan03",
				url: "https://picsum.photos/300/300/?image=41", 
				text:"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.", 
				date: "Last updated 3 mins ago"
			}
		];
		return data;			
	}
	export default {
		data(){
			return {
				budongsanList:createData()
			}
		}
	};
</script>
