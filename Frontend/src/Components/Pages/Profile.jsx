import React, { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    firstName: "Jane",
    lastName: "Ferguson",
    email: "",
    profession: "",
    bio: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Profile data saved:", profileData);
  };

  return (
    <>
      <Header />
      <PageBanner title={"Profile"} pageName={"Profile"} />
      <div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
        <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
          <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12">
            <h2 className="pl-3 mb-4 text-2xl font-semibold">Settings</h2>
            <a href="#" className="flex items-center px-3 py-2.5 font-bold bg-white text-indigo-900 border rounded-full">
              Public Profile
            </a>
            <a href="#" className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full">
              Account Settings
            </a>
           
            <a href="#" className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full">
              Delete Account
            </a>
          </div>
        </aside>
        <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
          <div className="p-2 md:p-4">
            <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
              <h2 className="pl-6 text-2xl font-bold sm:text-xl">Public Profile</h2>
              <div className="grid max-w-2xl mx-auto mt-8">
              <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                  <img
                    className="object-cover w-24 h-24 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                    src="https://media.istockphoto.com/id/1405845116/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%8A%E0%B8%B2%E0%B8%A2%E0%B8%AB%E0%B8%99%E0%B8%B8%E0%B9%88%E0%B8%A1%E0%B9%80%E0%B8%81%E0%B8%A2%E0%B9%8C%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%AA%E0%B9%84%E0%B8%95%E0%B8%A5%E0%B9%8C%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B9%81%E0%B8%A7%E0%B9%88%E0%B8%99%E0%B8%95%E0%B8%B2%E0%B8%9A%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7.jpg?s=2048x2048&w=is&k=20&c=XHS6cQh4ymAS7HpGfSWyy5rHr5JtXzqD04VxEXaDnls="
                    alt="Bordered avatar"
                  />
                  <div className="flex flex-col space-y-5 sm:ml-8">
                    <button type="button" className="py-3.5 px-7 text-base font-medium text-indigo-100 bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200">
                      Change picture
                    </button>
                    <button type="button" className="py-3.5 px-7 text-base font-medium text-indigo-900 bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200">
                      Delete picture
                    </button>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="items-center mt-8 sm:mt-20 text-[#202142]">
                  <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                    <div className="w-full">
                      <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-indigo-900">
                        Your first name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                        placeholder="Your first name"
                        value={profileData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="w-full">
                      <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-indigo-900">
                        Your last name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                        placeholder="Your last name"
                        value={profileData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-2 sm:mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-indigo-900">
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                      placeholder="your.email@mail.com"
                      value={profileData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-2 sm:mb-6">
                    <label htmlFor="profession" className="block mb-2 text-sm font-medium text-indigo-900">
                      Profession
                    </label>
                    <input
                      type="text"
                      id="profession"
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                      placeholder="Your profession"
                      value={profileData.profession}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="bio" className="block mb-2 text-sm font-medium text-indigo-900">
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      rows="8" // Increased number of rows
                      className="block p-2.5 w-full h-32 text-sm text-indigo-900 bg-indigo-50 rounded-lg border border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Write your bio here..."
                      value={profileData.bio}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex justify-end">
                    <button type="submit" className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
