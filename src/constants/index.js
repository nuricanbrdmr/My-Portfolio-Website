import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `My name is Nuri Can Birdemir, I am currently studying at Marmara University, Faculty of Technology, Department of Computer Engineering. I am known for my enthusiasm for research, hard work, teamwork and strong communication skills, and I am constantly striving to improve myself.
As a passionate full-stack developer with a lot of application development experience, I am passionate about building robust and scalable web applications. I have experience with technologies such as React, Node.js, Next.js, Java, Spring Boot, AngularJS, JavaScript, MySQL, MSSQL.  My goal is to utilise my skills to develop innovative solutions that drive business growth and provide exceptional user experiences.`;

export const ABOUT_TEXT = `I am a committed and versatile full-stack developer who is passionate about designing efficient and user-friendly web applications. I have developed applications in various technologies including React, Next.js, Node.js, Angular.js, Java, Spring Boot, MSSQL, MySQL, PostgreSQL and MongoDB. My web development journey began with a strong curiosity to understand how things work and has since grown into a career where I constantly embrace new challenges and learning opportunities.I thrive in collaborative environments where I can apply my problem-solving skills to deliver high-quality solutions. Beyond coding, I remain active in exploring emerging technologies and contributing to open source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2023",
    role: "Full Stack Intern",
    company: "Giz Soft",
    description: `I worked as an intern in the Web Software Development unit. I was actively involved in the functioning of Giz Soft's software products. I had the opportunity to examine the code structures of these products and learn which programming languages were used. I also contributed to the integration stages of newly added pages and features to the projects. I used Angularjs, JavaScript, ASP.NET, C# technologies.`,
    technologies: ["Angular.js", "JavaScript", "ASP.NET", "mySQL"],
  },
  {
    year: "2022 - 2023",
    role: "Scholarship Intern Student",
    company: "TUBITAK",
    description: `I was working as a scholarship intern in the TUBITAK project named "Türkmed: Development of Original Machine Learning and Deep Learning Methods Including Diffusion and Seq2seq- Fusion Algorithms to Eliminate the Thematic / Emotional Classification of Turkish Texts and the Meaning of Words".`,
    technologies: ["Java", "NLP", "Zemberek-NLP"],
  },
];

export const PROJECTS = [
  {
    title: "E-Cars - Electric Cars Sales Website",
    image: project1,
    description:
      "E-Cars is a dynamic e-commerce platform that sells electric vehicles. I developed the project using Next.js, MongoDB, Sanity and Stripe technologies. Users can filter vehicles by brand, model, price and year; they can have a personalised shopping experience by logging in securely. In addition, smart alternative vehicle suggestions are offered according to specific vehicle features. Stripe integration is provided for secure payment transactions.",
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Sanity", "Stripe"],
    link: "https://github.com/nuricanbrdmr/E-Cars-Web-App",
  },
  {
    title: "Insurance Management System",
    image: project2,
    description:
      "Insurance Management System is a web application that fulfils basic insurance functions for vehicle, health and housing insurances. It facilitates customers to list insurance information, get quotes, accept/reject insurance and renew insurance. The project was developed using Java Spring Boot, MySQL, AngularJS, JavaScript, HTML, CSS, SCSS and tested with JUnit tests.",
    technologies: ["Java Spring Boot", "Angular.js", "JavaScript", "MySQL"],
    link: "https://github.com/edamuutlu/Insurance-Management-Project",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind CSS"],
    link: "",
  },
  {
    title: "Lenslight Photo Gallery Website",
    image: project4,
    description:
      "Lenslight is a modern photo gallery application where users can upload their photos and see other users' photos. This project was developed using Node.js, MongoDB, Nodemailer and Cloudinary technologies.",
    technologies: ["Node.js", "MongoDB", "Nodemailer", "Express", "Cloudinary"],
    link: "https://github.com/nuricanbrdmr/Lenslight-Nodejs-Photo-Gallary-Websites-Project",
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
