import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, Users, Award } from "lucide-react";

const Register = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    experience: "",
    motivation: "",
    workshop: "",
    terms: false
  });

  const workshops = [
    {
      title: "Beginner's Bollywood Acting",
      duration: "4 weeks",
      schedule: "Weekends (Sat-Sun)",
      price: "AED 1,500",
      description: "Perfect for complete beginners. Learn fundamentals of acting, expressions, and basic dance moves."
    },
    {
      title: "Advanced Method Acting",
      duration: "6 weeks", 
      schedule: "Weekday evenings",
      price: "AED 2,200",
      description: "Deep dive into character development, emotional range, and advanced acting techniques."
    },
    {
      title: "Bollywood Performance Intensive",
      duration: "8 weeks",
      schedule: "Mixed schedule",
      price: "AED 3,000",
      description: "Comprehensive program covering acting, dancing, dialogue delivery, and industry preparation."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.terms) {
      toast({
        title: "Please accept terms",
        description: "You must accept the terms and conditions to register.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Registration Submitted!",
      description: "We'll contact you within 24 hours to confirm your spot.",
    });
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "", 
      email: "",
      phone: "",
      age: "",
      experience: "",
      motivation: "",
      workshop: "",
      terms: false
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Register Now
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take the first step towards your Bollywood dreams. Choose your workshop and begin your transformation journey today.
          </p>
        </div>

        {/* Workshop Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {workshops.map((workshop, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{workshop.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">{workshop.duration}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">{workshop.schedule}</span>
                </div>
                <div className="flex items-center text-primary font-semibold">
                  <Award className="h-4 w-4 mr-2" />
                  <span>{workshop.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{workshop.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Registration Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-primary text-center">Workshop Registration</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="age">Age *</Label>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    min="16"
                    max="65"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>

                {/* Workshop Selection */}
                <div>
                  <Label>Select Workshop *</Label>
                  <Select value={formData.workshop} onValueChange={(value) => setFormData(prev => ({ ...prev, workshop: value }))}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Choose your workshop" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner's Bollywood Acting (AED 1,500)</SelectItem>
                      <SelectItem value="advanced">Advanced Method Acting (AED 2,200)</SelectItem>
                      <SelectItem value="intensive">Bollywood Performance Intensive (AED 3,000)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Experience Level */}
                <div>
                  <Label>Acting Experience</Label>
                  <Select value={formData.experience} onValueChange={(value) => setFormData(prev => ({ ...prev, experience: value }))}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">Complete Beginner</SelectItem>
                      <SelectItem value="some">Some Experience (School/College)</SelectItem>
                      <SelectItem value="intermediate">Intermediate (Theatre/Amateur)</SelectItem>
                      <SelectItem value="advanced">Advanced (Professional Experience)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Motivation */}
                <div>
                  <Label htmlFor="motivation">Why do you want to join? *</Label>
                  <Textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="mt-1"
                    placeholder="Tell us about your acting goals and what you hope to achieve..."
                  />
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.terms}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, terms: checked as boolean }))}
                  />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the terms and conditions and understand the workshop policies *
                  </Label>
                </div>

                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Register for Workshop
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <Card className="mt-8 bg-card border-border">
            <CardHeader>
              <CardTitle className="text-xl text-primary">What's Included</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center text-muted-foreground">
                    <Users className="h-4 w-4 mr-2 text-primary" />
                    Small class sizes (max 12 students)
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Award className="h-4 w-4 mr-2 text-primary" />
                    Certificate of completion
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    Flexible scheduling options
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    Individual feedback sessions
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Register;