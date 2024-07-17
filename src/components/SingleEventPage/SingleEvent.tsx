import React from 'react'
import styles from "./SingleEvent.module.scss"
import Header from '../Header/Header'
import EventHeader from '../EventHeader/EventHeader'
import EventBody from '../EventBody/EventBody'
import EventRegister from '../EventRegister/EventRegister'
import Footer from '../Footer/Footer'
const SingleEvent :React.FC = () => {
  return (
    <>
   
    <Header/>
    <EventHeader/>
    <EventBody/>
    <EventRegister/>
    <Footer/>
    </>
  )
}

export default SingleEvent