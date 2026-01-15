/* FILE: itinerary.js
   Edit this file to update your trip details.
   Format: YYYY-MM-DDTHH:MM:SS
*/

const itinerary = [
    // --- DEPARTURE ---
    {
        isoDate: "2026-07-13T10:00:00", 
        displayDate: "July 13",
        title: "Fly to Kuala Lumpur",
        location: "Departure Airport",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=150&h=150&fit=crop", 
        details: "Departure day! Check passports and bags."
    },
    
    // --- KUALA LUMPUR (14-16 July) ---
    {
        isoDate: "2026-07-14T14:00:00", 
        displayDate: "July 14",
        title: "Arrive in Malaysia",
        location: "Kuala Lumpur (KUL)",
        image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=150&h=150&fit=crop", 
        details: "Start of the 3 night stay in KL. Head to hotel to check in."
    },
    {
        onlyDayView: true,
        isoDate: "2026-07-14T16:00:00",
        displayDate: "July 14",
        title: "Check-in Hotel KL",
        location: "Hotel Name TBC",
        details: "Need to confirm booking reference."
    },

    // --- SINGAPORE (17-19 July) ---
    {
        isoDate: "2026-07-17T11:00:00", 
        displayDate: "July 17",
        title: "Fly to Singapore",
        location: "Changi Airport",
        image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=150&h=150&fit=crop", 
        details: "Short flight to Singapore. Stay for 2 nights."
    },
    {
        onlyDayView: true,
        isoDate: "2026-07-17T14:00:00",
        displayDate: "July 17",
        title: "Check-in Singapore",
        location: "Hotel Name TBC",
        details: "2 Nights stay."
    },

    // --- PHUKET (19-23 July) ---
    {
        isoDate: "2026-07-19T10:00:00", 
        displayDate: "July 19",
        title: "Fly to Phuket",
        location: "Phuket International",
        image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=150&h=150&fit=crop", 
        details: "Heading to the beach! 5 Night stay."
    },
    {
        onlyDayView: true,
        isoDate: "2026-07-19T15:00:00",
        displayDate: "July 19",
        title: "Check-in Resort",
        location: "Resort Name TBC",
        details: "Relax and unwind."
    },

    // --- BANGKOK (24-26 July) ---
    {
        isoDate: "2026-07-24T12:00:00", 
        displayDate: "July 24",
        title: "Fly to Bangkok",
        location: "Suvarnabhumi Airport",
        image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=150&h=150&fit=crop", 
        details: "City break for the final leg."
    },
     {
        onlyDayView: true,
        isoDate: "2026-07-24T15:00:00",
        displayDate: "July 24",
        title: "Check-in Bangkok",
        location: "Hotel Name TBC",
        details: "2 Nights stay."
    },

    // --- HOME ---
    {
        isoDate: "2026-07-26T18:00:00", 
        displayDate: "July 26",
        title: "Fly Home",
        location: "Airport",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=150&h=150&fit=crop", 
        details: "End of the trip. Safe travels!"
    }
];
