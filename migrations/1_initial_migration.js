const Migrations = artifacts.require('NFTContract');

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
