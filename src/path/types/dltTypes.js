
module.exports = (app, Types) => {

    app.delete('/types/:id', async (req, res) => {
        const { id } = req.params;
        try {
            const type = await Types.findOne({ where: { id } });
            if (!type) {
                return res.status(404).json({ message: 'type not found' });
            }
            await type.destroy();
            res.json({ message: 'video deleted', data : type });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server Error' });
        }
    });

}