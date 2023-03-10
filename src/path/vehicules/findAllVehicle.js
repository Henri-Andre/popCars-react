

module.exports = (app, Vehicle, Models, Audiovisual, Types, Fuels, Comments) => {
    app.get('/vehicles', async  (req, res) => {
        try {
            const vehicles = await Vehicle.findAll({
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
             res.json(vehicles)
            }catch (error) {
                console.error(error);
                res.status(500).json({message: 'la requete a échoué'})
            }
        }) 
    } 
    
