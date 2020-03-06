const Burnable = artifacts.require("Burnable");

contract("Burnable", accounts => {
  it("Should deploy and mint token", async () => {
    const owner = accounts[0];
    const amount = 1337;
    const instance = await Burnable.deployed();
    await instance.mint(owner, amount);
    await instance.burn(owner, amount-1);
    const result = await instance.balanceOf(owner);
    assert(result.toNumber() == 1);
  });
});
