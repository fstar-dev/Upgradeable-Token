const { ethers, upgrades } = require("hardhat");

async function main() {
  const Token1 = await ethers.getContractFactory(
    "TestToken1Upgrade"
  );
  console.log("Upgrading TestToken1Upgrade...");
  await upgrades.upgradeProxy(
    "0xC81cBaB47B1e6D6d20d4742721e29f22C5835dcB",
    TestToken1Upgrade
  );
  console.log("Upgraded Successfully");

  const Token2 = await ethers.getContractFactory(
    "TestToken2Upgrade"
  );
  console.log("Upgrading TestToken2Upgrade...");
  await upgrades.upgradeProxy(
    "0xC81cBaB47B1e6D6d20d4742721e29f22C5835dcB",
    TestToken2Upgrade
  );
  console.log("Upgraded Successfully");
}

main();
