import { useState } from 'react'
import styles from './Header.module.scss'
import { Link, Route } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'

const Header = () => {
  const [showNavigation, setShowNavigation] = useState<boolean>(false);

  const showNavigationHandler = () => {
    setShowNavigation(prev => !prev)
  }

/*   const cssBtnStyles = [styles['header__nav-btn'], showNavigation ? styles['header__nav-btn--close'] : '']
 */
  return (
    <header className={styles.header}>
      <div className={styles['header__container']}>
        <Link to="/" className={styles['header__logo']} />
        <button 
          className={!showNavigation ? styles['header__nav-btn'] : styles['header__nav-btn--close'] } 
          onClick={showNavigationHandler} />
      </div>
      {showNavigation && <Navigation closeNavigation={showNavigationHandler} />}
    </header>
  )
}

export default Header

