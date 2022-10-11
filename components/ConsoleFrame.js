const ConsoleFrame = ({ children, ...props }) => {
  return (
    <div className="w-11/12 p-4 mx-auto mt-10 overflow-scroll border-2 bg-gruvd-bg h-5/6 border-gruvd-orange2 shadow-gruvd-orange2">
      {children}
    </div>
  )
}

export default ConsoleFrame
