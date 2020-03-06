var Mintable = artifacts.require("Mintable");
var Burnable = artifacts.require("Burnable");
var Capped = artifacts.require("Capped");

module.exports = function(deployer) {
  deployer.deploy(Mintable);
  deployer.deploy(Burnable);
  deployer.deploy(Capped, 2344);
}
