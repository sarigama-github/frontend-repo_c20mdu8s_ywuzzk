import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Insights from './components/Insights';
import TestimonialsPricingFAQ from './components/TestimonialsPricingFAQ';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <HeroSection />
      <Features />
      <Insights />
      <TestimonialsPricingFAQ />
    </div>
  );
}

export default App;
