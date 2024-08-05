import { loadFixture, ethers, expect } from "./setup";
//import type { rentalNFT } from "../typechain-types";

describe("rentalNFT", function () {
  async function deploy() {
    const [user1, user2] = await ethers.getSigners();

    const Factory = await ethers.getContractFactory("rentalNFT", user1);
    const rentalNFT= await Factory.deploy();
    await rentalNFT.waitForDeployment();

    return { user1, user2, rentalNFT }
  }

  it("Deploy test", async function () {
    const { user1, user2, rentalNFT } = await loadFixture(deploy);

  });
})