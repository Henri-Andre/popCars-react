

module.exports = (app, Vehicle, Fuels, Models, Types, Audiovisual, Comments) => {
    app.get('/vehicles/:id', async (req, res) => {
            const id = req.params.id
        try {
            const vehicle = await Vehicle.findByPk( id ,{
                include : [
                    {
                        model : Models ,
                        attributes : ['name' ,'img']
                    },
                    {
                        model : Audiovisual,
                        attributes : ['name' ]
                    },
                    {
                        model : Types,
                        attributes : ['type'] 
                    },
                    {
                        model : Fuels,
                        attributes : ['fuel'] 
                    },
                    {
                        model : Comments,
                        attributes : ['content','created'] 
                    },

                ]
                
            })

            res.json(vehicle)
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Une erreur s\'est produite lors de la récupération des utilisateurs' });
        }
    });
}
