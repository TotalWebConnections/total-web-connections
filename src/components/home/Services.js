import * as React from "react"
import { Link } from "gatsby"

import Button from '../Button';


// <div className="grid grid-cols-2 max-w-4xl mx-auto">
//   <div className="service-card">
//     <i class="text-primary text-4xl fa fa-mobile"></i>
//     <h3 className="py-3 text-2xl">
//       Content Creation
//     </h3>
//     <p>
//       From written articles to marketing images we work with you .
//     </p>
//   </div>
//   <div className="service-card">
//     <i class="text-primary text-4xl fa fa-mobile"></i>
//     <h3 className="py-3 text-2xl">
//       Mobile Applications
//     </h3>
//     <p>
//       Dedicated solutions for mobile devices. Custom designed to work on mobile devices.
//     </p>
//   </div>
// </div>

const Services = () => {
  const [slide, setSlide] = React.useState(0);

  return (
    <div className="mt-32 py-24 bg-gray">
      <h2 className="text-4xl font-bold text-center">Our Services</h2>
      <div className="grid md:grid-cols-3 max-w-5xl mx-auto">
        <div className="service-card mx-auto">
          <i class="text-primary text-4xl fa fa-desktop mt-3 mb-3"></i>
          <h3 className="py-3 text-2xl">
            Web Development
          </h3>
          <p>
            A place for your business to live online. Beautiful, functional sites uniquely designed for your brand.
          </p>
        </div>
        <div className="service-card">
          <i class="text-primary text-4xl fa fa-database mt-3 mb-3"></i>
          <h3 className="py-3 text-2xl">
            App Development
          </h3>
          <p>
            For complex functional needs. Database driven and optimized from design to the code to be effcient.
          </p>
        </div>
        <div className="service-card">
          <i class="text-primary text-4xl fa fa-mobile mt-3 mb-3"></i>
          <h3 className="py-3 text-2xl">
            Mobile Applications
          </h3>
          <p>
            Dedicated solutions for mobile devices. Custom designed to work on mobile devices.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 max-w-4xl mx-auto">
        <div className="service-card">
            <i class="text-primary text-4xl fa fa-scroll mt-3 mb-3"></i>
            <h3 className="py-3 text-2xl">
              Content Marketing
            </h3>
            <p>
              Reach new users with handwritten content designed to get clicks.
            </p>
          </div>
          <div className="service-card">
            <i class="text-primary text-4xl fa fa-thumbs-up mt-3 mb-3"></i>
            <h3 className="py-3 text-2xl">
              Social Media Marketing
            </h3>
            <p>
              Build communities with bespoke strategies across social channels.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Services
