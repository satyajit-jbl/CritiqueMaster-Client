import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { authContext } from "../AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa6";
import axios from "axios";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { authContext } from "../../component/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import loginLottieData from "../../assets/lottie/login.json"


const Login = () => {
    // DynamicTitle();
    const {userLogIn, handleGoogleLogin} = useContext(authContext);
    const[error, setError] = useState({})
   const[emailValue, setEmailValue] = useState("");
    // const emailRef = useRef();
   

    const auth = getAuth();
    // const[errorEmail, setErrorEmail] = useState("")
    const notify = (txt) => toast(txt);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const googleLogingHandler = () =>{
        // console.log(auth);
        handleGoogleLogin()
        .then(res=>{
            // console.log(res);
        //   navigate(location.state.from)
        Swal.fire({
            title: "Login Successfully !!",
            
            icon: "success"
          });
          navigate(location?.state ? location.state : "/")
        })
      }

      
    const handleSubmit=(e)=>{
        e.preventDefault();
        
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log({email,password});
        userLogIn(email, password)
        // try{
        //     // Add API call, send data to server
        // const {data}= await axios.post(`${import.meta.env.VITE_API_URL}/add-service`, formData)
        // console.log(data);
        // //need to check , form reset not working
        // // formData.reset()
        // toast.success('Service added successfully!')
        // navigate('/my-services')
        // }catch(err){
        //     console.log(err);
        //     toast.error(err.message)
        // }
        .then(()=>{
            axios.post(`${import.meta.env.VITE_API_URL}/users`, email)
            // const user = result.user 
            // setUser(user);
            // alert('successfully login ')
            Swal.fire({
                title: "Login Successfully !!",
                
                icon: "success"
              });
            navigate(location?.state ? location.state : "/")
        })
        .catch((err)=>{
            // const errrorCode = error.code;
            // const errorMessage = error.message;
            // alert(error.code)
            setError({...error, login:err.code})
           toast.error(err.message)
        })
    }
    // console.log(error.login);
    // const handleForgetPassword = () =>{
    //     // console.log(('get me email address', emailRef.current.value));
    //     // const email = emailRef.current.value;
    //     const email = emailValue
    //     if(!email){
    //         // console.log('Please provide a valim email address');
    //     }
    //     else{
    //         sendPasswordResetEmail(auth, email)
    //         .then(()=>{
    //             // alert('password reset email sent, pls check email')
    //             notify('password reset email sent, pls check email')
    //         })
    //     }
    // }
    
    return (
        <div className="min-h-screen lg:flex justify-center items-center">
            <div>
            <Lottie animationData={loginLottieData}></Lottie>
            </div>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="text-2xl font-semibold text-center">Login your account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input onChange={(e)=>setEmailValue(e.target.value)} name="email" type="email"  placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        {
                            error.login && (
                                <label className="label text-red-600 text-sm">
                            {error.login}
                        </label>
                            )
                        }
                        <label className="label">
                        <Link to={`/auth/forget/${emailValue || ""}`} className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn rounded-md">Login</button>
                        {/* <button onClick={googleLogingHandler} className="btn"></button> */}
                        <button onClick={googleLogingHandler} className="btn mt-6">
          <FaGoogle></FaGoogle> Login with Google
        </button>
                    </div>
                </form>
                
                {/* <button onClick={googleLogingHandler} className="btn btn-neutral rounded-none">Google Login</button> */}
                <p className="text-center font-semibold mt-5">Don't have An Account ? <Link className="text-red-600" to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;