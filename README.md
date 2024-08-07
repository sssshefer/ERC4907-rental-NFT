<img src="https://github.com/user-attachments/assets/25f096aa-c1bb-4479-9319-b025eefb04ea"/>

# ERC4907-rental-NFT

The ERC4907-rental-NFT project is designed to explore the ERC4907 standard, focusing on creating rentable NFTs. This project leverages ERC721, utilities, and other dependencies from OpenZeppelin. While this project serves as an example implementation of ERC4907, more advanced and secure systems can be found on the [OpenZeppelin website](https://openzeppelin.com/)

## Table of Contents

- [Introduction](#erc4907-rental-nft)
- [Theory Notes](#theory-notes)
  - [What is an NFT](#what-is-an-nft)
  - [Why do we need to rent an NFT](#why-do-we-need-to-rent-an-nft)
- [Features and Functionality](#features-and-functionality)
- [Implementation](#implementation)
  - [Contract Overview](#contract-overview)
  - [Tests](#tests)
- [Running the Project Locally](#running-the-project-locally)

## Theory Notes

### What is an NFT

Non-Fungible Tokens (NFTs) are unique digital assets verified using blockchain technology. Unlike cryptocurrencies such as Bitcoin or Ethereum, which are fungible and can be exchanged on a one-to-one basis, NFTs are unique and represent ownership of a specific item or piece of content, such as artwork, collectibles, or virtual real estate.

### Why do we need to rent an NFT

The ability to rent NFTs introduces a new layer of utility and flexibility to the NFT ecosystem. Renting allows NFT owners to generate passive income from their assets without having to sell them. It also provides access to high-value NFTs for users who may not be able to afford ownership, enabling broader participation in digital economies, gaming, virtual worlds, and more.

## Features and Functionality

- Implementation of the ERC4907 standard for rentable NFTs.
- Integration with OpenZeppelin's ERC721 and utility libraries.
- Functionality to set and manage rental periods and users.

## Implementation

### Contract Overview

The contract implements the ERC4907 standard, extending the ERC721 contract to include rental features. Key functionalities include setting a user and expiration date, checking rental status, and ensuring that the original owner retains ownership rights during the rental period.

### Tests

The project includes comprehensive tests to verify the correct implementation of the ERC4907 standard, including tests for setting rental periods, managing users, and ensuring compliance with the standard.

## Running the Project Locally

To run this project locally, follow these steps:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/sssshefer/ERC4907-rental-NFT.git
    cd ERC4907-rental-NFT
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Compile Contracts**:
    ```bash
    npx hardhat compile
    ```

4. **Run Tests**:
    ```bash
    npx hardhat test
    ```
