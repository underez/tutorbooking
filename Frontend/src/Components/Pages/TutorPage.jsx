import React,{ useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import TutorDetail from "../TutorDetail";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";
import axios from "axios";
import CryptoJS from "crypto-js";

const Profile = () => {
  const { id } = useParams();
  const [tutor , setTutor] = useState(null);
  const [balance, setBalance] = useState("");
  const [email , setEmail] = useState("");
  const [user, setUser] = useState(null); // เพิ่มตัวแปร user และ setUser ไว้ที่นี่
  
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser); // กำหนดค่า user จาก localStorage
        setEmail(parsedUser.email); // กำหนดค่า email จาก localStorage
        const decryptedName = CryptoJS.AES.decrypt(
          parsedUser.name,
          "secret_key"
        ).toString(CryptoJS.enc.Utf8);
        const decryptedSurname = CryptoJS.AES.decrypt(
          parsedUser.surname,
          "secret_key"
        ).toString(CryptoJS.enc.Utf8);
        setBalance(parsedUser.balance || ""); // กำหนดค่า balance จาก localStorage
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
        localStorage.removeItem("user");
      }
    }
  }, []);
  
  useEffect(() => {
    
    axios.get(`http://localhost:4090/api/teachers/${id}`).then((response) => {
      setTutor(response.data);
    });
  }, [id]);

  return (
    <>
      <Header balance={balance} />
      <PageBanner title={"Tutor Profile"} pageName={"Tutor Profile"} />
      {tutor && <TutorDetail tutor={tutor} email={email} /> }
      
      <Footer />
    </>
  );
};

export default Profile