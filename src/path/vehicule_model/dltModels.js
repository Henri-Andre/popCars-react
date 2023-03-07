

module.exports = (app, Models) => {

    app.delete('/models/:id', async (req, res) => {
        const { id } = req.params;
        try {
          const model = await Models.findOne({ where: { id } });
          if (!model) {
            return res.status(404).json({ message: 'Model not found' });
          }
          await model.destroy();
          res.json({ message: 'Model deleted', data : model });
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Server Error' });
        }
      });

}