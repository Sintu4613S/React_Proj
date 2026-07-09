import { Outlet } from "react-router-dom"

const Help = () => {
  return (
    <>
      <div className="w-96 h-96 bg-yellow-500 mt-6 text-center text-3xl">
        <h1>This is a Help Page</h1>
        <Outlet />
      </div>
    </>
  )
}

export default Help
