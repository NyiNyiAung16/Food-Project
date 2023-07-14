import { ref } from "vue"
import { auth, createUserWithEmailAndPassword , updateProfile} from "@/firebase/config";

let error=ref(null);

let create=async (email,password,displayName)=>{
    try{
        let res=await createUserWithEmailAndPassword(auth,email,password);
        updateProfile(res.user,{
            displayName
        })
        return res; 
    }catch(err){
        error.value=err.message;
    }
}

let signIn=()=>{
    return {error , create}
}


export default signIn;