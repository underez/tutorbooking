import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
import CryptoJS from 'crypto-js';
import axios from "axios";
import Footer from "../Footer";
import Header from '../Header';
import PageBanner from "../PageBanner";



const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        name: '',
        surname: '',
        email:'',
        balance:450
    });

    const [usernameExists, setUsernameExists] = useState(false);

    const { username, password, name, surname,email,balance } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const checkUsernameExists = async () => {
        try {
            const res = await axios.get(`http://localhost:4090/api/members/check-username/${username}`);
            setUsernameExists(res.data);
        } catch (err) {
            console.error('Error:', err.response ? err.response.data : err.message);
            setUsernameExists(false);
        }
    };

    const onSubmit = async e => {
        e.preventDefault();
        if (usernameExists) {
            alert('Username already exists');
            return;
        }
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const encryptedName = CryptoJS.AES.encrypt(name, 'secret_key').toString();
            const encryptedSurname = CryptoJS.AES.encrypt(surname, 'secret_key').toString();

            const body = JSON.stringify({
                username,
                password: hashedPassword,
                name: encryptedName,
                surname: encryptedSurname,
                email,
                balance
            });

            const res = await axios.post('http://localhost:4090/api/members', body, config);
            
            alert('Registration successful');
            console.log(res.data);

        } catch (err) {
            console.error('Error:', err.response.data);
        }
    };

    return (
    <>
    <Header />
    <PageBanner title={"Register"}/>
        <div>
          
 


            <form onSubmit={onSubmit}>
                <div>
                    <label>Username: </label>
                    <input
                    style={{ width: '500px', height:'auto' }}
                        type="text"
                        name="username"
                        value={username}
                        onChange={onChange}
                        onBlur={checkUsernameExists}
                        required
                    />
                    {usernameExists && <p style={{ color: 'red' }}>Username already exists</p>}
                </div>
                <div>
    <label>Password: </label>
    <input 
        style={{ width: '500px', height:'auto', borderRadius: '3px', paddingBottom: '10px', outline: '2px solid transparent'
        , outlineOffset: '2px',  boxShadow: '0 0 0 0 rgba(37, 99, 235, 0.5)', marginBottom: '10px' }}
        type="password" 
        name="password" 
        value={password} 
        onChange={onChange} 
        required 
    />
</div>

                <div>
                    <label>Name: </label>
                    <input
                    style={{ width: '500px', height:'auto' }}
                    
                    type="text" name="name" value={name} onChange={onChange} required />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input
                    style={{ width: '500px', height:'auto' }}
                    type="text" name="surname" value={surname} onChange={onChange} required />
                </div>
                <div>
                    <label>email</label>
                    <input
                    style={{ width: '500px', height:'auto' }}
                    type="email" name="email" value={email} onChange={onChange} required />
                </div>
                <div>
                   
                    <input
                    style={{ width: '500px', height:'auto' }}
                    type="hidden" name="balance" value={balance} onChange={onChange} required />
                </div>
                <button type="submit">Register</button>
            </form>
            <Footer />
        </div>
        </>
        
    );
};

export default Register;