
# Smart-Auth Solution

"Smart-Auth revolutionizes user authentication for organizations, offering a sophisticated single-sign-on solution. Employing advanced techniques such as account abstraction and zero-knowledge proofs (zkProofs), it ensures a robust, secure, and frictionless authentication experience."
[Smart-Auth] git hub link : (https://github.com/samarabdelhameed/BRB-Smart-Auth)
## About Me

Hello! I'm samar abdelhameed builder [Smart-Auth](https://github.com/samarabdelhameed/BRB-Smart-Auth)



![Smart-Auth-frontend](https://github.com/samar19/pic-/blob/master/Logo-VVA-NoText.png)

This project was with [biconomy](https://www.biconomy.io/).
## Project Structure


## Introduction:

Welcome to Smart-Auth, an innovative single sign-on (SSO) solution designed to redefine the way organizations manage access and authentication. By ingeniously integrating Account Abstraction and zkProofs, Smart-Auth empowers members of diverse entities, including corporate enterprises, Decentralized Autonomous Organizations (DAOs), hackathon groups, and traders, to seamlessly access a shared Smart Account using their individual wallets.

## Project Description:

Smart-Auth is not just a solution; it's a paradigm shift in the realm of secure and user-friendly authentication. While it's adaptable to various decentralized application (dApp) interactions, Smart-Auth is meticulously crafted to cater specifically to organizations. It enables members to effortlessly access a centralized Smart Account through their personal wallets, fostering a shared wallet experience that enhances collaboration and operational efficiency.

Our on-chain SSO system stands out as a robust alternative to conventional solutions like Auth0. Unlike traditional practices that rely on shared credentials, Smart-Auth allows each member to log in using their unique wallet, ensuring heightened security and simplifying access to shared resources. With Smart-Auth, expect an elevated standard of productivity, improved collaboration, and streamlined operations in your organization or group setting.

**How It's Made:**

1. **Foundation on Biconomy Contracts and Sismo Connect:**
   - Smart-Auth is built on the robust foundations of Biconomy contracts and Sismo Connect.
   - The solution leverages modular smart accounts from Biconomy, specifically deploying from the dedicated branch: [SCW-V2-Modular-SA](https://github.com/bcnmy/scw-contracts/tree/SCW-V2-Modular-SA).

2. **Manual Deployment of AA Contracts:**
   - Instead of utilizing the SDK, the project opts for manual deployment of the required Account Abstraction (AA) contracts.
   - The deployment includes the necessary AA contracts and SessionKeyManager, ensuring a tailored setup.

3. **Custom Validation Module for Sismo Proofs:**
   - A custom Validation Module is deployed to efficiently manage Sismo proofs.
   - This module handles authentication, as well as the dynamic addition and removal of users from an organization.

4. **Automated User Management with Sismo Connect:**
   - The set of contracts facilitates seamless user management.
   - Whenever a user is added or removed in Sismo Connect, reflecting changes in the Sismo Data Group, our Validation Module records the user's proof during login.

5. **SDK for DApp Integration:**
   - The Smart-Auth Software Development Kit (SDK) provides the functionality to seamlessly integrate Smart-Auth into any decentralized application (dApp).
   - It abstracts the intricacies of managing Sismo proofs and sending user operations (userOps) to the smart account.

6. **Admin Console for Management:**
   - An Admin Console is developed using NextJS and React.
   - WalletConnect is integrated into the console to manage organizations and streamline onboarding for new organizational members within the Smart-Auth ecosystem.


## Problem:

### Challenge Context:
The challenge revolves around the need to enhance user experience in Web3 through ERC 4337 Account Abstraction. Biconomy offers a comprehensive solution stack, but there's room for further innovation. Emerging ERCs like 6900 suggest extending the power of 4337 Smart Accounts with modules and plugins.

### Identified Challenges:
1. **User Authentication Complexity:** Existing solutions might lack an efficient way to manage user authentication within organizations or groups.
2. **Limited Smart Account Use Cases:** The current modules might not cover a broad spectrum of use cases, potentially limiting the adaptability of Smart Accounts.
3. **Innovation Gap:** There's an opportunity to push the boundaries further by introducing novel validation modules that address real-world challenges.

## Smart-Auth Solution:

### Solution Overview:
Smart-Auth presents an innovative solution to augment Biconomy Smart Accounts. It seamlessly integrates Account Abstraction and zkProofs to simplify user authentication and extend the capabilities of ERC 4337 Smart Accounts.

### Key Features and Solutions:
1. **Single Sign-On for Organizations:** Smart-Auth introduces a modular approach to enable a robust single sign-on (SSO) system tailored for organizations. It addresses the complexity of managing user authentication within a group.
  
2. **Expanded Use Cases:** Smart-Auth extends the existing modules by introducing a novel validation module. This enables diverse use cases beyond the base modules, such as session keys, pass keys, multichain validation, and account recovery.

3. **Enhanced Security with zkProofs:** Leveraging zero-knowledge proofs (zkProofs), Smart-Auth ensures a secure authentication experience. Users can access a shared Smart Account using individual wallets without compromising security.

### Technical Implementation:
Smart-Auth is implemented by deploying a custom validation module on top of Biconomy Smart Accounts. The solution includes smart contracts for seamless integration, ensuring compatibility with Biconomy's modular framework.

### Real-World Application:
In practical terms, Smart-Auth can be used by any organization, from corporate enterprises to DAOs and hackathon groups. Members can access a centralized Smart Account using their individual wallets, simplifying authentication and promoting secure collaboration.

### Achieving Bounty Challenges:
Smart-Auth directly addresses the bounty challenges by:
- Building a new validation module for Biconomy Smart Accounts.
- Providing a well-thought-out use case: Simplifying on-chain authentication for organizations.
- Offering a working demo showcasing the Smart-Auth functionality and its integration with Biconomy SDK features.
- Contributing to the expansion of ERC 4337 Smart Accounts with an innovative validation module.

By solving these challenges, Smart-Auth aims to not only enhance the user experience but also contribute to the evolution of Biconomy's Smart Accounts ecosystem.


## Environment Variables

Our project employs the `dotenv` package to handle environment variables, ensuring your private keys remain safe. To get started, rename `.env.example` to `.env` and input your private key.




## Contracts



## Deployment


```

```
# Deploy the smart contracts
To deploy the smart contracts run
```
npx hardhat run ./src/index.ts --network polygon_mumbai
```

# Run the admin UI
cd Smart-Auth-frontend
```
yarn 
```
yarn dev 

```
