import { FaGithub } from "react-icons/fa"; 

export default function Footer() {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="w-full border-t border-neutral-700 mt-16 py-6">
      <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row justify-between items-center text-center sm:text-left text-neutral-400 text-sm px-4">

        <p>
          &copy; {currentYear} Josias Batista. Todos os direitos reservados.
        </p>

        <a 
          href="https://github.com/josiasdev/contract-bible-dapp" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 hover:text-white transition-colors mt-2 sm:mt-0"
        >
          <FaGithub />
          Ver código no GitHub
        </a>
      </div>
    </footer>
  );
}