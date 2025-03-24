import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import InventorySection from './components/InventorySection';
import ContactSection from './components/ContactSection'
import ServiceSection from './components/ServiceSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <InventorySection/>
      <ServiceSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
