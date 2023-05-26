import React, { useEffect, useState } from 'react'
import NavbarTop from '../components/NavbarTop/NavbarTop'
import Sidebar from '../components/Sidebar'
import NavbarBottom from '../components/NavbarBottom/NavbarBottom'
import { useLocation } from 'react-router'
import Footer from '../components/Footer'
import TopBanner from '../components/TopBanner/TopBanner'

const BoardMembers = ({user, active, setActive}) => {
  const [route, setRoute] = useState();

  const location = useLocation().pathname;

  useEffect(() => {
    setRoute(location);
  }, [location]);
  return (
    <div>
      <NavbarTop active={active} setActive={setActive} user={user}/>
      {active && (
        <Sidebar location={route} user={user} />
      )}
      <NavbarBottom />
      <TopBanner />
      Contact
      <Footer />
    </div>
  )
}

export default BoardMembers