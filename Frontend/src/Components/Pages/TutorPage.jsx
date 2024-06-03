import React from "react";
import TutorDetail from "../TutorDetail";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";

const Profile = () => {
  return (
    <>
      <Header />
      <PageBanner title={"Tutor Profile"} pageName={"Tutor Profile"} />
      <TutorDetail />
      <Footer />
    </>
  );
};

export default Profile;
