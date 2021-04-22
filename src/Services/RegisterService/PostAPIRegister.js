import Axios from 'axios';
class PostAPIRegister {
    POST(data) {
        return Axios({
            url:'https://hackathon-be-dev.herokuapp.com/users',
            method:'POST',
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(data)
        })
    }
}
export default PostAPIRegister;