import { useEffect, useState } from 'react'
import haskell_logo from "./assets/haskell_logo.png"
import './App.css'
import { MainPage } from './pages/MainPage'
import { AppHeader } from './components/AppHeader'
import { Portofolio } from './pages/Portofolio'
import { Feedback } from './pages/Feedback'

function App() {
  const [pages] = useState(new Map())
  const [value, setValue] = useState("")



  useEffect(() => {
    pages.set("main", <MainPage />)
    pages.set("porto", <Portofolio />)
    pages.set("feedback", <Feedback />)
    setValue("main")
    // setValue("feedback")
    // setValue("porto")
  }, [])

  useEffect(() => {
    console.log(value)
  }, [value])



  return (
    <>
      <AppHeader setValue={setValue} />

      <div>
        <img src={haskell_logo} />
      </div>

      {/* {pages.has(value) || <MainPage />} */}
      {pages.get(value)}
      {/* {value === "main" && <MainPage />} */}
      {/* Мы используем Haskell
      Мы используем effectful */}
      {value !== "feedback" && (<div>
        <br />
        <button className="button">Заказать бота</button>
      </div>)}
    </>
  )
}

export default App
