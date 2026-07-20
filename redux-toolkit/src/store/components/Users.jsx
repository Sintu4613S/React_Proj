import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUser } from "../feature/thunk/fetchuser"


const Users = () => {
  const users = useSelector(state => state.user.users)
  console.log(users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUser())
  }, [])

  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id} style={{
            width: '200px',
            marginBottom: '8px',
            overflowX: 'auto',
            height: '150px', borderRadius: '10px', border: '2px solid gray', textAlign: 'center'
          }}>
            Name:{user.name}<br />
            UserName: {user.username} <br />Email:{user.email}
          </div>

        )
      })}
    </div>
  )
}

export default Users
