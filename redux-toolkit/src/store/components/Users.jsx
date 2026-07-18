import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchUser } from "../feature/user/userSlice"

const Users = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUser())
  })
  return (
    <div>

    </div>
  )
}

export default Users
