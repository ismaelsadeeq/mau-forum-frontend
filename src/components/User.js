import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import styles from './stylesheets/user.module.css';

function User() {
  return (
    <div>
      <Nav />
      <div className={styles.user}>
        <div>
          <div>
            <div>
              hcj   
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default User
