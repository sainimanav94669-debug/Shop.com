import { useState } from 'react' 
import './App.css'
import Header from './components/common/Header'
import Hero from './components/common/Hero'
import Logo from './components/Logo'
import NewArrivals from './components/home/NewArrivals'
import TopSelling from './components/home/TopSelling'
import DressStyle from './components/home/DressStyle'
import HappyCustomers from './components/home/HappyCustomers'
import Footer from './components/common/Footer'
import Subscribe from './components/home/Subscribe'

function App() { 

  return (
     <>  
    <Header/>
    <Hero/> 
    <Logo/>
    <NewArrivals/>
    <TopSelling/>
    <DressStyle/>
    <HappyCustomers/>
    <Subscribe />
    <Footer/>
     </>
  )
}

export default App
