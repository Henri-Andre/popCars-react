module.exports = (app, Fuels) => {
    app.put('/fuels/:id', async (req, res) => {
        try {
            const { id } = req.params;
            const { fuel } = req.body;
            if (!fuel) {
                return res.status(400).json({ message: 'fuel is required' });
            }
            const fuels = await Fuels.findOne({ where: { id } });
            if (!fuel) {
                return res.status(404).json({ message: 'fuel not found' });
            }
            await fuels.update({ fuel});
            res.json(fuels);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Erreur serveur' });
        }
    });
}
