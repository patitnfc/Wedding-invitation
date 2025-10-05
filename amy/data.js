// data.js
const data = {
  couple: {
    bride: "Aisha",
    groom: "Rohan",
    displayName: "Aisha & Rohan"
  },
  brand: {
    primaryColor: "#FDEEEF", // background accents
    accentColor: "#EEC9C1",
    textColor: "#1F2937",
    theme: "pastel" // unused, optional
  },
  // Main wedding (used for countdown)
  mainEvent: {
    title: "Wedding Ceremony",
    date: "2026-01-15T16:00:00+05:30", // ISO string (local)
    venue: "Royal Garden Banquet, Mumbai",
    mapsLink: "https://maps.google.com/?q=Royal+Garden+Banquet+Mumbai"
  },
  // Multiple events - you can add/remove
  events: [
    {
      id: "mehndi",
      title: "Mehndi",
      date: "2026-01-13T18:00:00+05:30",
      venue: "Kriti Lawns, Juhu",
      mapsLink: "https://maps.google.com/?q=Kriti+Lawns+Juhu",
      accent: "#FEF3C7"
    },
    {
      id: "haldi",
      title: "Haldi",
      date: "2026-01-14T10:00:00+05:30",
      venue: "Family Residence, Bandra",
      mapsLink: "https://maps.google.com/?q=Bandra+Family+Residence",
      accent: "#E6F9E8"
    },
    {
      id: "wedding",
      title: "Wedding",
      date: "2026-01-15T16:00:00+05:30",
      venue: "Royal Garden Banquet, Mumbai",
      mapsLink: "https://maps.google.com/?q=Royal+Garden+Banquet+Mumbai",
      accent: "#F3E8FF"
    },
    {
      id: "reception",
      title: "Reception",
      date: "2026-01-16T19:30:00+05:30",
      venue: "Grand Hyatt Ballroom",
      mapsLink: "https://maps.google.com/?q=Grand+Hyatt+Mumbai",
      accent: "#FFF5F2"
    }
  ],
  gallery: [
    "/assets/gallery/1.jpg",
    "/assets/gallery/2.jpg",
    "/assets/gallery/3.jpg",
    "/assets/gallery/4.jpg"
  ],
  music: {
    file: "/assets/music/background.mp3",
    defaultOn: false
  },
  rsvp: {
    show: true,
    text: "Please RSVP by January 1, 2026. We look forward to celebrating with you!"
  },
  // example metadata for deployment / rebranding
  meta: {
    title: "Aisha & Rohan — You're Invited",
    description: "Join Aisha and Rohan as they begin their new journey together."
  }
};

export default data;
