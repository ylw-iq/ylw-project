import './Footer.css';

const Footer = () => {
    return ( 
    <footer className="footer">
        
        <div className="container">
            <div className="row">
             <div className="logo">
            <img width="400px" height="300px"src ="imgs/logo.jpg" />
        </div>
        <div className="footer-col">
            <h4>sitemap</h4>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Voting</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
            </div>
        </div>
        <div className="social">
            <h4 style={{position: "relative"}, {bttom: "21px"}}>Contact us</h4>
            <div className="socialmedia">
                <div className="Instagram"><a  href="https://instagram.com/ylw.iq?utm_medium"><img width="25px" height="25px" style={{position:"relative"}, {left:"4px"}} src="imgs/instagram.png" /></a></div>
                <div className="Email"><a href="mailto:ylw.email1@gmail.com"><img width="35px" height="35px" src="imgs/email.png" /></a></div>
            </div>

        </div>
        
        <div className="Copyright">
            <p>©2021 All Rights is Recived by Youth Leadership Wave  </p>
        </div>
        </div>
    </footer>

     );
}
 
export default Footer;