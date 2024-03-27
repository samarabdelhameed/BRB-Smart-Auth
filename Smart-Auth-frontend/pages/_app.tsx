import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  arbitrum,
  goerli,
  mainnet,
  optimism,
  polygon,
} from 'wagmi/chains';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';

const chains = [arbitrum, mainnet, polygon, optimism, goerli];
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECTID;

// Handle the case where projectId is undefined
if (!projectId) {
  throw new Error("Project ID is not defined. Make sure to set NEXT_PUBLIC_WALLETCONNECTID environment variable.");
}

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Add your head content here */}
      </Head>
      <WagmiConfig config={wagmiConfig}>
        <Component {...pageProps} />
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}

export default MyApp;
