module.exports = (app, Users) => {
    app.get('/users', async (req, res) => {
        try {
            const users = await Users.findAll()

            res.json(users)
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Une erreur s\'est produite lors de la récupération des utilisateurs' });
        }
    });
}
