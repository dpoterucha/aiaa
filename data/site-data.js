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
    instagram: "" // add your Instagram URL here and an icon appears in the footer
  },

  contacts: [
    { name: "Keane Frieling", role: "Co-President", email: "kfrieling@wisc.edu" },
    { name: "Ryan Peplinski", role: "Co-President", email: "rjpeplinski@wisc.edu" }
  ]
};

/* ---------------------------------------------------------------------
   EVENTS
   type: "speaker" | "meeting" | "social" | "tour" | "workshop"
   For a speaker event, fill in `speaker` and (once you have them)
   `slides` — put the PDF in the /slides folder and write its path,
   e.g. "slides/2026-10-21-jeremy-hart.pdf".
   --------------------------------------------------------------------- */
window.EVENTS = [
  {
    date: "2026-10-21",
    time: "",
    location: "",
    type: "speaker",
    title: "Kickoff meeting with NASA's Jeremy J. Hart",
    speaker: {
      name: "Jeremy J. Hart",
      role: "Deputy Division Chief, Aeroscience and Flight Mechanics Division",
      org: "NASA",
      highlights: ["SpaceX Dragon", "Orion", "X-38"]
    },
    summary:
      "Our first-ever chapter meeting. After introducing AIAA and our mission, we welcomed Jeremy J. Hart, Deputy Division Chief of NASA's Aeroscience and Flight Mechanics Division, who has worked on vehicles including SpaceX Dragon, Orion, and the X-38.",
    slides: "",          // e.g. "slides/2026-10-21-jeremy-hart.pdf"
    photos: []
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
   photo: leave "" to show initials, or put a square image in
   /assets/officers/ and write e.g. "assets/officers/keane.jpg"
   --------------------------------------------------------------------- */
window.OFFICERS = [
  { name: "Keane Frieling",   role: "Co-President",        year: "Junior",    hometown: "Minneapolis, MN",       fact: "Learned drums over the summer",                    email: "kfrieling@wisc.edu", photo: "" },
  { name: "Ryan Peplinski",   role: "Co-President",        year: "Senior",    hometown: "Racine, WI",            fact: "Coffee and espresso junkie",                       email: "rjpeplinski@wisc.edu", photo: "" },
  { name: "Osho",             role: "Event Organizer",     year: "Sophomore", hometown: "Chisago City, MN",      fact: "Speaks German",                                    photo: "" },
  { name: "Umar",             role: "Social Media",        year: "Sophomore", hometown: "Islamabad",             fact: "Can imitate bird calls by whistling",              photo: "" },
  { name: "Matthew Rabindra", role: "Treasurer",           year: "Sophomore", hometown: "Onalaska, WI",          fact: "Plays piano and drums",                            photo: "" },
  { name: "Danny",            role: "Fundraising Director",year: "Sophomore", hometown: "La Crosse, WI",         fact: "Can solve a Rubik's cube",                         photo: "" },
  { name: "Iris Lee",         role: "Secretary",           year: "Freshman",  hometown: "Suwon, Korea",          fact: "Visited Japan and England over the summer",        photo: "" },
  { name: "Jack",             role: "Outreach",            year: "Junior",    hometown: "Portland, OR",          fact: "Huge fan of early-1900s fountain pens",            photo: "" },
  { name: "Julia",            role: "Outreach",            year: "Junior",    hometown: "New London, WI",        fact: "Works at Starbucks",                               photo: "" },
  { name: "Jackson",          role: "Outreach",            year: "Junior",    hometown: "Stevenson Ranch, CA",   fact: "Plays the banjo",                                  photo: "" }
];

/* ---------------------------------------------------------------------
   SPONSORS — add { name, logo, url } once you have partners.
   logo: put the image in /assets/sponsors/ e.g. "assets/sponsors/acme.png"
   --------------------------------------------------------------------- */
window.SPONSORS = [
  // { name: "Company name", logo: "assets/sponsors/company.png", url: "https://..." }
];
