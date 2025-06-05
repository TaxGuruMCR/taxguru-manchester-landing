
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
    "description": "Manchester's trusted accounting specialists providing tax planning, bookkeeping, business advisory services and more. MTD ready and compliant.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office 43, Adamson Towers",
      "addressLocality": "Manchester",
      "postalCode": "M20 2YY",
      "addressCountry": "GB"
    },
    "telephone": "+441615315171",
    "email": "info@taxguruaccountants.com",
    "url": "https://taxguruaccountants.com",
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
        <title>TaxGuru Accountants | Professional Accounting Services in Manchester | MTD Ready</title>
        <meta name="description" content="TaxGuru Accountants - Manchester's trusted accounting specialists providing tax planning, bookkeeping, business advisory services and more. MTD ready and compliant with a friendly touch." />
        <meta name="keywords" content="accountants manchester, tax services manchester, accounting firm, tax planning, bookkeeping, payroll, business advisory, vat returns, self assessment, MTD ready, MTD compliant" />
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
