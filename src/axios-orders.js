import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://burger-builder-react-7a57f.firebaseio.com/'
});


export default instance;