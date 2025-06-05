
import { Calculator, FileText, TrendingUp, Shield, Users, PiggyBank } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "Tax Planning & Preparation",
      description: "Comprehensive tax services to minimize your liability and ensure compliance with HMRC regulations."
    },
    {
      icon: FileText,
      title: "Bookkeeping & Payroll",
      description: "Accurate bookkeeping and payroll management to keep your business finances organized."
    },
    {
      icon: TrendingUp,
      title: "Business Advisory",
      description: "Strategic financial advice to help grow your business and improve profitability."
    },
    {
      icon: Shield,
      title: "VAT Returns",
      description: "Timely and accurate VAT return preparation and submission to HMRC."
    },
    {
      icon: Users,
      title: "Company Formation",
      description: "Complete company registration and setup services for new businesses."
    },
    {
      icon: PiggyBank,
      title: "Self Assessment",
      description: "Personal tax return preparation for individuals and self-employed professionals."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive accounting solutions designed to meet all your financial needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 hover:border-blue-200">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
