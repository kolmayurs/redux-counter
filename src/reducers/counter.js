export default function counter(state = [], action){
	const {index} = action;
	switch(action.type){
		case 'ADD_COUNTER' : {
			return [
				...state, 0
			]
		}
		case 'REMOVE_COUNTER' : {
			return [
				...state.slice(0,index),
				...state.slice(index+1)
			]
		}
		case 'ADD_IN_COUNTER' : {
			return [
				...state.slice(0,index),
				state[index] + 1,
				...state.slice(index+1)
			]
		}
		case 'SUB_IN_COUNTER' : {
			return [
				...state.slice(0,index),
				state[index] - 1,
				...state.slice(index+1)
			]
		}
		default : {
			return [...state]
		}
	}
}