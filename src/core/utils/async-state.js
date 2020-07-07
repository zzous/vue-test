
export const asyncState = {
	initial(initialData = null) {
		return {
			isLoading: false,
			data: initialData || null,
			isError: false,
			error:null
		}
	},
	pending(data = null) {
		return {
			isLoading: true,
			data: data || null,
			isError: false,
			error:null
		}
	},
	success(data = null) {
		return {
			isLoading: false,
			data: data || null,
			isError: false,
			error:null
		}
	},
	error(error = null) {
		return {
			isLoading: false,
			data: null,
			isError: true,
			error:error
		}
	}
}