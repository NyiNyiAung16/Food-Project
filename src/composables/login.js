import { ref } from "vue";
import { auth, signInWithEmailAndPassword} from "@/firebase/config";


let error=ref(null);
let loginAcc =async ( email, password ) => {
    try{
        let res= await signInWithEmailAndPassword(auth , email, password);
        return res;
    }catch(err){
        error.value=err.message;
    }
}


let login=() =>{
    return { error, loginAcc }
}

export default login;