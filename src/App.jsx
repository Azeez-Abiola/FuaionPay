import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import ProductShowcase from './components/sections/ProductShowcase';
import Investment from './components/sections/Investment';
import WhyChoose from './components/sections/WhyChoose';
import Testimonials from './components/sections/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-gradient-to-br from-purple-50 to-purple-100">
        <Navbar />
        <main className="w-full">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Features />
                <ProductShowcase />
                <Investment />
                <WhyChoose />
                <Testimonials />
              </>
            } />
            {/* Add more routes here as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;