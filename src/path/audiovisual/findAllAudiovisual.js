
module.exports = (app , Audiovisual) => {
    app.get('/audiovisuals', async (req, res) => {
        try {
          const audiovisual = await Audiovisual.findAll();
          res.json(audiovisual);
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Server Error' });
        }
      });
}