import { useEffect, useState } from "react"
import Wrapper from "./Wrapper"
import { useNewsContext } from "./pages/context/NewsContex"

const Navbar = ({ className }) => {
  const [searchValue, setSearchValue] = useState('')
  const { setNews, fetchNews } = useNewsContext()
  const onChange = (e) => {
    const value = e.target.value
    setSearchValue(value)
  }
  //console.log(searchValue)
  useEffect(() => {
    if (!searchValue.trim()) return
    const delayDebounce = setTimeout(() => {
      (async () => {
        try {
          const data = await fetchNews(`/everything?q=${searchValue}`)
          if (data && data.articles) {
            setNews(data.articles)
          }
          //console.log(data)
        } catch (error) {
          console.log("News fetch karne mein dikkat hai", error)
        }
      })()

    }, 1000)
    return () => clearTimeout(delayDebounce)
  }, [searchValue])
  return (
    <div className={`bg-base-300  ${className}`}>
      <Wrapper>
        <div className="navbar  shadow-sm">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">DailyNews</a>
          </div>
          <div className="flex gap-2">
            <input type="text" onChange={onChange} placeholder="Search" value={searchValue} className="input input-bordered w-24 md:w-auto" />
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Navbar
