import { useForm } from "react-hook-form"
import { useState, useEffect } from "react"
import '../css/UserForm.css'

const FormUser = ({ createUser, infoUpdate, updateUser, setInfoUpdate, setIsFormActive }) => {

    const [isActive, setIsActive] = useState(false);

    const handleActive = () => {
        setIsActive(!isActive);
        setIsFormActive(!isActive);
    };

    const { handleSubmit, register, reset } = useForm()

    useEffect(() => {
        reset(infoUpdate)
    }, [infoUpdate])

    const submit = data => {
        if (infoUpdate) {
            updateUser('/users', infoUpdate.id, data)
            setInfoUpdate()
        } else {
            createUser('/users', data)
        }
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: ''
        })
    }

  return (
    <>
        <div className="user_form_box">
            <div className="user_form_header">
                <h2>Create Account</h2>
            </div>
            <form onSubmit={handleSubmit(submit)} className="user_form">
                <div className="user_form_control">
                    <label htmlFor="first_name">First Name</label>
                    <input {...register('first_name')} type="text" id="first_name"  placeholder="First Name"/>
                </div>
                <div className="user_form_control">
                    <label htmlFor="last_name">Last Name</label>
                    <input {...register('last_name')} type="text" id="last_name"  placeholder="Last Name"/>
                </div>
                <div className="user_form_control">
                    <label htmlFor="birthday">Birthday</label>
                    <input {...register('birthday')} type="date" id="birthday" />
                </div>
                <div className="user_form_control">
                    <label htmlFor="email">Email</label>
                    <input {...register('email')} type="email" id="email"  placeholder="john@email.com"/>
                </div>
                <div className="user_form_control">
                    <label htmlFor="password">Password</label>
                    <input {...register('password')} type="password" id="password"  placeholder="Password"/>
                </div>
                <button onClick={handleActive}>{infoUpdate ? 'Update' : ' Create'}</button>
            </form>
        </div>
    </>
  )
}

export default FormUser