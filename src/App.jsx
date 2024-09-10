import { useState, useRef, useEffect } from 'react'

import { NavItemsData } from './assets/NavbarItem'
import './sass/index.scss'

import Navbar from './FrontendComponent/Navbar/Navbar'
import NavItems from './FrontendComponent/Navbar/NavItems'
import Items from './FrontendComponent/Navbar/Items'
import Logo from './FrontendComponent/Navbar/Logo'
import MenuBurger from './FrontendComponent/Navbar/menuBurger'
import Section from './FrontendComponent/mainContainerfolder/Section'
import MainContainer from './FrontendComponent/mainContainerfolder/MainContainer'

import Section2Container from './FrontendComponent/mainContainerfolder/Section2Container'
import Section3Container from './FrontendComponent/mainContainerfolder/Section3Container'
import Section4Container from './FrontendComponent/mainContainerfolder/Section4Container'
import Section5Container from './FrontendComponent/mainContainerfolder/Section5Container'
import Section6Container from './FrontendComponent/mainContainerfolder/Section6Container'

import AboutUsSection from './FrontendComponent/footer/AboutUsSection'
import FooterSection from './FrontendComponent/footer/FooterSection'

function App() {
  const [open, setOpen]= useState(false);

  return (
    <>
      <MenuBurger onClick={()=>setOpen(!open)} open={open}/>
      <header style={{left: open && '0px' }}>
        <Navbar>
          <Logo/>
          <NavItems>
            {
              NavItemsData.map((ele, i)=>(
                <Items innerText={ele} key={i}/>
              ))
            }
          </NavItems>
        </Navbar>
      </header>
      <MainContainer>
            <Section className="section1">
              <Logo/>
            </Section>
            <Section className="section2">
                <Section2Container/>
            </Section>
            <Section className="section3">
                <Section3Container/>
            </Section>
            <Section className="section4">
                <Section4Container/>
            </Section>
            <Section className="section5">
                <Section5Container/>
            </Section>
            <Section className="section6">
                <Section6Container/>
            </Section>
      </MainContainer>
      <footer>
        <AboutUsSection/>
        <FooterSection/>
      </footer>

    </>
  )
}

export default App
