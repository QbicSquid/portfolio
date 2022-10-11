import { useState } from 'react'
import { SelectionContext } from './context/SelectionContext'
import { selectionOptCount } from './console/Selector'

const Page = ({ children, ...props }) => {
  const [selection, setSelection] = useState(0)

  const selectionNav = (event) => {
    // wierd behaviour, TODO: check later
    // if (event.code == 'ArrowUp')
    //   setSelection((selection + 1) % selectionOptCount)
    // else if (event.code == 'ArrowDown')
    //   setSelection((selection == 0 ? selectionOptCount - 1 : (selection - 1) % selectionOptCount))
    // setSelection(selection + 1)

    var newSelection = selection;
    if (event.code == 'ArrowUp')
      newSelection = (newSelection + 1) % selectionOptCount
    else if (event.code == 'ArrowDown')
      newSelection = newSelection == 0 ? selectionOptCount - 1 : newSelection - 1
    
    setSelection(newSelection)
  }

  return (
    <SelectionContext.Provider value={selection}>
      <div
        className="flex w-full h-full p-0 mx-0 my-0 bg-gruvd-bg0_h"
        tabIndex="1"
        onKeyDown={selectionNav}
      >
        {children}
      </div>
    </SelectionContext.Provider>
  )
}

export default Page
