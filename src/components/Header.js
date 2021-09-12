import { Link } from 'react-router-dom';
import './App.scss';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">ReduxApp</Link>
      </div>
      <div className="app-menu">
        <ul>
          <li>
            <Link to="/SimpleCount">SimpleCount</Link>
          </li>
          <li>
            <Link to="/ReduxCount">ReduxCount</Link>
          </li>
          <li>
            <Link to="/Employee">従業員ページ</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
