

module.exports = (app, Types) => {
    
    app.post('/types', async (req, res) => {
        try {
          const { type, vehicleID } = req.body;
          if (!type || !vehicleID ) {
            return res.status(400).json({ message: 'info  are required' });
          }
          const types = await Types.create({ type, vehicleID});
          res.json(types);
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Server Error' });
        }
      });
}
