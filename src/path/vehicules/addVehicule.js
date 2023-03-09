module.exports = (app, Vehicule) => {
    app.post('/vehicles', async (req, res) => {
      const { price} = req.body;
  
      // Validate request body
      if (!price) {
        return res.status(400).json({ message: 'Bad request' });
        }
  
      try {
        const newVehicule = await Vehicule.create({
          price,
          active : true
        });
  
    
  
        res.status(201).send(newVehicule);
      } catch (err) {
        console.error(err);
  
       
          res.status(500).send('Server error');
        
      }
    });
  };
  