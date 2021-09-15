import React from 'react'
import HomeFooterImages from "./HomeFooterImages";
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import AppleIcon from '@material-ui/icons/Apple';
import CloudIcon from '@material-ui/icons/Cloud';
import CopyrightIcon from '@material-ui/icons/Copyright';

const HomeFooterDetails = () => { //landing page footer images not wokring
  return (
      <div className="home5Main">
      
        <div className="home5SubMain">
            {
              HomeFooterImages.map((curElem) =>
              {
                  return (
                      <div className="home5SubMain1">
                            <img className="home5SubMain1Img" src={curElem.img} />
                      </div>
                      
                  )
              })
            }
          </div>
         
          <div className="home5SubMain2">
              <p className="home5SubMain4In2p1">  <CopyrightIcon/>2020 Binge Entertainment, LLC. All rights reserved.</p>  
          </div>
          </div>
  )
}


export default HomeFooterDetails;

