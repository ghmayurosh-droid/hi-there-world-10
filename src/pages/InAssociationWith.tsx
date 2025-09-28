import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Star } from "lucide-react";

// Import partner logos or headshots
import cubicleeyeImg from "@/assets/cubicleeye.jpg";
import satishImg from "@/assets/satish.jpg";
import meeitkohliImg from "@/assets/meeitkohli.jpg";
import partner4Img from "@/assets/coming-soon.jpg";

const InAssociation = () => {

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

        {/* Partner 1 */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Cubicle Eye Entertainment
              </h2>
              <p className="text-foreground mb-4">
                Cubicle Eye Entertainment is a production house devoted to bringing powerful stories to life. 
                With a vision rooted in creativity and authenticity, we aim to present narratives that are not 
                only entertaining but also thought-provoking and emotionally resonant.
                Every project we take on is a new journey—an exploration of fresh perspectives, 
                untold experiences, and the limitless possibilities of cinema. Our mission is to craft
                films that reflect diverse voices, unique visions, and stories that connect deeply with audiences.
                At Cubicle Eye Entertainment, storytelling is more than just production—it’s about sparking 
                imagination, inspiring change, and celebrating the magic of human expression on screen.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={cubicleeyeImg}
                alt="Cubicle Eye Entertainment"
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
                Satish Angolkar
              </h2>
              <p className="text-foreground mb-4">
                At the heart of Cubicle Eye Entertainment is its founder, a passionate storyteller 
                who lives and breathes the art of acting. With a deep commitment to cinema, he combines
                his expertise as a producer with his lifelong fascination for performance and the craft of actors.
                Guided by an enduring love for films, he envisions Cubicle Eye Entertainment as a canvas 
                where stories are told with authenticity, emotion, and artistic integrity.
                His journey is shaped by a keen eye for talent and a profound appreciation 
                of the nuances that make acting a timeless art. For him, every project is more 
                than just production—it is an exploration of human emotion, creativity, and expression. 
                Through Cubicle Eye Entertainment, he aspires to create meaningful films that inspire audiences 
                and celebrate the transformative power of storytelling.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={satishImg}
                alt="Satish Angolkar"
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
                Meeit Kohli
              </h2>
              <p className="text-foreground mb-4">
                Agency Three has played a key role in talent discovery and
                management, connecting us with some of the brightest stars of
                today. Their vision aligns with ours in nurturing excellence.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={meeitkohliImg}
                alt="Meeit Kohli"
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
