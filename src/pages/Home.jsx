import React from 'react'
import HeritageAcademyHero from '../components/home/Hero'
import LeadStats from '../components/home/LeadStats'
import FeaturedPrograms from '../components/home/FeaturedPrograms'
import WhyNazglobal from '../components/home/WhyNazglobal'
import FacultySection from '../components/home/FacultySection'
import SuccessArchives from '../components/home/SuccessArchives'
import PhilosophySection from '../components/home/PhilosophySection'

const Home = () => {
  return (
    <div>
        <HeritageAcademyHero />
        <LeadStats />
        <FeaturedPrograms />
        <WhyNazglobal />
        <FacultySection />
        <SuccessArchives />
        <PhilosophySection />
    </div>
  )
}

export default Home