import Axios from 'axios';
class LoginAPI {
    PostLoginApi(data) {
       return Axios({
        method:'POST',
        url:'https://hackathon-be-dev.herokuapp.com/users',
        data: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
        
       })
    }
}

export default LoginAPI;