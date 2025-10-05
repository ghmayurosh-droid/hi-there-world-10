import { Card, CardContent } from "@/components/ui/card";

// ----------------- Upcoming Films Posters -----------------
import aankhen2Img from "@/assets/aankhen2.png";
import veerkiheerImg from "@/assets/veerkiheer.png";
import puntersImg from "@/assets/punters.png";
import masti4Img from "@/assets/Masti 4.png";
import kashmirImg from "@/assets/kashmir.png";
import inspectoravinashImg from "@/assets/inspectoravinash.png";
import ghutannImg from "@/assets/ghutann.png";
import eksaathdodoImg from "@/assets/eksaathdodo.png";
import dhamaal4Img from "@/assets/dhamaal4.png";
import victorbetaalImg from "@/assets/victorbetaal.png";

// ----------------- Previous Films Posters -----------------
import mannuKyaKareggaImg from "@/assets/mannu-kya-karegga.jpg";
import riwajImg from "@/assets/riwaj.jpg";
import inspectorAvinashImg from "@/assets/inspector-avinash.jpg";
import thankGodImg from "@/assets/thank-god.jpg";
import mereDeshImg from "@/assets/mere-desh-ki-dharti.jpg";
import pagalpantiImg from "@/assets/pagalpanti.jpg";
import totalDhamaalImg from "@/assets/total-dhamaal.jpg";
import bulbulImg from "@/assets/bulbul.jpg";
import kabaliImg from "@/assets/kabali.jpg";
import greatGrandMastiImg from "@/assets/great-grand-masti.jpg";
import silentHeroesImg from "@/assets/silent-heroes.jpg";
import welcomeBackImg from "@/assets/welcome-back.jpg";
import allIsWellImg from "@/assets/all-is-well.jpg";
import royImg from "@/assets/roy.jpg";
import unforgettableImg from "@/assets/unforgettable.jpg";
import geniusBeautyImg from "@/assets/genius-of-beauty.jpg";
import grandMastiImg from "@/assets/grand-masti.jpg";
import jokerImg from "@/assets/joker.jpg";
import doubleDhamaalImg from "@/assets/double-dhamaal.jpg";
import readyImg from "@/assets/ready.jpg";
import thankYouImg from "@/assets/thank-you.jpg";
import noProblemImg from "@/assets/no-problem.jpg";
import kheleinHumImg from "@/assets/khelein-hum-jee-jaan-sey.jpg";
import actionReplayyImg from "@/assets/action-replayy.jpg";
import godfatherImg from "@/assets/godfather.jpg";


const Filmography = () => {
  // ----------------- Upcoming Films -----------------
  const upcomingFilms = [
    { title: "Coming Soon", year: 2025, role: "Casting Director", image: masti4Img },
    { title: "Coming Soon", year: 2025, role: "Casting Director", image: veerkiheerImg },
    { title: "Coming Soon", year: 2026, role: "Casting Director", image: dhamaal4Img },
    { title: "Coming Soon", year: null, role: "Casting Director", image: aankhen2Img },
    { title: "Coming Soon", year: null, role: "Casting Director", image: inspectoravinashImg },
    { title: "Coming Soon", year: null, role: "Casting Director", image: kashmirImg },
    { title: "Coming Soon", year: null, role: "Casting Director", image: eksaathdodoImg },
    { title: "Coming Soon", year: null, role: "Casting Director", image: victorbetaalImg },
    { title: "Coming Soon", year: null, role: "Casting Director", image: ghutannImg },
    { title: "Coming Soon", year: null, role: "Casting Director", image: puntersImg },
  ];

  // ----------------- Previous Films -----------------
  const previousFilms = [
    { title: "Mannu Kya Karegga", year: 2025, role: "Casting Director", image: mannuKyaKareggaImg },
    { title: "Riwaj", year: 2025, role: "Casting Director", image: riwajImg },
    { title: "Inspector Avinash (TV Series)", year: 2023, role: "Casting Director", image: inspectorAvinashImg },
    { title: "Thank God", year: 2022, role: "Casting Director", image: thankGodImg },
    { title: "GodFather", year: 2022, role: "Casting Director", image: godfatherImg },
    { title: "Mere Desh Ki Dharti", year: 2022, role: "Casting Director", image: mereDeshImg },
    { title: "Pagalpanti", year: 2019, role: "Casting Director", image: pagalpantiImg },
    { title: "Total Dhamaal", year: 2019, role: "Casting Director", image: totalDhamaalImg },
    { title: "Bulbul (Short)", year: 2017, role: "Casting Director", image: bulbulImg },
    { title: "Kabali", year: 2016, role: "Casting Director", image: kabaliImg },
    { title: "Great Grand Masti", year: 2016, role: "Casting Director", image: greatGrandMastiImg },
    { title: "The Silent Heroes", year: 2015, role: "Casting Director", image: silentHeroesImg },
    { title: "Welcome Back", year: 2015, role: "Casting Director", image: welcomeBackImg },
    { title: "All Is Well", year: 2015, role: "Casting Director", image: allIsWellImg },
    { title: "Roy", year: 2015, role: "Casting Director", image: royImg },
    { title: "Unforgettable", year: 2014, role: "Casting Director", image: unforgettableImg },
    { title: "The Genius of Beauty", year: 2014, role: "Casting Director", image: geniusBeautyImg },
    { title: "Grand Masti", year: 2013, role: "Casting Director", image: grandMastiImg },
    { title: "Joker", year: 2012, role: "Casting Director", image: jokerImg },
    { title: "Double Dhamaal", year: 2011, role: "Casting Director", image: doubleDhamaalImg },
    { title: "Ready", year: 2011, role: "Casting Director", image: readyImg },
    { title: "Thank You", year: 2011, role: "Casting Director", image: thankYouImg },
    { title: "No Problem", year: 2010, role: "Casting Director", image: noProblemImg },
    { title: "Khelein Hum Jee Jaan Sey", year: 2010, role: "Casting Director", image: kheleinHumImg },
    { title: "Action Replayy", year: 2010, role: "Casting Director", image: actionReplayyImg },
  ];

  // ----------------- Film Grid Renderer -----------------
  const renderFilmGrid = (films) => (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
      {films.map((film, idx) => (
        <Card key={idx} className="bg-card border-border">
          <CardContent className="p-4 flex flex-col items-center">
            <img
              src={film.image}
              alt={film.title}
              className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
            />
            <h3 className="text-lg font-semibold text-primary text-center">
              {film.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {film.year ? film.year : "TBA"} • {film.role}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Filmography
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the upcoming and past works of Shahid Hasan as a Casting Director.
          </p>
        </div>

        {/* Upcoming Films */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">Upcoming Films</h2>
          {renderFilmGrid(upcomingFilms)}
        </div>

        {/* Previous Films */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">Previous Films</h2>
          {renderFilmGrid(previousFilms)}
        </div>
      </div>
    </div>
  );
};

export default Filmography;
