# ERC20

This is a ERC20 dapp. It performs all the functionalities required by the ERC20 standard.ERC-20 was proposed on November 19, 2015, by Fabian Vogelsteller.It defines a common list of rules that an Ethereum token has to implement, giving developers the ability to program how new tokens will function within the Ethereum ecosystem.ERC is an acronym for Ethereum Request for Comment, and 20 is the number that was assigned to the standard.

**Note** 
- I haven not used  redux  as there are no interactions within my component states.In order to handle the loading state. I have used the following react module https://www.npmjs.com/package/react-loader-spinner and conditional rendering.
- I have used metamask so didn't use backend.
- I have done styling from raw CSS
- It is kind of reposive, to some extent using flexbox
- I have used travis CI and it performs npm test for every build
- I have used embark for the purpose of testing the smart contract
- I have used firebase firestore for the purpose of database
- I have deployed the dapp using firebase at this url https://erc20-8775e.firebaseapp.com/
- I have performed front end unit testing with the help of enzyme and jest.
- I have deployed the smart contract on Rinkeby test net at 0xb8a5e17673ff2acc6dbdf0cd2c5795c8fcb7b5ca
- Use the rinkeby test network on your metamask
- I have used firebase firestore for the purpose of storing the token id which is associated with the the name
  of the token and ethereum address of the owner inorder to resolve the name conflicts.
  
 # UseCase
 They are mainly used as ICO tokens.ICOs, or initial coin offerings, are fundraising events where companies raise funds for projects by selling digital tokens.A traditional finance analogy would be IPOs, or initial public offerings. IPOs are when companies get listed on public stock exchanges and sell stocks (shares) of their company to the public in order to raise funds.The ERC20 token standard makes it easier to exchange one ERC20 token for another, integrate various ERC20 tokens into platforms like blockchain wallets and exchanges, and more.






## Getting Started

### Installing

#### `npm install`

It installs all the necessary packages as mentioned in the package.json

### Running the App

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Running the tests
#### `npm test`

Launches the test runner in the interactive watch mode.<br>

### Building the app
### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Deployment

The app has been deployed to this [link] (https://erc20-8775e.firebaseapp.com/)

## Built With

* [React](https://github.com/facebook/create-react-app) - for frontend
* [Ethers](https://docs.ethers.io/ethers.js/html/) - for contract interaction
* [Firebase](https://firebase.google.com/) - for database


## Submitted by

* **Jagpreet** - [jagpreet.singh796gmail.com]
* **Enroll** -101226895

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [Readme] (https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
* [ERC20] (https://en.wikipedia.org/wiki/ERC-20,https://support.exodus.io/article/108-what-is-an-erc20-token-and-does-exodus-support-it)
