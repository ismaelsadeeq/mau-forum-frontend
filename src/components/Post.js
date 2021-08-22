import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import library from './assets/pictures/e-library.png'
import styles from './stylesheets/post.Style.module.css'
import nibras from './assets/pictures/sadiqP.jpg'
import taju from './assets/pictures/tajuW.png'
import taju2 from './assets/pictures/tajuP.png'

function Post() {
  return (
    <div>
      < Nav />
      <div className={styles.post}>
        <div className={styles.section}>
          <div className={styles.expandedPost}>
            <div>
              <h3>NUC Approved college of Medical Science after long delibration</h3>
            </div>
            <div className={styles.author}>
              <img src={nibras}></img>
              <div>
                <span> By Tajuddeen, Mau</span>
                <span className={styles.time}> Posted 08:05:58 GMT 12th Aug 2021</span>
              </div>
            </div>
            <div>
              <img src={library}></img>
              <p>President Muhammadu Buhari has approved the establishment of five new universities specialised in technology and health to close the huge gap in the doctor-patient ratio as well as in medical research and production of pharmaceutical products. This brings the total number of federal universities to 50 and overall total to 201.
                  A take-off grant of N4 billion each for the Universities of Technology and N5 billion each for the Universities of Health Science from the funding resources of TETFund has also been approved to ensure early take-off of the institutions.
                  The Permanent Secretary at the Federal Ministry of Education, Arch Sonny Echono who disclosed this on Monday in Abuja said the president approved two additional University of Technology in Jigawa and Akwa Ibom states.
                  Also, the establishment of National Institute of Technology (NIT) in Abuja and two specialized universities in Health, Nutrition and Medical Sciences to be located at Azare, Bauchi State and Ila Orangun, Osun State.
                  Echono also disclosed that the president approved that four existing Universities of Technology located in Yola, Akure, Owerri and Minna be upgraded and equipped.
                  He said, “The two new Universities of Technology will be established in 2021 while the upgrade of the existing four Universities of Technology and the National Institute of Technology will come on stream next year.”
                  The Permanent Secretary said the specialized universities would lay a solid foundation for building national preparedness and resilience in anticipation of future challenges in the health sector while reducing medical tourism to countries like India, UAE, Egypt, Europe and the USA.
                  While noting that the presidents had promised to establish an apex National Institute of Technology (NIT) in Abuja with six Satellite Universities of Technology, one in each geo-political zone of the country, he said the objective is to stimulate rapid technological transformation of the country.
                  “The Institute shall be patterned after similar institutions in Singapore and Malaysia to serve essentially as a postgraduate centre devoted to research and innovation, drawing the best graduates from the six Universities of Technology, as well as other exceptional graduates from reputable universities within and outside Nigeria,” he said.
                  He however noted that the Federal Ministry of Education will collaborate with the Federal Ministries of Health, Science and Technology, Communications and Digital Economy, the FCT Administration as well as other relevant agencies and Institutions to facilitate speedy actualization of these Projects.
              </p>
            </div>
          </div>
          <div className={styles.aside}>
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
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Post
