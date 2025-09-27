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
                Irfan, a notable performance designer for many successful films and television shows, and Programme Director with Actorism®️, 
                has character-trained countless actors over the years, many of whom have won awards from their performances.  
              </p>
              <p className="text-foreground mb-4">
                Some of his actors have trained with highly reputable acting schools in India and abroad, others are absolute beginners, 
                but it is Irfan’s in-depth coaching which has made the difference from a good into a great, award-winning performance, whatever the level or background of his students. 
                Great acting should not seem like acting at all.  
              </p>
              <p className="text-foreground">
                It needs to be perfected to make it look natural and believable “the toughest thing in acting is to act normal”.  
                Some talent may be enough to get the average actor through the door, but to make a successful, sustainable career from acting requires specialised coaching, commitment and passion.  
                This is where Actorism®️ and Irfan Hossein steps in.
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
                 A career traversing over three and a half decades and counting, he has mastered the art of filmmaking and has captured millions
                 of hearts through his storytelling, all over the world.
              </p>
              <p className="text-foreground mb-4">
                He has made people cry, fall in love and fall off their seats laughing. Truly a master, he has carved a niche for himself in the world
                of blockbuster and entertainment of Indian cinema.
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
                Siddiqui is best known for his roles in The Lunchbox (2013), which premiered as part of the International Critics' Week at the 2013 Cannes Film Festival 
                and won him multiple awards, Manto (2018), for which his groundbreaking performance won him Best Actor at the 2018 Asian Pacific Screen Awards[8] and Raman Raghav 2.0 
                for which he won the Fancine Malaga Award in Spain[9] and in Asia Pacific Screen Awards[10] both in the category of Best Actor. 
                Nawazuddin Siddiqui is the only Actor in the world having 8 films officially selected and screened at the prestigious Cannes Film Festival.
              </p>
              <p className="text-foreground mb-4">
                Nawazuddin Siddiqui is the only Actor in the world having 8 films officially selected and screened at the prestigious Cannes Film Festival.
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
                Madhavan is an Indian actor, screenwriter, film producer and film director who predominantly works in Tamil and Hindi cinema. 
                He has won one National Film Award, five Filmfare Awards South, two Tamil Nadu State Film Awards and five SIIMA Awards. As of 2023, Madhavan is the President of FTII, Pune
              </p>
              <p className="text-foreground mb-4">
                In addition to his acting career, Madhavan has worked as a writer on his films, hosted television programs and has been a 
                prominent celebrity endorser for brands and products.[20] 
              </p>
              <p className="text-foreground">
                He has also worked as a film producer, first making Evano Oruvan with Leukos Films, before setting up Tricolour Films to produce Saala Khadoos (2016).
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
                Sharman Joshi, born in Mumbai, India, is a talented Indian actor known for his versatile performances in Bollywood films. 
                Hailing from a family with a strong connection to the Indian entertainment industry, Sharman embarked on his acting journey and established himself as a reliable and skilled actor.
              </p>
              <p className="text-foreground mb-4">
                Sharman Joshi comes from a family with a theatrical background,Sharman initially ventured into theater, 
                where he honed his acting skills before making his mark in the film industry. In addition to his successful film career, 
                Sharman Joshi has been associated with various theater productions. He has also ventured into digital platforms with web series like "Baarish" (2019).
              </p>
              <p className="text-foreground">
                Known for his down-to-earth demeanor and dedication to his craft, Sharman Joshi continues to be a respected figure in the Indian entertainment industry.
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
