import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "TV Actress",
      content: "Shahid sir's workshop completely transformed my approach to acting. His method acting techniques helped me land my first major role in a Dubai-based production. The confidence I gained here is invaluable!",
      rating: 5,
      image: "🎭"
    },
    {
      name: "Arjun Kapoor",
      role: "Commercial Actor",
      content: "The industry connections I made through Bollywood Paathshaala opened doors I never thought possible. Within 3 months of completing the course, I was cast in two major commercial campaigns.",
      rating: 5,
      image: "🎬"
    },
    {
      name: "Neha Patel",
      role: "Theatre Artist",
      content: "What sets this workshop apart is the personalized attention. Shahid sir worked with me one-on-one to overcome my stage fright. Now I perform confidently in front of hundreds of people!",
      rating: 5,
      image: "🌟"
    },
    {
      name: "Raj Malhotra",
      role: "Aspiring Director",
      content: "Even as someone interested in directing, the acting workshop helped me understand performances better. Shahid's insights into character development are gold. Highly recommend to anyone in the arts!",
      rating: 5,
      image: "🎪"
    },
    {
      name: "Anita Desai",
      role: "Model turned Actress",
      content: "Coming from a modeling background, I had no acting experience. The supportive environment and structured curriculum at Bollywood Paathshaala made the transition smooth and enjoyable.",
      rating: 5,
      image: "✨"
    },
    {
      name: "Vikram Singh",
      role: "Film Student",
      content: "The workshop goes beyond just acting - it's about understanding the entire filmmaking process. The practical exercises and scene work prepared me for real industry challenges.",
      rating: 5,
      image: "🏆"
    }
  ];

  const stats = [
    { label: "Success Rate", value: "95%", description: "of students land roles within 6 months" },
    { label: "Industry Connections", value: "50+", description: "casting directors and producers in network" },
    { label: "Student Satisfaction", value: "4.9/5", description: "average rating from workshop participants" },
    { label: "Career Growth", value: "3x", description: "average income increase post-training" }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our talented alumni who have transformed their acting dreams into reality through 
            Bollywood Paathshaala's comprehensive training program.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center bg-card border-border">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.image}</div>
                  <div>
                    <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-primary">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <div className="relative">
                  <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground italic pl-6">{testimonial.content}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-lg text-foreground mb-6 max-w-2xl mx-auto">
            Join hundreds of successful actors who started their journey with Bollywood Paathshaala. 
            Your transformation begins with a single step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/register" 
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
            >
              Start Your Journey
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;