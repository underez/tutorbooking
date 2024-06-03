import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Header from "./Components/Header";
import FindTutors from "./Components/Pages/FindTutors"; 
import ContactUs from "./Components/Pages/ContactUs";
import ErrorPage from "./Components/Pages/404Page";
import SignIn from "./Components/Pages/SignIn";
import BookingPage from "./Components/Pages/Schedule";
import Profile from "./Components/Pages/Profile";
import TutorPage from "./Components/Pages/TutorPage";
import Footer from "./Components/Footer";
import ApplyToTeach from "./Components/Pages/ApplyToTeach";
import Register from "./Components/Pages/Register";
import StudentPage from "./Components/Pages/StudentPage";


function App() {
  return (
    <BrowserRouter>
      <div className="font-gilroy font-medium text-gray text-lg leading-[27px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FindTutors" element={<FindTutors />}  />
          <Route path="/Header" element={<Header />}  />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/BookingPage" element={<BookingPage />} />
          <Route path="/ApplyToTeach" element={<ApplyToTeach/>} />
          <Route path="/TutorPage" element={<TutorPage/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/StudentPage" element={<StudentPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
