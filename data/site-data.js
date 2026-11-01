/* =====================================================================
   AIAA UW–Madison — SITE CONTENT
   ---------------------------------------------------------------------
   This is the ONLY file most officers ever need to edit.
   Edit the text between quotes, save, commit, and the site updates.
   Tips:
     - Dates are "YYYY-MM-DD". Events sort themselves into
       "Upcoming" and "Past" automatically based on today's date.
     - Keep the commas between items. If the site goes blank after an
       edit, a missing comma or quote is almost always the reason.
   ===================================================================== */

window.SITE = {
  name: "AIAA at UW–Madison",
  tagline: "American Institute of Aeronautics and Astronautics · UW–Madison Chapter",

  mission:
    "To build a community of UW–Madison students with a passion in aerospace through skill development, collaborative environments, and industry outreach.",

  links: {
    slack: "https://join.slack.com/t/uwmadaiaa/shared_invite/zt-4eexhxt8j-Ik4~rOqSTO9fUK9BdNPocg",
    interestForm: "https://docs.google.com/forms/d/e/1FAIpQLSdpjlOmiB7hzR9qjoyG7FdHMJpQcgkKW2WcESAeekOjjaQXgQ/viewform",
    aiaaNational: "https://www.aiaa.org/membership",
    instagram: "https://www.instagram.com/aiaauwmadison/" // add your Instagram URL here and an icon appears in the footer
  },

  contacts: [
    { name: "Keane Frieling", role: "Co-President", email: "kfrieling@wisc.edu" },
    { name: "Ryan Peplinski", role: "Co-President", email: "rjpeplinski@wisc.edu" }
  ]
};

/* ---------------------------------------------------------------------
   EVENTS  (see README.md → "Adding a speaker" for a step-by-step)
   type: "speaker" | "meeting" | "social" | "tour" | "workshop"

   Every field except date, type, and title is optional — leave it ""
   or [] and that part simply doesn't show.
     summary    One or two sentences. Shows everywhere.
     takeaways  Bullet points for the speaker recap (after the talk).
     rsvp       Link for an RSVP button (Handshake, Google Form...).
     flyer      Image in /assets/events/
     photos     Images in /assets/events/ — [{ src: "...", caption: "..." }]
     slides     PDF in /slides/ — shows an in-page slide viewer
     links      Extra buttons — [{ label: "...", url: "..." }]
   --------------------------------------------------------------------- */
window.EVENTS = [
  {
    date: "2026-10-21",
    time: "5:00–6:00 PM",
    location: "Mechanical Engineering, Room 1153",
    type: "speaker",
    title: "Engineering Beyond Boundaries: a conversation with NASA's Jeremy J. Hart",
    speaker: {
      name: "Jeremy J. Hart",
      role: "Deputy Division Chief, Aeroscience and Flight Mechanics Division · UW–Madison Engineering Mechanics alum",
      org: "NASA Johnson Space Center",
      highlights: ["Artemis / Orion", "Commercial Crew", "Morpheus Lander", "X-38", "Space Shuttle"]
    },
    summary:
      "Our first chapter meeting featured UW–Madison Engineering Mechanics alum Jeremy J. Hart, who walked us through his career in human spaceflight at NASA's Johnson Space Center and how students can follow a similar path.",
    takeaways: [
      "Inside JSC: NASA's center for human spaceflight in Houston, home to Mission Control and astronaut training, with over 10,000 civil service and contractor employees.",
      "What his division does: aerodynamics and aerothermal, guidance, navigation and control, trajectory design, abort and parachute systems, and independent modeling and simulation, supporting Artemis and Orion, the ISS, and Commercial Crew (SpaceX Dragon and Boeing Starliner).",
      "Project spotlights: the Morpheus autonomous lander test vehicle and the Artemis II proximity operations demo.",
      "His career path: project engineer on the X-38 and Shuttle programs, GN&C subsystem lead on Orion and Morpheus, system manager for Commercial Crew, then Deputy Division Chief.",
      "Getting to NASA: apply for NASA OSTEM and Pathways internships, look at contractor roles (JSC's prime contractor is Amentum), build programming, CAD, and systems engineering skills, and get involved with AIAA, design competitions, and conference papers."
    ],
    rsvp: "",
    flyer: "assets/events/2026-10-21-jeremy-hart-flyer.jpg",
    photos: [
      { src: "assets/events/2026-10-21-jeremy-hart-talk.jpg", caption: "Jeremy Hart presenting on Johnson Space Center" }
    ],
    slides: "slides/2026-10-21-jeremy-hart.pdf",
    links: [
      { label: "Jeremy's career profile", url: "https://drive.google.com/file/d/1uRvNx2MmSnHCujU0Tp643nrr6gLXXGth/view" }
    ]
  },
  {
    date: "2026-11-05",
    time: "4:30–5:45 PM",
    location: "Engineering Hall, Room 1610",
    type: "speaker",
    title: "Industry guest speaker: Brent Shultz of Boeing",
    speaker: {
      name: "Brent Shultz",
      role: "Aerospace industry professional",
      org: "Boeing",
      highlights: []
    },
    summary:
      "Hear from a Boeing aerospace industry professional about life and work in the industry. Open to all UW students. Food provided!",
    takeaways: [],                 // fill in after the talk
    rsvp: "https://www.canvaqr.com/RGWXfKQd3_",
    rsvpLabel: "RSVP on Handshake",
    flyer: "assets/events/2026-11-05-boeing-flyer.jpg",
    photos: [],
    slides: "",
    links: []
  },
  {
    date: "2026-10-28",
    time: "",
    location: "",
    type: "meeting",
    title: "General meeting: meet the chapter",
    summary:
      "Officer introductions, an overview of what AIAA is and what we're planning this year, and a paper-airplane icebreaker — everyone threw a plane, picked up a stranger's, and went to find its owner.",
    slides: "",
    photos: []
  },
   {
    date: "2026-11-4",
    time: "6:00 PM",
    location: "Mechanical Engineering Building, room 1153",
    type: "meeting",
    title: "General meeting",
    summary: "",
    slides: "",
    photos: []
  }
  /* Copy this block to add a new event:
  ,{
    date: "2026-11-11",
    time: "6:00 PM",
    location: "Engineering Hall, room ____",
    type: "meeting",
    title: "",
    summary: "",
    slides: "",
    photos: []
  }
  */
];

