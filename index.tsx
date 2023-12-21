import { FC, useEffect } from "react";
import Image from "next/image";

import cn from "classnames";

import { useManageBrowserTab } from "portfolio/hooks/ManageBrowserTab";

import logo from "./assets/images/logo.png";

import mainBunner from "./assets/images/Frame 427320512.png";
import mainImg from "./assets/images/Frame 162644.jpg";

import secondSectionImg from "./assets/images/Frame 427320464.png";

import thirdSectionBgc from "./assets/images/Frame 427320477 (2).png";

import fourthSectionBgk1 from "./assets/images/Frame 427320519.png";
import fourthSectionBgk2 from "./assets/images/Frame 427320520.png";

import bookingIcon from "./assets/icon/Frame 427320456.png";
import arrowIcon from "./assets/icon/arrow-down.png";
import blueArrowIcon from "./assets/icon/arrow-down (1).png";
import searchIcon from "./assets/icon/Frame 51432.png";

import classes from "./SurfingServices.module.scss";

export const SurfingServicesPage: FC = () => {
  const { updateTabIcon } = useManageBrowserTab();

  useEffect(() => {
    updateTabIcon(logo);
  }, [updateTabIcon]);

  return (
    <>
      <div className={classes.SurfingServicesPage}>
        <header className={classes.header}>
          <div className={classes.homeBtn}>
            <Image src={logo} alt="" />
            <span>Peselancar</span>
          </div>
          <nav>
            <a href="#">Home</a>
            <a href="#">Features</a>
            <a href="#">About Us </a>
          </nav>
          <button className={cn(classes.login, classes.btn)}>Login</button>
        </header>

        <div className={cn(classes.mainSection, classes.container)}>
          <div className={classes.row}>
            <div className={classes.column}>
              <div className={cn(classes.bunner, classes.plate)}>
                <Image src={mainBunner} alt="" />
              </div>
              <div className={classes.contentInfo}>
                <div className={classes.tag}>#1 Surfing Spot</div>
                <h1 className={classes.title}>
                  Lets have a nice surfing workout
                </h1>
                <p className={classes.description}>
                  get a satisfying surfing experience from you leave, surf until
                  you go home, let’s book your schedule
                </p>
                <button className={classes.btn}>
                  <Image src={bookingIcon} alt="" />
                  Book Now
                  <Image src={arrowIcon} alt="" />
                </button>
              </div>
            </div>
            <div className={classes.column}>
              <div className={cn(classes.slider, classes.plate)}>
                <div className={classes.slide}>
                  <Image src={mainImg} alt="" />
                </div>
                <div className={classes.sliderSteper}>
                  <div className={cn(classes.step, classes.active)}></div>
                  <div className={classes.step}></div>
                  <div className={classes.step}></div>
                  <div className={classes.step}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.secondSection}>
          <Image
            src={secondSectionImg}
            className={classes.secondSectionBgc}
            alt=""
          />

          <div className={classes.textBlock}>
            <h2 className={classes.title}>Zacky Yondaime</h2>
            <h3 className={classes.subTitle}>athlete</h3>
            <p className={classes.description}>
              I am very happy with the complete package service provided by this
              surfer, just don`t disappoint
            </p>
          </div>
        </div>
        <div className={classes.thirdSection}>
          <Image src={thirdSectionBgc} alt="" />
          <div className={classes.contentInfo}>
            <h2 className={classes.title}>Find us only in</h2>
            <h2 className={classes.title}> these places</h2>
            <p className={classes.description}>
              we are already present in various parts of the world in strategic
              beach locations for all of you
            </p>

            <div className={classes.pickLocationBlock}>
              <input type="text" defaultValue={"Pickup Location"} />
              <Image src={blueArrowIcon} className={classes.blueArrow} alt="" />
              <input type="text" defaultValue={"Destination Location"} />
              <button className={classes.searchBtn}>
                <Image src={searchIcon} alt="" />
              </button>
            </div>
          </div>
        </div>

        <div className={cn(classes.fourthSection, classes.container)}>
          <div className={classes.row}>
            <div className={classes.column}>
              <div className={cn(classes.bunner, classes.plate)}>
                <Image src={fourthSectionBgk1} alt="" />
              </div>
            </div>
            <div className={classes.column}>
              <div className={classes.content}>
                <div className={classes.title}>Best Packages</div>
                <div className={classes.typography}>
                  there are 2 packages for you
                </div>
                <div className={classes.badge}>01</div>
                <div className={classes.subtitle}>
                  Accompanied by a professional tour guide
                </div>
                <div className={classes.typography}>
                  Our professional tour guide will tell you about the Beach and
                  the nation
                </div>
              </div>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.column}>
              <div className={classes.content}>
                <div className={classes.title}>Best Packages</div>
                <div className={classes.typography}>
                  there are 2 packages for you
                </div>
                <div className={classes.badge}>02</div>
                <div className={classes.subtitle}>Shuttle by plane</div>
                <div className={classes.typography}>
                  We will pick up and drop you off right away
                </div>
              </div>
            </div>
            <div className={classes.column}>
              <div className={cn(classes.bunner, classes.plate)}>
                <Image src={fourthSectionBgk2} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className={classes.fifthSection}>
          <div className={classes.titleBlock}>
            <h2 className={classes.title}>Let`s have a nice surfing workout</h2>
            <h2 className={classes.title}>with Peselancar</h2>
          </div>
          <div className={classes.delimiterLine}>
            <h3 className={classes.sectionName}>Our Awesome Client </h3>
          </div>
          <div className={classes.feedbackList}>
            <p className={classes.feedback}>
              “ Not like your typical general contractor”
            </p>
            <p className={classes.feedback}>
              “ Sit back while neglected bathrooms are remade”
            </p>
            <p className={classes.feedback}>
              Handles the full remodel from start to finish
            </p>
            <p className={classes.feedback}>
              “ A San Francisco based home renovation startup”
            </p>
            <p className={classes.feedback}>
              “Echnology driven home renovations”
            </p>
          </div>
        </div>

        <footer className={classes.footer}>
          <div className={classes.row}>
            <div className={classes.column}>
              <h3 className={classes.title}>Peselancar</h3>
              <p>weekday, fit your wear with us</p>
              <p>
                Copyright © 2022 - 2023 First Boulevard. All rights reserved.
              </p>
            </div>
            <div className={classes.column}>
              <h5 className={classes.listTitle}>About Us</h5>
              <p>Project</p>
              <p>Track Record</p>
              <p>Pricing</p>
              <p>Services</p>
              <p>Professional Worker</p>
            </div>
            <div className={classes.column}>
              <h5 className={classes.listTitle}>Pricing</h5>
              <p>About Product</p>
              <p>Management</p>
            </div>
            <div className={classes.column}>
              <h5 className={classes.listTitle}>Media</h5>
              <p>Privacy Police</p>
              <p>Development</p>
              <p>Terms & Service</p>
            </div>
            <div className={classes.column}>
              <h5 className={classes.listTitle}>Contact</h5>
              <p>(000) 000 00 00</p>
            </div>
          </div>
          <div className={classes.row}>
            <p>
              By using this website, you understand the information being
              presented is provided for informational purposes only
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default SurfingServicesPage;
