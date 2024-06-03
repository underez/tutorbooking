import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";
import ApplicationForm from "../ApplicationForm";

const ApplyToTeach = () => {
  return (
    <>
      <Header />
      <PageBanner title={"สมัครเป็นติวเตอร์"} />
      <ApplicationForm />
      <Footer />
    </>
  );
};

export default ApplyToTeach;
