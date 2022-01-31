unction getReq(url){
  const axios = require('axios');

  axios.get(url).then(
    res => {
      console.log(res.data);
      console.log(axios.query.team);
    },
    error => {
      console.log(error);
    });
}
getReq('https://cs684api.7g2rji63c728k.us-east-1.cs.amazonlightsail.com/hw3?team=the%20temp');
