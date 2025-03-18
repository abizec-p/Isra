import React from 'react'
import "./services.css"
import classesImg from "../assets/book.svg"
import consultantImg from "../assets/consultant.svg"
import diplomaImg from "../assets/diploma.svg"
import diploma2Img from "../assets/diploma2.svg"

function Services() {
  return (
    <section id='services'>
    <div className='services'>
        <div className='services-intro'>
            <h1>Services</h1>
            <p>The services you need is what we have. we have various services according to your needs, Here are some of them but it does not limit, you can call anytime and consult us for every kind of services you require.</p>
        </div>
        <div className='main-services'>
            <div>
                <img src={classesImg} alt="" />
               <p> French classes</p></div>
            <div>
                <img src={consultantImg} alt="" />
               <p> Immigration Consultant</p></div>
            <div><img src={diplomaImg} alt="" />
            <p> Paralegal Diploma</p></div>
            <div><img src={diploma2Img} alt="" />
            <p> Diploma classes</p></div>
        </div>
    </div>
    </section>
  )
}

export default Services