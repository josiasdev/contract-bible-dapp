"use client"; 

import { useState, useEffect } from "react";
import { isConnected, requestAccess, getAddress } from "@stellar/freighter-api";
import Navbar from "@/components/Navbar";
// 1. Importe o Button do shadcn/ui aqui também
import { Button } from "@/components/ui/button";

export default function Home() {
  const [publicKey, setPublicKey] = useState("");
  const [loading, setLoading] = useState(true);

  // ... (a lógica useEffect e handleConnect permanece a mesma) ...
  useEffect(() => {
    const checkConnection = async () => {
      setLoading(true);
      if (await isConnected()) {
        try {
          const keyObj = await getAddress();
          setPublicKey(keyObj.address);
        } catch (e) { console.error(e); }
      }
      setLoading(false);
    };
    setTimeout(checkConnection, 100);
  }, []);

  const handleConnect = async () => {
    setLoading(true);
    try {
      await requestAccess();
      const keyObj = await getAddress();
      setPublicKey(keyObj.address);
    } catch (e) {
      console.error(e);
      alert("Erro ao conectar. Veja o console.");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-neutral-900 text-white">
      
      <Navbar
        loading={loading}
        publicKey={publicKey}
        handleConnect={handleConnect}
      />

      <main className="flex-grow flex flex-col items-center justify-center text-center p-8">
        
        <div className="max-w-3xl mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            A Bíblia Sagrada na Blockchain
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 mb-10">
            Explore as escrituras, registre seu progresso de leitura e compartilhe reflexões de forma imutável e descentralizada na rede Stellar.
          </p>
          
          {/* 2. Botão principal substituído pelo shadcn/ui */}
          {!loading && !publicKey && (
            <Button onClick={handleConnect} size="lg" className="text-lg">
              Conectar Carteira para Começar
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          <img 
            src="https://images.unsplash.com/photo-1497144690856-fc29ecc50333?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774" 
            alt="Biblia" 
            className="rounded-lg object-cover h-64 w-full opacity-80"
          />
          <img 
            src="https://plus.unsplash.com/premium_photo-1668197658521-1d5f97d60bcc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387" 
            alt="Grupo de pessoas com Biblia" 
            className="rounded-lg object-cover h-64 w-full opacity-80"
          />
          <img 
            src="https://plus.unsplash.com/premium_photo-1663127489224-47dfd0639f54?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870" 
            alt="Orando" 
            className="rounded-lg object-cover h-64 w-full opacity-80"
          />
        </div>
      </main>
    </div>
  );
}