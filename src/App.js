import AppDownloadSection from './components/sections/AppDownload';
import ExploreSection from './components/sections/Explore';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import Testimonial from './components/sections/Testimonial';
import Why from './components/sections/Why';
import Footer from './components/sections/Footer';


function App() {
  return (
    <>
      <Header />
      <Hero />
      <Why />
      <ExploreSection />
      <Testimonial />
      <AppDownloadSection />
      <Footer />
    </>
  )
}

export default App;
