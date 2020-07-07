/*
공통으로 사용하는 로딩 처리 기능
*/
import { rootState, rootActions, rootActionTypes } from "@/store";

export default {

	data() {
	  return {
		
	  }
	},
	


	methods: {
		...rootActions([rootActionTypes.START_LOADING, rootActionTypes.FINISH_LOADING]),
		$$showLoadingbar() {
			console.log("______________### ", rootActionTypes);
			this[rootActionTypes.START_LOADING]();
			
		},
		$$hideLoadingbar() {
			
			this[rootActionTypes.FINISH_LOADING]();
		},
	
	}
  }
  