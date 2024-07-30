import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  singInStart,
  singInFailure,
  singInSuccess,
} from "../redux/user/usersSlice";
import OAath from "../components/OAath";
// import OAath from "../components/OAath";

const Singin = () => {
  const [fromdata, setFromdata] = useState({});
  // const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();

  // redux-
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    setFromdata({ ...fromdata, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(singInStart());
      const res = await fetch("http://localhost:5000/api/auth/singin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fromdata),
      });
      //   ison akare data database send
      const data = await res.json();
      // success using server side index.js
      if (data.success === false) {
        dispatch(singInFailure(data.message));
        return;
      }
      // loading shesh tai
      dispatch(singInSuccess(data));
      navigate("/");
    } catch (err) {
      dispatch(singInFailure(err.message));
    }
  };
  return (
    <div>
      <div className=" max-w-lg justify-center p-6 mx-auto my-20 border-dotted border-2 border-indigo-600">
        <h1 className="text-3xl font-bold text-center mb-5">Sing In</h1>
        <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              id="email"
              type="email"
              placeholder="name@flowbite.com"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput
              id="password"
              type="password"
              required
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button className=" uppercase" type="submit">
            Singin
          </Button>
        </form>
        <OAath/>

        <div>
          <p className="text-center text-gray-500 mt-4">
            Already have an account?{" "}
            <span className=" text-blue-600 ">
              <Link to={"/singup"}>sing up</Link>
            </span>{" "}
          </p>
        </div>
        {/* {error && <p className="text-red-500 text-center mt-5">{error}</p>} */}
      </div>
    </div>
  );
};
export default Singin;
