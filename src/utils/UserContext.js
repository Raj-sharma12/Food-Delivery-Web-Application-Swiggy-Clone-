// react gives us access to important utility function which is known as createContext to create a context

import { createContext } from "react";

const UserContext=createContext({
    loggedInUser:"Default User"
});

export default UserContext;