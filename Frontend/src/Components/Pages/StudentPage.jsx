import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { scheduleData } from "../../constant/dummyData";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Modal, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import CryptoJS from "crypto-js";
import axios from "axios";

const localizer = momentLocalizer(moment);

const StudentPage = () => {
  const [visible, setVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [user, setUser] = useState(null);
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState("");
  const [balance, setBalance] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        const decryptedName = CryptoJS.AES.decrypt(
          parsedUser.name,
          "secret_key"
        ).toString(CryptoJS.enc.Utf8);
        const decryptedSurname = CryptoJS.AES.decrypt(
          parsedUser.surname,
          "secret_key"
        ).toString(CryptoJS.enc.Utf8);
        setUser({
          ...parsedUser,
          name: decryptedName,
          surname: decryptedSurname,
        });
        setBio(parsedUser.bio || "");
        setAvatar(parsedUser.avatar || "");
        setBalance(parsedUser.balance || ""); // Set balance
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
        localStorage.removeItem("user");
      }
    }
  }, []);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setVisible(true);
  };

  const handleCloseModal = () => {
    setVisible(false);
  };

  const handleBookEvent = () => {
    alert("Booked");
    setVisible(false);
  };

  const formatDate = (date) => {
    return moment(date).format("YYYY-MM-DD HH:mm");
  };

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: event.color,
      borderRadius: "5px",
      opacity: 0.8,
      color: "white",
      border: "1px solid transparent",
    };
    return {
      style: style,
    };
  };

  const handleChangePicture = (info) => {
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
      const newAvatar = URL.createObjectURL(info.file.originFileObj);
      setAvatar(newAvatar);
      const updatedUser = { ...user, avatar: newAvatar };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setUser(updatedUser);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const handleDeletePicture = () => {
    setAvatar("");
    const updatedUser = { ...user, avatar: "" };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleSaveBio = async () => {
    try {
      const response = await axios.put(
        `http://localhost:4090/api/members/${user.id}`,
        {
          bio: bio,
        }
      );
      console.log(response.data);

      const updatedUser = { ...user, bio: response.data.bio };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setUser(updatedUser); // แก้ setUser เป็นการอัปเดตข้อมูลทั้งหมดของผู้ใช้
      message.success("Bio saved successfully");
      console.log("Updated user:", updatedUser); // แสดงค่า updatedUser ใน console
    } catch (error) {
      console.error("Error saving bio:", error);
      message.error("Failed to save bio");
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  const defaultAvatar = "https://via.placeholder.com/150?text=No+Image"; // Placeholder image URL

  return (
    <div>
      <Header balance={balance} />
      <div className="section-padding bg-[url('../images/all-img/insbg.png')] bg-contain bg-no-repeat">
        <div className="container">
          <div className="grid grid-cols-12 xl:gap-0 gap-[30px]">
            <div className="lg:col-span-4 col-span-12">
              <div className="bg-white shadow-box7 rounded-md max-w-[350px] lg:sticky lg:top-10">
                <div className="px-8 pb-8 pt-8">
                  <h5 className="text-2xl font-bold text-black mb-4">
                    {user.name} {user.surname} 
                  </h5>
                  {user.name} {user.surname}
                  <span style={{ textTransform: "lowercase" }}>
                    {user.email}
                  </span>

                  <div className="mb-8 pt-3">
                    <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                      <div className="relative w-24 h-24">
                        <img
                          className="object-cover w-full h-full p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                          src={avatar || defaultAvatar}
                          alt="Avatar"
                        />
                      </div>
                      <div className="flex flex-col space-y-5 sm:ml-8 pl-6">
                        <Upload
                          name="avatar"
                          showUploadList={false}
                          beforeUpload={(file) => {
                            const isJpgOrPng =
                              file.type === "image/jpeg" ||
                              file.type === "image/png";
                            if (!isJpgOrPng) {
                              message.error(
                                "You can only upload JPG/PNG file!"
                              );
                            }
                            const isLt2M = file.size / 1024 / 1024 < 2;
                            if (!isLt2M) {
                              message.error("Image must smaller than 2MB!");
                            }
                            return isJpgOrPng && isLt2M;
                          }}
                          onChange={handleChangePicture}
                        >
                          <Button icon={<UploadOutlined />}>
                            Change picture
                          </Button>
                        </Upload>
                        <Button onClick={handleDeletePicture}>
                          Delete picture
                        </Button>
                      </div>
                    </div>
                    <div className="pt-6">
                      <textarea
                        className="w-full border rounded px-3 py-2"
                        placeholder="Bio"
                        type="text"
                        value={bio}
                        name="bio"
                        onChange={handleBioChange}
                      />
                    </div>
                    <button
                      type="submit"
                      className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                      onClick={handleSaveBio}
                    >
                      Save
                    </button>
                  </div>
                  <ul className="space-y-[19px]">
                    <li className="flex items-center space-x-3">
                      {/* Other content */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 col-span-12">
              <div className="mb-10">
                <h2>Welcome, {user.username}</h2>
              </div>
              <div>My Schedule</div>
              <div className="schedule">
                <Calendar
                  localizer={localizer}
                  events={scheduleData}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: 500 }}
                  onSelectEvent={handleSelectEvent}
                  eventPropGetter={eventStyleGetter}
                />
                <Modal
                  title="Event Details"
                  open={visible} // ใช้ open แทน visible
                  onClose={handleCloseModal} // ใช้ onClose แทน onCancel
                  actions={[
                    <Button key="cancel" onClick={handleCloseModal}>
                      Cancel
                    </Button>,
                    <Button key="book" onClick={handleBookEvent}>
                      Book
                    </Button>,
                  ]}
                >
                  {selectedEvent && (
                    <>
                      <p>Title: {selectedEvent.title}</p>
                      <p>Start Time: {formatDate(selectedEvent.start)}</p>
                      <p>End Time: {formatDate(selectedEvent.end)}</p>
                    </>
                  )}
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StudentPage;
