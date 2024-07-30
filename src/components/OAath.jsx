import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { singInSuccess } from "../redux/user/usersSlice";
import { auth } from "../firebase/firebase.config";

const OAath = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlerSingGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth,provider);
  
        const res = await fetch('http://localhost:5000/api/auth/google', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: result.user.displayName,
              email: result.user.email,
              photo: result.user.photoURL,
            }),
          });
          const data = await res.json();
          dispatch(singInSuccess(data));
          navigate('/');
        } catch (error) {
          console.log('could not sign in with google', error);
        }
  };
  return (
    <div>
      <button
        type="submit"
        onClick={handlerSingGoogle}
        className="border mt-4 border-indigo-600 rounded w-full h-10 flex items-center justify-center gap-4"
      >
        <FcGoogle className="text-2xl" /> Sing up with google
      </button>
    </div>
  );
};

export default OAath;
