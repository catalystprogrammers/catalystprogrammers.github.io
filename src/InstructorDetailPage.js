import React from "react";
import { useParams, Link } from "react-router-dom";

import "./App.css"; // Import CSS for styling and animations

const instructors = [
  {
    id: 1,
    name: "Bhaskar Yogi",
    designation: "Oracle Certified Master MERN Stack Developer",
    image: "/images/bhaskarsir.jpg",
    description:
      "Bhaskar Yogi is a seasoned Principal Software Engineer with over 10 years of experience in the IT industry, specializing in the MERN stack. He has a deep understanding of software architecture, data structures, and system design. With a passion for technology and a commitment to excellence, Bhaskar has contributed to numerous high-profile projects, delivering scalable, maintainable, and high-performance solutions. His expertise spans across front-end and back-end technologies, and he is constantly exploring new ways to optimize development workflows and improve software quality.",
    experience: "7 years",
    skills: [
      { name: "JavaScript", description: "A versatile programming language for building dynamic web applications." },
      { name: "ExpressJS", description: "A web framework for NodeJS, used to build APIs and server-side applications." },
      { name: "NodeJS", description: "A runtime environment that allows JavaScript to run on the server side, enabling full-stack development." },
      { name: "ReactJS", description: "A JavaScript library for building user interfaces, particularly single-page applications." },
      { name: "MongoDB", description: "A NoSQL database known for its flexibility and scalability, widely used with NodeJS applications." },
      { name: "Data Structures", description: "Fundamental concepts used to organize and store data efficiently, crucial for solving complex problems." },
      { name: "System Design", description: "The process of planning and building scalable, efficient, and maintainable software systems." },
      { name: "Cobra CLI", description: "A tool for creating powerful command-line interfaces, used to automate and manage tasks." },
      { name: "PHP", description: "A server-side scripting language, widely used for web development and creating dynamic content." },
      { name: "Cloud Computing", description: "The delivery of computing services (like servers, storage, and databases) over the internet." },
      { name: "Version Control (Git)", description: "A system for tracking changes in code, allowing developers to collaborate and manage code history." },
      { name: "RESTful API Design", description: "A set of architectural principles for creating scalable and stateless web services using HTTP." },
    ],
    journey: [
      {
        title: "Year 1-2: The Foundation - Junior Developer",
        content:
          "Bhaskar began his career as a Junior Developer, mastering essential technologies such as NodeJS, ReactJS, and JavaScript. He worked on various projects, collaborating with teams to build full-stack web applications. He focused on learning best practices for software development, including version control, writing efficient code, and understanding project lifecycles. During these early years, he developed a strong foundation that would support his growth into a senior developer in the future.",
      },
      {
        title: "Year 3-4: Full Stack Developer",
        content:
          "After gaining experience, Bhaskar was promoted to a Full Stack Developer role, where he took on more responsibility, contributing to complex system designs, database management, and API development. He worked extensively with both front-end (ReactJS) and back-end (NodeJS/ExpressJS) technologies. He also started experimenting with new tools like Cobra CLI for managing command-line interfaces and further honed his skills in PHP for legacy applications. Bhaskar became known for his problem-solving abilities and his knack for optimizing system performance.",
      },
      {
        title: "Year 5: Senior Developer",
        content:
          "He played a crucial role in architecting software solutions and mentoring junior developers, showcasing leadership in high-stakes projects. Bhaskar took ownership of full product lifecycles, from gathering requirements to post-production support, and consistently delivered high-quality, scalable solutions. He also focused on improving team productivity by introducing best practices, enhancing coding standards, and optimizing development workflows.",
      },
      {
        title: "Year 6: Software Architect",
        content:
          "Bhaskar became a Software Architect, focusing on enhancing the scalability of projects and mentoring aspiring IT professionals. He was responsible for defining the architecture of large-scale applications and ensuring that projects adhered to the highest standards of performance and security. Bhaskar’s leadership helped streamline the development process, and he made significant contributions to the design of enterprise-level systems, ensuring their long-term sustainability.",
      },
      {
        title: "Year 7-Present: Principal Software Engineer",
        content:
          "Currently, Bhaskar serves as a Principal Software Engineer, leading development teams, designing innovative software solutions, and ensuring the successful delivery of high-impact projects. He continues to mentor junior and mid-level developers, sharing his knowledge of best practices in software design, development, and deployment. His deep expertise in both front-end and back-end technologies, combined with his leadership skills, makes him a key contributor to the success of his team and organization.",
      },
    ],
    whyLearn: [
      "Hands-on learning with real-world examples.",
      "Comprehensive curriculum for mastering MERN stack.",
      "Experienced mentor with a decade of expertise.",
    ],
    contact: {
      email: "bhaskaryogi03@gmail.com",
      phone: "+91-9145994506",
    },
  },
  {
    id: 2,
    name: "Jitin Goyal",
    designation: "Fullstack with Java & MERN Developer ",
    image: "/images/jitinsir.jpg",
    description:
      "Jitin Goyal is a skilled Fullstack Developer Trainer and Full-Stack Developer with 6 years of comprehensive experience. He specializes in modern web technologies, including MERN stack, TypeScript, AWS, Golang, and ReactJS. With a passion for creating dynamic web solutions and mentoring developers, Jitin bridges the gap between academic knowledge and industry requirements. His expertise in developing scalable, efficient applications and guiding teams has made him a trusted name in the industry.",
    experience: "6 years",
    skills: [
      { name: "TypeScript", description: "Enhances JavaScript with static typing for better code reliability." },
      { name: "ReactJS", description: "Builds dynamic, fast, and interactive user interfaces efficiently." },
      { name: "NextJS", description: "Optimizes server-side rendering and static web applications for SEO." },
      { name: "Golang", description: "Ensures performance, scalability, and simplicity in backend services." },
      { name: "AWS", description: "Provides scalable and secure cloud solutions for hosting and storage." },
      { name: "HTML & CSS", description: "Lays the foundation for structuring and styling web applications." },
      { name: "JavaScript", description: "Enables dynamic and interactive features in web development." },
      { name: "GraphQL", description: "Facilitates efficient and precise API data queries for flexibility." },
      { name: "Git & Version Control", description: "Supports collaborative coding and source code management." },
      { name: "Responsive Design", description: "Creates adaptable web designs for various devices and screen sizes." }
    ],
    journey: [
      {
        title: "Year 1-2: The Foundation - Frontend Developer",
        content:
          "Jitin began his journey as a Frontend Developer, mastering essential skills like HTML, CSS, and JavaScript. He focused on creating responsive designs and dynamic features, honing his ability to build user-friendly and visually appealing applications. This period laid a solid foundation for his future career.",
      },
      {
        title: "Year 3-4: Full-Stack Developer",
        content:
          "Jitin transitioned to Full-Stack Development, diving deep into modern frameworks such as ReactJS and NextJS. He took on projects involving scalable applications, cloud integrations using AWS, and implementing TypeScript for robust codebases. His problem-solving and versatility made him an asset to his team.",
      },
      {
        title: "Year 5: Mentor and Educator",
        content:
          "During his fifth year, Jitin embraced his passion for mentoring by becoming a Trainer. He designed structured training programs, conducted hands-on workshops, and simplified complex topics like TypeScript, GraphQL, and modern JavaScript frameworks. His teaching style inspired many budding developers to excel in their careers.",
      },
      {
        title: "Year 6: Advanced Full-Stack Developer",
        content:
          "In his sixth year, Jitin took on leadership roles in enterprise projects, integrating front-end and back-end systems seamlessly. He optimized cloud-based solutions on AWS and played a critical role in architectural decisions. He also continued mentoring junior developers, driving innovation and excellence in his team.",
      }
    ],
    whyLearn: [
      "Gain expertise in frontend and full-stack development with a focus on real-world applications.",
      "Learn in-demand technologies such as TypeScript, ReactJS, and AWS under an experienced mentor.",
      "Master practical skills through structured training sessions and hands-on projects.",
      "Develop a clear understanding of scalable system design and integration techniques.",
      "Receive career-focused guidance tailored to bridge academic learning with industry requirements."
    ],
    contact: {
      email: "jitingoyal@gmail.com",
      phone: "+91-9119136857"
    }
  },

  {
    id: 3,
    name: "Kumar Vipin Yadav",
    designation: "Full Stack Web Developer",
    image: "/images/vipinsir.jpg",
    description:
      "Kumar Vipin Yadav is an accomplished Software Engineer with 7-8 years of professional experience in Python, Flask, Django,Golang and Red Hat technologies. Known for his expertise in building scalable backend systems, he has also contributed significantly to automation and cloud-based solutions. Vipin is passionate about mentoring aspiring developers and sharing his knowledge in Python programming, testing frameworks, and cloud technologies, empowering them to build efficient and robust applications.",
    experience: "7 years",
    skills: [
      { name: "Python", description: "Expert in Python programming, focusing on clean and efficient code structures." },
      { name: "Flask", description: "Develops lightweight and efficient RESTful APIs and microservices." },
      { name: "Django", description: "Builds scalable web applications with robust security and features." },
      { name: "Selenium", description: "Automates web application testing to ensure reliability and functionality." },
      { name: "Ansible", description: "Utilizes for automation and configuration management across environments." },
      { name: "Red Hat OpenShift", description: "Implements cloud solutions with container orchestration tools." },
      { name: "Jenkins", description: "Integrates and automates CI/CD pipelines for seamless deployments." },
      { name: "HTML & CSS", description: "Creates responsive and visually appealing user interfaces." },
      { name: "Docker", description: "Deploys and manages containerized applications efficiently." },
      { name: "SQL", description: "Designs and manages relational databases for optimal data handling." }
    ],
    journey: [
      {
        title: "Year 1: The Foundation - Backend Developer",
        content:
          "Vipin embarked on his career as a Backend Developer, mastering Python and Flask for building RESTful APIs and backend logic. His focus during this phase was on creating reliable and efficient server-side systems, setting the stage for his future growth.",
      },
      {
        title: "Year 2-3: Automation and Cloud",
        content:
          "Vipin broadened his expertise to include automation tools and cloud technologies, working extensively with Red Hat OpenStack and OpenShift. He implemented tools like Ansible for automated configuration management and Jenkins for continuous integration, ensuring seamless development pipelines.",
      },
      {
        title: "Year 4: Mentor and Trainer",
        content:
          "During his fourth year, Vipin transitioned into a mentorship role. He trained students in Python, Django, and Selenium testing frameworks, empowering them to build robust and scalable web applications. His passion for teaching inspired many aspiring developers.",
      },
      {
        title: "Year 5: Full-Stack Development",
        content:
          "In his fifth year, Vipin achieved proficiency in full-stack development, combining Python-based backend systems with modern frontend technologies. He also worked on container orchestration tools like Docker and Kubernetes, contributing to scalable and efficient software solutions.",
      }
    ],
    whyLearn: [
      "Master Python, Flask, and Django with real-world project insights.",
      "Gain hands-on experience in automation tools like Ansible and Jenkins.",
      "Learn to build scalable cloud solutions with Red Hat technologies.",
      "Develop end-to-end applications by combining backend and frontend expertise.",
      "Get career-focused mentoring from an experienced professional in the industry."
    ],
    contact: {
      email: "vipinyadav@gmail.com",
      phone: "+91-8875599241"
    }
  }
];

