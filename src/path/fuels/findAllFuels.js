
module.exports = (app , Fuels) => {
    app.get('/fuels', async (req, res) => {
        try {
            const fuel = await Fuels.findAll();
            res.json(fuel);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server Error' });
        }
    });
}