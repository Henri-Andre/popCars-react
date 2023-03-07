
module.exports = (app, Audivisual) => {

    app.delete('/audiovisuals/:id', async (req, res) => {
        const { id } = req.params;
        try {
            const video = await Audivisual.findOne({ where: { id } });
            if (!video) {
                return res.status(404).json({ message: 'video not found' });
            }
            await video.destroy();
            res.json({ message: 'video deleted', data : video });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server Error' });
        }
    });

}