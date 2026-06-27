import {useState} from "react";
import {supabaseClient} from "./supabase";


function Signup(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");



const signup = async()=>{


const {error}=await supabaseClient.auth.signUp({

email,
password

});


if(error)
alert(error.message);

else
alert("Account Created");


}



return (

<div>

<h1>Sign Up</h1>


<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>


<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>


<button onClick={signup}>
Create Account
</button>


</div>

)

}


export default Signup;