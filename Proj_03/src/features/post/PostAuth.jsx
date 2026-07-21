import { useSelector } from "react-redux"
import { selectAllUsers } from "../users/usersSlice"
import { memo } from "react"
const PostAuth = memo(({ userId, onAuthorChanged }) => {
  const users = useSelector(selectAllUsers)
  console.log("hello", users)
  const author = users.find(user => Number(user.id) === Number(userId))

  return <span>by {author ? author.name : 'Unknown Author'}</span>
})

export default PostAuth
