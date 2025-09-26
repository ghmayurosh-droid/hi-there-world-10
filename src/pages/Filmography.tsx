import { Card, CardContent } from "@/components/ui/card";

const Filmography = () => {
  const movies = [
    {
      name: "Movie Title 1",
      image: "/images/movie1.jpg",
    },
    {
      name: "Movie Title 2",
      image: "/images/movie2.jpg",
    },
    {
      name: "Movie Title 3",
      image: "/images/movie3.jpg",
    },
    // Add more movies here
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            About Filmography
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the magic of Bollywood acting with Dubai's most comprehensive acting workshop, 
            led by industry veteran Shahid Hasan.
          </p>
        </div>

        {/* Movies Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {movies.map((movie, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6 flex flex-col items-center">
                <img
                  src={movie.image}
                  alt={movie.name}
                  className="h-64 w-48 object-cover rounded-lg shadow-md mb-4"
                />
                <h3 className="text-lg font-semibold text-primary">{movie.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filmography;