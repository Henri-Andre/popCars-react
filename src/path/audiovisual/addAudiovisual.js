

module.exports = (app, Audiovisual) => {
    
    app.post('/audiovisuals', async (req, res) => {
        try {
          const { name } = req.body;
          if (!name) {
            return res.status(400).json({ message: 'Name  are required' });
          }
          const video = await Audiovisual.create({ name});
          res.json(video);
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Server Error' });
        }
      });
}
