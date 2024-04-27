import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { NavigationBar } from './Components/Navigationbar';
import { Home } from './Components/Home';
import { Department } from './Components/Department';
import { MyComplaints } from './Components/Mycomplaints';
import { Signup } from './Components/Signup';
import { About } from './Components/About';
import { VerifyUser } from './Components/Verifyuser';
import { Login } from './Components/Login';
import { ReportOnline } from './Components/ReportOnline';
import { VehicleFir } from './Components/VehicleFir';
import { KidnapingReportFir } from './Components/KidnapingReportFir';
import { GeneralThiftFir } from './Components/GeneralThiftFir';
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
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/department' element={<Department />} />
        <Route path='/mycomplaints' element={<MyComplaints />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<About />} />
        <Route path='/verify' element={<VerifyUser />} />
        <Route path='/login' element={<Login />} />
        <Route path='/report' element={<ReportOnline />} />
        <Route path='/vehiclefir' element={<VehicleFir />}/>
        <Route path='/kidnapingreport' element={<KidnapingReportFir />}/>
        <Route path='/generalthiftfir' element={<GeneralThiftFir/>}/>
        <Route path='/view' element={<ViewStatus />}/>
        <Route path='/iasprofile' element={<IasProfile />}/>
        <Route path='/notice' element={<Notice />}/>
        <Route path='/citizen-information' element={<CitizenInformation />}/>
        <Route path='/arrestedpersons' element={<ArrestedPersonList />} />
        <Route path='/verification' element={<Verification />} />
        <Route path='/characterverification' element={<CharacterVerification/>} />
        <Route path='/characterverification/personInfo' element={<PersonInfoCharacter />}/>
        <Route path='/characterverification/addressinfo'element={<AddressforCharacter />}/>
        <Route path='/characterverification/oath' element={<Oath/>}/>
        <Route path='/charterverification/payment' element={<CharacterPayment/>}/>
        <Route path='/verification/pg' element={<TenantPg/>}/>
        <Route path='/verification/domestic' element={<DomesticHelperNo/>}/>
        <Route path='/act' element={<Act/>}/>
        <Route path='/news' element={<News/>}/>
      </Routes>
      
      </BrowserRouter>
       
    </div>
  );
}

export default App;
