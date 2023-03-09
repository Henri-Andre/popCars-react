module.exports = (app, Vehicule) => {
    app.post('/vehicles', async (req, res) => {
      const { price, modelID, fuelID, typeID, videoID } = req.body;
  
      // Validate request body
      if (!price || !modelID || !fuelID || !typeID || !videoID) {
        return res.status(400).json({ message: 'Bad request' });
        }
  
      try {
        const newVehicule = await Vehicule.create({
          price,
          active : true,
          modelID,
          fuelID,
          typeID,
          videoID
        });
  
    
  
        res.status(201).send(newVehicule);
      } catch (err) {
        console.error(err);
  
       
          res.status(500).send('Server error');
        
      }
    });
  };
  