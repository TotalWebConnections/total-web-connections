import * as React from "react"
import { Link } from "gatsby"

import Map from "./Map"
import Button from "./Button"

import Logo from "../images/logo.png"
import Facebook from "../images/facebook.png"
import Twitter from "../images/twitter.png"
import Insta from "../images/insta.png"
import Github from "../images/github.png"

// <div>
//   <a href="/"><img src={Logo} width="220px" /></a>
// </div>
// <div>
//   <h4>Quick Links</h4>
//   <ul>
//     <li>Home</li>
//     <li>Services</li>
//     <li>Work</li>
//     <li>Blog</li>
//     <li>Contact</li>
//   </ul>
// </div>
//   <h4>Contact Us</h4>
//   <ul>
//     <li>Info@totalwebconnections.com</li>
//     <li>Based in Winfield, IL</li>
//   </ul>
// <div>
// </div>

const Footer = () => {
  return (
    <div>
      <div className="bg-darkBlue text-white text-center py-16">
        <div className="max-w-3xl m-auto">
          <p className="text-3xl">
            Interested in getting your project started off right? Then Drop Us a
            Line!
          </p>
          <p className="pt-4">
            We're always happy to discuss new projects and help launch dreams!
          </p>
          <Button text="Contact" url="mailto:info@totalwebconnections.com" />
        </div>
      </div>
      <div className=" text-black text-center py-16">
        <div className="max-w-3xl m-auto">
          <p className="text-3xl">We're Hiring!</p>
          <p className="pt-4">
            Total Web Connections is growing and looking for motivated
            individuals to join our team!
          </p>
          <Button text="See Positions" url="/careers" />
        </div>
      </div>
      <div>
        <img src="/images/map.jpg" width="100%" alt="Based in Winfield" />
      </div>
      <div className="bg-primary text-white text-center py-2">
        <div className="md:flex justify-between max-w-4xl mx-auto">
          <div>
            <div className="py-4 flex">
              <a
                href="https://www.facebook.com/TotalWebConnections/"
                target="_blank"
              >
                <img
                  className="mx-2 "
                  src={Facebook}
                  alt="TWC Facebook"
                  width="38px"
                />
              </a>
              <a href="https://twitter.com/TWebConnections" target="_blank">
                <img
                  className="mx-2"
                  src={Twitter}
                  alt="TWC Twitter"
                  width="38px"
                />
              </a>
              <a
                href="https://www.instagram.com/totalwebconnections/"
                target="_blank"
              >
                <img
                  className="mx-2"
                  src={Insta}
                  alt="TWC Instagram"
                  width="38px"
                />
              </a>
              <a href="https://github.com/TotalWebConnections" target="_blank">
                <img
                  className="mx-2"
                  src={Github}
                  alt="TWC Github"
                  width="38px"
                />
              </a>
            </div>
            <p>© 2022. All rights reserved.</p>
          </div>
          <div className="text-left">
            <h4 className="text-xl">Contact Us</h4>
            <ul className="text-sm">
              <li>Info@totalwebconnections.com</li>
              <li>Based in Winfield, IL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
