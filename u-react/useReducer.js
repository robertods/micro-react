import useState from './useState.js'
import { getKey } from './utils.js'

let reducers = {}

const useReducer = (reducer, initialState) => {

  const key = getKey()

  if(!reducers[key]){
    const [getState, setState] = useState(initialState, true)    
    reducers[key] = {
      getState,
      dispatch: (action) => setState({
         ...getState(), 
         ...reducer(getState(), action)
      })
    }
  }
  
  return [reducers[key].getState(), reducers[key].dispatch]
}

export const clearReducers = () => {
  reducers = {}
}

window.debugReducer = () => {
  console.log(reducers)
}

export default useReducer