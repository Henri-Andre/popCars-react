

const bcrypt = require('bcrypt');

module.exports = (app, Users) => {
    app.post('/users', (req,res) => {
        try{
            const name = req.body.name;
            const first_name = req.body.first_name;
            const email = req.body.email;
            const password = req.body.password;
            const image = req.body.image;
            const roleid= req.body.roleID;
            Users.findOne({ where: { email } })
                .then(element => {
                    if(element){
                        return res.status(409).json({message: 'un compte existe déjà avec cet email'})
                    }
                    bcrypt.hash(password, 10)
                    .then(hash => {
                        Users.create({
                            name,
                            first_name,
                            email,
                            password: hash,
                            image,
                            roleID:1
                        }).then(element => {
                            res.json({message: `User ${name} ajouté avec succes`, data: element});
                        })
                    })
                });   
        }catch(error){
            res.status(500).json({
                message: 'Une erreur s\'est produite lors de la création de l\'utilisateur'
            });
        }
    })
}