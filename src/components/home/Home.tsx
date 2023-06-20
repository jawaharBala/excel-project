import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../state_management/slices/UserSlice";
import { Button } from "@mui/material";

const Home = () => {
    const user = useSelector((store:any)=>store.user);
    const dispatch = useDispatch();
    return ( 
        <>
        <h1>Home Page</h1>
        <h2>{user.user}</h2>
     {user.user &&   <Button onClick={()=>dispatch(setUser(""))}>Remove user</Button>}
      {!user.user &&  <Button onClick={()=>dispatch(setUser("Jawahar"))}>Add user</Button>}
        </>
     );
}
 
export default Home;