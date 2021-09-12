import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/SimpleCount">SimpleCount</Link>
        </li>
        <li>
          <Link to="/ReduxCount">ReduxCount</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
