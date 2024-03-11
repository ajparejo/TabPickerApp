// import { useState } from 'react'
import { Tabs } from './components/tabs'
import './App.css'

function RandomContent() {
  return (
    <h1>
      Noticias deportivas
    </h1>
  )
}

function App() {
  // const [count, setCount] = useState(0)

  const tabs = [
    {
      label: 'Nacionales',
      content: <h1>Noticias nacionales</h1>
    },
    {
      label: 'Internacionales',
      content: <h1>Noticias internacionales</h1>
    },
    {
      label: 'Deportes',
      content: <RandomContent/>
    }
  ]

  function handleTabs(tabIndex) {
    console.log(tabIndex)
  }

  return (
    <>
      <Tabs tabsContent={tabs} onChange={handleTabs}/>
    </>
  )
}

export default App
