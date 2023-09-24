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
  username: "Sunny Danu",
  title: "Hi all, I'm Sunny",
  subTitle: emoji(
    "Experienced Cloud Engineer with 7+ years of hands-on expertise in building and managing cloud-based solutions"
  ),
  resumeLink:
    "https://1drv.ms/b/s!Aokvs8zE9KRrreop0Y6rYKW3k92xXg?e=saxfVI", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sunnydanu",
  linkedin: "https://www.linkedin.com/in/sunnydanu/",
  gmail: "sunnysinghdanu@gmail.com",
  gitlab: "https://gitlab.com/sunnydanu",
  facebook: "https://www.facebook.com/danu.sunny",
  medium: "https://medium.com/@sunnydanu",
  stackoverflow: "https://stackoverflow.com/users/9375825/sunny-danu",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Cloud aficionado and AI Adventurer: On a Quest for Limitless Tech Horizons! ☁️🚀🤖🌌" ,
  skills: [
    emoji("⚡ Proficient In Designing And Implementing Scalable Cloud Infrastructure Solutions Using AWS, Ensuring Optimal Performance And Cost-Efficiency"),
    emoji(
      "⚡ Skilled In Automating Cloud Deployments And Management Tasks Using Infrastructure As Code (IaC) Tools Such As CloudFormation"
    ),
    emoji(
      "⚡ Hands-On Experience With Containerization Technologies Like Docker And Kubernetes For Container Orchestration In Cloud Environments."
    ),
    emoji(
      "⚡ Created RESTful APIs With Node.Js And Leveraged Serverless Frameworks For Rapid Development And Deployment In Cloud Projects."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "mysql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
     
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Doaba College",
      logo: require("./assets/images/doabaLogo.png"),
      subHeader: "Master of Science in Information Technology",
      duration: "April 2014 - May 2016",
      desc: "",
      descBullets: []
    },
    {
      schoolName: "Doaba College",
      logo: require("./assets/images/doabaLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "March 2011 - April 2014",
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
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Cloud Computing",
      progressPercentage: "60%"
    },
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Consultant C1",
      company: "Capgemini",
      companylogo: require("./assets/images/capgeminiLogo.png"),
      date: "May 2021 – Present",
      desc: "📈 Continuously improving as a cloud engineer with a focus on ☁️ Node.js and 🚀 serverless tech.",
      descBullets: [
        "Collaboratively designing secure serverless APIs for seamless service communication",
        "Leading the ongoing development of serverless architectures"
      ]
    },
    {
      role: "Software Engineer",
      company: "Intellisense Technology",
      companylogo: require("./assets/images/intellisenseTechnologyLogo.png"),
      date: "Aug 2016 – May 2022",
      desc: "🚀 Embarked on my journey as a PHP developer and seamlessly transitioned into the realm of Node.js microservices. 💡 Along the way, I actively delved into the world of AWS ☁️, honing my skills in cloud architecture 🏗️, and 🐳 immersed myself in containerized services using Docker and Kubernetes. This progressive shift in my role allowed me to gain a comprehensive understanding of modern cloud technologies and their applications. 🌐🛠️"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://hutchh.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle:
        "Amazon Web Services(AWS)",
      image: require("./assets/images/awsCCPLogo.png"),
      imageAlt: "AWS Certified Cloud Practitioner",
      footerLink: [
        {
          name: "Certification",
          url: "https://1drv.ms/b/s!Aokvs8zE9KRrreouVbO0CgEhMnIh3Q?e=Hptpnb"
        },
        {
          name: "Show Credentials",
          url: "https://www.credly.com/badges/de258fa7-89e3-416b-8c49-4ce81f60c08a"
        }
      ]
    },
    {
      title: "AWS Partner: Sales Accreditation (Business)",
      subtitle:
        "Amazon Web Services(AWS)",
      image: require("./assets/images/awsSalesAccreditationLogo.png"),
      imageAlt: "AWS Partner: Sales Accreditation (Business)",
      footerLink: [
        {
          name: "Show Credentials",
          url: "https://www.credly.com/badges/51880074-d9a2-47ca-b96e-5fbf37ebb03e/linked_in_profile"
        }
      ]
    },

    {
      title: "Customer Delight",
      subtitle: "Issued by Capgemini · Customer Delight for the period 01 Apr 2023 to 30 Jun 2023",
      image: require("./assets/images/cgAppreciationLogo.png"),
      imageAlt: "Customer Delight",
      footerLink: [
        {name: "Certification", url: "https://1drv.ms/f/s!Aokvs8zE9KRrreorBTOauLElQT8crQ?e=luxjP0"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "mail@sunnydanu.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable
};
