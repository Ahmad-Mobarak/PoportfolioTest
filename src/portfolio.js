/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ahmed Mobarak",
  title: "Hi all, I'm Ahmed",
  subTitle: emoji(
    "Cyber Security Specialist | Penetration Testing & Cyber-Physical Systems. Securing Critical Infrastructure by bridging the gap between offensive security, network architecture, and embedded IoT systems."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1e_1FruudvazIwuYQw__WnY-nKLq0oeS7/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Ahmad-Mobarak",
  linkedin: "https://www.linkedin.com/in/ahmedalaamobarak",
  gmail: "contact@example.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CYBER SECURITY PROFESSIONAL SPECIALIZING IN OFFENSIVE SECURITY & EMBEDDED SYSTEMS",
  skills: [
    emoji(
      "⚡ Execute rigorous red-team simulations and analyze advanced malware"
    ),
    emoji("⚡ Automate defensive operations with Python"),
    emoji(
      "⚡ Leverage technologies like IoT and Computer Vision to build proactive defense mechanisms"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Bash",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Kali Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Raspberry Pi",
      fontAwesomeClassname: "fab fa-raspberry-pi"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Digital Egypt Pioneers Initiative (DEPI)",
      logo: require("./assets/images/depi.png"),
      subHeader: "Scholar (Ongoing)",
      duration: "Ongoing",
      desc: "Focused on advanced technology tracks, critical infrastructure, and future-ready digital skills.",
      descBullets: []
    },
    {
      schoolName: "National Telecommunication Institute (NTI)",
      logo: require("./assets/images/nti.jpg"),
      subHeader: "Network Security Trainee",
      duration: "June 2025 – July 2025",
      desc: "Gained hands-on experience in network defense, enterprise architecture, and firewall configurations.",
      descBullets: []
    },
    {
      schoolName: "Delta University for Science and Technology",
      logo: require("./assets/images/logo delta.png"),
      subHeader: "Bachelor of Science in Cyber Security",
      duration: "Expected 2026",
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Cybersecurity & Pentesting",
      progressPercentage: "90%"
    },
    {
      Stack: "Network Security Architecture",
      progressPercentage: "85%"
    },
    {
      Stack: "Embedded IoT Systems & Scripting",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: false,
  experience: []
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Featured Projects & Research",
  subtitle: "PROJECTS I HAVE WORKED ON",
  projects: [
    {
      image: require("./assets/images/shadow logger project.png"),
      projectName: "Shadow-Logger",
      projectDesc: "Red Teaming & Educational Spyware. Developed a stealthy, Python-based keylogger designed to study endpoint monitoring and malware behavior patterns.",
      footerLink: []
    },
    {
      image: require("./assets/images/Network Project.png"),
      projectName: "Enterprise Network Security Design",
      projectDesc: "Network Architecture & Hardening utilizing VLANs, ACLs, and OSPF.",
      footerLink: []
    },
    {
      image: require("./assets/images/Metasploitable 2 Full System Compromise.png"),
      projectName: "Metasploitable 2: Full System Compromise",
      projectDesc: "Penetration Testing & Kill Chain Execution via Metasploit Framework.",
      footerLink: []
    },
    {
      image: require("./assets/images/Blockchain-Training-Platform-Upper-1024x683.webp"),
      projectName: "Secure Socket Blockchain Simulation",
      projectDesc: "Secure Data Transmission & Network Programming using Python Socket Programming.",
      footerLink: []
    },
    {
      image: require("./assets/images/Smart Traffic Control System.jpg"),
      projectName: "Smart Traffic Control System",
      projectDesc: "Automated traffic light logic utilizing Arduino, C++, and state-machine principles.",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Dedicated Security Labs 🧪"),
  subtitle: "Specialized lab environments I have built and utilized.",
  achievementsCards: [
    {
      title: "Malware Analysis Sandbox",
      subtitle: "Engineered an isolated, VM-based environment strictly for analyzing malware behavior, tracking process execution, file system modifications, registry edits, and network activity.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Malware Sandbox Logo",
      footerLink: []
    },
    {
      title: "Cloud Security Lab",
      subtitle: "Configured hands-on experiments utilizing Sentinel, Splunk, and custom SIEM rules for practical incident detection and automated response scenarios.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "Cloud Security Logo",
      footerLink: []
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  display: false
};

// Talks Sections

const talkSection = {
  display: false
};

// Podcast Section

const podcastSection = {
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "I am actively seeking opportunities in Penetration Testing, Red Teaming, and Network Security. If you are looking to collaborate on malware analysis projects or discuss the future of IoT security, let's talk.",
  number: "",
  email_address: "ah.alaamobarak@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job.

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
