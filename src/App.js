import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Marketplace from './pages/marketplace/Marketplace';
import PropertyDetails from './pages/propertyDetails/PropertyDetails';
import Signup from './pages/Signup/Signup';
import Details from './pages/details/Details';
import Bid from './pages/bid/Bid';
import TokensForSale from './pages/tokenforsale/TokensForSale';
import Financials from './pages/financials/Financials';
import Profile from './pages/profile/Profile';
import AddProperty from './pages/addPropertyForm/AddProperty'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='addproperty' element={<AddProperty />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="propertydetails/:id" element={<PropertyDetails />}>
          <Route path='financials' element={<Financials />} />
          <Route path='details' element={<Details />} />
          <Route path="bid" element={<Bid />} />
          <Route path="tokensforsale" element={<TokensForSale />} />
          </Route>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
