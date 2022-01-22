import { useEffect, useState } from 'react';
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

/*   useEffect(() => {
    if(mediaQuery) setShowNavigation(true)
  }, [mediaQuery]) */


/*   const cssBtnStyles = [styles['header__nav-btn'], showNavigation ? styles['header__nav-btn--close'] : '']
 */
  return (
    <header className={styles['header__container']}>
        <div className={styles['header__logo-container']} >
          <Link to="/" className={styles['header__logo']} />
        </div>
        {!mediaQuery && <button 
          className={!showNavigation ? styles['header__nav-btn'] : styles['header__nav-btn--close'] } 
          onClick={showNavigationHandler} />}
 {/*        {(showNavigation || mediaQuery) && <Navigation closeNavigation={showNavigationHandler} />} */}
        <Navigation 
          closeNavigation={showNavigationHandler} 
          showNavigation={showNavigation}
        
        />
    </header>
  )
}

export default Header

