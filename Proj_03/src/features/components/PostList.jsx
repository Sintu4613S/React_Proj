import { useSelector } from 'react-redux'
import { selectAllPosts } from '../post/postSlice'
import ContentForm from './ContentForm'
const PostList = () => {
  // const pureState = useSelector(state => state)
  // console.log("Mere Store ka aslo data:", pureState)
  const allPosts = useSelector(selectAllPosts)
  console.log(allPosts)
  const renderPosts = allPosts.map((post) => (
    <article key={post.id} className=' w-full max-w-sm border p-4 rounded-lg break-word  border-red-600'>
      <h1>{post.title}</h1>
      <p >{post.content.substring(0, 100)}</p>
    </article>

  ))
  return (
    <>


      <section className=' min-h-full max-w-5xl w-full  mx-auto  flex items-center flex-col gap-4 mb-5 bg-base-200'>
        <h1 className='m-3 '>Here are The Details</h1>
        {renderPosts}
      </section>


    </>
  )
}

export default PostList
