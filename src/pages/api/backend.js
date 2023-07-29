const axios = require('axios');

export default function serverImageIa(req, res) {

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://api.pexels.com/v1/search?query=nature&per_page=10',
    headers: { 
      'Authorization': 'xK2iLSTkycvGqy7qOONh7y0D1N29pXKMp7fxkugqFvrmDNVfalT9I8JJ', 
      'Cookie': '__cf_bm=ghvRlBXXPaVpSUdEADRth_n3BmC6oI99TwfAELrY.LU-1690589162-0-AcXQLeNng3EES5ixIG7WZKquK1F5t3wSRrIvrp2ApvB5VgHAF2pwezobbRTAxXfJIttT09ojObgwBpOsYVoIwss='
    }
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  }); 


}