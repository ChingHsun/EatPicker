import { Container, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getFirestoreCollection } from "../Firebase/Firestore.jsx";
const List = () => {
  const [datalist, setDatalist] = useState();
  useEffect(async () => {
    setDatalist(await getFirestoreCollection("places"));
  }, []);
  return (
    <Container maxWidth="100vw" width="100vw" bg="yellow.300" height="100vh">
      <Container width="70%">
        <Box padding="50px">
          List
          {datalist &&
            datalist.map((data) => {
              console.log("data", data);
              return <Box>{data.docData.name}</Box>;
            })}
        </Box>
      </Container>
    </Container>
  );
};
export default List;
