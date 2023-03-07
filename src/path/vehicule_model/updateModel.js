

module.exports = (app, Models) => {

    app.put('/models/:id', async (req, res) => {
        try {
          const { id } = req.params;
          const model = await Models.findOne({ where: { id } });
          if (!model) {
            return res.status(404).json({ message: 'Modèle non trouvé' });
          }
          const { name, img } = req.body;
          if (!name && !img) {
            return res.status(400).json({ message: 'Le nom ou l\'URL de l\'image est obligatoire' });
          }
          await model.update({ name, img });
          res.json(model);
        } catch (err) {
            console.error(err);r
            res.status(500).json({ message: 'Erreur serveur' });
          }
        });
}