import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import About from './About.jsx'
import Sidebar from './Sidebar.jsx'
import Education from './Education.jsx'
import Languages from './Languages.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Sidebar/>
      <About/>
      <div className="side-side">
        <Education/>
        <Languages/>
      </div>
      <Footer/>
    </>
  )
}

export default App
