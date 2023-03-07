module.exports = (app, Users) => {
    app.get('/users/:id', async (req, res) => {
        const id = req.params.id;
        try {
            const user = await Users.findOne({ where: { id}});
            if (!user) {
                return res.status(404).json({ message: `Utilisateur avec l'ID ${id} introuvable` });
            }
            res.json({ data: user });
        } catch (error) {
            res.status(500).json({ message: `Une erreur s'est produite lors de la récupération de l'utilisateur avec l'ID ${id}` });
        }
    });
}

