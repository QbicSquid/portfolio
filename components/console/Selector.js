import { useContext, useState } from 'react'
import SelectionContext from '../context/SelectionContext'

export const selectionOpt = [
  { name: 'About' },
  { name: 'SkillSet' },
  { name: 'Education' },
  { name: 'Achievements' },
  { name: 'Contact' },
  { name: 'Projects' },
]

export const selectionOptCount = selectionOpt.length

const Selector = () => {
  const selectionContext = useContext(SelectionContext)

  const options = selectionOpt

  return (
    <div>
      {selectionOpt.map((option, index) => (
        <p className='text-gruvd-yellow2' key={index}>{index == selectionContext.selection ? '> ': ''}{option.name}</p>
      ))}
    </div>
  )
}

export default Selector
