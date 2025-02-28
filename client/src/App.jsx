import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import './App.css'
function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </AuthProvider>
  )
}

export default App