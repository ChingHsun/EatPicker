import {
  Container,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormHelperText,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { addFile } from "../Firebase/Storage.jsx";
import { addImgInFireStore } from "../Firebase/Firestore.jsx";
const AddPlace = () => {
  const [submitData, setSubmitData] = useState({
    name: undefined,
    img: undefined,
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await addImgInFireStore(submitData, "places");
    console.log("response", response);
  };
  const onFileChange = (e) => {
    setSubmitData({ ...submitData, img: e.target.files[0] });
  };
  const onNameChange = (e) => {
    setSubmitData({ ...submitData, name: e.target.value });
  };
  return (
    <Container maxWidth="100vw" width="100vw" bg="yellow.300" height="100vh">
      <Container padding="50px 0">
        <Box width="70%" bg="white" maxWidth="750px">
          <form onSubmit={onSubmit}>
            <FormControl id="name" isRequired>
              <FormLabel>店家名稱：</FormLabel>
              <Input
                type="text"
                placeholder="店家名稱"
                onChange={onNameChange}
              ></Input>
            </FormControl>
            <FormControl id="image" isRequired>
              <FormLabel>店家圖片：</FormLabel>
              <Input
                type="file"
                onChange={onFileChange}
                accept=".jpg, .png"
              ></Input>
            </FormControl>
            <Button type="submit">Submit</Button>
          </form>
        </Box>
      </Container>
    </Container>
  );
};

export default AddPlace;
