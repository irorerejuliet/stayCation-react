
import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

import PaymentPage from './pages/PaymentPage';
import CompletePaymentPage from './pages/CompletePaymentPage';
import BookingPage from './pages/BookingPage';

const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/bookingpage" element={<BookingPage />} />
        <Route path="/paymentpage" element={<PaymentPage />} />
        <Route path="/completepaymentpage" element={<CompletePaymentPage />} />
      </Route>
    </Routes>
  );
};

export default App;
