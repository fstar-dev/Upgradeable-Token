const { ethers, upgrades } = require("hardhat");

async function main() {
  const TestToken1 = await ethers.getContractFactory(
    "TestToken1"
  );
  console.log("Deploying TestToken1...");
  const contract = await upgrades.deployProxy(TestToken1, [], {
    initializer: "initialize",
    kind: "transparent",
  });
  await contract.deployed();
  console.log("TestToken1 deployed to:", contract.address);

  const TestToken2 = await ethers.getContractFactory(
    "TestToken2"
  );
  console.log("Deploying TestToken1...");
  const contract2 = await upgrades.deployProxy(TestToken2, [], {
    initializer: "initialize",
    kind: "transparent",
  });
  await contract2.deployed();
  console.log("TestToken2 deployed to:", contract2.address);
}

main();
