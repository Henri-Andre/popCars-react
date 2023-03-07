
module.exports = (app, Fuels) => {

    app.delete('/fuels/:id', async (req, res) => {
        const { id } = req.params;
        try {
            const fuels = await Fuels.findOne({ where: { id } });
            if (!fuels) {
                return res.status(404).json({ message: 'video not found' });
            }
            await fuels.destroy();
            res.json({ message: 'video deleted', data : fuels });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server Error' });
        }
    });

}