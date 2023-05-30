import React, { useEffect, useState } from 'react'

import NavbarBottom from '../components//NavbarBottom/NavbarBottom'
import TopBanner from '../components/TopBanner/TopBanner'
import Feed from '../components/Feed/Feed'
import Footer from '../components/Footer'
import NavbarTop from '../components/NavbarTop/NavbarTop'
import BannerBottom from '../components/BannerBottom'
import Company from '../components/Company/Company'
import Sidebar from '../components/Sidebar'
import { useLocation } from 'react-router'

const Home = ({user, active, setActive}) => {
  const [route, setRoute] = useState();

  const location = useLocation().pathname;

  useEffect(() => {
    setRoute(location);
  }, [location]);

  return (
    <div className='bg-white overflow-x-hidden relative' style={{overflowY:'hidden'}}>
      <NavbarTop active={active} setActive={setActive} user={user}/>
      {active && (
        <Sidebar location={route} user={user} />
      )}
      <NavbarBottom />
      <TopBanner />
      <Feed />
      <BannerBottom />
      <Company />
      <Footer />
    </div>
  )
}

export default Home
