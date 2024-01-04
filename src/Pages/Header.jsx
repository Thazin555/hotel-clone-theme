import React from 'react'
import HeroIcon from '../Components/HeroIcon'
import HeroSection from '../Components/HeroSection'
import MultipleItems from '../Components/MultipleItems'
import NavSection from '../Components/NavSection'

const Header = () => {
  return (
    <div>
      {/* <HeroIcon/> */}
      <HeroSection/>
      <MultipleItems/>
      <NavSection/>
    </div>
  )
}

export default Header