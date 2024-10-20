import { useContext } from "react";
import { currentUserContext } from "../pages/UserHomePage";

export const FethCurrentUser =()=>{
    const usercontext = useContext(currentUserContext);
    const userId = !usercontext ? 0 : usercontext;
    return userId
}