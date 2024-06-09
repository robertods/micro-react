import { createContext, useState } from "../u-react/index.js";

const globalContext = createContext(90)

//const GlobalProvider = children => globalContext.Provider({ children })

const GlobalProvider = (children) => {
  const [value1, setValue1] = useState(1000)
  const [value2, setValue2] = useState(2000)
  return globalContext.Provider({ 
    value: { value1, value2, setValue1, setValue2 }, 
    children 
  })
}

export { globalContext, GlobalProvider }
