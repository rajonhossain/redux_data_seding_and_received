const initialState = {
	name: []
}


const reducer = (state=initialState, action) => {
	

	switch(action.type){
		case "typeman":
		return {name: [...state.name, action.playload]}

	default:
	return state
	}

}


export default reducer;