import React, { use, useState } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowRight, LogIn } from 'lucide-react';
import Swal from 'sweetalert2';
import logo from '../../assets/logo.png'; 
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvier';

const Login = () => {

  const {loginUser , googleSignUp ,setUser} = use(AuthContext)

  const navigate =useNavigate()
    const location = useLocation()


  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    

    loginUser(formData.email, formData.password)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Welcome Back!',
          text: 'You have successfully logged in.',
        });
        navigate(`${location.state ? location.state : '/'}`);


      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: error.code,
        });
      });

    
  };

  const handleSocialLogin = (provider) => {
    googleSignUp().then((result)=>{
         const loggedUser = result.user;
         Swal.fire({
         icon: 'info',
         title: `${provider} Login`,
         text: 'Google Login Seccuessful!',
         confirmButtonColor: '#000'
       });
       navigate('/')
         setUser(loggedUser)}
       
       ).catch((error)=>{
         Swal.fire({
           icon: 'error',
           title: 'Social Login Failed',
           text: error.message,
         });
  })
  }   

  return (
    // FULL SCREEN WRAPPER - NO SCROLLBAR
    <div className="h-screen w-full relative flex items-center justify-center overflow-hidden font-sans text-gray-900 bg-gray-900">

      {/* --- BACKGROUND IMAGE (Different one for variety, or reuse) --- */}
      <div className="absolute inset-0 z-0">
          <img 
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1600&q=80" 
              alt="Background" 
              className="h-full w-full object-cover opacity-60"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/20"></div>
      </div>

      {/* --- CARD CONTAINER --- */}
      <div className="relative z-10 w-full max-w-md bg-white/95 backdrop-blur-xl  shadow-2xl p-8 mx-4 border border-white/20 animate-fade-in-up">
        
        {/* --- HEADER: LOGO & BRAND --- */}
        <div className="flex flex-col items-center mb-8">
            <div className="flex items-center gap-2 mb-2">
                <img 
                    className="h-10 w-auto object-contain" 
                    src={logo} 
                    alt="Logo" 
                    onError={(e) => {e.target.style.display='none'}} 
                />
                <h2 className="text-2xl font-black uppercase leading-none tracking-tight text-gray-900">
                    Juta<span className="text-amber-600">Express</span>
                </h2>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
                <LogIn size={16} />
                <p className="text-sm font-medium">Welcome Back</p>
            </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Email Input */}
            <div className="relative group">
                <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400 group-focus-within:text-amber-600 transition-colors" />
                <input name="email" type="email" required placeholder="Email Address" value={formData.email} onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all bg-gray-50/50 focus:bg-white" />
            </div>

            {/* Password Input */}
            <div>
                <div className="relative group">
                    <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400 group-focus-within:text-amber-600 transition-colors" />
                    <input name="password" type={showPassword ? "text" : "password"} required placeholder="Password" value={formData.password} onChange={handleChange}
                        className="block w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all bg-gray-50/50 focus:bg-white" />
                    <button type="button" className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600 transition-colors" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                </div>
                
                {/* Forgot Password Link */}
                <div className="flex justify-end mt-2">
                    <Link to="/forgot-password" className="text-xs font-bold text-amber-600 hover:text-amber-700 hover:underline">
                        Forgot Password?
                    </Link>
                </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full flex items-center justify-center py-3.5 bg-gray-900 text-white text-sm font-bold rounded-xl hover:bg-amber-600 transition-all shadow-lg shadow-gray-900/20 active:scale-95">
                Sign In <ArrowRight className="ml-2 h-4 w-4" />
            </button>
        </form>

        {/* --- FOOTER SECTION --- */}
        <div className="flex flex-col items-center gap-5 mt-8">
            
            <div className="relative w-full">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
                <div className="relative flex justify-center text-xs uppercase tracking-wider"><span className="px-3 bg-white/95 text-gray-400 font-bold">Or login with</span></div>
            </div>

            <div className="flex gap-4 w-full">
                <button onClick={() => handleSocialLogin('Google')} className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl bg-white text-xs font-bold text-gray-700 hover:bg-gray-50 transition-all shadow-sm group">
                    <svg className="h-4 w-4 transition-transform group-hover:scale-110" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                    Google
                </button>
                <button onClick={() => handleSocialLogin('Facebook')} className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl bg-[#1877F2] text-xs font-bold text-white hover:bg-[#166fe5] transition-all shadow-sm group">
                    <svg className="h-4 w-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    Facebook
                </button>
            </div>

            <p className="text-center text-xs text-gray-500 mt-2">
                Don't have an account? <Link to="/register" className="font-bold text-amber-600 hover:text-amber-700 hover:underline">Sign Up</Link>
            </p>
            <Link to="/" className=" text-gray-400 hover:text-gray-600 transition-colors flex items-center gap-1">
                <ArrowRight className="rotate-180 h-4 w-4" />
                <span className="text-sm font-medium">Countine as guest</span>
            </Link>
        </div>

      </div>
    </div>
  );
};

export default Login;