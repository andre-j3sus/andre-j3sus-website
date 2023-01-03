/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

// SEO Related settings
const seo = {
  title: "André's Website",
  description: "Computer Science & Engineering Student.",
  og: {
    title: "André Jesus Website",
    type: "website",
    url: "https://andre-j3sus.github.io",
  },
};

// Home Page
const greeting = {
  title: "André Jesus",
  logo_name: "AndreJesus",
  nickname: "Hey there 👋, my friends call me Jesus!",
  subTitle: "Computer Science & Engineering Student",
  resumeLink:
    "https://www.canva.com/design/DAFUaHsRNDo/OUWh8boNosWQ3YeIp0tI6A/view?utm_content=DAFUaHsRNDo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
  portfolio_repository: "https://github.com/andre-j3sus/andre-j3sus-website",
  githubProfile: "https://github.com/andre-j3sus",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/andre-j3sus",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/andre-jesus-engineering",
    fontAwesomeIcon: "fa-linkedin", // Reference https://fontawesome.com/icons/linkedin?s=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@andre-j3sus",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:andre.jesus.pilar@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/andre_j3sus",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/andre.j3sus",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "Stack Overflow",
    link: "https://stackoverflow.com/users/15545640/andr%c3%a9-jesus",
    fontAwesomeIcon: "fa-stack-overflow", // Reference https://fontawesome.com/icons/stack-overflow?style=brands
    backgroundColor: "#F48024", // Reference https://simpleicons.org/?q=stackoverflow
  },
  {
    name: "Goodreads",
    link: "https://www.goodreads.com/user/show/108854374-andr-jesus",
    fontAwesomeIcon: "fa-goodreads", // Reference https://fontawesome.com/icons/goodreads?style=brands
    backgroundColor: "#553B08", // Reference https://simpleicons.org/?q=goodreads
  },
  /*{
    name: "TV Time",
    link: "https://www.tvtime.com/en/user/28579171/profile",
    fontAwesomeIcon: "fa-tv", // Reference https://fontawesome.com/icons/tv?style=brands
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=tvtime
  },*/
];

const skills = {
  /*data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],*/
  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "simple-icons:html5",
      style: {
        color: "#E34F26",
      },
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "simple-icons:css3",
      style: {
        color: "#1572B6",
      },
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "simple-icons:javascript",
      style: {
        backgroundColor: "#000000",
        color: "#F7DF1E",
      },
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "simple-icons:react",
      style: {
        color: "#61DAFB",
      },
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "simple-icons:node-dot-js",
      style: {
        color: "#339933",
      },
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "simple-icons:npm",
      style: {
        color: "#CB3837",
      },
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "simple-icons:typescript",
      style: {
        color: "#3178C6",
      },
    },
    {
      skillName: "Express",
      fontAwesomeClassname: "simple-icons:express",
      style: {
        color: "#000000",
      },
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "simple-icons:bootstrap",
      style: {
        color: "#563D7C",
      },
    },
    {
      skillName: "Material-UI",
      fontAwesomeClassname: "simple-icons:material-ui",
      style: {
        color: "#0081CB",
      },
    },
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "simple-icons:kotlin",
      style: {
        color: "#B125EA",
      },
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "simple-icons:android",
      style: {
        color: "#3DDC84",
      },
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "simple-icons:java",
      style: {
        color: "#007396",
      },
    },
    {
      skillName: "Spring",
      fontAwesomeClassname: "simple-icons:spring",
      style: {
        color: "#6DB33F",
      },
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "simple-icons:python",
      style: {
        color: "#3776AB",
      },
    },
    {
      skillName: "C",
      fontAwesomeClassname: "simple-icons:c",
      style: {
        color: "#A8B9CC",
      },
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "simple-icons:linux",
      style: {
        color: "#000000",
      },
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "simple-icons:docker",
      style: {
        color: "#1488C6",
      },
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "simple-icons:mongodb",
      style: {
        color: "#47A248",
      },
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "simple-icons:postgresql",
      style: {
        color: "#336791",
      },
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "simple-icons:git",
      style: {
        color: "#F05032",
      },
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "simple-icons:github",
      style: {
        color: "#181717",
      },
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Instituto Superior de Engenharia de Lisboa",
      subtitle: "BSc. in Computer Science and Engineering",
      logo_path: "isel_logo.png",
      duration: "2020 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like Programming, Algorithms and Data Structures, OOP, Web Development, Databases, Computer Networks, Operating Systems, etc.",
        "⚡ Apart from this, I were the student representative between 2022 and 2023, where I represented the students of my course in the pedagogical council of the school.",
        "⚡ I received two merit scholarships for my academic excellence, one when I entered the school (2020) and another one in 2022.",
      ],
      website_link: "https://www.isel.pt/en",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description: "",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Monitor",
          company: "Instituto Superior de Engenharia de Lisboa",
          company_url: "https://www.isel.pt/en",
          logo_path: "isel_logo.png",
          duration: "November 2022 - PRESENT",
          location: "Lisbon, Portugal",
          description:
            "I am responsible for the support of the students of the Introduction to Internet Programming and Software Laboratory subjects. I also help the students with the development of the projects of the subjects and to better understand the concepts of the subjects.",
          color: "#0879bf",
        },
        {
          title: "Mathematics Tutor",
          company: "Apto — Apoio Pedagógico Total, Lda.",
          company_url: "https://www.apto.pt/",
          logo_path: "apto_logo.jpg",
          duration: "September 2022 - PRESENT",
          location: "Lisbon, Portugal",
          description:
            "I am responsible for the support of the students of the Mathematics subjects.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        /*{
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },*/
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        /*{
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },*/
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Web applications.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "andre-jesus.jpg",
    description:
      "I am available on almost every social media. You can message me!",
  },
  blogSection: {
    /*
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  */
  },
  addressSection: {
    /*
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  */
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "(+351) 930 533 735",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
