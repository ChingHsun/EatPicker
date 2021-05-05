import {
  Container,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import firebase from "../Firebase/firebase-config.js";
import * as firebaseui from "firebaseui";
const Profile = () => {
  const [signupData, setSignupData] = useState({
    email: undefined,
    password: undefined,
  });
  const onEmailChange = (e) => {
    setSignupData({ ...signupData, email: e.target.value });
  };
  const onPasswordChange = (e) => {
    setSignupData({ ...signupData, password: e.target.value });
  };
  const onSignup = async (e) => {
    e.preventDefault();
    console.log("in", signupData);
    firebase
      .auth()
      .createUserWithEmailAndPassword(signupData.email, signupData.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log("u", user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("u", errorCode, errorMessage);
      });
  };
  return (
    <Container maxWidth="100vw" width="100vw" bg="yellow.300" height="100vh">
      <Container padding="50px 0">
        <Box width="70%" bg="white">
          profile
          <div id="firebaseui-auth-container"></div>
          <form onSubmit={onSignup}>
            <FormControl id="email" isRequired>
              <FormLabel>信箱</FormLabel>
              <Input type="login-email" onChange={onEmailChange}></Input>
            </FormControl>
            <FormControl id="login-password" isRequired>
              <FormLabel>密碼</FormLabel>
              <Input type="password" onChange={onPasswordChange}></Input>
            </FormControl>
            <Button type="submit">Signup</Button>
          </form>
        </Box>
      </Container>
    </Container>
  );
};

export default Profile;
