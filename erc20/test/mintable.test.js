const Mintable = artifacts.require("Mintable");

contract("Mintable", accounts => {
    it("Should deploy contract and mint a token", async () => {
        const owner = accounts[0];
        const amount = 500;
        const instance = await Mintable.deployed();
        await instance.mint(owner, amount);
        assert((await instance.balanceOf(owner)).toNumber() == amount);
    });
});