function InstructorDetailPage() {
  const { id } = useParams();
  const instructor = instructors.find((inst) => inst.id === parseInt(id));

  if (!instructor) {
    return <h1 className="text-center mt-5">Instructor Not Found</h1>;
  }

  return (
    <div className="container detail-page mt-5">
      {/* Instructor Card */}
      <div className="card mb-4">
        <div className="row g-0">
          <div className="col-12">
            <div className="image-container">
              <img
                src={instructor.image}
                className="img-fluid rounded"
                alt={instructor.name}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="card-body">
              <h3 className="card-title">{instructor.name}</h3>
              <p className="card-text newsletter-p text-center">{instructor.designation}</p>
              <p className="card-text">{instructor.description}</p>
              <p className="card-text">
                <strong className="newsletter-p">Experience:</strong> {instructor.experience}
              </p>
              <p>
                <strong className="newsletter-p fs-5"> Contact:</strong> {" "}
                <a href={`mailto:${instructor.contact.email}`}>
                  {instructor.contact.email}
                </a>{" "}
                |{" "}
                <a href={`tel:${instructor.contact.phone}`}>
                  {instructor.contact.phone}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <section className="mb-4 skills">
        <h4>Skills</h4>
        <ul>
          {instructor.skills.map((skill, index) => (
            <li key={index}>
              <strong className="skill-name">{skill.name}: </strong> {skill.description}
            </li>
          ))}
        </ul>
      </section>

      {/* Journey Section */}
      <section className="mb-4 journey">
        <h4>Career Journey</h4>
        {instructor.journey.map((step, index) => (
          <div key={index} className="mb-3">
            <h5>{step.title}</h5>
            <p>{step.content}</p>
          </div>
        ))}
      </section>

      {/* Why Learn Section */}
      <section className="mb-4 why-learn ">
        <h4 >Why Learn From {instructor.name} ?</h4>
        <ul>
          {instructor.whyLearn.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </section>

      {/* Back Button */}
      <div className="text-center mt-4">
        <Link to="/Instructors" className="btn btn-primary">
          Back to Instructors
        </Link>
      </div>
      <hr style={{ width: "50vw" }} />

    </div>

  );
}

export default InstructorDetailPage;