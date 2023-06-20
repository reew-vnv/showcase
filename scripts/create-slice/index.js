const createTemplate = require('./templates/create-template');

const layer = process.argv[2];
const sliceName = process.argv[3];

const layers = ['features', 'entities', 'pages'];

if (!layer || !layers.includes(layer)) {
    throw new Error(`Set ${layers.join(' or ')}`);
}

if (!sliceName) {
    throw new Error('Set name of the Slice');
}

createTemplate(layer, sliceName);
