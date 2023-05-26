import React, { useEffect, useState } from 'react'
import NavbarBottom from '../components/NavbarBottom/NavbarBottom'
import Footer from '../components/Footer'
import NavbarTop from '../components/NavbarTop/NavbarTop'
import Sidebar from '../components/Sidebar'
import { useLocation } from 'react-router'
import TopBanner from '../components/TopBanner/TopBanner'

const About = ({user, active, setActive}) => {

  const [route, setRoute] = useState();

  const location = useLocation().pathname;

  useEffect(() => {
    setRoute(location);
  }, [location]);
  
  return (
    <div>
     <NavbarTop active={active} setActive={setActive} user={user}/>
      {active && (
        <Sidebar user={user}/>
      )}
      <NavbarBottom />
      <TopBanner />
      About
      <Footer />
    </div>
  )
}

export default About
