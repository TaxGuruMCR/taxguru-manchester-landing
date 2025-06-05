
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
          <span className="text-blue-600">TaxGuru</span> Accountants
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-4 animate-fade-in">
          Manchester's Trusted Accounting Specialists
        </p>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
          Professional accounting services tailored for your business success. From tax planning to financial consulting, we've got you covered.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
          <Button 
            onClick={scrollToContact}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg transition-all duration-300 hover:scale-105"
          >
            Get Free Consultation
          </Button>
          <div className="flex items-center gap-6">
            <a href="tel:+441234567890" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
              <Phone className="w-5 h-5" />
              <span className="font-medium">0161 123 4567</span>
            </a>
            <a href="mailto:info@taxguruaccountants.co.uk" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
              <Mail className="w-5 h-5" />
              <span className="font-medium">Email Us</span>
            </a>
          </div>
        </div>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Professional accounting workspace" 
            className="rounded-lg shadow-2xl mx-auto animate-scale-in"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
