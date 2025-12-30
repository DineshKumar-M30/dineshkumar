
export const destinations = [
    {
        id: 1,
        name: "Bali, Indonesia",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1000",
        rating: 4.8,
        price: 1200,
        description: "Experience the magic of the Island of the Gods."
    },
    {
        id: 2,
        name: "Santorini, Greece",
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=1000",
        rating: 4.9,
        price: 1500,
        description: "Stunning sunsets and white-washed architecture."
    },
    {
        id: 3,
        name: "Kyoto, Japan",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1000",
        rating: 4.7,
        price: 1800,
        description: "Ancient temples and beautiful cherry blossoms."
    },
    {
        id: 4,
        name: "Machu Picchu, Peru",
        image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=1000",
        rating: 4.9,
        price: 2000,
        description: "Discover the lost city of the Incas."
    }
];

export const trips = [
    {
        id: 101,
        type: "Flight",
        from: "New York",
        to: "Bali",
        duration: "18h 30m",
        price: 850,
        airline: "Garuda Indonesia",
        departure: "10:00 AM",
        arrival: "8:30 PM (+1)"
    },
    {
        id: 102,
        type: "Flight",
        from: "New York",
        to: "Bali",
        duration: "21h 15m",
        price: 720,
        airline: "Qatar Airways",
        departure: "2:00 PM",
        arrival: "5:15 AM (+2)"
    },
    {
        id: 103,
        type: "Hotel",
        name: "Ayana Resort",
        location: "Jimbaran, Bali",
        rating: 5,
        price: 350,
        perNight: true,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 104,
        type: "Flight",
        from: "London",
        to: "Paris",
        duration: "1h 15m",
        price: 150,
        airline: "British Airways",
        departure: "08:00 AM",
        arrival: "10:15 AM"
    },
    {
        id: 105,
        type: "Hotel",
        name: "Santorini Palace",
        location: "Fira, Santorini",
        rating: 4.8,
        price: 450,
        perNight: true,
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=500"
    },
    {
        id: 106,
        type: "Flight",
        from: "Tokyo",
        to: "Kyoto",
        duration: "2h 10m",
        price: 220,
        airline: "ANA",
        departure: "11:00 AM",
        arrival: "1:10 PM"
    },
    {
        id: 107,
        type: "Flight",
        from: "Dubai",
        to: "London",
        duration: "7h 45m",
        price: 550,
        airline: "Emirates",
        departure: "08:15 AM",
        arrival: "12:00 PM"
    },
    {
        id: 108,
        type: "Flight",
        from: "Singapore",
        to: "Sydney",
        duration: "8h 20m",
        price: 600,
        airline: "Singapore Airlines",
        departure: "10:30 PM",
        arrival: "09:50 AM (+1)"
    },
    {
        id: 109,
        type: "Flight",
        from: "New York",
        to: "London",
        duration: "7h 05m",
        price: 480,
        airline: "Virgin Atlantic",
        departure: "06:00 PM",
        arrival: "06:05 AM (+1)"
    }
];

export const packages = [
    {
        id: 201,
        title: "Maldives Honeymoon Special",
        image: "https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?auto=format&fit=crop&q=80&w=1000",
        duration: "5 Days / 4 Nights",
        price: 2500,
        rating: 4.9,
        reviews: 128,
        features: ["Overwater Villa", "All Meals", "Spa Treatment"]
    },
    {
        id: 202,
        title: "Swiss Alps Adventure",
        image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1000",
        duration: "7 Days / 6 Nights",
        price: 3200,
        rating: 4.8,
        reviews: 85,
        features: ["Ski Pass", "Luxury Chalet", "Guided Tours"]
    },
    {
        id: 203,
        title: "Dubai Desert Safari",
        image: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&q=80&w=1000",
        duration: "4 Days / 3 Nights",
        price: 1800,
        rating: 4.7,
        reviews: 210,
        features: ["Desert Camp", "Burj Khalifa", "City Tour"]
    }
];

export const cruises = [
    {
        id: 301,
        name: "Mediterranean Marvel",
        line: "Royal Caribbean",
        image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?auto=format&fit=crop&q=80&w=1000",
        duration: "7 Nights",
        route: "Barcelona - Rome - Naples",
        price: 1200,
        rating: 4.8
    },
    {
        id: 302,
        name: "Caribbean Dream",
        line: "Carnival Cruise",
        image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&q=80&w=1000",
        duration: "5 Nights",
        route: "Miami - Bahamas - Havana",
        price: 950,
        rating: 4.6
    },
    {
        id: 303,
        name: "Alaskan Glaciers",
        line: "Princess Cruises",
        image: "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?auto=format&fit=crop&q=80&w=1000",
        duration: "10 Nights",
        route: "Seattle - Juneau - Skagway",
        price: 2100,
        rating: 4.9
    }
];

export const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Adventure Enthusiast",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
        rating: 5,
        text: "The best travel experience of my life! The booking process was so smooth, and the 'Sudden Deals' saved me a ton on my Bali trip."
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Business Traveler",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
        rating: 4.8,
        text: "I travel for work often, and the 'Business Class' selection makes it easy to find comfortable flights. Highly recommended!"
    },
    {
        id: 3,
        name: "Emily Davis",
        role: "Solo Traveler",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
        rating: 5,
        text: "Wanderlust helped me find the safest and most beautiful solo destinations. The 24/7 support gave me peace of mind."
    }
];
