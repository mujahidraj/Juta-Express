import React, { useContext, useState } from 'react';
import { Eye, EyeOff, User, Mail, Link as LinkIcon, Lock, ArrowRight, Camera } from 'lucide-react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvier';
import logo from '../../assets/logo.png';
import { Link, useNavigate } from 'react-router';

const Register = () => {
  const { createUser, userUpdate, setUser, googleSignUp, userVerification } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    photoUrl: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      Swal.fire({
        icon: 'error',
        title: 'Weak Password',
        text: 'Password must be at least 8 chars, include 1 uppercase, 1 lowercase, 1 number, and 1 special char.',
        confirmButtonColor: '#d97706',
      });
      return;
    }
    createUser(formData.email, formData.password)
      .then((result) => {
        const loggedUser = result.user;
        userUpdate({ displayName: formData.name, photoURL: formData.photoUrl })
          .then(() => {
            setUser({ ...loggedUser, displayName: formData.name, photoURL: formData.photoUrl });
          })
          .catch((err) => 
            Swal.fire({
              icon: 'error',
              title: 'Profile Update Failed',
              text: err.message,
              confirmButtonColor: '#d97706',
            })
          );

        userVerification()
          .then(() => {
            let timerInterval;

            Swal.fire({
              title: 'Verify Your Email',
              html: `We sent a link to <b>${formData.email}</b>.<br/>Please check your inbox and click the link.<br/><br/><b>Waiting for verification...</b>`,
              icon: 'info',
              showConfirmButton: false,
              allowOutsideClick: false,
              didOpen: () => {
                Swal.showLoading();
                timerInterval = setInterval(() => {
                  loggedUser.reload().then(() => {
                    if (loggedUser.emailVerified) {
                      clearInterval(timerInterval);
                      Swal.close();

                      Swal.fire({
                        icon: 'success',
                        title: 'Email Verified!',
                        text: 'Redirecting to Home...',
                        timer: 1500,
                        showConfirmButton: false
                      }).then(() => {
                        navigate('/');
                      });
                    }
                  });
                }, 3000);
              },
              willClose: () => {
                clearInterval(timerInterval);
              }
            });
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: error.message,
          confirmButtonColor: '#d97706',
        });
      });
  };

  const handleSocialLogin = (provider) => {
    googleSignUp()
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        Swal.fire({
          icon: 'success',
          title: `${provider} Login Successful`,
          text: `Welcome back!`,
          timer: 1500,
          showConfirmButton: false
        });
        navigate('/');
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Social Login Failed',
          text: error.message,
        });
      });
  };

  return (
    <div className="h-screen w-full relative flex items-center justify-center overflow-hidden font-sans text-gray-900 bg-gray-900">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1600&q=80"
          alt="Background"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/20"></div>
      </div>





      <div className="relative z-10 w-full max-w-4xl bg-white/95 backdrop-blur-xl  shadow-2xl p-8 mx-4 border border-white/20 animate-fade-in-up">

        <Link to="/" className="flex justify-center my-2 gap-2 group">
          <div className="flex items-center gap-2 mb-2">
            <img
              className="h-10 w-auto object-contain"
              src={logo}
              alt="Logo"
              onError={(e) => { e.target.style.display = 'none' }}
            />
            <h2 className="text-2xl font-black uppercase leading-none tracking-tight text-gray-900">
              New<span className="text-amber-600">Lifestyle</span>
            </h2>
          </div>
        </Link>

        <div className="flex flex-col items-center mb-6">
          <h2 className="text-3xl font-black tracking-tight text-gray-900">Create Account</h2>
          <p className="text-sm text-gray-500 mt-1">Join the community of trendsetters.</p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

            <div className="space-y-4">
              <div className="relative group">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400 group-focus-within:text-amber-600 transition-colors" />
                <input name="name" type="text" required placeholder="Full Name" value={formData.name} onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all bg-gray-50/50 focus:bg-white" />
              </div>

              <div className="relative group">
                <LinkIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400 group-focus-within:text-amber-600 transition-colors" />
                <input name="photoUrl" type="url" required placeholder="Photo URL" value={formData.photoUrl} onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all bg-gray-50/50 focus:bg-white" />
              </div>

              <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                <div className="h-10 w-10 shrink-0 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                  {formData.photoUrl ? (
                    <img src={formData.photoUrl} alt="" className="h-full w-full object-cover" onError={(e) => e.target.src = "https://via.placeholder.com/150"} />
                  ) : <Camera size={16} className="text-gray-400" />}
                </div>
                <span className="text-xs text-gray-400">Photo preview</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative group">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400 group-focus-within:text-amber-600 transition-colors" />
                <input name="email" type="email" required placeholder="Email Address" value={formData.email} onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all bg-gray-50/50 focus:bg-white" />
              </div>

              <div className="relative group">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400 group-focus-within:text-amber-600 transition-colors" />
                <input name="password" type={showPassword ? "text" : "password"} required placeholder="Password" value={formData.password} onChange={handleChange}
                  className="block w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all bg-gray-50/50 focus:bg-white" />
                <button type="button" className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 transition-colors" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>

              <button type="submit" className="w-full flex items-center justify-center py-3 bg-gray-900 text-white text-sm font-bold rounded-xl hover:bg-amber-600 transition-all shadow-lg shadow-gray-900/20 active:scale-95">
                Create Account <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </form>

        <div className="flex flex-col items-center gap-4">

          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
            <div className="relative flex justify-center text-xs uppercase tracking-wider"><span className="px-3 bg-white/95 text-gray-400 font-bold">Or continue with</span></div>
          </div>

          <div className="flex gap-4 w-full md:w-2/3">
            <button onClick={() => handleSocialLogin('Google')} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 rounded-xl bg-white text-xs font-bold text-gray-700 hover:bg-gray-50 transition-all shadow-sm">
              <svg className="h-4 w-4" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
              Google
            </button>
            <button onClick={() => handleSocialLogin('Facebook')} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 rounded-xl bg-[#1877F2] text-xs font-bold text-white hover:bg-[#166fe5] transition-all shadow-sm">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              Facebook
            </button>
          </div>

          <p className="text-center text-xs text-gray-600">
            Already have an account? <Link to="/login" className="font-bold text-amber-600 hover:text-amber-700 hover:underline">Log In</Link>
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

export default Register;