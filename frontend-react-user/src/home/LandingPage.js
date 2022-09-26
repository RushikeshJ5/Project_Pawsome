import React from "react";
import "./LandingPage.css";
import letsplay from "../images/pawsomelogo2.png";

const LandingPage = () => {
  return (
    <>
      <section class="home-banner">
        <div class="banner-bg">
          <video
            playsinline="playsinline"
            autoplay="autoplay"
            muted="muted"
            loop="loop"
          >
            <source
              src="https://media.istockphoto.com/videos/young-girl-holding-her-dog-a-cute-beige-pug-puppy-is-trying-to-lick-video-id1280117264"
              type="video/mp4"
            ></source>
          </video>
          <div class="container-fluid h-100">
            <div class="row h-100 d-flex align-items-center">
              <div class="col-md-6 d-md-none">
                {/* <div class="banner-img-wrap">
                  <img
                    src="https://www.playspots.in/wp-content/themes/playspots/assets/images/phone2.png"
                    class="img-fluid left-img"
                    alt=""
                  />
                  <img
                    src="https://www.playspots.in/wp-content/themes/playspots/assets/images/phone1.png"
                    class="img-fluid right-img"
                    alt=""
                  />
                </div> */}
              </div>
              <div class="col-md-12">
                <div class="banner-caption-wrap">
                  <h1 class="tlt">
                    <br />
                    <br />
                  </h1>
                  {/* {<img class="logo" height="25px" src={letsplay}></img>} */}

                  <h3 class="tlt">
                    <h2>Whoof Whoof</h2>
                  </h3>
                  <h2>Don't Shop, Adopt!!</h2>
                  <div class="banner-btns">
                    {/* <a href="/home" class="btn green-btn">
                      To Book Venue
                    </a> */}

                    {/* <a href="/#" class="btn trans-btn">
                      To Get Listed
                    </a> */}
                  </div>
                </div>
              </div>
              <div class="col-md-6 d-none d-md-block">
                <div class="banner-img-wrap">
                  {/* <img
                    src="https://pngimg.com/uploads/cricket/cricket_PNG126.png"
                    // src="https://www.playspots.in/wp-content/themes/playspots/assets/images/phone2.png"
                    class="img-fluid left-img"
                    alt=""
                  /> */}
                  {/* <img
                    src="http://pngimg.com/uploads/football_player/small/football_player_PNG4.png"
                    //  src="http://pngimg.com/uploads/cricket/cricket_PNG105.png"

                    // src="https://www.playspots.in/wp-content/themes/playspots/assets/images/phone1.png"
                    class="img-fluid right-img"
                    alt=""
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ***************** */}

      <section class="app-features-section">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-4">
              <div class="feature-wrap wow animated fadeIn slow">
                <img
                  src="https://www.playspots.in/wp-content/uploads/2020/02/search.png"
                  class="img-fluid wow animated bounceIn slower"
                  alt="Playspots"
                />
                <h4 class="wow animated fadeInUp slow">Search</h4>
                <div class="content">
                  <p>
                    Are you looking for a perfect pet dog,just borrow some time and 
                    Explore our site to find one.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="feature-wrap wow animated fadeIn slow">
                <img
                  src="https://i.pinimg.com/474x/94/35/ab/9435ab05a3dcbc350ae8d044db860895.jpg"
                  class="img-fluid wow animated bounceIn slower"
                  alt="Playspots"
                />
                <h4 class="wow animated fadeInUp slow">Adopt</h4>
                <div class="content">
                  <p>
                    Once you’ve found the perfect perfect pet dog, all you have
                    to do is Adopt one of them and Caress them.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="feature-wrap wow animated fadeIn slow">
                <img
                  src="https://static.thenounproject.com/png/259878-200.png"
                  class="img-fluid wow animated bounceIn slower"
                  alt="Playspots"
                />
                <h4 class="wow animated fadeInUp slow">Care</h4>
                <div class="content">
                  <p>
                    After adoption all you have to do is take care of your
                    pet Dog, just explore through our site to find Vets and 
                    tips and tricks to keep your dog happy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
