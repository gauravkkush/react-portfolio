import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './componants/Layout'
import Home from './componants/Home'
import About from './componants/About'
import Projects from './componants/Projects'
import Contact from './componants/Contact'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
