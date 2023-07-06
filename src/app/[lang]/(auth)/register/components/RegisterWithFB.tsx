'use client';

import Iconify from "@/common/components/Iconify";
import { auth } from "@/common/utils/firebase";
import { IconButton } from "@mui/material";
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";

const RegisterWithFacebook = () => {
    const facebookProvider = new FacebookAuthProvider();

    const handleLoginWithFacebook = ( ) => {
        signInWithPopup(auth, facebookProvider)
        .then((res) => {
            console.log(res);
        })
    }

    return ( 
        <IconButton
        sx={{
          py: 1,
          px: 3,
          border: 1,
          borderColor: "#dce0e4",
          borderRadius: "8px",
        }}
        onClick={handleLoginWithFacebook}
      >
        <Iconify
          icon={"logos:facebook"}
          sx={{
            width: "2rem",
            m: 'auto'
          }}
        />
      </IconButton>
     );
}
 
export default RegisterWithFacebook;