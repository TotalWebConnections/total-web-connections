import React, { useState, useEffect } from 'react';
import { Link } from "gatsby"

const Map = () => {
  return (
    <div className="mapWrapper">

      <div className="contactBlock absolute m-4 bg-white p-4 border border-primary">
        <h4 className="text-xl">Contact Us</h4>
        <div className="pt-4">
            <a href="mailto:peterjewicz@totalwebconnections.com?Subject=map%20form" target="_top"><i className="fa fa-envelope-o" aria-hidden="true"></i>Info@totalwebconnections.com</a>
        </div>

        <div className="pt-4">
            <span className="dateLine">Based In Winfield, IL</span>
        </div>
      </div>

      <div id="map" className="googleMap" style={{height: "350px", width: "100%"}}>
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyArEam9KzNPl_ORcpMmUP3Kvo-s8Dl1aPE&v=3"></script>
      </div>
    </div>
  )
}

export default Map
