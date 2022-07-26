import React from 'react'
import ImageCarousel from './Carousel'
import pastor from './../../Static/Images/pastor.jpeg';
import insta from './../../Static/Images/insta.png';
import facebook from './../../Static/Images/facebook.png';
import youtube from './../../Static/Images/youtube.png';
import whatsapp from './../../Static/Images/whatsapp.png';


export default function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <div className="row verses">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <p class="moving-text"> Come, let us sing for joy to the LORD; let us shout aloud to the Rock of our salvation.(Psalm 95:1)</p>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <ImageCarousel />
        </div>
        <div className="col-md-1">
          <div className="social-img">
            <img src={insta} alt="insta" />
            <img src={facebook} alt="facebook" />
            <img src={youtube} alt="youtube" />
            <img src={whatsapp} alt="whatsapp" />
          </div>
        </div>
      </div>
      <div className="row meetings-bg">
        <div className="col-md-12">
          <div className="meetings">
            <div className="join-us">JOIN WITH US</div>
            <div>
              <div className="days-time">
                <span className="day">Sunday School</span>
                <span className="time">9AM - 9:50AM</span>
              </div>
            </div>
            <div>
              <div className="days-time">
                <span className="day">Sunday Worship</span>
                <span className="time">10AM - 1AM</span>
              </div>
            </div>
            <div>
              <div className="days-time">
                <span className="day">Sunday PYPA</span>
                <span className="time">12:30PM - 1PM</span>
              </div>
            </div>
            <div>
              <div className="days-time">
                <span className="day">Friday Fasting Prayer</span>
                <span className="time">10:30AM - 1PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row pstr-content-wrap">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="welcome-wrap">
            <div className="content-text">
              <h4>Praise the Lord</h4>
              <p>This life is a beautiful gift of God. Life can get both fair and unfair at times. We find ourselves fighting battles (some meaningful and some meaningless) and believe they are here to stay. Many call life a race and some don’t even know why they are running it. In the midst of it all, we pray that God’s pure light would lead your way and you would know He truly cares.
                We pray that God would provide for you the comfort and strength He has promised  His children and that you would discover the freedom in trusting the One who will never let you down. The Lord builds both our character and competence for HIS glory in us.
                God has been gracious and we are here not by our strength but by His faithfulness.  He built the Temple of God by Bethel AG Church brick by brick while we stood lifting our hands in worship. Our prayer is that this family at Bethel would abound in God’s love, goodness, and grace. We pray that you would find God in this place and time of your life. There is hope and rest in Him for all who are Seeking. We pray you wouldn’t miss it.</p>
            </div>
            <div className="pastors-img">
              <img src={pastor} alt="pastor" />
              <div className="text-center">
                <strong>Pr. Joemon John (M.div) & Family</strong>
                <h6>Wife: Joice Joemon</h6>
                <h6>Childrens : Jovannah Joemon, Joellin Joemon</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <p class="moving-text"> Come, let us bow down in worship, let us kneel before the Lord our Maker;(Psalm 95:6)</p>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row contacts-footer-bg">
        <div className="col-md-12">
          <div className="contacts-footer">
            <strong>Connect with Us For Prayers</strong>
            <span>Email:</span>
            <span className="contact-dtl">ipcebenezer@gmail.com</span>
            <span>Phone:</span>
            <span className="contact-dtl">+91 9535787496</span>
            <span>Address:</span>
            <span className="contact-dtl">No. 614, R No. 101, KPCL Layout, Kasavanahalli</span>
            <span className="contact-dtl">Carmelaram Post, Sarjapur Road, Bengaluru - 560035</span>
            <span>Location:</span>
            <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/dir//12.9904399,77.67804/@12.9904399,77.6758513,17z?hl=en" className="contact-dtl">Click here for direction</a>
          </div>
        </div>
      </div>
    </div>
  )
}
