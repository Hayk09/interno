import React from "react";
import { Box , Flex} from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";


const AuthLayouts = ({children}) => {
    return(
        <Flex flexDirection='column'>
            <Header />
               {children}
            <Box position='fixed' bottom={0} left={0}>
               <Footer />
            </Box> 
        </Flex>
    )
}
export default AuthLayouts