import axios from "axios";

export default {
    login: function (data){
        return axios.post("/api/user/login", data);
    },
    signup:function(data){
        return axios.post("/api/user/signup",data)

    }
}