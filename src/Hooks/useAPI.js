
import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const useAPI = config => {
  // const [dataAPI, setData] = useState('');
  // const [error, setError] = useState('');
  const { method, url, data } = config;

  const moveData = () => {
    console.log('Here is useApi.js Config',config);
    //in login case "post, /api/auth/login , sue 1234
    //
    return axiosWithAuth()
      [method](url, data)
      .then(res => res.data)
      .catch(err => {
        console.log(err);
        return err;
      });
  };
  // console.log('Here is useApi.js dataAPI', dataAPI)
  return [ moveData];
};

//this component collects a base information to feed into axiosWithAuth
