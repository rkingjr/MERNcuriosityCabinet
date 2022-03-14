const { Collections } = require('../models');

const collectionsdata = [
    {

    },
]

const seedCollections = () => Collections.bulkCreate(collectionsdata);

module.exports = seedCollections;
