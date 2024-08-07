import { loadFixture, ethers, expect, time } from "./setup";
import type { ERC4907Demo } from "../typechain-types";

describe("ERC4907 tests", function () {
  async function deploy() {
    const [owner, addr1, addr2] = await ethers.getSigners();

    const Factory = await ethers.getContractFactory("ERC4907Demo", owner);
    const erc4907demo:ERC4907Demo = await Factory.deploy("ShefToken", "SHEF");
    await erc4907demo.waitForDeployment();

    const tokenId = 1;
    await erc4907demo.mint(tokenId, owner.address);

    return { erc4907demo, owner, addr1, addr2, tokenId }
  }

  it("Should set user and get user", async function () {
    const { erc4907demo, owner, addr1, tokenId } = await loadFixture(deploy);
    const expires = Math.floor(Date.now() / 1000) + 3600; // 1 hour from now

    await erc4907demo.connect(owner).setUser(tokenId, addr1.address, expires);

    expect(await erc4907demo.userOf(tokenId)).to.equal(addr1.address);
  });

  it("Should return address(0) after user expires", async function () {
    const { erc4907demo, owner, addr1, tokenId } = await loadFixture(deploy);
    const expires = Math.floor(Date.now() / 1000) + 1; // 1 second from now

    await erc4907demo.connect(owner).setUser(tokenId, addr1.address, expires);
    await time.increase(2);

    expect(await erc4907demo.userOf(tokenId)).to.equal(ethers.ZeroAddress);
  });

  it("Should delete user on token transfer", async function () {
    const { erc4907demo, owner, addr1, addr2, tokenId } = await loadFixture(deploy);
    const expires = Math.floor(Date.now() / 1000) + 3600; // 1 hour from now

    await erc4907demo.connect(owner).setUser(tokenId, addr1.address, expires);
    await erc4907demo.connect(owner).transferFrom(owner.address, addr2.address, tokenId);

    expect(await erc4907demo.userOf(tokenId)).to.equal(ethers.ZeroAddress);
  });
})