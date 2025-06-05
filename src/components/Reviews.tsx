
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Mitchell",
      business: "Mitchell & Co Limited",
      rating: 5,
      review: "TaxGuru Accountants have been absolutely fantastic. Their expertise in tax planning saved our company thousands of pounds. Highly professional and always available when we need them.",
      date: "2 months ago"
    },
    {
      name: "James Harrison",
      business: "Harrison Properties",
      rating: 5,
      review: "Outstanding service! They handled our company formation and ongoing bookkeeping with such efficiency. The team is knowledgeable, friendly, and always goes above and beyond.",
      date: "3 months ago"
    },
    {
      name: "Emma Thompson",
      business: "Thompson Design Studio",
      rating: 5,
      review: "I've been using TaxGuru for my self-assessment for 3 years now. They make the whole process stress-free and always find ways to optimize my tax situation. Couldn't recommend them more!",
      date: "1 month ago"
    },
    {
      name: "David Chen",
      business: "Chen Consulting",
      rating: 5,
      review: "Professional, reliable, and incredibly knowledgeable. They helped us navigate complex VAT requirements and their business advisory services have been invaluable for our growth.",
      date: "4 months ago"
    },
    {
      name: "Lisa Parker",
      business: "Parker Marketing Ltd",
      rating: 5,
      review: "The best accounting firm in Manchester! Their attention to detail is exceptional and they've helped streamline our financial processes significantly. True professionals.",
      date: "2 months ago"
    },
    {
      name: "Michael Roberts",
      business: "Roberts Engineering",
      rating: 5,
      review: "TaxGuru has been our trusted partner for over 5 years. Their proactive approach to tax planning and business advice has contributed significantly to our company's success.",
      date: "1 month ago"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-20 px-4 bg-gray-50" id="reviews">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - see what our satisfied clients have to say
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex">{renderStars(5)}</div>
            <span className="text-lg font-semibold text-gray-700">5.0 out of 5</span>
            <span className="text-gray-600">• Based on 50+ Google Reviews</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex">{renderStars(review.rating)}</div>
                  <span className="ml-2 text-sm text-gray-500">{review.date}</span>
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.review}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-600">{review.business}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
