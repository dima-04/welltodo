import axios from "axios";

export default {
    login: function (data) {
        return axios.post("/api/user/login", data);
    },
    signup: function (data) {
        return axios.post("/api/user/signup", data)

    },
    saveTodo: function (data) {
        return axios.post("/api/todo/", data)
    },
    deleteTodo: function (id) {
        return axios.delete("/api/todo/" + id)
    },
    getAllTodo:function(userId){
        return axios.get("/api/todo?userId="+userId)
    }
}