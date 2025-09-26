import { Card, CardContent } from "@/components/ui/card";
import { Star, Users, Award, Clock } from "lucide-react";
import shahidImg from "@/assets/shahid.png";
import irfanImg from "@/assets/irfan.png";
import aneezImg from "@/assets/aneez.png";
import nawazImg from "@/assets/nawaz.png";
import rmadhavanImg from "@/assets/rmadhavan.png";
import sharmanImg from "@/assets/sharman.png";

const About = () => {
  const stats = [
    { icon: Users, label: "Students Trained", value: "500+" },
    { icon: Award, label: "Years Experience", value: "12+" },
    { icon: Clock, label: "Workshop Hours", value: "1000+" },
  ];

  const features = [
    {
      title: "Professional Acting Techniques",
      description: "Master the fundamentals of method acting, improvisation, and character development used in Bollywood films."
    },
    {
      title: "Industry Connections",
      description: "Connect with casting directors, producers, and fellow actors in the thriving Dubai film scene."
    },
    {
      title: "Personalized Training",
      description: "Small class sizes ensure individual attention and customized feedback for each participant."
    },
    {
      title: "Portfolio Development",
      description: "Create professional headshots and demo reels to showcase your talent to industry professionals."
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            About Bollywood Paathshaala
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the magic of Bollywood acting with Dubai's most comprehensive acting workshop, 
            led by industry veteran Shahid Hasan.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center bg-card border-border">
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* About Shahid Hasan */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:gap-12">
            <div classname="flex-1">
              <h2 className="text-3xl font-bold text-primary mb-6">Meet Mentor- Shahid Hasan</h2>
              <p className="text-foreground mb-4">
                The Visionary Casting Maestro and Creative Powerhouse Shahid Hasan stands as a titan in Bollywood's casting landscape, 
                a celebrated casting director with over 15 years of unparalleled expertise in unearthing and sculpting exceptional talent.
              </p>
              <p className="text-foreground mb-4">
                Renowned for his razor-sharp instinct and creative foresight, 
                Hasan has left an indelible mark on Indian cinema, television, and international projects, transforming raw potential into on-screen brilliance.
              </p>
              <p className="text-foreground">
                Hasan is not just a casting director-he is a storyteller, 
                a talent alchemist, and a driving force in the entertainment world, whose legacy continues to inspire and captivate.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src={shahidImg} 
                alt="Shahid Hasan" 
                className="h-56 w-56 object-cover rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
        

        {/* About Irfan Hossein */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:gap-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Meet Mentor- Irfan Hossein</h2>
              <p className="text-foreground mb-4">
                With over 15 years of experience in the film industry, Shahid Hasan has worked alongside 
                renowned directors and actors in both Bollywood and regional cinema. His passion for nurturing 
                new talent led him to establish Bollywood Paathshaala in Dubai.
              </p>
              <p className="text-foreground mb-4">
                Shahid's unique teaching methodology combines traditional acting techniques with modern 
                industry practices, ensuring students are well-prepared for today's competitive entertainment landscape.
              </p>
              <p className="text-foreground">
                His students have gone on to work in major film productions, television series, and 
                commercial campaigns across the Middle East and India.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src={irfanImg} 
                alt="Irfan Hossein" 
                className="h-56 w-56 object-cover rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
        

        {/* About Anees Bazmee */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:gap-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Meet Guest Lecturer- Anees Bazmee</h2>
              <p className="text-foreground mb-4">
                With over 15 years of experience in the film industry, Shahid Hasan has worked alongside 
                renowned directors and actors in both Bollywood and regional cinema. His passion for nurturing 
                new talent led him to establish Bollywood Paathshaala in Dubai.
              </p>
              <p className="text-foreground mb-4">
                Shahid's unique teaching methodology combines traditional acting techniques with modern 
                industry practices, ensuring students are well-prepared for today's competitive entertainment landscape.
              </p>
              <p className="text-foreground">
                His students have gone on to work in major film productions, television series, and 
                commercial campaigns across the Middle East and India.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src={aneezImg} 
                alt="Anees Bazmee" 
                className="h-56 w-56 object-cover rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
        

        {/* About Nawazuddin Siddiqui  */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:gap-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Meet Guest Lecturer- Nawazuddin Siddiqui</h2>
              <p className="text-foreground mb-4">
                With over 15 years of experience in the film industry, Shahid Hasan has worked alongside 
                renowned directors and actors in both Bollywood and regional cinema. His passion for nurturing 
                new talent led him to establish Bollywood Paathshaala in Dubai.
              </p>
              <p className="text-foreground mb-4">
                Shahid's unique teaching methodology combines traditional acting techniques with modern 
                industry practices, ensuring students are well-prepared for today's competitive entertainment landscape.
              </p>
              <p className="text-foreground">
                His students have gone on to work in major film productions, television series, and 
                commercial campaigns across the Middle East and India.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src={nawazImg} 
                alt="Nawaazuddin Siddiqui" 
                className="h-56 w-56 object-cover rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
        

        {/* About R Madhavan */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:gap-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Meet Guest Lecturer- R Madhavan</h2>
              <p className="text-foreground mb-4">
                With over 15 years of experience in the film industry, Shahid Hasan has worked alongside 
                renowned directors and actors in both Bollywood and regional cinema. His passion for nurturing 
                new talent led him to establish Bollywood Paathshaala in Dubai.
              </p>
              <p className="text-foreground mb-4">
                Shahid's unique teaching methodology combines traditional acting techniques with modern 
                industry practices, ensuring students are well-prepared for today's competitive entertainment landscape.
              </p>
              <p className="text-foreground">
                His students have gone on to work in major film productions, television series, and 
                commercial campaigns across the Middle East and India.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src={rmadhavanImg} 
                alt="R Madhavan" 
                className="h-56 w-56 object-cover rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
        

        {/* About Sharman Joshi */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:gap-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Meet Guest Lecturer- Sharman Joshi</h2>
              <p className="text-foreground mb-4">
                With over 15 years of experience in the film industry, Shahid Hasan has worked alongside 
                renowned directors and actors in both Bollywood and regional cinema. His passion for nurturing 
                new talent led him to establish Bollywood Paathshaala in Dubai.
              </p>
              <p className="text-foreground mb-4">
                Shahid's unique teaching methodology combines traditional acting techniques with modern 
                industry practices, ensuring students are well-prepared for today's competitive entertainment landscape.
              </p>
              <p className="text-foreground">
                His students have gone on to work in major film productions, television series, and 
                commercial campaigns across the Middle East and India.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src={sharmanImg} 
                alt="Sharman Joshi" 
                className="h-56 w-56 object-cover rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
        



        {/* What We Offer */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
                  <p className="text-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
          <p className="text-lg text-foreground max-w-4xl mx-auto">
            To provide aspiring actors in Dubai with world-class training, industry insights, and the 
            confidence to pursue their dreams in Bollywood and beyond. We believe every individual has 
            unique potential waiting to be discovered and nurtured.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
