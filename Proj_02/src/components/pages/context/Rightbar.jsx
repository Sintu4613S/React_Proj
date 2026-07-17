import { useNewsContext } from "./NewsContex"
import { useEffect, useState } from "react"

const Rightbar = () => {
  const { Isopen, setIsopen, fetchNews, } = useNewsContext()
  const [headline, setHeadline] = useState([])
  useEffect(() => {
    //if (Isopen) (
    (async () => {
      const response = await fetchNews("/top-headlines?q=india")
      setHeadline(response.articles)
      console.log(response)
      // console.log(response.data)
    })()
    // )

  }, [])
  // console.log(news)

  return (
    <>
      <div className="bg-base-300">
        <div className="drawer drawer-end">
          <input
            id="my-drawer-5"
            type="checkbox"
            className="drawer-toggle"
            checked={Isopen}
            onChange={(e) => setIsopen(e.target.checked)}
          />
          <div className="drawer-content">
            {/* Page content here */}
            {/* <label htmlFor="my-drawer-5" className="drawer-button btn btn-primary">Open drawer</label> */}
          </div>
          <div className="drawer-side px-0">
            <label htmlFor="my-drawer-5" aria-label="close sidebar" className="drawer-overlay " onClick={() => setIsopen(false)}></label>
            <ul className="menu min-h-full w-100 p-4 bg-base-300 ">
              {/* Sidebar content here */}
              <button className="absolute top-2 right-2 mb-6 text-2xl cursor-pointer" onClick={() => setIsopen(false)}>X</button>
              <h1 className="m-10 text-center text-3xl font-extrabold text-gray-800">LatestHeadLines</h1>
              {headline.map((item, index) => {
                return (
                  <div key={index} className="flex items-center gap-4
                py-4 cursor-pointer
                ">
                    <div className="relative w-32.5 h-21.25 sm:w-40 sm:h-25 shrink-0
                  rounded-lg overflow-hidden">
                      <img className="w-fullh-full object-cover" src={item.urlToImage || null} alt="" />
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className=" font-medium text-[15px] sm:text-[17px] text-blue-100 line-clamp-2">{item.title}</h3>
                    </div>
                  </div>
                )
              })}
            </ul>
          </div>
        </div >
      </div>
    </>
  )
}

export default Rightbar
