
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Bride",
    message: "Our wedding memory book is absolutely stunning. The quality exceeded my expectations and it brought tears to my eyes seeing our special day preserved so beautifully.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael & David",
    role: "Newlyweds",
    message: "We wanted something unique to remember our wedding day, and Arya Memories delivered beyond our imagination. The attention to detail is remarkable.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Peterson",
    role: "Mother",
    message: "I've been documenting my daughter's first year in the Baby's First Year book and it's become our most treasured possession. The thoughtful prompts make it easy.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-16 bg-memoir-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-3xl font-medium text-memoir-900 mb-4">What Our Customers Say</h2>
          <p className="text-memoir-700">
            We're honored to be part of your most precious moments and stories. Here's what our community has to say about their Arya Memories experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-sm border border-memoir-100">
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < testimonial.rating ? "fill-memoir-400 text-memoir-400" : "text-memoir-200"}
                  />
                ))}
              </div>
              <p className="italic text-memoir-700 mb-6">"{testimonial.message}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-memoir-200 flex items-center justify-center text-memoir-700 font-medium">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="font-medium text-memoir-900">{testimonial.name}</p>
                  <p className="text-sm text-memoir-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
