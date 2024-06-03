import React, {useState} from 'react';
import axios from 'axios';


const Subjects = () => {
        const [formData, setFormData] = useState({
            subjects: '',
           
        });
    
  return (
    <div>
    <div>Subjects</div>
    <form onSubmit ={onSubmit}>
                <div>
                    <label>Username: </label>
                    <input type="text" name="username" value={username} onChange={onChange} required />
                </div> </form>
                </div>
  );
};

export default Subjects