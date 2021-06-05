import React from 'react'
import './Styles/Footer.css'

const Footer = () => {
    return (
        <div className='body'>
            <footer className='footer'>
                <div className='container'>
                    <div className="row">
                        <div className="footer-col">
                        <h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#"> superUsers</a></li>
  	 				<li><a href="#">Events</a></li>
  	 				
  	 			</ul>
                        </div>
                        <div className="footer-col">
                        <h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">Contact Us</a></li>
  	 				
  	 			</ul>
                        </div>
                        <div className="footer-col">
                        <h4>Inventory</h4>
                        <ul>
  	 				<li><a href="#">Arduino</a></li>
  	 				<li><a href="#">Raspberry Pi</a></li>
  	 				<li><a href="#">3D Printer</a></li>
  	 				
  	 			</ul>
                        </div>
                        

                </div>
                </div>

            </footer>
            
        </div>
    )
}

export default Footer
