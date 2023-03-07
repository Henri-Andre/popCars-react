module.exports = (app, Audiovisual) => {
    app.put('/audiovisuals/:id', async (req, res) => {
        try {
            const { id } = req.params;
            const { name } = req.body;
            if (!name) {
                return res.status(400).json({ message: 'Name is required' });
            }
            const model = await Audiovisual.findOne({ where: { id } });
            if (!model) {
                return res.status(404).json({ message: 'Audiovisual not found' });
            }
            await model.update({ name});
            res.json(model);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Erreur serveur' });
        }
    });
}
