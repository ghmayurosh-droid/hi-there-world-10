import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Star, Users, Calendar, Award, ArrowRight } from "lucide-react";
import logoMain from "@/assets/BP1.png";

const Index = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Instruction",
      description: "Learn from industry veteran Shahid Hasan with 15+ years of Bollywood experience"
    },
    {
      icon: Star,
      title: "Proven Results", 
      description: "95% of our students land acting roles within 6 months of completing the program"
    },
    {
      icon: Calendar,
      title: "Flexible Schedule",
      description: "Weekend and evening batches available to fit your lifestyle and commitments"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Certified program recognized by casting directors and production houses in Dubai"
    }
  ];

  const workshops = [
    {
      title: "Beginner's Workshop",
      duration: "4 weeks",
      price: "AED 1,500",
      description: "Perfect for newcomers to acting"
    },
    {
      title: "Advanced Method Acting", 
      duration: "6 weeks",
      price: "AED 2,200",
      description: "Deep character development techniques"
    },
    {
      title: "Performance Intensive",
      duration: "8 weeks", 
      price: "AED 3,000",
      description: "Comprehensive industry preparation"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <img 
              src={logoMain} 
              alt="Bollywood Paathshaala by Shahid Hasan" 
              className="h-36 w-auto mx-auto mb-8"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6">
            Your Bollywood 
            <br />
            Journey Starts Here
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Transform your passion into profession with Dubai's premier Bollywood acting workshop. 
            Master the art of acting, build industry connections, and unlock opportunities that await your talent.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/register">
                Register Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Why Choose Bollywood Paathshaala?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference that expert guidance and proven methodology can make in your acting journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-background border-border text-center hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Choose Your Workshop</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From beginner-friendly sessions to advanced masterclasses, find the perfect program for your skill level
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{workshop.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-3xl font-bold text-primary">{workshop.price}</div>
                  <div className="text-muted-foreground">{workshop.duration}</div>
                  <p className="text-foreground">{workshop.description}</p>
                  <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link to="/register">Enroll Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">Ready to Begin Your Transformation?</h2>
          <p className="text-xl text-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of successful actors who started their journey with us. Your story of success begins today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/register">Start Your Journey</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/testimonials">See Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
