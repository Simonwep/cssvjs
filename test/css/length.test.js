const parse = require('../../src');
const {expect} = require('chai');

describe('CSS Type: <length>', () => {
    const units = ['cap', 'ch', 'em', 'ex', 'ic', 'lh', 'rem', 'rlh', 'vh', 'vw', 'vi', 'vb', 'vmin', 'vmax', 'px', 'cm', 'mm', 'Q', 'in', 'pc', 'pt', 'mozmm'];

    for (const unit of units) {
        const num = Number((Math.random() * 1e5).toFixed(3));
        const str = num + unit;

        it(`Should parse ${str}`, () => {
            expect(parse(str)).to.deep.equal({
                type: 'length',
                value: num,
                unit
            });
        });
    }

    it('Should return null (or thrown an error) on invalid units or numbers', () => {
        expect(parse('1231ddd')).to.equal(null);
        expect(() => parse('3232.232.dee')).to.throw();
    });
});
