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
    <><div class="viewjarallax " style={{height: "120vh"}} >
      </div>
        
        <div class="container text-center">

              <div class="row justify-content-between">
                  <div class="col-4">
                      <h3 id='mot'>Ngô Lợi</h3>
                      <div className='i1'>
                          <img  class="rounded-circle" src='https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/314762531_926959768269534_8723370559386502290_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=OirmANU1LlsAX9PXBuf&_nc_ht=scontent.fsgn8-1.fna&oh=00_AfAJOqOdtooOmVPl8o0s7427jgfYBxx1tbIbXccfrpWP6g&oe=6394DB33'></img>
                          <p> Founder and chief visionary, Ngô Lợi is the driving force behind the company. He loves to keep his hands full by participating in the
                              development of the software, marketing, and customer experience strategies.</p>
                      </div>
                  </div>
                  <div class="col-4">
                      <h3 id='hai'>Kim Lê</h3>
                      <div className='i2'>
                          <img class="rounded-circle" src='https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.6435-9/202003784_342940434046616_3711616540009786173_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=r566VoeuKswAX8ed8GS&_nc_oc=AQmWGcFQNINeaXUrEov7_4z4lMxxtkh1Zut7BQ2dkJM2XU5ZxcdAUXaKuawTRVWWVlMK_6bF8f1eESs12nI3qadx&_nc_ht=scontent.fsgn8-1.fna&oh=00_AfBGJnpvmcTBGbyOQQIlpdo44X3yQYU5qVFdoSEFq5n6Kg&oe=63B7F5BB'></img>
                          <p>Kim Lê is one of the iconic people in life who can say they love what they do. She mentors 100+ in-house
                              developers and looks after the community of thousands of developers.</p>
                      </div>
                  </div>
              </div>


              <div class="row justify-content-between">
                  <div class="col-4">
                      <h3 id='ba'>Hiếu Nguyễn</h3>
                      <div className='i3'>
                          <img  class="rounded-circle" src='https://res.cloudinary.com/dgazg47jz/image/upload/v1670489900/hieu_wdlgwj.jpg'></img>
                          <p>Hiếu Nguyễn loves taking on challenges. With his multi-year experience as Commercial Director in the software industry, Hiếu Nguyễn has helped the
                              company to get where it is today. Hiếu Nguyễn is among the best minds.</p>
                      </div>
                  </div>
                  <div class="col-4">
                      <h3 id='bon'>Thùy Trang</h3>
                      <div className='i4'>
                          <img  class="rounded-circle" src='https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-6/278606973_1606258303063158_6795680813435026372_n.jpg?stp=dst-jpg_p843x403&_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=c1AmVwrmKaYAX8OC2ET&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfAd7MSiNA3eenxvo8xmVg5ysao8cAw98tvIqolahydAkw&oe=6394FC23'></img>
                          <p>Thùy Trang, with her international experience, helps us easily understand the numbers and improves them. She is determined to drive success
                              and delivers her professional acumen to bring the company to the next level.</p>
                      </div>
                  </div>
              </div>
          </div></>
      
          
      
  );
}

export default App;

