import { Facebook, Twitter, Instagram } from "lucide-react";


export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-NORMAL">NOCTYRA</h2>
            <p className="text-sm">© 2025 All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">Home</a>
            <a href="#" className="hover:text-gray-400">About</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" aria-label="Facebook" className="hover:text-gray-400">
              <Facebook />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-400">
              <Twitter />

            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-400">
              <Instagram />

            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

