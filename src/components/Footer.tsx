
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">TaxGuru Accountants</h3>
            <p className="text-gray-300 mb-4">
              Manchester's trusted accounting specialists, providing comprehensive financial services to help your business thrive. MTD ready and always with the kettle on!
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>0161 531 5171</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@taxguruaccountants.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Office 43, Adamson Towers, Manchester M20 2YY</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Tax Planning & Preparation</li>
              <li>Bookkeeping & Payroll</li>
              <li>Business Advisory</li>
              <li>VAT Returns</li>
              <li>Company Formation</li>
              <li>Self Assessment</li>
              <li className="text-green-400 font-medium">✓ MTD Ready & Compliant</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Office Hours</h4>
            <div className="text-gray-300 space-y-1">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
              <p className="text-sm italic mt-2">☕ Kettle's always on during office hours!</p>
            </div>
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Professional Memberships</h5>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• ACCA Certified</li>
                <li>• ICAEW Member</li>
                <li>• AAT Licensed</li>
                <li>• MTD Compliant</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 TaxGuru Accountants. All rights reserved. | Registered in England & Wales</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
