
import { Button } from "@/components/ui/button";
import { Phone, Mail, Calculator } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section aria-labelledby="hero-heading" className="bg-gradient-to-br from-blue-50 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8 animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <Calculator className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-bold text-blue-600">TaxGuru</span>
          </div>
        </div>

        <h1 id="hero-heading" className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
          <span className="text-blue-600">TaxGuru</span> Accountants
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-4 animate-fade-in">
          Manchester's Trusted Accounting Specialists
        </p>
        <p className="text-lg text-gray-600 mb-4 max-w-3xl mx-auto animate-fade-in">
          Professional accounting services tailored for your business success. From tax planning to financial consulting, we've got you covered.
        </p>
        
        {/* MTD Ready Badge */}
        <div className="mb-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-green-600 rounded-full"></span>
            MTD Ready & Compliant
          </div>
        </div>
        
        <p className="text-md text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in italic">
          "Pop round for a chat and we'll get the kettle on! ☕ Your numbers are safe with us."
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
          <Button onClick={scrollToContact} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg transition-all duration-300 hover:scale-105">
            Get Free Consultation
          </Button>
          <div className="flex items-center gap-6">
            <a href="tel:01615315171" aria-label="Call us" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
              <Phone className="w-5 h-5" />
              <span className="font-medium">0161 531 5171</span>
            </a>
            <a href="mailto:info@taxguruaccountants.com" aria-label="Email us" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
              <Mail className="w-5 h-5" />
              <span className="font-medium">Email Us</span>
            </a>
          </div>
        </div>
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Professional accounting workspace with laptop, calculator and financial documents" className="rounded-lg shadow-2xl mx-auto animate-scale-in" width="2000" height="1333" loading="eager" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
