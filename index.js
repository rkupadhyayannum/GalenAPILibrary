import URLS from "./Configs/URLS";
import getHeader from "./Configs/Headers";

export default async function Login(email, password) {
       const header = getHeader()
       const loginURL = URLS.GALEN_BASE_URL+URLS.LOGIN;
       var formdata = new FormData();
       formdata.append("emailAddress", email.trim());
       formdata.append("password", password.trim());
       const  requestOptions = { method: 'POST', headers: header, body: formdata};
       const response = await fetch(loginURL, requestOptions)
       if (response.status === 200) {
        let jsonResponse = await response.json()
        return {"status":"success","response":jsonResponse}
       }else if (response.status === 412) {
         return {"status":"error","errMessage":"Email/Password mismatch"}
       }
    return {"status":"error","errMessage":"Something went wrong"}
}


