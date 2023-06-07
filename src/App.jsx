import { Outlet } from "react-router-dom"
import NavBar from "./shared/NavBar"
import Footer from "./shared/Footer"


function App() {

  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
