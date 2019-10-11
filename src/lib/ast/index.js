const createStream = require('./stream');
const transformFunction = require('./css/transform-function');
const borderRadius = require('./css/border-radius');
const basicShape = require('./css/basic-shape');
const percentage = require('./css/percentage');
const resolution = require('./css/resolution');
const blendMode = require('./css/blend-mode');
const position = require('./css/position');
const gradient = require('./css/gradient');
const integer = require('./css/integer');
const flex = require('./css/flex-value');
const number = require('./css/number');
const length = require('./css/length');
const string = require('./css/string');
const angle = require('./css/angle');
const ratio = require('./css/ratio');
const color = require('./css/color');
const time = require('./css/time');
const url = require('./css/url');

const types = [
    transformFunction,
    url,
    color,
    string,
    gradient,
    basicShape,
    percentage,
    resolution,
    length,
    ratio,
    flex,
    time,
    angle,
    position,
    blendMode,
    borderRadius,
    integer,
    number
];

module.exports = tokens => {
    const stream = createStream(tokens);

    for (const parser of types) {

        // TODO: Case-insenstitiv?!
        stream.stash();

        const parsed = parser(stream);
        if (parsed && !stream.hasNext()) {
            return parsed;
        }

        stream.pop();
    }

    return null;
};

