module.exports = (app, Models) => {
    
    app.post('/models', async (req, res) => {
        try {
          const { name, img, vehicleID } = req.body;
          if (!name || !img) {
            return res.status(400).json({ message: 'Name and image URL are required' });
          }
          const model = await Models.create({ name, img, vehicleID });
          res.json(model);
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Server Error' });
        }
      });
}

