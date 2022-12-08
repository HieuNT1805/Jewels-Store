import React, { Component } from "react";
import { ImYoutube2 } from "react-icons/im";
import { VscGithubInverted } from "react-icons/vsc";
import { SiInstagram } from "react-icons/si";
import { ImFacebook } from "react-icons/im";
import { SiTwitter } from "react-icons/si";
import { RiLinkedinFill } from "react-icons/ri";
import { ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";

import "../style/about.css"
import Anh from "../img/lia.jpg"
/////navbar navbar-expand-lg navbar-light o_colored_level o_cc shadow-sm
////tim hieu them bootstap

function App() {
  return (
     
    <><div class="viewjarallax" style={{height: "70vh"}} >
      </div>
        
        <div class="container text-center">

              <div class="row justify-content-between">
                  <div class="col-4">
                      <h3 id='mot'>Tony</h3>
                      <div className='i1'>
                          <img  class="rounded-circle" src='https://edu-uit-acct5123m21cttt-4.odoo.com/web/image/website.s_company_team_image_1'></img>
                          <p> Founder and chief visionary, Tony is the driving force behind the company. He loves to keep his hands full by participating in the
                              development of the software, marketing, and customer experience strategies.</p>
                      </div>
                  </div>
                  <div class="col-4">
                      <h3 id='hai'>Aline</h3>
                      <div className='i2'>
                          <img class="rounded-circle" src='https://edu-uit-acct5123m21cttt-4.odoo.com/web/image/website.s_company_team_image_3'></img>
                          <p>Aline is one of the iconic people in life who can say they love what they do. She mentors 100+ in-house
                              developers and looks after the community of thousands of developers.</p>
                      </div>
                  </div>
              </div>


              <div class="row justify-content-between">
                  <div class="col-4">
                      <h3 id='ba'>Mich</h3>
                      <div className='i3'>
                          <img  class="rounded-circle" src='https://edu-uit-acct5123m21cttt-4.odoo.com/web/image/website.s_company_team_image_2'></img>
                          <p>Mich loves taking on challenges. With his multi-year experience as Commercial Director in the software industry, Mich has helped the
                              company to get where it is today. Mich is among the best minds.</p>
                      </div>
                  </div>
                  <div class="col-4">
                      <h3 id='bon'>Iris</h3>
                      <div className='i4'>
                          <img  class="rounded-circle" src='https://edu-uit-acct5123m21cttt-4.odoo.com/web/image/website.s_company_team_image_4'></img>
                          <p>Iris, with her international experience, helps us easily understand the numbers and improves them. She is determined to drive success
                              and delivers her professional acumen to bring the company to the next level.</p>
                      </div>
                  </div>
              </div>
          </div></>

      
          
      
  );
}

export default App;

