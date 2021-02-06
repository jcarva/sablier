import { Outlet } from 'react-router-dom';
import Header from '../components/navigation/header/Header';

const Unauthenticated = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Unauthenticated;
