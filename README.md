
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Best-README-Template</h3>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This project provides a template for a NestJS based web server with hexagonal (Ports & Adapters) internal architecture
It also provides the following essentials tooling such as:
1. Copy/Paste detector using **jscdp** (https://www.npmjs.com/package/jscpd)
2. Detection of packages which violates dependency rules such as circular or orphan dependencies using **dependency-cruiser** (https://www.npmjs.com/package/dependency-cruiser)
3. Linting using **eslint** (https://www.npmjs.com/package/eslint)

Checkout the **scripts** section in the package.json file for the full list of tools

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
* NodeJS

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/skuchuk/hexagonal-typescript-nestjs.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Run unit tests
   ```sh
   npm run test
   ```
5. Run end to end tests
   ```sh
   npm run test:e2e
   ```



<!-- USAGE EXAMPLES -->
## Usage

The project contains code examples for 2 endpoints
1. /cats which is a REST API
2. /mice which is a GraphQL API

The project is organized along the guidelines of hexagonal architecture
mainly separation between APPLICATION, DOMAIN and INFRASTRUCTURE layers

Code examples are covered with unit, functional and end to end testing