/* ---------------------------------------------------------------------
   OFFICERS
   photo: a square image in /assets/officers/ (e.g. "assets/officers/keane.jpg"),
   or "" to show initials instead. Replace the file to update a photo.
   --------------------------------------------------------------------- */
window.OFFICERS = [
  { name: "Keane Frieling",   role: "Co-President",        year: "Junior",    hometown: "Minneapolis, MN",       fact: "Learned drums over the summer",                    email: "kfrieling@wisc.edu", photo: "assets/officers/keane.jpg" },
  { name: "Ryan Peplinski",   role: "Co-President",        year: "Senior",    hometown: "Racine, WI",            fact: "Coffee and espresso junkie",                       email: "rjpeplinski@wisc.edu", photo: "assets/officers/ryan.jpg" },
  { name: "Osho Villafan",    role: "Event Organizer",     year: "Sophomore", hometown: "Chisago City, MN",      fact: "Speaks German",                                    photo: "assets/officers/osho.jpg" },
  { name: "Umar Qazi",        role: "Social Media",        year: "Sophomore", hometown: "Islamabad",             fact: "Can imitate bird calls by whistling",              photo: "assets/officers/umar.jpg" },
  { name: "Matthew Rabindra", role: "Treasurer",           year: "Sophomore", hometown: "Onalaska, WI",          fact: "Plays piano and drums",                            photo: "assets/officers/matthew.jpg" },
  { name: "Danny Poterucha",  role: "Fundraising Director",year: "Sophomore", hometown: "La Crosse, WI",         fact: "Can solve a Rubik's cube",                         photo: "assets/officers/danny.jpg" },
  { name: "Iris Lee",         role: "Secretary",           year: "Freshman",  hometown: "Suwon, Korea",          fact: "Visited Japan and England over the summer",        photo: "assets/officers/iris.jpg" },
  { name: "Jack Johnston",    role: "Outreach",            year: "Junior",    hometown: "Portland, OR",          fact: "Huge fan of early-1900s fountain pens",            photo: "assets/officers/jack.jpg" },
  { name: "Julia Ludick",     role: "Outreach",            year: "Junior",    hometown: "New London, WI",        fact: "Works at Starbucks",                               photo: "assets/officers/julia.jpg" },
  { name: "Evan Bauer",       role: "Outreach",            year: "Sophomore", hometown: "New Jersey",            fact: "",                                                 photo: "assets/officers/evan.jpg" },
  { name: "Jackson Povletich",role: "Outreach",            year: "Junior",    hometown: "Stevenson Ranch, CA",   fact: "Plays the banjo",                                  photo: "assets/officers/jackson.jpg" }
];

/* ---------------------------------------------------------------------
   SPONSORS — add { name, logo, url } once you have partners.
   logo: put the image in /assets/sponsors/ e.g. "assets/sponsors/acme.png"
   --------------------------------------------------------------------- */
window.SPONSORS = [
  // { name: "Company name", logo: "assets/sponsors/company.png", url: "https://..." }
];
