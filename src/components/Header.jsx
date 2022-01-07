import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles['header-styles']}>
      <div className='container'>
        <h1>Feedback UI</h1>
      </div>
    </header>
  );
};

export default Header;
