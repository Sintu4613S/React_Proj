import { createContext, useContext, useState } from "react";
import axios from 'axios'

const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(false)
  const [Isopen, setIsopen] = useState(false)

  const fetchNews = async (url = '/everything?q=india') => {
    setLoading(true)
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const apiKey = import.meta.env.VITE_API_KEY;
      const response = await axios(`${apiUrl}${url}&apiKey=${apiKey}`)
      setLoading(false)
      return response.data
      // console.log('object')
    } catch (error) {
      console.log(error)
      setLoading(false)

    }

  }
  const value = {
    news,
    setNews,
    fetchNews,
    loading,
    Isopen,
    setIsopen
  }
  return (
    <NewsContext.Provider value={value}>
      {children}
    </NewsContext.Provider>
  )
}
const useNewsContext = () => {
  return useContext(NewsContext)
}

export { NewsContextProvider, useNewsContext }