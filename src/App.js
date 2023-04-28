import './App.css';
import Message from "./components/Message";
import {Box, Button, Container, HStack, Input, VStack} from "@chakra-ui/react";
import {getAuth,GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {app} from "./firebase";
import { useState } from 'react';
const auth = getAuth(app);

const loginhandler = () =>{
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider);
}
function App() {
  const [user, setUser] = useState(false);
  return (
    <Box bg={"red.50"}>
      <Container bg={"white"} h={"100vh"}>
        <VStack h="full" paddingY="4 ">
          <Button colorScheme={"red"} w={"full"}>
            Logout
          </Button>

          <VStack h="full" w={"full"} overflowY="auto">
           
          </VStack>

          <form style={{width: "100%"}}>
          <HStack>
            <Input placeholder="Enter a message..." />
            
            <Button colorScheme={"purple"} type="submit">Send</Button>

            </HStack>
          </form>
        </VStack>
      </Container>
    </Box>
  );
}

export default App;
