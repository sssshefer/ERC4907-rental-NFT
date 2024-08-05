import { loadFixture, ethers, expect } from "./setup";
//import type { ERC4907 } from "../typechain-types";

describe("ERC4907", function () {
  async function deploy() {
    const [user1, user2] = await ethers.getSigners();

    const Factory = await ethers.getContractFactory("ERC4907", user1);
    const erc4907 = await Factory.deploy();
    await erc4907.waitForDeployment();

    return { user1, user2, erc4907 }
  }

  it("Deploy test", async function () {
    const { user1, user2, erc4907 } = await loadFixture(deploy);

  });
})