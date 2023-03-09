module.exports = (app, Users, Roles) => {
    app.get('/users/role/:id', async (req, res) => {
            const id = req.params.id
        try {
            const users = await Roles.findByPk( id ,{
                include : {
                    model : Users,
                }
            })

            res.json(users)
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Une erreur s\'est produite lors de la récupération des utilisateurs' });
        }
    });
}
