import React,{ useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import TutorDetail from "../TutorDetail";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";
import axios from "axios";

const Profile = () => {
  const { id } = useParams();
  const [tutor , setTutor] = useState(null);

  useEffect(() => {
    
    axios.get(`http://localhost:4090/api/teachers/${id}`).then((response) => {
      setTutor(response.data);
    });
  }, [id]);

  return (
    <>
      <Header />
      <PageBanner title={"Tutor Profile"} pageName={"Tutor Profile"} />
      {tutor && <TutorDetail tutor={tutor} /> }
      
      <Footer />
    </>
  );
};

export default Profile