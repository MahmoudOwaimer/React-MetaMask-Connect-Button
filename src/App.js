import { useEffect, useState } from "react";
import "ethers";
import './App.css';
import logo from './MetaMask_Fox.png';

function App() {
  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  // state for keeping track of current connected account.
  const [account, setAccount] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      setIsWalletInstalled(true);
    }
  }, []);

  async function connectWallet() {
    window.ethereum
      .request({
        method: "eth_requestAccounts",
      })
      .then((accounts) => {
        setAccount(accounts[0]);
      })
      .catch((error) => {
        alert("Something went wrong");
      });
  }
  if (account === null) {
    return (
      <div className="App">
      <div className="px-4 py-5 my-5 text-center">
        <img className="d-block mx-auto mb-4" src={logo} alt="" width="150" height="150"/>
        <h1 className="display-5 fw-bold">React & Metamask</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">A mini project to help you add connect MetaMask wallet functionality in your React app.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          { 
            isWalletInstalled ? (
              <button onClick={connectWallet} type="button" className="btn btn-primary btn-lg px-4 gap-3">Connect Wallet</button>
            ) : (
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Install Metamask wallet</button>
            )
          }
          </div>
        </div>
      </div> 
    </div>
    );
  }
    return (
    <div className="App">
      <div className="px-4 py-5 my-5 text-center">
        <img className="d-block mx-auto mb-4" src={logo} alt="" width="150" height="150"/>
        <h1 className="display-5 fw-bold">React & Metamask</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">A mini project to help you add connect MetaMask wallet functionality in your React app.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <p>Connected as {account}</p>
          </div>
        </div>
      </div> 
    </div>
  ); 
}
export default App;
