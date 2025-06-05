
import { Helmet } from 'react-helmet-async';
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "TaxGuru Accountants",
    "description": "Manchester's trusted accounting specialists providing tax planning, bookkeeping, business advisory services and more.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 King Street",
      "addressLocality": "Manchester",
      "postalCode": "M2 6AZ",
      "addressCountry": "GB"
    },
    "telephone": "+441611234567",
    "email": "info@taxguruaccountants.co.uk",
    "url": "https://taxguruaccountants.co.uk",
    "openingHours": [
      "Mo-Fr 09:00-18:00",
      "Sa 10:00-14:00"
    ],
    "sameAs": [
      "https://www.facebook.com/taxguruaccountants",
      "https://www.linkedin.com/company/taxguruaccountants"
    ]
  };

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>TaxGuru Accountants | Professional Accounting Services in Manchester</title>
        <meta name="description" content="TaxGuru Accountants - Manchester's trusted accounting specialists providing tax planning, bookkeeping, business advisory services and more." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Hero />
      <Services />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
