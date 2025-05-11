import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import ProductCard from './components/productCard'
import HomePage from './pages/home'
import LoginPage from './pages/login'
import AdminPage from './pages/adminPage'
import { Toaster } from 'react-hot-toast'
import SignUpPage from './pages/signup'
import RegisterPage from './pages/register'

function App() {
 

  return (
    <>
       <Header/>
       <ProductCard name="Apple Laptop" description="lorem sdaf sad sad " price="1000/=" picture="https://picsum.photos/id/2/200/300" />
     
       <ProductCard name="Gaming Laptop" description="lorem sdaf sad sad " price="1000/=" picture="https://picsum.photos/id/3/200/300" />
    
    
    <BrowserRouter>
      <div >
        {/* <Header/> */}
        <Routes path="/*">
          <Route path="/" element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path='/admin/*' element={<AdminPage/>}/>
          <Route path='/*' element={<h1>404 Not Found</h1>}/>
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
//https://neygxadcgdpkbeaezfjc.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5leWd4YWRjZ2Rwa2JlYWV6ZmpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2MjUxODMsImV4cCI6MjA2MjIwMTE4M30.IpS34HF5ouG-5qPOavCyqCJdOV-sbhkLfmV04z36Fnc