import { ShoppingCart, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
          <span className="font-semibold text-gray-900 text-lg">FlowCommerce</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#products" className="hover:text-gray-900">Products</a>
          <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          <a href="#about" className="hover:text-gray-900">About</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-3 py-2 text-sm shadow-sm hover:shadow transition">
            <User className="h-4 w-4" />
            Sign in
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl bg-gray-900 text-white px-3 py-2 text-sm shadow hover:bg-black">
            <ShoppingCart className="h-4 w-4" />
            Cart
          </button>
        </div>
      </div>
    </header>
  );
}
