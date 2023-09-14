import React from "react";
import { Flex} from "@chakra-ui/react";
import Header from "../components/Header";


const DefaultLayout = ({children}) => {
    return(
        <Flex flexDirection='column'>
            <Header />
            {children}
        </Flex>
    )
}
export default DefaultLayout