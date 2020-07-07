import _ from 'lodash'
import axios from 'axios'
const createAsyncMutation = (type) => ({
	SUCCESS: `${type}_SUCCESS`,
	FAILURE: `${type}_FAILURE`,
	PENDING: `${type}_PENDING`,
	loadingKey: _.camelCase(`${type}_PENDING`),
	stateKey: _.camelCase(`${type}_DATA`)
})
  
const doAsync = (store, { url, mutationTypes }) => {
	store.commit(mutationTypes.PENDING);
	axios(url)
}
export {
	createAsyncMutation
}