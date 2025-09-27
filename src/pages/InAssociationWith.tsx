import { Card, CardContent } from "@/components/ui/card";

// Example partner logos/images
import partner1Img from "@/assets/partner1.jpg";
import partner2Img from "@/assets/partner2.jpg";
import partner3Img from "@/assets/partner3.jpg";
import partner4Img from "@/assets/partner4.jpg";
import partner5Img from "@/assets/partner5.jpg";

const InAssociation = () => {
  const partners = [
    {
      name: "Partner One",
      description: "Leading film production house known for blockbuster hits.",
      role: "Production Partner",
      image: partner1Img,
    },
    {
      name: "Partner Two",
      description: "International distributor bringing Bollywood to global screens.",
      role: "Distribution Partner",
      image: partner2Img,
    },
    {
      name: "Partner Three",
      description: "Casting agency specializing in discovering fresh talent.",
      role: "Casting Partner",
      image: partner3Img,
    },
    {
      name: "Partner Four",
      description: "Renowned music label collaborating on soundtracks.",
      role: "Music Partner",
      image: partner4Img,
    },
    {
      name: "Partner Five",
      description: "Digital streaming platform showcasing top Bollywood films.",
      role: "Streaming Partner",
      image: partner5Img,
    },
    // Add more partners here…
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
            Collaborating with top industry partners to bring impactful stories to life.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {partners.map((partner, idx) => (
            <Card key={idx} className="bg-card border-border">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-32 h-32 object-cover rounded-full shadow-md mb-4"
                />
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {partner.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">{partner.role}</p>
                <p className="text-foreground text-sm">{partner.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InAssociation;
