import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { authContext } from '../../component/AuthProvider/AuthProvider';
import Lottie from 'lottie-react';
import registerLottieData from "../../assets/lottie/register.json";
import Swal from 'sweetalert2';
import { motion } from "framer-motion";

const Register = () => {
    const { createNewUser, setUser, updateUserProfile } = useContext(authContext);
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();
    const [error, setError] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const email = form.get("email");
        const photo = form.get("photo");
        const password = form.get("password");

        setErrorMessage('');
        setSuccess(false);

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>\/?`~\-]).{6,}$/;

        if (!passwordRegex.test(password)) {
            setErrorMessage('Password should contain at least one uppercase, one lowercase, one number, one special character & be at least 6 characters long');
            return;
        }

        createNewUser(email, password)
            .then(result => {
                const user = result.user;
                setSuccess(true);
                Swal.fire({
                    title: "Register Successfully !!",
                    icon: "success"
                });
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate("/");
                    }).catch(err => {
                        console.log(err);
                    })
            })
            .catch((error) => {
                setSuccess(false);
                console.log(error.code, error.message);
            })
    }

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen px-4 py-10 lg:py-0 space-y-10 lg:space-y-0 lg:space-x-10">
            {/* Left side (Lottie animation and title) */}
            <div className="lg:w-3/4 flex flex-col justify-center items-center mb-6 lg:mb-0">
                <motion.h2
                    className="text-3xl font-semibold text-center text-blue-600 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-title to-primary text-shadow-lg">
                        Create Your Profile
                    </span>
                </motion.h2>
                <Lottie animationData={registerLottieData} style={{ width: 300, height: 300 }} />
            </div>

            {/* Right side (Form container) */}
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-lg p-6 lg:p-10 mt-0">
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
                        <input name="photo" type="text" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type={showPassword ? 'text' : 'password'} placeholder="Password" className="input input-bordered" required />
                        <label className="label">
                            <button onClick={() => setShowPassword(!showPassword)} className="btn btn-xs absolute right-4 top-12">
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-primary text-white text-xl rounded-xl">Register</button>
                    </div>
                </form>
                {errorMessage && <p className="text-red-700 text-center font-semibold mb-8">{errorMessage}</p>}
                {success && <p className="text-green-600 font-bold text-center mb-7">Registration Successful</p>}
                <p className="text-center font-semibold">Already have an account? <Link className="text-red-600" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;
