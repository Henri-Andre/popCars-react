
module.exports = (app , Types) => {
    app.get('/types', async (req, res) => {
        try {
          const types = await Types.findAll();
          res.json(types);
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Server Error' });
        }
      });
}