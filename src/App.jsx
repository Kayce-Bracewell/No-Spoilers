import { Route, Routes } from "react-router-dom"
import './App.css'
import { NewPost } from "./components/views/NewPost"

export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<NewPost />}/>
    </Routes>
  )
}
