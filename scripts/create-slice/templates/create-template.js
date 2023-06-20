const fs = require('fs/promises');
const resolveRoot = require('../resolve-root');
const createModel = require('./create-model');
const createUI = require('./create-ui');
const createPublicApi = require('./create-public-api');

module.exports = async (layer, sliceName) => {
    try {
        await fs.mkdir(resolveRoot('src', layer, sliceName));
    } catch (e) {
        console.log(`cannot create directory for slice ${sliceName}`);
    }

    await createModel(layer, sliceName);
    await createUI(layer, sliceName);
    await createPublicApi(layer, sliceName);
};
