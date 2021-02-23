import React, { useState } from 'react';
import { useRecoilState } from 'recoil'
import { user } from '../../../utils/atom';
import axios from '../../../utils/axios';
import Input from './Input';

function Profile(props) {
    const [userData,setUserData] = useRecoilState(user)
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [oldPassword,setOldPassword] = useState('');
    const [newPassword,setNewPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    

    const setNameHandler = (newName) => {
        setName(newName)
    }

    const setEmailHandler = (newEmail) => {
        setEmail(newEmail)
    }

    const editProfile = async (e) => {
        e.preventDefault();
        try {
            if(name && email) {
                let res = await axios.put('/u/update-user', {id:userData.id,name,email},
                {
                    headers : {
                        "Authorization" : `Bearer ${userData.token}`
                    }   
                }
                );
                setUserData({
                    id: res.data.id,
                    name: res.data.name,
                    email: res.data.email,
                    token: userData.token
                })
                alert("Data Berhasil Diupdate")
            } else {
                alert("Tidak Ada Data Yang Diupdate");
            }
        } catch (error) {
            throw error
        }
    }

    const changePasswordHandler = async(e) => {
        e.preventDefault();
        try {
            let res = await axios.put('/u/update-password', 
         {id:userData.id, old_password:oldPassword, password:newPassword, password_confirmation:passwordConfirmation},
            {
                headers : {
                    "Authorization" : `Bearer ${userData.token}`
                }   
            }
            )
        res.data.updated === true && alert("Update Password Berhasil Dilakukan");
        } catch (error) {
            let errors = error.response.data.errors;
            let errorMessage = error.response.data.error;
            errors?.password && alert(errors.password[0])
            errorMessage && alert(errorMessage);
        }
        
    }

    console.log(userData);
    return (
        <main className="main">
        <div className="container-fluid">
            <div className="row">
            {/* main title */}
            <div className="col-12">
                <div className="main__title">
                <h2>Edit user</h2>
                </div>
            </div>
            {/* end main title */}
            {/* content tabs */}
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="1-tab">
                <div className="col-12">
                    <div className="sign__wrap">
                    <div className="row">
                        {/* details form */}
                        <div className="col-12 col-lg-6">
                        <form onSubmit={editProfile} action="#" className="sign__form sign__form--profile sign__form--first">
                            <div className="row">
                            <div className="col-12">
                                <h4 className="sign__title">Profile details</h4>
                            </div>
                                <Input type="text" label="name" defaultValue={userData.name} changeHandler={setNameHandler}/>
                                <Input type="email" label="email" defaultValue={userData.email} changeHandler={setEmailHandler} />
                                {/* <Input label="name" defaultValue={} changeHandler={} />
                                <Input label="name" defaultValue={} changeHandler={} />
                                <Input label="name" defaultValue={} changeHandler={} /> */}
                            <div className="col-12">
                                <button className="sign__btn" type="submit">Save</button>
                            </div>
                            </div>
                        </form>
                        </div>
                        {/* end details form */}
                        {/* password form */}
                        <div className="col-12 col-lg-6">
                        <form onSubmit={changePasswordHandler} className="sign__form sign__form--profile">
                            <div className="row">
                            <div className="col-12">
                                <h4 className="sign__title">Change password</h4>
                            </div>
                            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                <div className="sign__group">
                                <label className="sign__label" htmlFor="oldpass">Old password</label>
                                <input onChange={e => setOldPassword(e.target.value)} id="oldpass" type="password" name="oldpass" className="sign__input" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                <div className="sign__group">
                                <label className="sign__label" htmlFor="newpass">New password</label>
                                <input onChange={e => setNewPassword(e.target.value)} id="newpass" type="password" name="newpass" className="sign__input" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                <div className="sign__group">
                                <label className="sign__label" htmlFor="confirmpass">Confirm new password</label>
                                <input onChange={e => setPasswordConfirmation(e.target.value)} id="confirmpass" type="password" name="confirmpass" className="sign__input" />
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="sign__btn" type="submit">Change</button>
                            </div>
                            </div>
                        </form>
                        </div>
                        {/* end password form */}
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* end content tabs */}
            </div>
        </div>
        </main>
    );
}

export default Profile;