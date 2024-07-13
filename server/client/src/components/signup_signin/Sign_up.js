import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sign_up = () => {
    const [udata, setUdata] = useState({
        fname:'',
        email:'',
        mobile:'',
        password:'',
        cpassword:''
    });

    console.log(udata);

    const adddata = (e) => {
        const{name, value} = e.target;

        setUdata(() => {
            return{
                ...udata,
                [name]:value
            }
        })
    };

    const senddata = async(e) => {
        e.preventDefault();
        const {fname, email, mobile, password, cpassword} = udata;

        if(fname === ""){
            toast.warn("Provide name", {
                position: "top-center",
            })
        }
        else if(email === ""){
            toast.warn("Provide email", {
                position: "top-center",
            })
        }
        else if(mobile === ""){
            toast.warn("Provide mobile no.", {
                position: "top-center",
            })
        }
        else if(password === ""){
            toast.warn("Provide password", {
                position: "top-center",
            })
        }
        else if(cpassword=== ""){
            toast.warn("Provide confirm password", {
                position: "top-center",
            })
        }
        else{
            const res = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fname, email, mobile, password, cpassword
                })
            });
    
            const data = await res.json();
            // console.log(data);
    
            if(res.status === 422 || !data){
                // alert("No data found");
                toast.warn("Invalid details", {
                    position: "top-center",
                })
            }
            else{
                // alert("Data successfully added");
                toast.success("Data successfully added", {
                    position: "top-center",
                })
                setUdata({...udata, fname:"", email:"", mobile:"", password:"", cpassword:""});
            }
        }
    };

  return (
    <section>
            <div className='sign_container'>
                <div className='sign_header'>
                    <img src='./blacklogoamazon.png' alt='amazonlogo'></img>
                </div>

                <div className='sign_form'>
                    <form method='POST'> 
                        <h1>Sign-Up</h1>
                        <div className='form_data'>
                            <label htmlFor='fname'>Your Name</label>
                            <input type='text' 
                            onChange={adddata}
                            value={udata.fname}
                            name='fname' id='fname'></input>
                        </div>
                        <div className='form_data'>
                            <label htmlFor='email'>Email</label>
                            <input type='text' 
                            onChange={adddata}
                            value={udata.email}
                            name='email' id='email'></input>
                        </div>
                        <div className='form_data'>
                            <label htmlFor='number'>Mobile</label>
                            <input type='text' 
                            onChange={adddata}
                            value={udata.mobile}
                            name='mobile' id='mobile'></input>
                        </div>
                        <div className='form_data'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' 
                            onChange={adddata}
                            value={udata.password}
                            name='password' placeholder='At least 6 char' id='password'></input>
                        </div>
                        <div className='form_data'>
                            <label htmlFor='cpassword'>Confirm Password</label>
                            <input type='password' 
                            onChange={adddata}
                            value={udata.cpassword}
                            name='cpassword' id='cpassword'></input>
                        </div>
                        <button className='signin_btn' onClick={senddata}>Continue</button>

                        <div className='signin_info'>
                            <p>Already have an account?</p>
                            <NavLink to='/login'>Sign-In</NavLink>
                        </div>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </section>
  )
}

export default Sign_up;
