export function addCounter(){
	return function(dispatch){
		dispatch({type: 'ADD_COUNTER'})
	}
}


export function removeCounter(index){
	return function(dispatch){
		dispatch({type: 'REMOVE_COUNTER', index})
	}
}


export function addInCounter(index){
	return function(dispatch){
		dispatch({type: 'ADD_IN_COUNTER', index})
	}
}


export function subInCounter(index){
	return function(dispatch){
		dispatch({type: 'SUB_IN_COUNTER', index})
	}
}