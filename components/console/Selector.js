import { useContext, useState } from 'react'
import { SelectionContext } from '../context/SelectionContext'

const selectionOpt = [
  { name: 'About' },
  { name: 'SkillSet' },
  { name: 'Education' },
  { name: 'Achievements' },
  { name: 'Contact' },
  { name: 'Projects' },
]

export const selectionOptCount = selectionOpt.length

const Selector = () => {
  const selection = useContext(SelectionContext)

  const options = selectionOpt

  return (
    <div>{selection}</div>
  )
}

export default Selector
