const {Superpower} = require('../models');


module.exports.findSuperpower = async(req, res, next) => {
    try {
        const {body: {superpower} }= req;
        if(superpower) {
            const power = await Superpower.findOne({
                            where: {
                                 superpower
                                }
            })
            if(power) {
                console.log(`Have in db ${power}`)
                req.superpower = power;
            } 
            else {
                console.log(`Not have that power in db`)
                const newPower = await Superpower.create({"superpower": `${superpower}`});   
                req.superpower = newPower;              
            }
            next();
         }
        else{  
            next();
        }      
    } catch(error) {
        next(error);
    }
}
