import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './Components/Layout/Header';
import { Register } from './Components/Auth/Register';
import { Login } from './Components/Auth/Login';
import { OtpVerification } from './Components/Auth/OtpVerification';

import { Home } from './Components/Home/Home';
import { About } from './Components/AboutUs/About';
import { ReportOnline } from './Components/E-FIR/ReportOnline';
import { VehicleFIR } from './Components/E-FIR/VehicleFIR';
import { KidnappingFIR } from './Components/E-FIR/KidnappingFIR';
import { GeneralFIR } from './Components/E-FIR/GeneralFIR';
import { ComplainsList } from './Components/E-FIR/ComplainsList';
import { CityInfo } from './Components/CityInfo/CityInfo';

import { ViewStatus } from './Components/ViewStatus';
import { IasProfile } from './Components/IasProfile';
import { Notice } from './Components/Notice';
import { CitizenInformation } from './Components/CitizenInformation';
import { ArrestedPersonList } from './Components/ArrestedPerson';
import { Verification } from './Components/Verification';
import { CharacterVerification } from './Components/CharacterVerification';
import { PersonInfoCharacter } from './Components/PersonInfoForCh';
import { AddressforCharacter } from './Components/AddressforCharacter';
import { Oath } from './Components/Oath';
import { CharacterPayment } from './Components/CharacterVerifyPayment';
import { TenantPg } from './Components/TenantPg';
import { DomesticHelperNo } from './Components/DomesticHelper';
import { Act } from './Components/Act';
import News from './Components/Allnews';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/register' element={<Register />} />
          <Route path='/verify' element={<OtpVerification />} />
          <Route path='/login' element={<Login />} />

          <Route path='/report' element={<ReportOnline />} />
          <Route path='/generalFIR' element={<GeneralFIR />} />
          <Route path='/kidnappingFIR' element={<KidnappingFIR />} />
          <Route path='/vehicleFIR' element={<VehicleFIR />} />
          <Route path='/myComplains' element={<ComplainsList />} />
          <Route path='/cityInfo' element={<CityInfo />} />


          <Route path='/view' element={<ViewStatus />} />
          <Route path='/iasprofile' element={<IasProfile />} />
          <Route path='/notice' element={<Notice />} />
          <Route path='/citizen-information' element={<CitizenInformation />} />
          <Route path='/arrestedpersons' element={<ArrestedPersonList />} />
          <Route path='/verification' element={<Verification />} />
          <Route path='/characterverification' element={<CharacterVerification />} />
          <Route path='/characterverification/personInfo' element={<PersonInfoCharacter />} />
          <Route path='/characterverification/addressinfo' element={<AddressforCharacter />} />
          <Route path='/characterverification/oath' element={<Oath />} />
          <Route path='/charterverification/payment' element={<CharacterPayment />} />
          <Route path='/verification/pg' element={<TenantPg />} />
          <Route path='/verification/domestic' element={<DomesticHelperNo />} />
          <Route path='/act' element={<Act />} />
          <Route path='/news' element={<News />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
