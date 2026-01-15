/* FILE: itinerary.js
   Trip: Abbasi Asia Trip 2026
   Updated with Flight Ticket (QR) and Airbnb details.
*/

const itinerary = [
    // --- DEPARTURE (London -> Doha) ---
    {
        isoDate: "2026-07-13T16:00:00", 
        displayDate: "July 13 - 4:00 PM",
        title: "Fly to Doha (Stopover)",
        location: "Heathrow Terminal 4",
        image: "https://images.unsplash.com/photo-1542296332-2e44a996aa0d?w=150&h=150&fit=crop", 
        details: "Flight QR8. Seat: Business Class. Baggage: 40kg. Arrives in Doha at 00:45."
    },

    // --- TRANSIT & ARRIVAL (Doha -> KL) ---
    {
        // This is a transit flight, so maybe just show it in Day View or as a quick step
        isoDate: "2026-07-14T01:50:00",
        displayDate: "July 14 - 1:50 AM",
        title: "Fly to Kuala Lumpur",
        location: "Doha (DOH)",
        details: "Flight QR4991 (Operated by Malaysia Airlines). Duration: 7h 55m."
    },
    {
        isoDate: "2026-07-14T14:45:00", 
        displayDate: "July 14 - 2:45 PM",
        title: "Arrive in Malaysia",
        location: "Kuala Lumpur Intl (T1)",
        image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=150&h=150&fit=crop", 
        details: "Welcome to KL! Clear immigration and head to the hotel."
    },
    {
        onlyDayView: true,
        isoDate: "2026-07-14T16:30:00",
        displayDate: "July 14 - 4:30 PM",
        title: "Check-in KL",
        location: "Kuala Lumpur Accommodation",
        // LINK 1 or 2 goes here?
        details: "Check which Airbnb link belongs here: https://www.airbnb.co.uk/l/mPLrB8ht" 
    },

    // --- SINGAPORE (17-19 July) ---
    {
        isoDate: "2026-07-17T11:00:00", 
        displayDate: "July 17 - 11:00 AM",
        title: "Fly to Singapore",
        location: "Kuala Lumpur Airport",
        image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=150&h=150&fit=crop", 
        details: "Flight details TBC. Short flight to Singapore."
    },
    {
        onlyDayView: true,
        isoDate: "2026-07-17T14:00:00",
        displayDate: "July 17 - 2:00 PM",
        title: "Check-in Singapore",
        location: "Singapore Accommodation",
        // LINK 1 or 2 goes here?
        details: "Check which Airbnb link belongs here: https://www.airbnb.com/l/72XE4ETd"
    },

    // --- PHUKET (19-23 July) ---
    {
        isoDate: "2026-07-19T10:00:00", 
        displayDate: "July 19 - 10:00 AM",
        title: "Fly to Phuket",
        location: "Changi Airport",
        image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=150&h=150&fit=crop", 
        details: "Heading to the beach! 5 Night stay."
    },
    {
        isoDate: "2026-07-19T15:00:00",
        displayDate: "July 19 - 3:00 PM",
        title: "Check-in Villa",
        location: "Kamala, Phuket",
        // IDENTIFIED LINK
        details: "Oceanfront 6-Bedroom Villa. <br><a href='https://www.airbnb.co.uk/rooms/35870176' target='_blank'>View Airbnb Listing</a>"
    },

    // --- BANGKOK (24-26 July) ---
    {
        isoDate: "2026-07-24T12:00:00", 
        displayDate: "July 24 - 12:00 PM",
        title: "Fly to Bangkok",
        location: "Phuket Airport",
        image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=150&h=150&fit=crop", 
        details: "City break for the final leg."
    },
     {
        onlyDayView: true,
        isoDate: "2026-07-24T15:00:00",
        displayDate: "July 24 - 3:00 PM",
        title: "Check-in Bangkok",
        location: "Bangkok Accommodation",
        details: "2 Nights stay. (Add link here if you have one)"
    },

    // --- RETURN FLIGHTS (Bangkok -> Doha -> London) ---
    {
        isoDate: "2026-07-27T03:00:00", 
        displayDate: "July 27 - 3:00 AM",
        title: "Fly Home (Part 1)",
        location: "Bangkok Suvarnabhumi",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=150&h=150&fit=crop", 
        details: "Flight QR827. Early morning departure! Arrives Doha 05:35."
    },
    {
        isoDate: "2026-07-27T08:20:00", 
        displayDate: "July 27 - 8:20 AM",
        title: "Fly Home (Part 2)",
        location: "Doha (DOH)",
        details: "Flight QR327. Destination: **London Gatwick (North Terminal)**."
    },
    {
        isoDate: "2026-07-27T13:25:00",
        displayDate: "July 27 - 1:25 PM",
        title: "Landed in London",
        location: "Gatwick Airport",
        details: "Trip over! Welcome home."
    }
];
