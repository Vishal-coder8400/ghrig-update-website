import React from 'react'
import ServiceBanner from "../services/banner"
import Head from 'next/head'
import AssociatedSectors from '../services/associate_sectors'
import Solutions from '../services/solutions'
import OurServices from '../services/ourServices'
import Testimonials from '../services/testimonial'

export default function page() {
  return (
    <div>
  
        <ServiceBanner/>
        <AssociatedSectors/>
        <Solutions/>
        <OurServices/>
        <Testimonials/>
    </div>
  )
}
