import { createContext, useContext, useState } from "react";
import axios from 'axios'

const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
  const [news, setNews] = useState([])
  const fetchNews = async (url = '/everything?q=india') => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const apiKey = import.meta.env.VITE_API_KEY;
      const response = await axios(`${apiUrl}${url}&apiKey=${apiKey}`)
      return response.data
      //console.log('object')
    } catch (error) {
      console.log(error)

    }

  }
  const value = {
    news,
    setNews,
    fetchNews
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