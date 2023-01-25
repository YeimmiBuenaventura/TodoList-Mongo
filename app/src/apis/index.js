import axios from "axios";

export default axios.create({
    baseURL: "https://todo-list-mongo-self.vercel.app"
    //http://localhost:3030
});