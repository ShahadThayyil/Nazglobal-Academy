import React from 'react';
import Navbar from './components/common/Navbar';
import Hero from './components/home/Hero';
// import Programs from './components/home/LeadStats';
import LeadStats from './components/home/LeadStats';
import FeaturedPrograms from './components/home/FeaturedPrograms';

function App() {
  return (
    <main className="bg-[#F8F7F5] selection:bg-[#BC4B32] selection:text-white">
      <Navbar />
      <Hero />
      <LeadStats />
      <FeaturedPrograms />
      {/* Other sections will come here */}
    </main>
  );
}

export default App;