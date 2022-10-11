import { createContext } from "react"

const SelectionContext = createContext({
  selection: 0,
  enter: false,
  setSelection: () => {},
  setEnter: () => {},
})

export default SelectionContext