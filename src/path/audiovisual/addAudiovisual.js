

module.exports = (app, Audiovisual) => {
    
    app.post('/audiovisuals', async (req, res) => {
        try {
          const { name, vehicleID } = req.body;
          if (!name || !vehicleID) {
            return res.status(400).json({ message: 'info are required' });
          }
          const video = await Audiovisual.create({ name , vehicleID});
          res.json(video);
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Server Error' });
        }
      });
}
