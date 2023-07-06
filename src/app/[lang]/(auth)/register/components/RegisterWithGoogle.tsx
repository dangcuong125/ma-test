'use client';
import Iconify from "@/common/components/Iconify";
import React from "react";
import { IconButton } from '@mui/material';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth } from "@/common/utils/firebase";

const RegisterWithGoogle = () => {

    const googleProvider = new GoogleAuthProvider();
  const handleLoginWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        onAuthStateChanged(auth, (user) => {
          user?.getIdToken().then((idToken) => console.log(idToken));
          console.log(user);
        });
      })

      .catch((err) => {
        console.log(err);
      });
  };
    return ( 
        <IconButton
        sx={{
          py: 1,
          px: 3,
          border: 1,
          borderColor: "#dce0e4",
          borderRadius: "8px",
          alignItems: "center",
        }}
        onClick={handleLoginWithGoogle}
      >
        <Iconify
          icon={"flat-color-icons:google"}
          sx={{
            width: "2rem",
            m: 'auto'
          }}
        />
      </IconButton>
     );
}
 
export default RegisterWithGoogle;