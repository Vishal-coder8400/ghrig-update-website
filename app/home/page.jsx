import React from 'react'
import CarouselSection from './Carousel'
import JobCategories from './jobCategory'
import Accelerate_job from './accelarateJob'
import CarouselCard from "./CarouselCard";
import {Engage} from './engage'
import Banner_section from './banner_section_new'
import { HiringCompaniesWrapperSection } from './topHiringCompanies'
import {DiscoverJobCategories} from './discoverJobCategories'
import {FaqSection} from './faq'


export default function page() {
  return (
    <div >
      <div className='p-2'>
        <Banner_section />
      </div>
      <CarouselSection />
      <Engage />
      <HiringCompaniesWrapperSection />
      <DiscoverJobCategories />
      <JobCategories />
      {/* <Accelerate_job /> */}
      <CarouselCard />
      <FaqSection />
    </div>
  )
}