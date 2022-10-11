import { useEffect, useState } from 'react'
import SelectionContext from './context/SelectionContext'
import { selectionOptCount } from './console/Selector'

const Page = ({ children, ...props }) => {
  const [selection, setSelection] = useState(0)
  const [enter, setEnter] = useState(false)
  const selectionContext = { selection, enter, setSelection, setEnter }

  const selectionNav = (event) => {
    // TODO: wierd behaviour, commented, check later
    // if (event.code == 'ArrowUp')
    //   setSelection((selection + 1) % selectionOptCount)
    // else if (event.code == 'ArrowDown')
    //   setSelection((selection == 0 ? selectionOptCount - 1 : (selection - 1) % selectionOptCount))
    // setSelection(selection + 1)
    
    if (enter) return

    var newSelection = selection
    var newEnter = enter
    if (event.code == 'ArrowUp')
      newSelection = newSelection == 0 ? selectionOptCount - 1 : newSelection - 1
    else if (event.code == 'ArrowDown')
      newSelection = (newSelection + 1) % selectionOptCount
    else if (event.code == 'Enter')
      newEnter = true

    setSelection(newSelection)
    setEnter(newEnter)
  }

  useEffect(() => document.getElementById('page').focus(), [])

  return (
    <SelectionContext.Provider value={selectionContext}>
      <div
        className="flex w-full h-full p-0 mx-0 my-0 bg-gruvd-bg0_h"
        id="page"
        tabIndex="1"
        onKeyDown={selectionNav}
      >
        {children}
      </div>
    </SelectionContext.Provider>
  )
}

export default Page
