import React from "react"
import Section from "../components/Section"
import ResumePDF from "../assets/CHIRAG_PATEL_RESUME.pdf"
import SGCartoon from "../assets/sagnik_cartoon.png"
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa"

const SocialIcon = ({ href, icon }) => {
  return (
    <a
      className="social-icon"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  )
}

export default function Home() {
  const icons = [
    {
      href: "https://www.linkedin.com/in/chiragpatel5083/",
      icon: <FaLinkedinIn />,
    },
    {
      href: "https://github.com/chiragpatel5430",
      icon: <FaGithub />,
    },
    {
      href: "https://twitter.com/chiragpatel5083",
      icon: <FaTwitter />,
    },
    // {
    //   href: "https://www.facebook.com/profile.php?id=100036939404474",
    //   icon: <FaFacebookF />,
    // },
    {
      href: "https://www.instagram.com/chirag.patel04/",
      icon: <FaInstagram />,
    },
  ]

  return (
    <Section id="about">
      <div className='row justify-content-between'>
        <div className='col-md-6 order-last order-lg-first' data-aos='fade-up'>
          <h1 className="mb-0">
          Chirag
            <span className="text-primary" style={{paddingLeft: '2vw'}}>Patel</span>
          </h1>
          <div className="subheading mb-3">
            <span style={{paddingRight: '0.3vw'}}>
              Impossible is nothing!
            </span>
            <span style={{paddingRight: '0.3vw'}}>
              ·
            </span>
            <a href="mailto:chiragpatel5083@gmail.com" className='home-mail'>
              chiragpatel5083@gmail.com
            </a>
          </div>
        </div>
        <div className='col-md-3 mb-5 mb-lg-0' data-aos='fade-up'>
          <img
            src={SGCartoon}
            alt="Chirag Cartoon"
            style={{height: '40vh', width: '40vh'}}
          />
        </div>
      </div>

      <p className="lead mb-4">
        I'm a Software Engineer with over 2.2+ years of experience in developing efficient Full-stack applications. Passionate about creating high-quality software solutions that meet the needs of today's businesses. I design, develop, and deploy cutting-edge software solutions that drive innovation and transform the way people live and work.
      </p>

      <div className="btn-group mb-5">
        <button
          className="btn btn-primary btn-custom py-2 px-5 CV-Button"
          type="submit"
          onClick={() => window.open(ResumePDF)}
        >
          Download CV
        </button>
      </div>

      <div className="social-icons">
        {icons.map(({ href, icon }, index) => (
          <SocialIcon href={href} icon={icon} key={index} />
        ))}
      </div>
    </Section>
  )
}
