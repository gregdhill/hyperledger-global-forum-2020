import { Deploy } from '../deploy';
import * as assert from 'assert';

describe('Mintable', () => {
    it('Should deploy contract and mint a token', async () => {
        const owner = '58117D3DB62D64D97F22BF3F962BE1FEAAA5A93F';
        const id = 1337;
        const contract = await Deploy(owner);
        await contract.mint(owner, id);
        assert.equal(await contract.balanceOf(owner), 1);
        assert.equal(await contract.ownerOf(id), owner);
    });
});