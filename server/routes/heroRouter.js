const { Router } = require('express');

const HeroController = require('../controllers/Hero.controller');
const { getHeroInstance, validateHero } = require('../middlewares/hero.mv');
const pagination = require('../middlewares/pagination.mv');
const { findSuperpower } = require('../middlewares/getsuperpowers.mv');
const uploadImage = require('../storage');

const heroRouter = Router();

heroRouter.post('/', uploadImage.single('heroesImg'), findSuperpower, validateHero, HeroController.createHero);
heroRouter.delete('/:id', HeroController.deleteHero);
heroRouter.get('/', pagination, HeroController.findAll);
heroRouter.put('/:id', getHeroInstance, HeroController.updateHero);

module.exports = heroRouter;