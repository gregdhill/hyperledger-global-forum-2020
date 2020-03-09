const Capped = artifacts.require("Capped");

contract("Capped", accounts => {
  it("Should deploy and mint up to cap", async () => {
    const owner = accounts[0];
    const amount = 1337;
    const instance = await Capped.new(2322);
    await instance.mint(owner, amount);
    await instance.burn(owner, amount-1);
    const result = await instance.balanceOf(owner);
    assert(result.toNumber() == 1);
    let failed = false;
    try {
      await instance.mint(owner, 99999);
    } catch (err) {
      // good
      failed = true;
    }
    assert(failed);
  });
});
