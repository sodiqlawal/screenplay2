import React, { useRef, useState, useEffect } from "react";
import $ from 'jquery';
import "./Home.css";
import "./scss/NewHome.css"
import CircleType from "circletype";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ScrollAnimation from "react-animate-on-scroll";
import johnwick from '../images/johnwick.jpg'
import doa from '../images/doa.jpg'
import raj from '../images/raj.jpg'
import lastman from '../images/lastman.jpg'
import narcos from '../images/narcos.jpg'
import twilight from '../images/twilight.jpg'
import iroko from '../images/iroko.png'
import ibaka from '../images/ibaka.png'
import InnerSlider from "./InnerSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  fas,
  faEnvelopeOpenText,
  faMapMarkerAlt,
  faSearch,
  faUsers,
  faThumbsUp,
  faEdit,
  faTrophy,
  faMobile,
  faRocket,
  faCogs,
  faLaptop,
  faCamera,
  faCalendarAlt,
  faPlane,
  faPhoneSquareAlt, faCode, faGripVertical, faEnvelope, faStar, faVideo, faSuitcase, faPlay, faMusic, faMicrophone, faBars, faGlobe} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faSkype,
  faFacebook,
  faInstagram,
  faTwitter,
  faBattleNet,
  faUikit
} from "@fortawesome/free-brands-svg-icons";
import { TweenMax, Expo, TweenLite, Power3} from "gsap";
import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable }
from "gsap/all"; 
// import { RoughEase } from "gsap/RoughEase";
// import { Linear } from "gsap/Linear"
library.add(fas, fab, faSkype, faFacebook, faInstagram, faTwitter,  faEnvelopeOpenText,
  faMapMarkerAlt,
  faSearch,
  faUsers,
  faThumbsUp,
  faEdit,
  faTrophy,
  faMobile,
  faRocket,
  faCogs,
  faLaptop,
  faCamera,
  faCalendarAlt,
  faPlane,
  faPhoneSquareAlt,
  faCode,
  faBattleNet,
  faGripVertical,faUikit, faEnvelope, faStar, faPlay);


