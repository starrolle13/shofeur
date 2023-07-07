import React from "react";


const LocationPage = () => {
    return (
      <div className="bg-gray-100">
        <section className="bg-blue-700 text-white py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">Welcome to Shofeur in New York City</h1>
            <p className="text-lg mb-8">
              Discover the best of New York City with Shofeur. Explore iconic landmarks, indulge in local cuisine, and experience the vibrant nightlife. Book your Shofeur experience today and make lasting memories in the city that never sleeps.
            </p>
            <img
              src="https://i.ibb.co/8P9Jnmk/pexels-david-iglesias-13356893.jpg"
              alt="New York City Skyline - Shofeur in New York City"
              className="w-3/4 md:w-2/4 mx-auto mb-8"
            />
          </div>
        </section>
  
        <section className="bg-white py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Discover New York City</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2">Explore the City</h3>
                <p>
                  Uncover the rich history and cultural diversity of New York City. From Times Square to Central Park, there's no shortage of iconic attractions to explore. Immerse yourself in the hustle and bustle of the city streets and discover hidden gems at every corner.
                </p>
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2">Enjoy Local Cuisine</h3>
                <p>
                  Indulge your taste buds with the diverse culinary scene in New York City. From world-class restaurants to street food vendors, the city offers a gastronomic adventure like no other. Savor classic New York-style pizza, indulge in ethnic delicacies, and discover innovative fusion cuisine that will leave you craving for more.
                </p>
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2">Visit Iconic Landmarks</h3>
                <p>
                  Embark on a journey to the most iconic landmarks of New York City. Marvel at the architectural grandeur of the Empire State Building, take a stroll across the historic Brooklyn Bridge, and experience the vibrant energy of Times Square. Each landmark tells a story and offers a unique perspective of the city's rich history and cultural significance.
                </p>
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2">Experience the Nightlife</h3>
                <p>
                  When the sun sets, New York City comes alive with its pulsating nightlife. Dance the night away at trendy clubs, enjoy live music performances at iconic venues, and experience the electrifying atmosphere of Broadway shows. The city offers a diverse range of entertainment options that cater to every taste and preference.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        <section className="bg-gray-200 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Book Your Shofeur Experience Today</h2>
  
            <p className="text-lg mb-8">
              Immerse yourself in the vibrant spirit of New York City with Shofeur. Our experienced chauffeurs provide reliable and comfortable transportation services, ensuring you have a seamless and memorable experience exploring the city. Book your Shofeur experience today and unlock the best of New York City.
            </p>
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded">
              Book Now
            </button>
          </div>
        </section>
  
        <footer className="bg-gray-900 text-white py-4">
          <div className="container mx-auto text-center">
            <p>&copy; 2023 Shofeur. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  };
  
export default LocationPage;
