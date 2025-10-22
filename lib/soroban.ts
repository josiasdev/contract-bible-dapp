import { Contract, Server, SorobanRpc } from 'soroban-client';

export const RPC_URL = "https://soroban-testnet.stellar.org";
export const NETWORK_PASSPHRASE = "Test SDF Network ; September 2015";
export const NETWORK_NAME = "TESTNET"; // Usado para o Freighter

export const server = new Server(RPC_URL, { allowHttp: true });

export const CONTRACT_ID = process.env.NEXT_PUBLIC_CONTRACT_ID;

if (!CONTRACT_ID) {
  throw new Error(
    "Erro: NEXT_PUBLIC_CONTRACT_ID não foi definido." +
    " Crie um arquivo .env.local e adicione a variável."
  );
}

export const contract = new Contract(CONTRACT_ID);

export { SorobanRpc };