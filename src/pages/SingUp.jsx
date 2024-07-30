import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAath from "../components/OAath";

const SingUp = () => {
  const [fromdata, setFromdata] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setFromdata({ ...fromdata, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/auth/singup", {
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
        setError(data.message);
        setLoading(false);
        return;
      }
      // loading shesh tai
      setLoading(false);
      setError(null);
      navigate("/singin");

    } catch (err) {
      setError(err.message);
    }
    
  };
  return (
    <div>
      <div className=" max-w-lg justify-center p-6 mx-auto my-20 border-dotted border-2 border-indigo-600">
        <h1 className="text-3xl font-bold text-center mb-5">Sing up</h1>
        <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your Name" />
            </div>
            <TextInput
              id="username"
              type="text"
              placeholder="tanvir_islam"
              required
              onChange={handleChange}
            />
          </div>
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
          <Button className=" uppercase" type="submit" disabled={loading}>
            {loading ? "Loading..." : " Sing up "}
          </Button>
          {/* google sing up  */}
          <OAath/>
        </form>
        <div>
          <p className="text-center text-gray-500 mt-4">
            Already have an account?{" "}
            <span className=" text-blue-600 ">
              <Link to={"/singin"}>sing in</Link>
            </span>{" "}
          </p>
        </div>
        {error && <p className="text-red-500 text-center mt-5">{error}</p>}
      </div>
    </div>
  );
};

export default SingUp;
