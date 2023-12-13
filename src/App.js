import React from 'react';
import "./App.css";
import RectangleImage from './assets/Rectangle.png';
import Rectangle48 from './assets/Rectangle48.png';
import logo1Image from './assets/logo1.png';
import logo2Image from './assets/logo2.png';
import Rectangle1 from './assets/Rectangle1.png';
import Rectangle47 from './assets/Rectangle47.png';
import Rectangle2 from './assets/Rectangle2.png';
import Rectangle3 from './assets/Rectangle3.png';
import Rectangle4 from './assets/Rectangle4.png';


const App = () => {
  return (
    <div className="desktop-5">
      <div className="desktop-header-light-7">
        <div className="desktop-navbar">
          <div className="left">
            <div className="bella-olonje-logo-111-1-wrapper">
              <img
                className="bella-olonje-logo-111-1"
                alt="Logo"
                src={logo1Image}
              />
            </div>
          </div>
          <div className="right">
            <div className="desktop-menu">
              <div className="text-link">
                <div className="home">Home</div>
              </div>
              <div className="text-link1">
                <div className="home">Product</div>
              </div>
              <div className="text-link1">
                <div className="home">Faq</div>
              </div>
              <div className="text-link1">
                <div className="home">Contact</div>
              </div>
            </div>
          </div>
        </div>
        <div className="desktop-hero-light-1">
          <img
            className="desktop-hero-light-1-child"
            alt="Rectangle Image"
            src={Rectangle48} 
          />
          <div className="text-content">
            <b className="food-app">Food app</b>
            <div className="h1">
              <b className="why-stay-hungry-container">
                <p className="why-stay-hungry">{`Why stay hungry when `}</p>
                <p className="why-stay-hungry">
                  you can order form Bella Onojie
                </p>
              </b>
            </div>
            <div className="h4">
              <div className="download-the-bella">
                Download the bella onoje’s food app now on
              </div>
            </div>
          </div>
          <div className="big-button">
            <div className="master-button">
              <div className="text-button">
                <b className="app-store">App store</b>
              </div>
            </div>
          </div>
          <div className="big-button1">
            <div className="master-button1">
              <div className="text-button">
                <b className="play-store">Playstore</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rectangle-parent">
        <img className="rectangle-icon" src={Rectangle2} alt="Rectangle Image" />
        <img className="rectangle-icon1" src={RectangleImage} alt="Rectangle Image" />
      </div>
      <div className="hr" />
      <div className="desktop-hero-light-5">
        <div className="content">
          <div className="text-content-wrapper">
            <div className="text-content1">
              <div className="h3">
                <b className="create-an-account">Create an account</b>
              </div>
              <div className="h2">
                <b className="createlogin-to-an-container">
                  <p className="why-stay-hungry">Create/login to an existing</p>
                  <p className="why-stay-hungry">account to get started</p>
                </b>
              </div>
              <div className="h41">
                <div className="an-account-is-container">
                  <p className="why-stay-hungry">
                    An account is created with your email
                  </p>
                  <p className="why-stay-hungry">and a desired password</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="rectangle-icon2" alt="" src={Rectangle1} />
      </div>
      <div className="desktop-hero-light-10">
        <div className="content">
          <div className="text-content-wrapper">
            <div className="text-content1">
              <div className="h3">
                <b className="create-an-account">Checkout</b>
              </div>
              <div className="h2">
                <b className="createlogin-to-an-container">
                  <p className="why-stay-hungry">When you done check out</p>
                  <p className="why-stay-hungry">and get it delivered.</p>
                </b>
              </div>
              <div className="h41">
                <div className="an-account-is-container">
                  <p className="why-stay-hungry">{`When you done check out and get it `}</p>
                  <p className="why-stay-hungry">delivered with ease.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="rectangle-icon3" alt="" src={Rectangle4}  />
      </div>
      <div className="desktop-hero-light-9">
        <div className="content">
          <div className="text-content-frame">
            <div className="text-content1">
              <div className="h3">
                <b className="create-an-account">Explore varieties</b>
              </div>
              <div className="h2">
                <b className="createlogin-to-an-container">
                  <p className="why-stay-hungry">Shop for your favorites</p>
                  <p className="why-stay-hungry">meal as e dey hot.</p>
                </b>
              </div>
              <div className="h41">
                <div className="an-account-is-container">
                  <p className="why-stay-hungry">
                    Shop for your favorite meals or drinks
                  </p>
                  <p className="why-stay-hungry">and enjoy while doing it.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="rectangle-icon4" alt="" src={Rectangle3}  />
      </div>
      <div className="desktop-hero-light-8">
        <img
          className="desktop-hero-light-8-child"
          alt=""
          src={Rectangle47}
        />
        <div className="text-content4">
          <div className="text-link1">
            <b className="createlogin-to-an-container">Download the app now.</b>
          </div>
          <div className="h44">
            <div className="an-account-is-container">
              Available on your favorite store. Start your premium experience
              now
            </div>
          </div>
        </div>
        <div className="action-content">
          <div className="buttons">
            <div className="second-button">
              <div className="text-button2">
                <b className="playstore1">Playstore</b>
              </div>
            </div>
            <div className="button">
              <div className="text-button2">
                <b className="playstore1">App store</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="desktop-footer-light-2">
        <div className="content-logo-light">
          <img className="image-12-icon" alt="" src={logo2Image} />
        </div>
        <div className="subtitle">
          <b className="copywright-2020-bella">
            Copywright 2020 Bella Onojie.com
          </b>
        </div>
        <div className="social-media">
          <img
            className="ant-designtwitter-outlined-icon"
            alt=""
            src="/antdesigntwitteroutlined.svg"
          />
          <img
            className="ant-designtwitter-outlined-icon"
            alt=""
            src="/antdesignfacebookfilled.svg"
          />
          <div className="ant-designtwitter-outlined-icon" />
        </div>
        <img className="instagram-icon" alt="" src="/instagram.svg" />
      </div>
      <div className="how-the-app">How the app works</div>
    </div>
  );
};

export default App;

