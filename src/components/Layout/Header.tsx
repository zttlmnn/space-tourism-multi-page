import { useState } from 'react';
import styles from './Header.module.scss';
import useMediaQuery from "../../hooks/useMediaQuery";
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  const [showNavigation, setShowNavigation] = useState<boolean>(false);

  const mediaQuery = useMediaQuery("(min-width: 48em)");

  const showNavigationHandler = () => {
    setShowNavigation(prev => !prev)
  }


/*   const cssBtnStyles = [styles['header__nav-btn'], showNavigation ? styles['header__nav-btn--close'] : '']
 */
  return (
    <header className={styles.header}>
      <div className={styles['header__container']}>
        <Link to="/" className={styles['header__logo']} />
        {!mediaQuery && <button 
          className={!showNavigation ? styles['header__nav-btn'] : styles['header__nav-btn--close'] } 
          onClick={showNavigationHandler} />}
      </div>
      {(showNavigation || mediaQuery) && <Navigation closeNavigation={showNavigationHandler} />}
    </header>
  )
}

export default Header

