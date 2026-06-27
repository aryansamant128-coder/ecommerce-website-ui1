import {useState} from "react";
import {supabaseClient} from "./supabase";
import { Link } from 'react-router-dom';





function Login(){
<p>
  Don't have an account? <Link to="/signup">Sign Up</Link>
</p>

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");



const login = async()=>{


const {error}=await supabaseClient.auth.signInWithPassword({

email,
password

});



if(error)

alert(error.message);


else

window.location="/";


}



return(

<div>


<h1>Login</h1>


<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>



<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>



<button onClick={login}>
Login
</button>


</div>

)

}


export default Login;