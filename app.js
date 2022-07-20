const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

app.get('/bio', async (req, res) => {

  let user=req.query.user;
  console.log(user);
  var axios = require('axios');


  var config = {
    method: 'get',
    url: `https://api.twitter.com/1.1/users/show.json?screen_name=${user}`,
    headers: { 
      'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAANKRdgEAAAAAN%2FDazG5nUtnnCU7OYt%2FLwSS72fw%3DgP5tspdHCMC9VSdu9CwXYiiD6NIFyDLsxVaGNq6rDeUvTBWX9j', 
      'Cookie': 'guest_id=v1%3A165784414559884620; guest_id_ads=v1%3A165784414559884620; guest_id_marketing=v1%3A165784414559884620; personalization_id="v1_dfJetkzUf57znmcUB8nJYw=="'
    }
  };

  var tea = axios(config).then(function (response) {
    res.send({ message: response.data });
    // res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  })
  .catch(function (error) {
    console.log(error);
  });

  // res.send({ kapilan: tea });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Hello from Render!
    </section>
  </body>
</html>
`
