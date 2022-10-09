const Page = ({ children, ...props }) => {
  return (
    <div className="flex w-full h-full p-0 mx-0 my-0 bg-gruvd-bg0_h">
      {children}
    </div>
  )
}

export default Page