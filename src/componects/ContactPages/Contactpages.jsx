import React from 'react'
import HelpSection from './components/HelpSection'
import BreadcrumbNav from './components/BreadcrumbNav'
import LocationsSection from './components/location'
import ContactForm from './components/contactform'
import WorldMap from './components/WorldMap'
import CartPopup from '../navCartpop/CartPopup'
import AccountDropdown from '../navCartpop/AccountDropdown'

function Contactpages() {
  return (
    <div>
      <BreadcrumbNav/>
      <HelpSection/>
      <WorldMap/>
      <LocationsSection/>
      <ContactForm />
      <CartPopup />
      <AccountDropdown />
    </div>
  )
}

export default Contactpages
