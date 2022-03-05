import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Web3Modal from "web3modal";
import Web3 from "web3";
import { providers, Contract } from "ethers";

export default function Header() {
  const [show, setShow] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [address, setAddress] = useState("");
  const changeBar = () => {
    setShow(!show);
  };
  const web3ModalRef = useRef();
  let provider;
  let web3Modal;

  const getProviderOrSigner = async (needSigner = false) => {
    // Connect to Metamask
    // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object

    web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions: {}, // required
    });

    provider = await web3Modal.connect();
    const web3Provider = new providers.Web3Provider(provider);
    // Get list of accounts of the connected wallet
    const web3 = new Web3(provider);
    // Get list of accounts of the connected wallet
    const accounts = await web3.eth.getAccounts();
    setAddress(accounts[0]);

    // If user is not connected to the Mainnet network, let them know and throw an error
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 1) {
      window.alert("Change the network to mainnet");
      throw new Error("Change network to mainnet");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      console.log(signer);
      return signer;
    }
    return web3Provider;
  };

  const connectWallet = async () => {
    try {
      // Get the provider from web3Modal, which in our case is MetaMask
      // When used for the first time, it prompts the user to connect their wallet
      const details = await getProviderOrSigner();
      setWalletConnected(true);

      // Subscribe to accounts change
      provider.on("accountsChanged", async (accounts) => {
        console.log("acc", accounts);
        await getProviderOrSigner();
      });

      // Subscribe to chainId change
      provider.on("chainChanged", async (chainId) => {
        console.log("chain", chainId);
        await getProviderOrSigner();
      });

      // Subscribe to provider connection
      provider.on("connect", (info) => {
        console.log("inf", info);
      });

      // Subscribe to provider disconnection
      provider.on("disconnect", (error) => {
        console.log("dis", error);
        setAddress("");
        setWalletConnected(false);
      });
    } catch (err) {
      console.error(err);
    }
  };

  const disconnectWallet = async () => {
    setAddress("");
  };

  useEffect(() => {
    // if wallet is not connected, create a new instance of Web3Modal and connect the MetaMask wallet
    if (!walletConnected) {
      // Assign the Web3Modal class to the reference object by setting it's `current` value
      // The `current` value is persisted throughout as long as this page is open
      web3ModalRef.current = new Web3Modal({
        network: "mainnet",
        providerOptions: {},
        disableInjectedProvider: false,
      });
      connectWallet();
    }
  }, [walletConnected]);

  return (
    <div className="header">
      <div style={{ display: "flex" }}>
        <img
          className="ham"
          onClick={changeBar}
          src="/images/ham.svg"
          alt="ham"
        />
        <Link to="/">
          <div>
            <img src="/images/logo.jpg" alt="logo" style={{ width: "100px" }} />
          </div>
        </Link>
      </div>

      <div
        className={
          show === true ? "header-inner animation1" : "header-inner animation2"
        }
      >
        <NavLink
          to="/"
          className={(navData) => (navData.isActive ? "active" : "normal")}
        >
          <div className="nav-item">Home</div>
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "normal")}
          to="/dashboard"
        >
          <div className="nav-item">Dashboard</div>
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "normal")}
          to="/realestate"
        >
          <div className="nav-item">Real Estate</div>
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "normal")}
          to="/virtualtours"
        >
          <div className="nav-item">Virtual Tours</div>
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "normal")}
          to="/services"
        >
          <div className="nav-item">Services</div>
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "normal")}
          to="/dapp"
        >
          <div className="nav-item" style={{ marginBottom: "20px" }}>
            Dapp
          </div>
        </NavLink>
      </div>

      {walletConnected && address.length > 0 ? (
        <button onClick={disconnectWallet} className="wallet">
          {address.slice(0, 5) + "....." + address.slice(-5, -1)}
        </button>
      ) : (
        <button onClick={connectWallet} className="wallet">
          Connect Wallet
        </button>
      )}
    </div>
  );
}
