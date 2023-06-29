const profileData = {
  title: "Resume",
  name: "Siddharth Kumar",
  sub_title: "Frontend/UI Engineer",
  logoURL: "assets/images/dp.jpg",
  about: {
    intro: `I am an innovative and passionate developer with a primary interest in <strong>JavaScript</strong>
     and its applications. Experienced in designing and implementing sophisticated UI/UX with
      Progressive Web Application standards and application life-cycle management.`,
    contact: {
      email: "sid6308@gmail.com",
      phone: "+91-9110955886",
      address: "Bangalore, IN",
    },
  },
  links: [
    // { title: "Codepen", src: "https://codepen.io/imvpn22" },
    { title: "Github", src: "https://github.com/sid6308" },
    { title: "LinkedIn", src: "https://www.linkedin.com/in/sidd96/" },
    // { title: 'Twitter', src: 'https://twitter.com/imvpn22' }
    // { title: 'HackerEarth', src: 'https://www.hackerearth.com/@imvpn22' },
  ],
  education: [
    {
      alma: "Savitribai Phule Pune University",
      duration: "2014 - 2018",
      std: "B.Tech. (Electronics & Communication Engineering)",
      score: "64.20%",
    },
    {
      alma: "Park Mount Public School (CBSE)",
      duration: "2011 - 2013",
      std: "Class XI-XII (PCM)",
      score: "74.60%",
    },
    {
      alma: "Patna Central School",
      duration: "2009 - 2011",
      std: "Class IX - X (PCM)",
      score: "9.8 CGPA",
    },
  ],
  skills: [
    {
      category: "Programming Languages",
      topics: ["TypeScript", "JavaScript", "CSS3", "HTML5"],
    },
    {
      category: "Frameworks / Libraries",
      topics: ["ReactJS", "Redux", "NodeJS", "Express", "NextJS", "Bootstrap"],
    },
  ],
  projects: [
    {
      title: "Food Restaurant",
      duration: "May - Jun 2023",
      link: "https://github.com/sid6308/Food-Restaurant",
      desc: `Food-delivery app, which allows customers to order from a nearby restaurant at their convenience.`,
    },
    {
      title: "Issue Tracker",
      duration: "Mar - May 2022",
      link: "https://github.com/sid6308/issueTracker",
      desc: `Responsive and interactive issue tracking application, allowing teams to easily manage and track issues, bugs, and tasks in real-time.
      I have used ReactJS, Redux, and CSS concepts in the above project`,
    },
  ],
  experiences: [
    {
      organization: "MSYS Technologies",
      title: "Sr. Frontend Developer",
      date: "Oct 2022 - Present",
      details: [
        `Designed web pages and applications that met business. Developed application to assess JSON and
        XML for RESTful web service using JavaScript and ReactJS.`,
        `Other responsibilities involve adding new features, and patching/fixing bugs on existing features as well as on-call issues.`,
      ],
    },
    {
      organization: "Publicis Sapient",
      title: "Frontend Developer",
      date: "Apr 2022 - Oct 2022",
      details: [
        `Designed Employee hire portal using Next JS, React, Redux and reusable components with all the unit test cases using jest library`,
        `Created a customized Content Management System for MPL's website, to update content and images on the fly for different pages.`,
      ],
    },
    {
      organization: "Wipro",
      title: `Project Engineer`,
      desc: `Project Engineer`,
      date: "Aug 2018 - Apr 2022",
      details: [
        `Building components using React, React Router, React Hooks with new ES6 concept.`,
        `Exchange Admin - Lloyds Banking Group. Part of Mobility & messaging team in Exchange Admin role, responsible for BAU activities and mob automation.`,
      ],
    },
  ],
  certifications: [],
  events: [],
};
