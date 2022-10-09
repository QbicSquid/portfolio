import { useEffect } from 'react'
import { useState } from 'react'

const TextTyper = ({ children, ...props }) => {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    for(let i = 0; i < props.text.length; i++) {
      setTimeout((text) => {
        setDisplayedText(text)
      }, 50 * i, props.text.substr(0, i + 1))
    }
  }, [])

  return <p>{displayedText}</p>
}

export default TextTyper
