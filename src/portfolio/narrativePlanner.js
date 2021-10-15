export const narrativePlanner = {
  name: "Narrative Planner",
  excerpt: "Collaborative Storybuilding Platform",
  image: "simpleLeadTracker.webp",
  localUrl: "narrative-planner",
  url: "#",
  featured: true,
  description: "Narrative Planner is a collaborative story telling tool. It allows multiple users to connect in realtime, and build out complex, branching stories.",
  challenge: "There was a lot of challenges in this project due to the complexity, but one of the most difficult was working in a realtime enviroment. Having multiple users connected to a single session means there is a lot of opportunities for race conditions and other weird states of data. We spend a lot of time testing, and made sure that the application worked well when multiple people were working in the same view. There was also a lot of work done to make sure that the application was usable on mobile devices and behaved the same as when working on desktop.",
  solution: "The end solution was built entirely using Clojure on both the back and front-ends. Working with Clojure was extermely enjoyable, and makes working with the codebase very easy for future additions.",
  tech: ["Clojure", "Pedestal", "Reagent", "Clojurescript", "MongoDB"],
  images: ["simpleLeadTracker.webp", "simpleLeadTracker.webp", "simpleLeadTracker.webp"]
}
