import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../style/footer.css";

function Footer() {
  return (
    <div>
        <div className="footer">
            <div className="socicalContact">
                <FacebookIcon></FacebookIcon>
                <InstagramIcon></InstagramIcon>
                <LinkedInIcon></LinkedInIcon>
                
            </div>
            <p> &copy; lux&costore.com</p>
        </div>
    </div>
  )
}

export default Footer
