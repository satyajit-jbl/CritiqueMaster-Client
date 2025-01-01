import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { authContext } from '../AuthProvider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { authContext } from '../../component/AuthProvider/AuthProvider';
import Lottie from 'lottie-react';
import registerLottieData from "../../assets/lottie/register.json"
import Swal from 'sweetalert2';



const Register = () => {
    // DynamicTitle()
    const {createNewUser, setUser, updateUserProfile} = useContext(authContext);
    const [errorMessage, setErrorMessage] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const [success, setSuccess] = useState(false)
const navigate = useNavigate();
const [error, setError] = useState({});

    const handleSubmit=(e)=>{
        e.preventDefault();
        e
        // get from data
        const form = new FormData(e.target)
        // console.log(form);
        const name = form.get("name")
        const email = form.get("email")
        const photo = form.get("photo")
        const password = form.get("password")
        // console.log({name, photo} );
        // console.log(name, email, photo, password );

        // password varification

        // if (password.length < 6) {
        //     setErrorMessage('Password should be 6 charactors long')
            
        // }
        setErrorMessage('');
        setSuccess(false);
        // if (password.length < 6) {
        //     setErrorMessage('Password should be 6 charactors long')
            
        // }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>\/?`~\-]).{6,}$/;

        if (!passwordRegex.test(password)) {
            setErrorMessage('At least one uppercase, one lowercase, one number, one special character & Password should be 6 charactors long');
            return;
        }

        // password varification

        createNewUser(email, password)
        .then(result=>{
            const user = result.user;
            setSuccess(true);
            Swal.fire({
                title: "Register Successfully !!",
                icon: "success"
              });
            // setUser(user);
            updateUserProfile({displayName: name, photoURL: photo })
            .then(()=>{
                
                navigate("/")
            }).catch(err=>{
                // console.log(err);
            })
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            setSuccess(false);
            // console.log(errorCode, errorMessage);
        })
    }
    return (
        <div className="min-h-screen lg:flex justify-center items-center">
            <div>
                <Lottie animationData={registerLottieData}></Lottie>
            </div>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="text-2xl font-semibold text-center">Register your account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input name="photo" type="" placeholder="photo-url" className="input input-bordered" required />
                    </div>
                    {/* email input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    {/* password input */}
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type={showPassword ? 'text' : 'password'} placeholder="password" className="input input-bordered" required />
                        <label className="label">
                        <button onClick={() => setShowPassword(!showPassword)} className='btn btn-xs absolute right-4 top-12'>
                        {showPassword ? <FaEyeSlash /> : <FaEye></FaEye>}
                    </button>
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Register</button>
                    </div>
                </form>
                {/* <button onClick={() => setShowPassword(!showPassword)} className='btn btn-xs absolute right-24 top-12'>
                        {showPassword ? <FaEyeSlash /> : <FaEye></FaEye>}
                    </button> */}
                {
                errorMessage && <p className='text-red-700 text-center font-semibold mb-8'>{errorMessage}</p>
            }
            {
                success && <p className='text-green-600 font-bold text-center mb-7'>Registration is Successfull</p>
                
            }
                <p className="text-center font-semibold">Already have An Account ? <Link className="text-red-600" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;