import { useEffect, useState } from "react"
import Wrapper from "./Wrapper"
import { useNewsContext } from "./pages/context/NewsContex"
import Rightbar from "./pages/context/Rightbar"

const Navbar = ({ className }) => {
  const [searchValue, setSearchValue] = useState('')
  const { setNews, fetchNews, setIsopen } = useNewsContext()
  // const onChange = (e) => {
  //   const value = e.target.value
  //   setSearchValue(value)
  // }
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
            <input type="text" onChange={(e) => setSearchValue(e.target.value)} placeholder="Search" value={searchValue} className="input input-bordered w-24 md:w-auto" />
            <button onClick={() => setIsopen(true)} className="btn btn-ghost btn-circle cursor-pointer">
              <div className="indicator">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fill="currentColor" d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z" />
                  <path fill="#fff" d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z" />
                </svg>
              </div>
            </button>
          </div>

        </div>
        <Rightbar />
      </Wrapper >
    </div >

  )
}

export default Navbar
