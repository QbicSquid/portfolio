import { useEffect, useState } from 'react'

const TextTyper = ({ children, ...props }) => {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    for (let i = 0; i < children.length; i++) {
      setTimeout(
        () => {
          setDisplayedText(children.substr(0, i + 1))
        },
        props.keydelay * i
      )
    }
  }, [])

  return <p className="inline text-gruvd-yellow2">{displayedText}</p>
}

export default TextTyper
