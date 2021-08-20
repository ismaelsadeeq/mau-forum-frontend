import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import {BsSearch} from 'react-icons/bs'
import styles from './stylesheets/navStyle.module.css'
function Nav() {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const [showSearh, setShowSearch]= useState(false)
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  const toggleSearch = () =>{
    setShowSearch(!showSearh);
  }
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);
  return (
    <nav>
    <div className={styles.navCenter}>
      <div className={`${styles.navHeader}`}>
        MAU INSIDER
        <button className={styles.navToggle} onClick={toggleLinks}>
          <FaBars />
        </button>
      </div>
      <div className={styles.linksContainer} ref={linksContainerRef}>
        <ul className={styles.links} ref={linksRef}>
          <li>
          <a href='/sign-in'>Sign in</a>
          </li>
          <li>
          <a href='/#home'>Home</a>
          </li>
          <li>
          <a href='/news'>News</a>
          </li>
          <li>
          <a href='/q-a'>Q & A</a>
          </li>
          <li>
          <a href='/events'>Events</a>
          </li>
          <li>
          <a href='/forum'>Forum</a>
          </li>
        </ul>
      </div>
      <div className={`${showLinks?styles.none:styles.searchDiv}`}>
        <input className={`${showSearh?styles.search:styles.toggleSearch}`} type="text" placeholder="Search" />
        <button className={`${styles.socialIcons} ${showSearh?'':`${styles.addMargin}`}`} onClick={toggleSearch} ><BsSearch /></button>
      </div>
    </div>
  </nav>
  )
}

export default Nav
