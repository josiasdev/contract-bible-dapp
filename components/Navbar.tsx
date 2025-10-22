"use client";

import { Button } from "@/components/ui/button"; 
import { FaWallet } from "react-icons/fa"; 

interface NavbarProps {
  loading: boolean;
  publicKey: string;
  handleConnect: () => void;
}

function truncateKey(key: string) {
  if (!key) return "";
  return `${key.slice(0, 4)}...${key.slice(-4)}`;
}

export default function Navbar({ loading, publicKey, handleConnect }: NavbarProps) {
  return (
    <nav className="w-full bg-neutral-900/80 backdrop-blur-md border-b border-neutral-700 p-4 sticky top-0 z-50">
      <div className="container mx-auto max-w-6xl flex justify-between items-center">
        
        <div className="text-xl font-bold text-white">
          Bíblia DApp
        </div>

        <div className="hidden md:flex items-center gap-6 text-neutral-300">
          <a href="#" className="hover:text-white transition-colors">Sobre</a>
          <a href="#" className="hover:text-white transition-colors">Livros</a>
          <a href="#" className="hover:text-white transition-colors">Contato</a>
          <a href="#" className="hover:text-white transition-colors">Outros</a>
        </div>

        <div className="flex items-center">
          {loading && (
            <Button variant="ghost" size="sm" disabled className="animate-pulse">
              Carregando...
            </Button>
          )}

          {!loading && publicKey && (
            <Button 
              variant="outline" 
              size="sm" 
              className="text-green-300 border-green-700 hover:bg-green-950 hover:text-green-300 cursor-default"
              title={publicKey}
            >
              <FaWallet className="mr-2 h-3 w-3" />
              {truncateKey(publicKey)}
            </Button>
          )}

          {!loading && !publicKey && (
            <Button onClick={handleConnect} size="sm">
              <FaWallet className="mr-2 h-3 w-3" />
              Conectar
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}