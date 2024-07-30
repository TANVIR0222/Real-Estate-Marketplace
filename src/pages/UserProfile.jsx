import { Button, Label, TextInput } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { app } from "../firebase/firebase.config";
import {  getStorage, ref, uploadBytesResumable } from "firebase/storage";

const UserProfile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const fileRef = useRef(null);

  const [file, setFile] = useState(undefined);
  //   file uploade see profile
  const [fileuplode, setFileuplode] = useState(0);
  console.log(fileuplode);
  console.log(file);

  useEffect(() => {
    if (file) {
      handlefileUplode(file);
    }
  }, [file]);

  const handlefileUplode = (file) => {
    const storsge = getStorage(app);
    // current time
    const filename = new Date().getTime() + file.name;
    const storeRef = ref(storsge, filename);
    const uploadTask = uploadBytesResumable(storeRef, file);
    uploadTask.on("state_changed",
       (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      // number gula decimel tai take purnnow nuber a rupantor
      // setFileuplode(Math.round(progress));
      console.log('uplode ' + progress + '% done');
    });
  };

  return (
    <div>
      <div className=" max-w-lg justify-center p-6 mx-auto my-20 border-dotted border-2 border-green-500">
        <h1 className="text-black text-center text-4xl font-semibold my-5">
          My Profile
        </h1>
        <form className="flex max-w-md flex-col gap-4">
          <div className="flex flex-col items-center justify-center">
            <input
              onChange={(e) => setFile(e.target.files[0])}
              type="file"
              ref={fileRef}
              hidden
              accept="imagw/*"
            />
            <img
              onClick={() => fileRef.current.click()}
              className=" w-20 h-20 rounded"
              src={currentUser.avatar}
              alt=""
            />
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
//   firebase storage  ------
//   allow read;
//   allow write: if
//   request.resource.size < 2 * 1024 * 1024 &&
//   request.resource.contentType.matches('image/*')

export default UserProfile;
