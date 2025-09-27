import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Star } from "lucide-react";

// Import partner logos or headshots
import partner1Img from "@/assets/coming-soon.jpg";
import partner2Img from "@/assets/coming-soon.jpg";
import partner3Img from "@/assets/coming-soon.jpg";
import partner4Img from "@/assets/coming-soon.jpg";

const InAssociation = () => {
  const stats = [
    { icon: Users, label: "Global Partners", value: "25+" },
    { icon: Award, label: "Awards Won Together", value: "10+" },
    { icon: Star, label: "Years of Collaboration", value: "15+" },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            In Association With
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are proud to collaborate with some of the most renowned production
            houses, studios, and creative professionals who share our vision of
            redefining cinema.
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

        {/* Partner 1 */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Partner Studio One
              </h2>
              <p className="text-foreground mb-4">
                Studio One has been a pioneer in film production, known for
                delivering critically acclaimed projects across Bollywood and
                international cinema. Their collaboration with us has brought
                unforgettable stories to the big screen.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={partner1Img}
                alt="Partner Studio One"
                className="h-56 w-56 object-cover rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Partner 2 */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Partner House Two
              </h2>
              <p className="text-foreground mb-4">
                House Two is a leading distributor, ensuring that our films reach
                audiences worldwide. Their expertise in global distribution has
                expanded our footprint across continents.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={partner2Img}
                alt="Partner House Two"
                className="h-56 w-56 object-cover rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Partner 3 */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Partner Agency Three
              </h2>
              <p className="text-foreground mb-4">
                Agency Three has played a key role in talent discovery and
                management, connecting us with some of the brightest stars of
                today. Their vision aligns with ours in nurturing excellence.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={partner3Img}
                alt="Partner Agency Three"
                className="h-56 w-56 object-cover rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Partner 4 */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Partner Music Label Four
              </h2>
              <p className="text-foreground mb-4">
                Label Four has collaborated with us on music that transcends
                boundaries, creating soulful soundtracks that have defined
                generations of moviegoers.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={partner4Img}
                alt="Partner Music Label Four"
                className="h-56 w-56 object-cover rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Closing Note */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Together Towards Excellence
          </h2>
          <p className="text-lg text-foreground max-w-4xl mx-auto">
            Our partnerships are more than collaborations — they are shared
            journeys of creativity, passion, and innovation that continue to
            shape the future of cinema.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InAssociation;
