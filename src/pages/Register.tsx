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
    portfolio: "",
    terms: false
  });

  // 🔹 Replace this with your Sheet.best endpoint
  const SHEET_API = "https://api.sheetbest.com/sheets/bc2a24d8-35a8-4f2c-a7cf-bbf05d9d1d00";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.terms) {
      toast({
        title: "Please accept terms",
        description: "You must accept the terms and conditions to register.",
        variant: "destructive"
      });
      return;
    }

    try {
      const response = await fetch(SHEET_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Registration Submitted!",
          description: "Your details were saved successfully.",
        });

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          age: "",
          experience: "",
          motivation: "",
          portfolio: "",
          terms: false,
        });
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not submit your registration. Try again later.",
        variant: "destructive",
      });
    }
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
            Take the first step towards your Bollywood dreams. Fill out the form below and we’ll get back to you soon.
          </p>
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

                {/* Portfolio Link */}
                <div>
                  <Label htmlFor="portfolio"> Introduction Video Link (optional) </Label>
                  <Input
                    id="portfolio"
                    name="portfolio"
                    type="url"
                    placeholder="https://yourportfolio.com"
                    value={formData.portfolio}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>

                {/* Experience Level */}
                <div>
                  <Label>Acting Experience</Label>
                  <Select
                    value={formData.experience}
                    onValueChange={(value) =>
                      setFormData(prev => ({ ...prev, experience: value }))
                    }
                  >
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

                {/* Terms and Conditions */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.terms}
                    onCheckedChange={(checked) =>
                      setFormData(prev => ({ ...prev, terms: checked as boolean }))
                    }
                  />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the terms and conditions and understand the workshop policies *
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
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
                    Professional Mentorship
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Award className="h-4 w-4 mr-2 text-primary" />
                    Certificate of completion
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    Personalised Show Reel
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
