import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const SingUp = () => {
  return (
    <div className="">
      <div className=" max-w-lg justify-center p-6 mx-auto my-20 border-dotted border-2 border-indigo-600">
        <h1 className="text-3xl font-bold text-center mb-5">Sing up</h1>
        <form className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your Name" />
            </div>
            <TextInput id="password1" type="password" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="email@.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" required />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button className=" uppercase" type="submit">sing up</Button>
        </form>
        <div >
            <p  className="text-center text-gray-500 mt-4">Already have an account? <span className=" text-blue-600 "><Link to={'/singin'}>sing in</Link></span> </p>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
