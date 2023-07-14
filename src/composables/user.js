import { ref } from 'vue';
import{auth, onAuthStateChanged} from '../firebase/config'

let user=ref(auth.currentUser);
let updateUser=onAuthStateChanged(auth,(_user)=>{
    user.value=_user;
})

export default user;
