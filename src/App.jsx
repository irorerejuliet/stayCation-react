
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Booking from './pages/Booking';
import Complete from './pages/Complete';
import Payment from './pages/Payment';



const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="booking" element={<Booking />} />
        <Route path="complete" element={<Complete />} />
        <Route path="payment" element={<Payment />} />
      </Route>
    </Routes>
  );
};

export default App;
