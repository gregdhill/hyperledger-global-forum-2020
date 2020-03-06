const Mintable = artifacts.require("Mintable");

contract("Mintable", accounts => {
  it("Should deploy and mint token", async () => {
    const owner = accounts[0];
    const amount = 1337;
    const instance = await Mintable.deployed();
    await instance.mint(owner, amount);
    const result = await instance.balanceOf(owner);
    assert(result.toNumber() == amount);
  });
});
