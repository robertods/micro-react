
const createContext = (initialValue) => {
  const context = { value: initialValue, subscribers: [] }

  const Provider = ({ value, children }) => {
    context.value = value
    context.subscribers.forEach(callback => callback())
    return children
  }

  
}

const useContext = () => {
    
}

export { createContext }