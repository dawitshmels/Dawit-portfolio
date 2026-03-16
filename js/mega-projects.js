// mega-projects.js
// Dynamic project data for Mega Project Hub
const v = window.getVideoSource;

const megaProjects = [
  {
    title: "Branding & Logo Design",
    category: "Creative",
    tags: ["Logo Design", "Branding"],
    description: "Modern logo and brand identity design for businesses.",
    image: "images/branding-01.jpg"
  },
  {
    title: "Promo Videos",
    category: "Cinematic & Video Production",
    tags: ["Promo Videos", "Video Production", "Editing"],
    description: "Professional promotional video production and editing services.",
    image: v("promo03")
  },
  {
    title: "Poster & Flyer Design",
    category: "Creative",
    tags: ["Poster Design", "Flyers"],
    description: "Creative poster and flyer designs for events and promotions.",
    image: "images/poster-flyer-01.jpg"
  },
  {
    title: "Social Media Post",
    category: "Creative",
    tags: ["Social Media", "Post Design"],
    description: "Portfolio of social media post designs created for brands and campaigns.",
    image: "images/social-media-01.jpg"
  },
  {
    title: "Motion Graphics",
    category: "Cinematic & Video Production",
    tags: ["Motion Graphics", "Animation", "Video Editing"],
    description: "Animated motion graphics and visual storytelling showcase.",
    image: v("motion01")
  },
  {
    title: "Cinematic Editing",
    category: "Cinematic & Video Production",
    tags: ["Cinematic Editing", "Color Grading", "Story Cut"],
    description: "Cinematic editing projects including story cuts and finishing.",
    image: v("cinematic01")
  },
  {
    title: "Civil Engineering Blueprint",
    category: "Technical/Engineering",
    tags: ["Civil Engineering", "AutoCAD Detailing"],
    description: "Blueprints and AutoCAD detailing for civil engineering.",
    image: "images/project-5.jpg"
  },
  {
    title: "3D Modeling Showcase",
    category: "Technical/Engineering",
    tags: ["3D Modeling"],
    description: "3D modeling and visualization for engineering projects.",
    image: "images/project-2.jpg?v=20260315-4"
  }
];

// Add more projects by pushing to megaProjects array
// Example:
// megaProjects.push({ title: "New Project", category: "Creative", tags: ["Photo Editing"], image: "images/new.jpg" });

