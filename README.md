# ✈️ Travel Timeline UI

> **Data Source:** Dynamically fetched via JSON hosted on `jsonbin.io`.

---

### 📖 About This Project

This repository contains the front-end code for a dynamic **Travel Timeline User Interface**. 

Instead of hardcoding itinerary details directly into the UI components, this application fetches live JSON data from an external endpoint and maps it into a clean, responsive timeline. I built this to track an upcoming multi-city trip across Southeast Asia. 

This project demonstrates my ability to handle asynchronous data fetching, parse ISO date strings, and conditionally render UI elements (like images and external booking links) based on the presence of keys in an API payload.

### 🗺️ The Route (Current Data Payload)

The timeline currently visualizes a 14-day itinerary spanning multiple countries across July 2026:
* 🇬🇧 **Departure:** London Heathrow (LHR) -> Doha (DOH)
* 🇲🇾 **Stop 1:** Kuala Lumpur, Malaysia 
* 🇸🇬 **Stop 2:** Singapore 
* 🇹🇭 **Stop 3:** Phuket, Thailand (Oceanfront Villa in Kamala)
* 🇹🇭 **Stop 4:** Bangkok, Thailand 
* 🇬🇧 **Return:** Bangkok (BKK) -> Doha (DOH) -> London Gatwick (LGW)

---

### 🛠️ Tech Stack

*Update the technologies below based on what you specifically used to build this UI!*

* **Frontend Framework:** React / Next.js
* **Data Storage/API:** JSON API via `jsonbin.io`
* **Styling:** Tailwind CSS / Custom CSS
* **Data Handling:** Asynchronous `fetch` API and JavaScript Date parsing (converting ISO 8601 strings to local time).

---

### ⚙️ The Data Model

The timeline UI is designed to be highly flexible. It relies on a structured JSON payload and conditionally renders elements. Here is a sample of the data model the front-end expects:

```json
{
  "isoDate": "2026-07-19T15:00:00",
  "displayDate": "July 19 - 3:00 PM",
  "title": "Check-in Villa",
  "location": "Kamala, Phuket",
  "details": "Oceanfront 6-Bedroom Villa. <br><a href='...' target='_blank'>View Airbnb Listing</a>"
}

```

*If a node contains an `"image"` key or an `"onlyDayView"` boolean, the UI automatically adjusts its layout to accommodate the data.*

---

### 💻 Local Development

To run this timeline UI locally and test the API fetching:

1. **Clone the repository:**
```bash
git clone [https://github.com/shamooo123/timeline.git](https://github.com/shamooo123/timeline.git)

```


2. **Navigate into the directory:**
```bash
cd timeline

```


3. **Install dependencies:**
```bash
npm install

```


4. **Start the development server:**
```bash
npm run dev

```
