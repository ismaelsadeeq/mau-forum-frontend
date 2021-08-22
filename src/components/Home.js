import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import library from './assets/pictures/e-library.png'
import styles from './stylesheets/homeStyle.module.css'
import musti from './assets/pictures/musty1.png'
import nana from './assets/pictures/building.png'
import coders from './assets/pictures/programmers.png'
import taju from './assets/pictures/tajuW.png'
import taju2 from './assets/pictures/tajuP.png'

function Home() {
  return (
    <div>
      < Nav />
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
              <div className={styles.sub}>
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
        <hr className={styles.break} />
        <div className={styles.section}>
            <div>
              <img src={coders} />
              <h6>Computer Science Department  launches mautech forum</h6>
              <p className={styles.subPosts}>The Student of the department presents a mautech forum to the vice chancellor of the university Prof Abdullahi Liman Tukur</p>
              <span>5 Min ago</span><span>| Abubakar Sadiq</span>
            </div>
            <div>
              <img src={coders} />
              <h6>Computer Science Department  launches mautech forum</h6>
              <p className={styles.subPosts}>The Student of the department presents a mautech forum to the vice chancellor of the university Prof Abdullahi Liman Tukur</p>
              <span>5 Min ago</span><span>| Abubakar Sadiq</span>
            </div>
            <div>
              <img src={coders} />
              <h6>Computer Science Department  launches mautech forum</h6>
              <p className={styles.subPosts}>The Student of the department presents a mautech forum to the vice chancellor of the university Prof Abdullahi Liman Tukur</p>
              <span>5 Min ago</span><span>| Abubakar Sadiq</span>
            </div>
            <div>
              <img src={coders} />
              <h6>Computer Science Department  launches mautech forum</h6>
              <p className={styles.subPosts}>The Student of the department presents a mautech forum to the vice chancellor of the university Prof Abdullahi Liman Tukur</p>
              <span>5 Min</span><span>| Abubakar Sadiq</span>
            </div>
        </div>
        <div>
          <section className={styles.section}>
            <div>
              <div>
                <h3>Politics</h3>
                <img src={taju}></img>
                <h6>Comrade Sadiq emerges the winner of the just concluded SUG Election</h6>
              </div>
               <hr></hr>
              <div className={styles.section2SubPst}>
                <img src={taju2}></img>
                <p>The Student of the department presents a mautech forum to the vice chancellor of the university Prof Abdullahi Liman Tukur</p>
              </div>
               <hr></hr>
              <div className={styles.section2SubPst}>
                <img src={taju2}></img>
                <p>The Student of the department presents a mautech forum to the vice chancellor of the university Prof Abdullahi Liman Tukur</p>
              </div>
               <hr></hr>
              <div className={styles.section2SubPst}>
                <img src={taju2}></img>
                <p>The Student of the department presents a mautech forum to the vice chancellor of the university Prof Abdullahi Liman Tukur</p>
              </div>
               <hr></hr>
            </div>
            <div>
            <div>
              <h3>Politics</h3>
              <img src={taju}></img>
              <h6>Comrade Sadiq emerges the winner of the just concluded SUG Election</h6>
            </div>
            <hr></hr>
            <div className={styles.section2SubPst}>
              <img src={taju2}></img>
              <p className={styles.subParagraph}>The Student of the department presents a mautech forum to the vice chancellor of the university Prof Abdullahi Liman Tukur</p>
            </div>
            <hr></hr>
            <div className={styles.section2SubPst}>
              <img src={taju2}></img>
              <p className={styles.subParagraph}>The Student of the department presents a mautech forum to the vice chancellor of the university Prof Abdullahi Liman Tukur</p>
            </div>
            <hr></hr>
            <div className={styles.section2SubPst}>
              <img src={taju2}></img>
              <p className={styles.subParagraph}>The Student of the department presents a mautech forum to the vice chancellor of the university Prof Abdullahi Liman Tukur</p>
            </div>
            <hr></hr>
          </div>
          <div>
            <div>
              <h3>Politics</h3>
              <img src={taju}></img>
              <h6>Comrade Sadiq emerges the winner of the just concluded SUG Election</h6>
            </div>
            <hr></hr>
            <div className={styles.section2SubPst}>
              <img src={taju2}></img>
              <p className={styles.subParagraph}>The Student of the department presents a mautech forum to the vice chancellor of the university Prof Abdullahi Liman Tukur</p>
            </div>
            <hr></hr>
            <div className={styles.section2SubPst}>
              <img src={taju2}></img>
              <p className={styles.subParagraph}>The Student of the department presents a mautech forum to the vice chancellor of the university Prof Abdullahi Liman Tukur</p>
            </div>
            <hr></hr>
            <div className={styles.section2SubPst}>
              <img src={taju2}></img>
              <p className={styles.subParagraph}>The Student of the department presents a mautech forum to the vice chancellor of the university Prof Abdullahi Liman Tukur</p>
            </div>
            <hr></hr>
          </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
