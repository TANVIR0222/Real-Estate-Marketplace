import { Button, Label, TextInput } from "flowbite-react";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div>
      <div className=" max-w-lg justify-center p-6 mx-auto my-20 border-dotted border-2 border-green-500">
        <form className="flex max-w-md flex-col gap-4">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-black text-center text-4xl font-semibold my-5">
              Profile
            </h1>

            <img className=" rounded" src={currentUser.avatar} alt="" />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your Name" />
            </div>
            <TextInput
              id="username"
              type="text"
              placeholder="tanvir_islam"
              required
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
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput id="password" type="password" required />
          </div>
          {/*  */}
          <Button type="submit">Update</Button>
          <div className=" flex justify-between">
            <span className="text-red-700 cursor-pointer">Deletet account</span>
            <span className="text-red-700 cursor-pointer">Sing out</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
