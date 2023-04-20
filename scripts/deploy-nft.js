async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const weiAmount = (await deployer.getBalance()).toString();
  
  console.log("Account balance:", (await ethers.utils.formatEther(weiAmount)));

  const Token = await ethers.getContractFactory("ERC721DeterministicCollection");
  const args = ["Big Time Collection 0", "BT0", "0x0A4A26b0CB36f133a90f714AFAA387C5354521d5", "https://nft-metadata.bigtime.gg"]
  const token = await Token.deploy(...args);

  console.log("Token address:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});
