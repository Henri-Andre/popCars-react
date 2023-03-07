module.exports = (app, Users) => {
    app.get('/users', async (req, res) => {
        try {
            const users = await Users.findAll();
            if (!users) {
                return res.status(404).json({ message: 'Aucun utilisateur trouvé' });
            }
            res.json({ data: users });
        } catch (error) {
            res.status(500).json({ message: 'Une erreur s\'est produite lors de la récupération des utilisateurs' });
        }
    });
}