const Home = () => {
  let artist = useRef(null)
  let rotated = useRef()
  useEffect(() => {
    const circleType = new CircleType(document.getElementById('rotated'))
    // circleType.dir(1);
  }, [])

    useEffect(() => {
      console.log(artist)
    TweenMax.from(".artist", 2, {
      delay: 5.4,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    });

    TweenMax.from(".watch", 2, {
      delay: 5.5,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    });

    TweenMax.from(".menu", 2, {
      delay: 5.6,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    });

    TweenMax.from(".rotatethis", 2, {
      delay: 6,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    });

    TweenLite.fromTo(".hero-title h1", 0.3, {
      x: -6,
      y: 2,
      opacity: 0
    },
    {
      delay: 5,
      x: 6,
      y: -2,
      opacity:1,
      ease:Power3.ease,
      // ease:RoughEase.ease.config({
      //   strength: 8,
      //   points: 40,
      //   // template: Linear.easeNone,
      //   randomize: false
      // }),
      clearProps: "all"
    });

    TweenLite.fromTo(".hero-title p", 0.3, {
      x: -6,
      y: 2,
      opacity: 0
    },
    {
      delay: 4,
      x: 6,
      y: -2,
      opacity:1,
      ease:Power3.ease,
      // ease: RoughEase.ease.config({
      //   strength: 8,
      //   points: 40,
      //   template: Linear.easeNone,
      //   randomize: false
      // }),
      clearProps: "all"
    });


    // var tl = new TimeLineMax({paused: true});

    // tl.to(".linkcol.overlay.linkcol.overlay", 1.6, {
    //   top: 0,
    //   ease: Expo.easeInOut
    // })
    
    $(document).on("click", ".menu", function(){
      $(".linkcol.overlay").toggleClass("active")
      $(".navshowul").toggleClass("actived")
    }) 


    // TweenMax.staggerFrom(".social-media ul li", 2, {
    //   delay: 5.7,
    //   opacity: 0,
    //   y: 20,
    //   ease: Expo.easeInOut
    // }, 0.1);

    // TweenMax.staggerFrom(".listensong ul li", 2, {
    //   delay: 5.9,
    //   opacity: 0,
    //   y: 20,
    //   ease: Expo.easeInOut
    // }, 0.1);
    },[])
  // console.log(artist)
    // const circleType = new CircleType(document.getElementById('rotated'))
    // circleType.dir(1);





    const date = new Date().getFullYear()
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [dropdownOpen3, setDropdownOpen3] = useState(false);
    const [dropdownOpen4, setDropdownOpen4] = useState(false);
    const [navIconOpen, setNavIconOpen] =useState(false)
    const [openSearch, setOpenSearch] =useState(false)


    const toggle = () => setDropdownOpen(prevState => !prevState);
    const toggle1 = () => setDropdownOpen1(prevState => !prevState);
    const toggle2 = () => setDropdownOpen2(prevState => !prevState);
    const toggle3 = () => setDropdownOpen3(prevState => !prevState);
    const toggle4 = () => setDropdownOpen4(prevState => !prevState);
    // const setNavIcon = () => setNavIconOpen(prevState => !prevState);

    return (
      <React.Fragment>
        {
          /* start animatednav */
          <div className="navbody">
            <div className="wrapper">
              <div className="hero-section">
                <div className="nav">
                  <div ref={el => {artist = el}} className="artist">Screenplay</div>
                  <div className="watch">
                    {/* <FontAwesomeIcon icon={faGlobe} className="watchicon"/>
                    Explore */}
                  </div>
                  <div className="menuwrapper">
                    <div className="menu">
                      <FontAwesomeIcon icon={faBars} className="material-icons"/>
                    </div>
                    <div className="menucontent">
                      <div className="row linkrow">
                        <div className="col-lg linkcol overlay">
                          <div className="navshow">
                            <ul className="navshowul">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                            <li>Login</li>
                            <li>Signup</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hero-gif"></div>
                <div className="hero-title">
                  <h1 className="glitch" data-text="Screenplay">
                    Screenplay
                  </h1>
                  <p>An online catalogue<br/> for worldclass scripts</p>
                </div>

                <div className="rotatethis">
                  <h2 id="rotated">Buy script ● Post script ● Read script ●</h2>
                </div>

                <div className="social-media">
                  <ul>
                    <li>facebook</li>
                    <li>instagram</li>
                    <li>twitter</li>
                  </ul>
                </div>

                {/* <div className="listensong">
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faPlay} className="listenicon" />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faMusic} className="listenicon" />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faMicrophone} className="listenicon" />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faVideo} className="listenicon" />
                    </li>
                  </ul>
                </div> */}
              </div>

              <div className="gif-overlay"></div>
            </div>
          </div>
          /* end animatednav 

        {/* start video */}
        {/* <video preload="auto" autoPlay="autoplay" type="video/mp4" src={suit} loop className="video"
        style={{width:"100%"}}>
        </video> */}
        {/* end video */}
        {/* start registration */}
        <div className="registercontainer text-center">
          <div className="register writer">
            {/* <ScrollAnimation
              animateIn="bounceInLeft"
              durationAppear={2000}
              component="div"
            > */}
              <p>Find a champion for your script</p>
              <FontAwesomeIcon icon={faEdit} className="registericon" />
              <h5>ASPIRING & WORKING SCREENWRITERS</h5>
              <button className="btn buttonregister">REGISTER</button>
            {/* </ScrollAnimation> */}
          </div>
          <div className="register producer">
            {/* <ScrollAnimation
              animateIn="bounceInRight"
              durationAppear={2000}
              component="div"
            > */}
              <p>Find great scripts here on screenplay</p>
              <FontAwesomeIcon icon={faVideo} className="registericon" />
              <h5>FILLM & TV PROFESSIONALS</h5>
              <button className="btn buttonregister">REGISTER</button>
            {/* </ScrollAnimation> */}
          </div>
        </div>
        {/* end registration */}

        {/* start about */}
        <div className="aboutcontainer mx-auto">
          <div className="aboutleft">
            <ScrollAnimation
              animateIn="zoomIn"
              durationAppear={1000}
              component="div"
            >
              <h2 className="aboutlefttitle">About Us</h2>
              <p className="aboutlefttext">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </ScrollAnimation>
          </div>
          <div className="aboutright">
            {/* <img src={about} alt="about" className="aboutrightimage" /> */}
          </div>
        </div>
        {/* end about */}
        {/* start latestscript */}
        <main className="scriptmain mx-auto">
          <section className="scripttopsection">
            <h2 className="scripttopsectiontitle">Our Latest Scripts</h2>
            <ScrollAnimation
              animateIn="zoomIn"
              durationAppear={1000}
              component="div"
            >
              <ul className="scripttopsectionlists">
                <li className="scripttopsectionlist">
                  <Dropdown
                    isOpen={dropdownOpen4}
                    toggle={toggle4}
                    className=""
                  >
                    <DropdownToggle caret className="scripttopsectionlisttitle">
                      Length
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>
                        <a href="#" className="first">
                          Feature film
                        </a>
                      </DropdownItem>
                      <DropdownItem>
                        <a href="#" className="second">
                          Short films
                        </a>
                      </DropdownItem>
                      <DropdownItem>
                        <a href="#" className="three">
                          TV series
                        </a>
                      </DropdownItem>
                      <DropdownItem>
                        <a href="#" className="four">
                          Web series
                        </a>
                      </DropdownItem>
                      <DropdownItem>
                        <a href="#" className="five">
                          Other forms
                        </a>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </li>
                <li className="scripttopsectionlist">
                  <Dropdown
                    isOpen={dropdownOpen1}
                    toggle={toggle1}
                    className=""
                  >
                    <DropdownToggle caret className="scripttopsectionlisttitle">
                      Language
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>
                        <a href="#" className="first">
                          English
                        </a>
                      </DropdownItem>
                      <DropdownItem>
                        <a href="#" className="second">
                          Yoruba
                        </a>
                      </DropdownItem>
                      <DropdownItem>
                        <a href="#" className="three">
                          Hausa
                        </a>
                      </DropdownItem>
                      <DropdownItem>
                        <a href="#" className="four">
                          Igbo
                        </a>
                      </DropdownItem>
                      <DropdownItem>
                        <a href="#" className="five">
                          French
                        </a>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </li>
                <li className="scripttopsectionlist">
                  <Dropdown
                    isOpen={dropdownOpen2}
                    toggle={toggle2}
                    className=""
                  >
                    <DropdownToggle caret className="scripttopsectionlisttitle">
                      Price Level
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>
                        <a href="#" className="first">
                          500 - 1000
                        </a>
                      </DropdownItem>
                      <DropdownItem>
                        <a href="#" className="second">
                          1000 - 2000
                        </a>
                      </DropdownItem>
                      <DropdownItem>
                        <a href="#" className="three">
                          2000 - 3000
                        </a>
                      </DropdownItem>
                      <DropdownItem>
                        <a href="#" className="four">
                          3000 - 4000
                        </a>
                      </DropdownItem>
                      <DropdownItem>
                        <a href="#" className="five">
                          4000 - 5000
                        </a>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </li>
                <li className="scripttopsectionlist">
                  <Dropdown
                    isOpen={dropdownOpen3}
                    toggle={toggle3}
                    className=""
                  >
                    <DropdownToggle caret className="scripttopsectionlisttitle">
                      Genre
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>
                        <a href="#" className="first">
                          Horror
                        </a>
                      </DropdownItem>
                      <DropdownItem>
                        <a href="#" className="second">
                          Comedy
                        </a>
                      </DropdownItem>
                      <DropdownItem>
                        <a href="#" className="three">
                          Drama
                        </a>
                      </DropdownItem>
                      <DropdownItem>
                        <a href="#" className="four">
                          Romance
                        </a>
                      </DropdownItem>
                      <DropdownItem>
                        <a href="#" className="five">
                          Fiction
                        </a>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </li>
                <>
                  {!openSearch ? (
                    <li className="scripttopsectionlist double mt-2 pointer">
                      <FontAwesomeIcon
                        icon={faSearch}
                        onClick={() => setOpenSearch(!openSearch)}
                        className="bg-secondary initial"
                      />
                    </li>
                  ) : (
                    <li className="scripttopsectionlist showsearch d-flex mt-2 pointer">
                      <FontAwesomeIcon
                        icon={faSearch}
                        onClick={() => setOpenSearch(!openSearch)}
                        className="bg-secondary mt-2 mr-1 initial two"
                      />
                      <div className="input-group scriptsearchbtn">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                        />
                        <div className="input-group-append btn btn-secondary pointer searchbtn">
                          Search
                        </div>
                      </div>
                    </li>
                  )}
                </>
              </ul>
            </ScrollAnimation>
          </section>
          <section className="scriptbottomsection mt-0">
            {/* start first script */}
            <div className="botharticle">
              <ScrollAnimation
                animateIn="pulse"
                durationAppear={1000}
                component="div"
              >
                <article className="scriptbottomsectionarticle grow front">
                  <div className="scriptbottomsectionarticlenote">
                    <h5 className="scriptbottomsectionarticletitle text-primary">
                      Dead or Alive
                    </h5>
                    <p className="scriptbottomsectionarticletext">
                      <img src={doa} alt="" className="frontimage" />
                    </p>
                    <button className="btn articlebutton">view more</button>
                  </div>
                </article>
                <article className="scriptbottomsectionarticle mt-4 grow back">
                  <div className="scriptbottomsectionarticlenote">
                    <h5 className="scriptbottomsectionarticletitle text-primary">
                      Horror Movie
                    </h5>
                    <p className="scriptbottomsectionarticletext">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur...
                    </p>
                    <button className="btn articlebutton">Buy Now</button>
                  </div>
                </article>
              </ScrollAnimation>
            </div>
            {/* end first script */}
            {/* start first script */}
            <div className="botharticle">
              <ScrollAnimation
                animateIn="pulse"
                durationAppear={1000}
                component="div"
              >
                <article className="scriptbottomsectionarticle mt-4 grow front">
                  <div className="scriptbottomsectionarticlenote">
                    <h5 className="scriptbottomsectionarticletitle text-primary">
                      Romeo and Juliet
                    </h5>
                    <p className="scriptbottomsectionarticletext">
                      <img src={raj} alt="" className="frontimage" />
                    </p>
                    <button className="btn articlebutton">view more</button>
                  </div>
                </article>
                <article className="scriptbottomsectionarticle mt-4 grow back">
                  <div className="scriptbottomsectionarticlenote">
                    <h5 className="scriptbottomsectionarticletitle text-primary">
                      Romance Movie
                    </h5>
                    <p className="scriptbottomsectionarticletext">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur...
                    </p>
                    <button className="btn articlebutton">Buy Now</button>
                  </div>
                </article>
              </ScrollAnimation>
            </div>
            {/* end first script */}
            {/* start first script */}
            <div className="botharticle">
              <ScrollAnimation
                animateIn="pulse"
                durationAppear={1000}
                component="div"
              >
                <article className="scriptbottomsectionarticle mt-4 grow front">
                  <div className="scriptbottomsectionarticlenote">
                    <h5 className="scriptbottomsectionarticletitle text-primary">
                      Twilight
                    </h5>
                    <p className="scriptbottomsectionarticletext">
                      <img src={twilight} alt="" className="frontimage" />
                    </p>
                    <button className="btn articlebutton">view more</button>
                  </div>
                </article>
                <article className="scriptbottomsectionarticle mt-4 grow back">
                  <div className="scriptbottomsectionarticlenote">
                    <h5 className="scriptbottomsectionarticletitle text-primary">
                      Thriller
                    </h5>
                    <p className="scriptbottomsectionarticletext">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur...
                    </p>
                    <button className="btn articlebutton">Buy Now</button>
                  </div>
                </article>
              </ScrollAnimation>
            </div>
            {/* end first script */}
            {/* start first script */}
            <div className="botharticle">
              <ScrollAnimation
                animateIn="pulse"
                durationAppear={1000}
                component="div"
              >
                <article className="scriptbottomsectionarticle mt-4 grow front">
                  <div className="scriptbottomsectionarticlenote">
                    <h5 className="scriptbottomsectionarticletitle text-primary">
                      The Last Man on Earth
                    </h5>
                    <p className="scriptbottomsectionarticletext">
                      <img src={lastman} alt="" className="frontimage" />
                    </p>
                    <button className="btn articlebutton">view more</button>
                  </div>
                </article>
                <article className="scriptbottomsectionarticle mt-4 grow back">
                  <div className="scriptbottomsectionarticlenote">
                    <h5 className="scriptbottomsectionarticletitle text-primary">
                      Short Film
                    </h5>
                    <p className="scriptbottomsectionarticletext">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur...
                    </p>
                    <button className="btn articlebutton">Buy Now</button>
                  </div>
                </article>
              </ScrollAnimation>
            </div>
            {/* end first script */}
            {/* start first script */}
            <div className="botharticle">
              <ScrollAnimation
                animateIn="pulse"
                durationAppear={1000}
                component="div"
              >
                <article className="scriptbottomsectionarticle mt-4 grow front">
                  <div className="scriptbottomsectionarticlenote">
                    <h5 className="scriptbottomsectionarticletitle text-primary">
                      Narcos
                    </h5>
                    <p className="scriptbottomsectionarticletext">
                      <img src={narcos} alt="" className="frontimage" />
                    </p>
                    <button className="btn articlebutton">view more</button>
                  </div>
                </article>
                <article className="scriptbottomsectionarticle mt-4 grow back">
                  <div className="scriptbottomsectionarticlenote">
                    <h5 className="scriptbottomsectionarticletitle text-primary">
                      Long Film
                    </h5>
                    <p className="scriptbottomsectionarticletext">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur...
                    </p>
                    <button className="btn articlebutton">Buy Now</button>
                  </div>
                </article>
              </ScrollAnimation>
            </div>
            {/* end first script */}
            {/* start first script */}
            <div className="botharticle front">
              <ScrollAnimation
                animateIn="pulse"
                durationAppear={1000}
                component="div"
              >
                <article className="scriptbottomsectionarticle mt-4 grow front">
                  <div className="scriptbottomsectionarticlenote">
                    <h5 className="scriptbottomsectionarticletitle text-primary">
                      John Wick
                    </h5>
                    <p className="scriptbottomsectionarticletext">
                      <img src={johnwick} alt="" className="frontimage" />
                    </p>
                    <button className="btn articlebutton">view more</button>
                  </div>
                </article>
                <article className="scriptbottomsectionarticle mt-4 grow back">
                  <div className="scriptbottomsectionarticlenote">
                    <h5 className="scriptbottomsectionarticletitle text-primary">
                      Action Movie
                    </h5>
                    <p className="scriptbottomsectionarticletext">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur...
                    </p>
                    <button className="btn articlebutton">Buy Now</button>
                  </div>
                </article>
              </ScrollAnimation>
            </div>
            {/* end first script */}
          </section>
        </main>
        {/* end latestscript */}

        {/* start recognition */}
        <div className="recognition d-flex justify-between">
          <ScrollAnimation
            animateIn="fadeInLeft"
            durationAppear={1000}
            component="div"
          >
            <h3 className="recognitiontitle">RECOGNIZED AS A TOP AGENCY BY</h3>
          </ScrollAnimation>
          <div className="recognitionright">
            <ScrollAnimation
              animateIn="zoomIn"
              durationAppear={1000}
              component="div"
            >
              <img src={iroko} alt="iroko" className="irokoimg" />
              <img src={ibaka} alt="ibaka" className="ibakaimg" />
            </ScrollAnimation>
          </div>
        </div>
        {/* end recognition */}

        {/* start testimonial */}
        <main>
          <h3 className="maintestimonial">Testimonials</h3>
          <div className="testimonialcontainer">
            <section className="testimonialsectionleft">
              <InnerSlider />
            </section>
            <section className="testimonialsectionright">
              {/* start first */}
              <div className="awardcontainer">
                {/* <ScrollAnimation
                  animateIn="zoomIn"
                  durationAppear={1000}
                  component="div"
                > */}
                  <p className="awardnumber">69</p>
                  <p className="awardtext">Award Won</p>
                {/* </ScrollAnimation> */}
              </div>
              {/* end first */}
              {/* start second */}
              <div className="clientscontainer">
                {/* <ScrollAnimation
                  animateIn="bounceInRight"
                  durationAppear={1000}
                  component="div"
                > */}
                  <p className="clientsnumber">456</p>
                  <p className="clientstext">Happy Clients</p>
                {/* </ScrollAnimation> */}
              </div>
              {/* end second */}
              {/* start third */}
              <div className="employeescontainer">
                {/* <ScrollAnimation
                  animateIn="zoomIn"
                  durationAppear={1000}
                  component="div"
                > */}
                  <p className="employeesnumber">599</p>
                  <p className="employeestext">Employees</p>
                {/* </ScrollAnimation> */}
              </div>
              {/* end third */}
              {/* start fourth */}
              <div className="projectscontainer">
                {/* <ScrollAnimation
                  animateIn="bounceInRight"
                  durationAppear={1000}
                  component="div"
                > */}
                  <p className="projectsnumber">780</p>
                  <p className="projectstext">Script Coverages</p>
                {/* </ScrollAnimation> */}
              </div>
              {/* end fourth */}
            </section>
          </div>
        </main>
        {/* end testimonial */}

        {/* start footer */}
        <div className="footercontainer">
          <footer className="footertop">
            {/* start footertopleft */}
            <div className="footertopleft">
              <div>
                <h3 className="footertoplefttitle">
                  Screenplay <span className="text-white">|</span>
                </h3>
              </div>
              <p className="footertoplefttext">
                Screenplay is Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            {/* end footertopleft */}
            {/* start footertopmiddle */}
            <div className="footertopmiddle">
              <h2 className="footertopmiddletitle">Latest Tweets</h2>
              <ul className="footertopmiddlelists">
                <li className="footertopmiddlelist">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="footertopmiddlelisticon"
                  />
                  <p className="footertopmiddlelisttext">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </li>
                <li className="footertopmiddlelist">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="footertopmiddlelisticon"
                  />
                  <p className="footertopmiddlelisttext">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </li>
              </ul>
            </div>
            {/* end footertopmiddle */}
            {/* start footertopright */}
            <div className="footertopright">
              <h2 className="footertoprighttitle">Screenplay Letters</h2>
              <input type="text" className="footerinput" />
              <button type="submit" className="btn footersubmit">
                Submit
              </button>
            </div>
            {/* end footertopright */}
          </footer>
          {/* end footertop */}
          {/* start footerbottom */}
          <footer className="footerbottom">
            <div className="footerbottomleft">
              <p className="footerbottomlefttext">
                &copy; {date} Copyright. All right reserved
              </p>
            </div>
            <div className="footerbottomright">
              <FontAwesomeIcon
                icon={faFacebook}
                className="footerbottomrighticon"
              />
              <FontAwesomeIcon
                icon={faSkype}
                className="footerbottomrighticon"
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className="footerbottomrighticon"
              />
            </div>
          </footer>
          {/* end footerbottom */}
        </div>
        {/* end footer */}
      </React.Fragment>
    );
  }


export default Home;
