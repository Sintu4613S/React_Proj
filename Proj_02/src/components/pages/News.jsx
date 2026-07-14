import { useEffect } from "react"
import Wrapper from "../Wrapper"
import { useNewsContext } from "./context/NewsContex"


const News = ({ className }) => {
  const { news, setNews, fetchNews } = useNewsContext()
  console.log(news)

  useEffect(() => {
    (async () => {
      const data = await fetchNews()
      //console.log(data)
      setNews(data.articles)
    })()
  }, [])

  return (
    <Wrapper>
      <div className={`max-w[1200px] grid grid-cols-1 sm:grid-cols-2
        md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6  ${className}`}>
        {news.map((newsDetails, index) => {
          return (
            <Newscard key={index} details={newsDetails} />
          )
          //console.log(newsDetails)
        })}

      </div>
    </Wrapper>
  )
}
const Newscard = ({ details }) => {
  return (
    <Wrapper>
      <div className={`card bg-base-200 shadow-sm`}>
        <figure>
          <img
            src={details?.urlToImage}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <span className="text-xl text-green-600">{details.publishedAt}</span>
          <h2 className="card-title line-clamp-2 text-2xl">{details?.title}...</h2>
          <p className="line-clamp-2 text-xl">{details.description}...</p>
          <div className="card-actions justify-end">
            <button onClick={() => window.open(details.url, "_blank")} className="btn badge-outline my-2">Read More</button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default News
