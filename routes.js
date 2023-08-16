const router = require('express').Router();
let Planet = require('./models');

router.route('/').get((req, res) => {
  Planet.find()
    .then((planet) => res.json(planet))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    console.log('just id' + req.params.id);
    Planet.findById(req.params.id)
      .then((planet) =>
      res.json(planet))
      .catch((err) => res.status(400).json('Error: ' + err));
  });


router.route('/add').post(async (req, res) => {
  const name = req.body.name;
  const diameter = req.body.diameter;
  const moons = req.body.moons;
  const desc = req.body.desc;
  const url = req.body.url;
  const newPlanet = await new Planet({
    name,
    diameter,
    moons,
    desc,
    url
  });

  console.log(newPlanet);
  // save the new object (newActivity)
  newPlanet
    .save()
    .then(() => res.json('Planet added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});



router.route('/delete/:id').delete(async (req, res) => {
  console.log('delete logged');
await Planet.findByIdAndDelete(req.params.id)
    .then(() => res.json('Planet deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post(async (req, res) => {
  console.log(req.params.id);
await  Planet.findById(req.params.id)
    .then((planetforedit) => {
      planetforedit.name = req.body.name;
      planetforedit.diameter = req.body.diameter;
      planetforedit.moons = req.body.moons;
      planetforedit.desc = req.body.desc;
      planetforedit.url = req.body.url;


      planetforedit
        .save()
        .then(() => res.json('Planet updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
