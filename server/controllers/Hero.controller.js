const {Hero, Image, Superpower} = require('../models');


module.exports.createHero = async (req, res, next) => {
    try{
        const {body, file, superpower} = req;
        if(file) {
            console.log('if file')
            const createdHero = await Hero.create(body);

            const {dataValues:{id}} = createdHero;
            const {filename} = file;

            const createdImage = await Image.create({ 
                imagePath: filename,
                heroId: id
            });
            createdHero.addImage(createdImage);
            if(superpower) {
                createdHero.addSuperpower(superpower);
            }

            return res.status(201).send(createdHero);  
                                      
        }
        if(superpower) {
            console.log('if superpower')

            const createdHero = await Hero.create(body);
            const result = createdHero.addSuperpower(superpower);
            return res.status(201).send(createdHero);
        }
        if(superpower && file) {           
            console.log('if superpower && file)')

            const createdHero = await Hero.create(body);    

            const {dataValues:{id}} = createdHero;
            const {filename} = file;

            const createdImage = await Image.create({ 
                imagePath: filename,
                heroId: id
            });
            const result = createdHero.addSuperpower(superpower);
            const res = createdHero.addImage(createdImage);
            console.log(res)
            return res.status(201).send(result);
        }
        else {
            const {body} = req;
            const createdHero = await Hero.create(body);
            return res.status(201).send(createdHero);
        }

    } catch (error) {
        next(error)
    }
}

module.exports.findAll = async (req, res, next) => {
    try{

        const {pagination} = req;
        const result = await Hero.findAll({
            ...pagination,
            include: [Superpower, Image]
        });
        return res.status(200).send(result);
      
    } catch (error) {
        next(error)
    }
}

module.exports.findOneByPk = async (req, res, next) => {
    try{
        const {heroInstance} = req;
        const hero = await heroInstance;
        return res.status(200).send(hero);
      
    } catch (error) {
        next(error)
    }
}

module.exports.updateHero = async (req, res, next) => { 
    try{
        const {params: {id}, body, file, superpower, heroInstance} = req;
      if(file) {
        const {filename} = file;
        const updatedHero = await Hero.update(body, {
            where: {
                id
            }
        });
        const updatedImage = await Image.update({ 
            imagePath: filename}, {
                where: {
                    heroId: id
                }
            });
    
        return res.status(201).send(`Superhero ${id} was updated`);
      } else {
        const result = await Hero.update(body, {
                            where: {
                                id
                            }
            });
        
       heroInstance.addSuperpower(superpower);
       return res.status(201).send(`Superhero ${id} was updated`);
      }
    } catch (error) {
        next(error)
    }
}


module.exports.deleteHero = async (req, res, next) => {
    try{
        const {params: {id}} = req;
        const result = await Hero.destroy({      
                    where: {                        
                        id                          
                    }
    });
    if(result) {
        return res.status(200).send(`Superhero ${id} was deleted`);
    } else {
        return res.status(404).send(`Superhero ${id} not found`)
    }
      
    } catch (error) {
        next(error)
    }
} 

