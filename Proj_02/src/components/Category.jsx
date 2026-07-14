import Wrapper from "./Wrapper"


const Category = ({ className }) => {
  const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']
  return (
    <div className={`${className}`}>


      <Wrapper>
        <div className={`max-w-full w-fit flex m-auto overflow-x-auto p-1.5 scrollbar-none gap-3  `} >
          {categories.map((category) => {
            return (
              <button key={category} className="btn btn-primary">{category.charAt(0).toUpperCase() + category.slice(1)}</button>
            )
          })}
        </div>
      </Wrapper>
    </div>

  )
}

export default Category
