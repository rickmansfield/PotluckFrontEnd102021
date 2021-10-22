import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: 'https://bw-potluck-102021.herokuapp.com/api'
    });
}

export default axiosWithAuth;