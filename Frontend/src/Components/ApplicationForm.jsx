import React from "react";
import '../assets/css/applicationform.css';

const ApplicationForm = () => (
  <div className="application_form">
    <div>
    
      <form  method="POST" target="_blank">
        <div className="form-group">
          <label htmlFor="exampleInputName">ชื่อ นามสกุล</label>
          <input type="text" name="fullname" className="form-control" id="exampleInputName" placeholder="Enter your name and surname" required />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email address" />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Address</label>
          <input type="text" name="address" className="form-control" id="inputAddress" placeholder="" />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">City</label>
            <input type="text" name="city" className="form-control" id="inputCity" placeholder="" />
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputZip">Zip</label>
            <input type="text" name="zip" className="form-control" id="inputZip" placeholder="" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="example-tel-input" className="col-2 col-form-label">Telephone</label>
          <div className="col-10">
            <input className="form-control" name="tel" type="tel" value="" id="example-tel-input" />
          </div>
        </div>
        <div className="form-group mt-3">
          <label className="mr-4">Upload your CV:</label>
          <input type="file" name="file" />
        </div>
        <div className="form-group mt-3">
          <label className="mr-4">Upload a copy Transcript and other certifications:</label>
          <input type="file" name="file" />
        </div>
        <div className="form-group mt-3">
          <label className="mr-4">Upload a copy of ID:</label>
          <input type="file" name="file" />
        </div>
        <button className="btn btn-primary block w-full text-center" type="submit">
              Submit
            </button>
       
      </form>
    </div>
  </div>
);

export default ApplicationForm;
