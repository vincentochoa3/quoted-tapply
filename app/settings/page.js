"use client";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { useAuth } from "@/context/AuthContext";
import { storage } from "@/firebase";
import { addData } from "@/utils/firebaseUtils";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Settings = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [url, setUrl] = useState(null);
  const { authedUser } = useAuth();
  console.log(authedUser);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setProfilePic(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    const imageRef = ref(storage, `profilePics/${authedUser.uid}`);
    try {
      await uploadBytes(imageRef, profilePic);
      const url = await getDownloadURL(imageRef);
      if (!url) throw new Error("Error getting image url.");
      await addData("users", authedUser.uid, { pictureUrl: url });
      setUrl(url);
      setProfilePic(null);
    } catch (error) {
      console.log(error.message, "something went wrong uploading the image.");
    }
  };

  return (
    <div className="flex flex-col gap-12 w-full max-w-[500px]">
      <h1 className="text-2xl font-semibold">Settings</h1>
      <Avatar alt={authedUser.uid} src={url} sx={{ width: 100, height: 100 }} />
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Settings;
