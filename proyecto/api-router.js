// Filename: api-routes.js
// Initialize express router
const router = require('express').Router();
const ThingsModel = require('./things-schema');
// Set default API response
router.get('/titles',(req, res) =>{
  ThingsModel.find({
    Title:"daniel"
  },(err,data) =>{
    if(err)
      res.send("NOSIRBO");
    else
      res.send(data);
  });
});

router.post('/post', (req, res) => {
    //const things = new ThingsModel(req.query);
    const things = new ThingsModel();  
    things.save((err,things)=> {
      if(err)
        res.json(err)
      else
        res.json(things)
    });
    
  })

router.delete('/de
  })
}) 


// Export API routes
module.exports = router;