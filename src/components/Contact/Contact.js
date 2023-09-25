import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const links = {
  github: "https://github.com/arashyeganeh?tab=repositories",
  linkedin: "https://www.linkedin.com/in/arash-yeganeh/",
};

const Contact = () => {
  return (
    <section className="section" id="contact-me">
      <div className="container">
        <h2 className="shape-line">Contact Me</h2>
        <p>
          Thank you for taking the time to explore my website. If you have any
          questions or would like to discuss potential collaboration
          opportunities, please do not hesitate to contact me using the form
          below. As a Front End web developer, I have the technical expertise
          and experience to assist with various projects, from small-scale
          websites to large enterprise-level systems. You can also find more
          information about my skills and knowledge on my Linkedin page and
          GitHub.
        </p>
        <div className="flex flex-col items-start my-5">
          <a
            href={links.linkedin}
            className="flex justify-center items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin className="mr-1" />
            Linkedin
          </a>
          <a
            href={links.github}
            className="flex justify-center items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="mr-1" />
            Github
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
