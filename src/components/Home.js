import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import library from './assets/pictures/e-library.png'
import styles from './stylesheets/homeStyle.module.css'
import musti from './assets/pictures/musty1.png'
import nana from './assets/pictures/building.png'
function Home() {
  return (
    <div>
      <div>
      < Nav />
      </div>
      <div className={styles.home}>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>
        <div className={styles.mauNews}>
          <div className={styles.adminPost}>
              <div>
                <h4>Nuc approved college of Medical Science after long delibration</h4>
                <img src={library}></img>
                <p className={styles.fent}>The Nigerian University commision (Nuc) have approved the
                  college of medical sciences in MAU yola
                </p>
              </div>
              <div  className={`${styles.subPosts} ${styles.removeBottom} `}>
                <p>Analysis:  Conversion of Mautech to a conventional University the long awaited is now ready...</p>
              </div>
              <div className={`${styles.subPosts} ${styles.removeBottom}`}>
                <p>Senate Committe approve Result and suspend Convocation....</p>
              </div>
              <div className={`${styles.subPosts}`}>
                <p>Conversion of Mautech to a conventional University the long awaited is now ready...</p>
              </div>
          </div>
          <div className={styles.adminPost}>
              <div>
                <img src={musti}></img>
                <p className={styles.fent2}>School Portal now open for Registration for New student and Returning Student(Final Year) 
                </p>
              </div>
              <div className={`${styles.subPosts} ${styles.removeBottom}`}>
                <p>Registration Procedures and how to reserve a bed space Click here to view.</p>
              </div>
              <div className={styles.subPosts}>
                <p>Registration Procedures and how to reserve a bed space Click here to view.</p>
              </div>
              <div>
                <img src={nana} />
                <p>Accomodation Plug: Student suspend for selling out bedspace</p>
              </div>
          </div>
          <div className={styles.adminPost}>
              <div>
                <img src={musti}></img>
                <p className={styles.fent2}>School Portal now open for Registration for New student and Returning Student(Final Year) 
                </p>
              </div>
              <div className={`${styles.subPosts} ${styles.removeBottom}`}>
                <p>Registration Procedures and how to reserve a bed space Click here to view</p>
              </div>
              <div className={styles.subPosts}>
                <p>Registration Procedures and how to reserve a bed space Click here to view.</p>
              </div>
              <div>
                <img src={nana} />
                <p>Accomodation Plug: Student suspend for selling out bedspace</p>
              </div>
          </div>
        </div>
        <div>

        </div>
        <div>

        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
