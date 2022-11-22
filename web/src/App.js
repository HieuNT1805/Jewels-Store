import React, { Component } from "react";
import { ImYoutube2 } from "react-icons/im";
import { VscGithubInverted } from "react-icons/vsc";
import { SiInstagram } from "react-icons/si";
import { ImFacebook } from "react-icons/im";
import { SiTwitter } from "react-icons/si";
import { RiLinkedinFill } from "react-icons/ri";
import { ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";

import './App.css';


/////navbar navbar-expand-lg navbar-light o_colored_level o_cc shadow-sm
////tim hieu them bootstap

function App() {
  return (
      <><section className='container'>
      <div class="row align-items-center">

        <div class="firstcol">
          <ImPhone className='phone' />
          <span class="mr-3"><a href="tel:+1 (650) 555-0111" data-original-title="" title="">+</a>84 123 4567 899&nbsp;</span>
          <MdEmail className='mail' />
          <span className='mr-2'><a href="mailto:info@yourcompany.example.com" data-original-title="" title="">Lux&amp;Co.@gmai.com</a></span>
        </div>
        <div class="secondcol">
          <a href="/website/social/facebook" class="s_share_facebook" target="_blank">
            <ImFacebook />
          </a>
          <a href="/website/social/twitter" class="s_share_twitter" target="_blank">
            <SiTwitter />
          </a>
          <a href="/website/social/linkedin" class="s_share_linkedin" target="_blank">
            <RiLinkedinFill />
          </a>
          <a href="/website/social/github" class="s_share_github" target="_blank">
            <VscGithubInverted />
          </a>
          <a href="/website/social/youtube" class="s_share_youtube" target="_blank">
            <ImYoutube2 />
          </a>
          <a href="/website/social/instagram" class="s_share_instagram" target="_blank">
            <SiInstagram />
          </a>
        </div>
      </div>
    </section>
    
    
    <div className='nav'>
      <div>
      <a href='#'><img src='https://edu-uit-acct5123m21cttt-4.odoo.com/web/image/website/1/logo/My%20Website?unique=da9627f'></img>

      </a>
      </div>

    <a href="#" className='home'>Home</a>
    <a href="#">Shop</a>
    <a href="#" className='about'>About Us</a>
    <a className='card' href="#">My Cart <sup>0</sup> </a>
    <a href="#" className='sign'>Sign In</a>
         <div className='contact'>    <a href="#" >Contact Us</a>
          </div>

      </div>
      
      
      <div>
          <div class="parallax">
                <h1>About us</h1>         
          </div>

      <div className='main'>
      <h3 id='mot'>Tony</h3>
        <div className='i1'>
        <img src='https://edu-uit-acct5123m21cttt-4.odoo.com/web/image/website.s_company_team_image_1'></img>
        <p> Founder and chief visionary, Tony is the driving force behind the company. He loves to keep his hands full by participating in the 
          development of the software, marketing, and customer experience strategies.</p>
        </div>
        <h3 id='hai'>Aline</h3>

        <div className='i2'>
        <img src='https://edu-uit-acct5123m21cttt-4.odoo.com/web/image/website.s_company_team_image_3'></img>
       <p>Aline is one of the iconic people in life who can say they love what they do. She mentors 100+ in-house 
        developers and looks after the community of thousands of developers.</p>
       </div>
       <h3 id='ba'>Mich</h3>

        <div className='i3'>
        <img src='https://edu-uit-acct5123m21cttt-4.odoo.com/web/image/website.s_company_team_image_2'></img>
        <p>Mich loves taking on challenges. With his multi-year experience as Commercial Director in the software industry, Mich has helped the
           company to get where it is today. Mich is among the best minds.</p>
        </div>

        <h3 id='bon'>Iris</h3>

        <div className='i4'>
        <img src='https://edu-uit-acct5123m21cttt-4.odoo.com/web/image/website.s_company_team_image_4'></img>
        <p>Iris, with her international experience, helps us easily understand the numbers and improves them. She is determined to drive success
           and delivers her professional acumen to bring the company to the next level.</p>
        </div>


      </div>

      </div>
      
      
      
      </>
  );
}

export default App;

