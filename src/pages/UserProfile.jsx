import { Button, Label, TextInput } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { app } from "../firebase/firebase.config";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { uploadeUserFailure, uploadeUserSussecss } from "../redux/user/usersSlice";

const UserProfile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  //   file uploade see profile
  const [fileuplode, setFileuplode] = useState(0);

  // error
  const [fileUploadeError, setFileUploadeError] = useState(false);

  // frome data
  const [formData, setFormData] = useState({});

  const dispatch = useDispatch();

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
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // number gula decimel tai take purnnow nuber a rupantor
        setFileuplode(Math.round(progress));
      },
      // set Error
      () => {
        setFileUploadeError(true);
      },
      // uplode profile img
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadeURL) => {
          setFormData({ ...formData, avatar: downloadeURL });
        });
      }
    );
  };

  const handleChange = (e) => {
    setFormData({...formData , [e.target.id]: e.target.value })
  }

  const handleSubmit =async (e) =>{
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/api/user/update/${currentUser._id}`,{
        method:'POST',
        headers:{
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(formData)
      })
      const data = await res.json();
      if(data.success === false){
        dispatch(uploadeUserFailure(data.message))
        return;
      }
      dispatch(uploadeUserSussecss(data))
    } catch (err) {
      dispatch(uploadeUserFailure(err.message))
    } 
  }

  const handleDeleteUser = async () => {
    try {
      // dispatch(deleteUserStart());
      const res = await fetch(`http://localhost:5000/api/user/delete/${currentUser._id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success === false) {
        // dispatch(deleteUserFailure(data.message));
        return;
      }
      // dispatch(deleteUserSuccess(data));
    } catch (error) {
      // 
    }
  };

  

  return (
    <div>
      <div className=" max-w-lg justify-center p-6 mx-auto my-20 border-dotted border-2 border-green-500">
        <h1 className="text-black text-center text-4xl font-semibold my-5">
          My Profile
        </h1>
        <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
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
              // current image uploade & prev image
              src={formData.avatar || currentUser.avatar}
              alt=""
            />
            <p className="text-sm my-2 self-center">
              {fileUploadeError ? (
                <span className="text-red-700">
                  Error Image Upload (image must be less than 2 md){" "}
                </span>
              ) : fileuplode > 0 && fileuplode < 100 ? (
                <span className="text-slate-700">Uploading{fileuplode}%</span>
              ) : fileuplode === 100 ? (
                <span className="text-green-700">
                  Image Successfully Uploaded!
                </span>
              ) : (
                ""
              )}
            </p>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your Name" />
            </div>
            <TextInput
              id="username"
              type="text"
              defaultValue={currentUser.username}
              placeholder="tanvir_islam"
              onChange={handleChange}
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
              defaultValue={currentUser.email}
              placeholder="name@flowbite.com"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput
             id="password" 
             type="password" 
             onChange={handleChange} />
             required
          </div>
          {/*  */}
          <Button type="submit">Update</Button>
          <div className=" flex justify-between">
            <span onClick={handleDeleteUser} className="text-red-700 cursor-pointer">Deletet account</span>
            <span  className="text-red-700 cursor-pointer">Sing out</span>
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
