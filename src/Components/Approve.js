import React from "react"
import { ethers } from 'ethers';
import Loader from 'react-loader-spinner'


class Approve extends React.Component
{
    constructor()
    {
        super()
        this.state={
            Id:"",
            delegate:"",
            numTokens:"",
            loading:false
        }
        this.handlechange=this.handlechange.bind(this)
         this.handlesubmit=this.handlesubmit.bind(this)
    }
    handlechange = e =>
    {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handlesubmit =async(e)=>
    {
        e.preventDefault();
        this.setState({ loading: true });
        let ethereum = window.ethereum;
        // let web3 = window.Web3;
        let addr=await ethereum.enable()
        let  provider = new ethers.providers.Web3Provider(window.web3.currentProvider);
        const signer = provider.getSigner();
        let abi=[
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_id",
                        "type": "uint256"
                    },
                    {
                        "name": "delegate",
                        "type": "address"
                    },
                    {
                        "name": "numTokens",
                        "type": "uint256"
                    }
                ],
                "name": "getApprovebyid",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": true,
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_id",
                        "type": "uint256"
                    },
                    {
                        "name": "receiver",
                        "type": "address"
                    },
                    {
                        "name": "numTokens",
                        "type": "uint256"
                    }
                ],
                "name": "getTransferById",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": true,
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_id",
                        "type": "uint256"
                    },
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "buyer",
                        "type": "address"
                    },
                    {
                        "name": "numTokens",
                        "type": "uint256"
                    }
                ],
                "name": "getTransferFromById",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": true,
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "total",
                        "type": "uint256"
                    },
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "symbol",
                        "type": "string"
                    }
                ],
                "name": "newToken",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint32"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "name": "_database",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getId",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint32"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_id",
                        "type": "uint256"
                    }
                ],
                "name": "getTotalbalanceById",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_id",
                        "type": "uint256"
                    },
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "delegate",
                        "type": "address"
                    }
                ],
                "name": "getTotalbalancefordelegateById",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "id",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint32"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            }
        ]
        let address="0xb8a5e17673ff2acc6dbdf0cd2c5795c8fcb7b5ca"
        let contract = new ethers.Contract(address, abi, signer);
        
      
        let tx1= await contract.getApprovebyid(this.state.Id,this.state.delegate,this.state.numTokens)
        console.log(tx1)
       this.setState({
        Id:"",
        numTokens:"",
        delegate:"",
        loading:false

       })
    }
    render()
    {   const loading=this.state.loading
        return(
            <div className="wrapper">
                <form onSubmit={this.handlesubmit} className="wrapper__form">
                    <input type="text" name="Id" onChange={this.handlechange} value={this.state.Id} placeholder="ENTER ID OF YOUR TOKEN (ex. 7)"/>
                    <input type="text" name="delegate" onChange={this.handlechange} value={this.state.delegate} placeholder="DELEGATE ADDRESS (ex. 0xfa12...)"/>
                    <input type="text" name="numTokens" onChange={this.handlechange} value={this.state.numTokens}  placeholder="NUMBER OF TOKENS (ex. 10)"/>
                    <button type="submit" disabled={loading}>
                    {this.state.loading ===true  ?  <Loader
         type="Puff"
         color="white"
         height="30"
         width="30"
      />: ""}
                        
                        submit</button>
                </form>
        </div>
        )
    }
}
export default Approve