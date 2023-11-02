import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const { createUser, googleLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (confirm !== password) {
      toast.error('Mismatch in confirm password');
      return;
    }

    const toastId = toast.loading('Creating user ...');

    try {
      await createUser(email, password);
      toast.success('User Created', { id: toastId });
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error(error.message, { id: toastId });
    }
  };

  const handleGoogleLogin = async () => {
    const toastId = toast.loading('Logging in ...');

    try {
      await googleLogin(email, password);
      toast.success('Logged in', { id: toastId });
      navigate('/');
    } catch (error) {
      toast.error(error.message, { id: toastId });
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center">
      <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              onBlur={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
              onBlur={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
              onBlur={(e) => setConfirm(e.target.value)}
            />
          </div>
          <p className="text-center text-sm">
            Don&apos;t have an account ?{' '}
            <NavLink
              to="/login"
              className="text-primary font-bold hover:underline cursor-pointer "
            >
              Login
            </NavLink>
          </p>
          <div className="form-control mt-2">
            <button type="submit" className="btn btn-primary">
              Sign up
            </button>
          </div>
          <div className="divider ">Or, Continue With</div>
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="btn btn-outline btn-primary  w-full flex justify-between items-center cursor-pointer "
          >
            Google
            <FcGoogle className="w-8 h-8" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
