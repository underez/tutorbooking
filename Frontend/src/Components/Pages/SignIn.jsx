import React, { useState } from "react";
import axios from "axios";
import Footer from "../Footer";
import Header from "../Header";
import "../../assets/css/signin.css";
import { Link } from 'react-router-dom';
import PageBanner from "../PageBanner";


const SignIn = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [error, setError] = useState('');

  const { username, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
  
      const body = JSON.stringify({ username, password });
  
      const res = await axios.post('http://localhost:4090/api/members/login', body, config);
  
      // ตรวจสอบข้อมูลที่ส่งกลับจาก API
      if (res.data.user) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        console.log('User data:', res.data.user);
      } else {
        console.error('User data is undefined');
        setError('Login failed: no user data received');
        return;
      }
  
      alert('Login successful');
      window.location.href = '/StudentPage';
    } catch (err) {
      console.error('Error:', err.response ? err.response.data : err.message);
      setError('Invalid username or password');
    }
  };
  
  

  const handleForgotPassword = () => {
    // เพิ่มฟังก์ชันการจัดการการคลิก
    alert('Redirect to forgot password page');
    // window.location.href = '/forgot-password'; // ตัวอย่างการเปลี่ยนหน้าไปยังหน้าลืมรหัสผ่าน
  };

  return (
    <>
      <Header />
      <PageBanner title={"Sign In"}/>
      <div>
        <div className="sign-in-container">
          <form onSubmit={onSubmit}>
            <h3 id="signin">Sign In</h3>
            <span>with your username</span>
            <input
             type="text"
             name="username"
             placeholder="username"
             value={username}
             onChange={onChange}
             required
           />
          
            <input
             style={{ width: '560px', height:'auto', borderRadius: '3px', paddingBottom: '10px', outline: '2px solid transparent'
             , outlineOffset: '2px',  boxShadow: '0 0 0 0 rgba(37, 99, 235, 0.5)', marginBottom: '10px'}}
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={onChange}
              required
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
        
            <button className="button pt-6" type="submit">Sign In</button>
            <p className="forgotpasswordspace"></p>
            <button type="button" className="link-button" onClick={handleForgotPassword}>
              Forgot your password?
            </button>
            <div className="signup">
              
          <h6>ยังไม่มีบัญชี ใช่ไหม?</h6>
          <p>ลงทะเบียนเลย</p>
    
          <Link to="/Register" className="signupbutton">Sign Up</Link>
        </div>
          </form> 
        
        </div>
       
      </div>
      <Footer />
    </>
  );
}

export default SignIn;