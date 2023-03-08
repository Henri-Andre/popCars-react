

module.exports = (app, Types) => {
    
    app.post('/types', async (req, res) => {
        try {
          const { type } = req.body;
          if (!type) {
            return res.status(400).json({ message: 'Name  are required' });
          }
          const types = await Types.create({ type});
          res.json(types);
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Server Error' });
        }
      });
}
