import React from 'react'
import Footer from '../components/Footer'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import Section5 from '../components/Section5'
import Section6 from '../components/Section6'

const LandingPage = ({ newCoins}) => {
  console.log(newCoins);
  return (
    <div>
      <Section1/>
      <Section2 data={newCoins}/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Footer/>
    </div>
  )
}

export default LandingPage