import { useNewsContext } from "./pages/context/NewsContex"
import Wrapper from "./Wrapper"

const Category = ({ className }) => {
  const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']
  const { setNews, fetchNews } = useNewsContext()

  const handleCategory = async (e) => {
    const catgy = e.target.value
    //console.log(catgy)
    const data = await fetchNews(`/everything?q=${catgy}`)
    //console.log(data)
    setNews(data.articles)
  }
  return (
    <div className={`${className}`}>
      <Wrapper>
        <div className={`max-w-full w-fit flex m-auto overflow-x-auto p-1.5 scrollbar-none gap-3  `} >
          {categories.map((category) => {
            return (
              <button onClick={handleCategory}
                key={category}
                value={category}
                className="btn btn-primary">{category.charAt(0).toUpperCase() + category.slice(1)}</button>
            )
          })}
        </div>
      </Wrapper>
    </div>

  )
}

export default Category
