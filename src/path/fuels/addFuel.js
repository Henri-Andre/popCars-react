

module.exports = (app, Fuels) => {

    app.post('/fuels', async (req, res) => {
        try {
            const {fuel} = req.body;
            if (!fuel) {
                return res.status(400).json({ message: 'fuel  are required',data: Fuels });
            }
            const fuels = await Fuels.create({fuel});
            res.json(fuels);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server Error' });
        }
    });
}
