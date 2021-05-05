import { Container, Box, Image, Center } from "@chakra-ui/react";
import { getFirestoreCollection } from "../Firebase/Firestore.jsx";
import { useEffect, useState } from "react";
const Index = () => {
  const [place, setPlace] = useState({ docId: "", docData: "" });
  useEffect(() => {
    console.log("inEffect", place);
    if (!place.docId) {
      console.log("inEffect1", place);

      getPlace();
    }
  }, [place]);
  const getPlace = async () => {
    const placeList = await getFirestoreCollection("places");
    const randomIndex = Math.floor(Math.random() * placeList.length);
    setPlace(placeList[randomIndex]);
  };
  const onChangePlace = () => {
    getPlace();
  };
  return (
    <Container maxWidth="100vw" width="100vw" bg="yellow.300" height="100vh">
      <Container width="70%">
        <Box
          padding="50px"
          style={{ cursor: "pointer" }}
          onClick={onChangePlace}
        >
          <Image
            width="750px"
            maxWidth="750px"
            height="450px"
            src={place.docData.img}
          ></Image>
          <Center>{place.docData.name}</Center>
        </Box>
      </Container>
    </Container>
  );
};

export default Index;
