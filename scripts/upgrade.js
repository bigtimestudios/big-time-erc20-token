const { ethers, upgrades } = require("hardhat");

async function main() {
  const TestTimeDevV2 = await ethers.getContractFactory(
    "TestTimeDevV2"
  );
  console.log("Upgrading TestTimeDev...");
  await upgrades.upgradeProxy(
    "0x1472991a13B7D4DAC0212cb9E91B4E0e55f1B7A3",
    TestTimeDevV2
  );
  console.log("Upgraded Successfully");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});
