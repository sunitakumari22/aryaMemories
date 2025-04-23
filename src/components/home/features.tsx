
import { Heart, BookOpen, Sparkles, Gift } from "lucide-react";

const features = [
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "Handcrafted Quality",
    description: "Each memory book is carefully crafted with premium materials built to last generations."
  },
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: "Personalized Design",
    description: "Customize every aspect of your keepsake to reflect your unique story and style."
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: "Thoughtful Details",
    description: "Elegant finishing touches and carefully designed pages make documenting memories effortless."
  },
  {
    icon: <Gift className="h-8 w-8 text-primary" />,
    title: "Perfect Gifting",
    description: "Our keepsakes make meaningful gifts for weddings, baby showers, anniversaries and more."
  }
];

export function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-3xl font-medium text-memoir-900 mb-4">Crafted with Love</h2>
          <p className="text-memoir-700">
            We believe memories deserve to be preserved with care, quality, and attention to detail.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="bg-memoir-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-medium text-lg text-memoir-900 mb-2">{feature.title}</h3>
              <p className="text-memoir-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
