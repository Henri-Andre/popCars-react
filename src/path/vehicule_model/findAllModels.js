
module.exports = (app , Models) => {
    app.get('/models', async (req, res) => {
        try {
          const models = await Models.findAll();
          res.json(models);
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Server Error' });
        }
      });
}