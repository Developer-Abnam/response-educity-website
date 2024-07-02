import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className="about">
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play_icon' />
        </div>
        <div className="about-right">
            <h3>About Our University</h3>
            <h2>Nuturing Tomorrow's Leader Today</h2>
            <p>Embark on a Tranformative education journey with our university's comprehensive educational program. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
            <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make meaningful impact in classrooms, schools and communities</p>
            <p>Whether you aspire to become a teacher, administrator, councillor or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education</p>
        </div>
    </div>
  )
}

export default About