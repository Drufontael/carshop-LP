import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import InventorySection from './components/InventorySection';
import ContactSection from './components/ContactSection'
import ServiceSection from './components/ServiceSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/>
      <main className='bg-gray-900 font-poppins text-white oppacity-90 flex flex-col justify-between'>
        <HeroSection/>
        <InventorySection/>
        <ServiceSection/>
        <ContactSection/>
      </main>
      <Footer/>    
    </>
  );
}

export default App;
