import './App.css'
import PostList from './features/components/PostList'
import ContentForm from './features/components/ContentForm'


function App() {

  return (
    <>
      {/* <h1 className='bg-red-500 text-3xl'>Hello</h1> */}
      <ContentForm />
      <PostList />
    </>
  )
}

export default App
