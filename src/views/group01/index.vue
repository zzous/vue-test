<template>
	<div>
		<div class="tblWrap">
			<b-table 
				:items="maemulList"
				:fields="fields"				
				show-empty
				empty-text="No Data"
			>
				<template v-slot>
					<col :style="{ width: '90px' }">
					<col >
					<col :style="{ width: '150px' }">
					<col :style="{ width: '150px' }">
					<col :style="{ width: '150px' }">
				</template>     
				<template v-slot:table-busy>
					<div class="text-center text-danger my-2">
					<b-spinner class="align-middle"></b-spinner>
					<strong>Loading...</strong>
					</div>
				</template>                  
			</b-table>

			<div class="btnWrap">
				<div class="right">
					<b-button variant="primary" class="normal" >등록</b-button>
				</div>
			</div>
		</div>
		<div class="pagingWrap">
			<b-pagination v-model="currentPage" total-rows="3000" limit="10" align="center"></b-pagination>
		</div>
	</div>
</template> 

<script>
	
	function createMaemulList(){
		let maemulList = [];
		for (var i = 1; i <=10; i++) {
			maemulList.push({
				no: i,
				id: "maemul_" + i,
				title: "리브 부동산 " + i,
				created: "2020.05.21",
				hits:"10"
			})
		}
		return maemulList;
	}
	export default {
		computed: {
			
		},
		data(){
			return {
				currentPage: 3,//pagination 
                selectedDate: '',//datepicker
				fields: [ {key:'no', label:'번호'}, {key:"title", label:'제목'}, {key:'created', label:'등록일'}, {key: 'hits', label: '조회수'}],
				maemulList:createMaemulList()
			}
		}
		
	};
</script>
