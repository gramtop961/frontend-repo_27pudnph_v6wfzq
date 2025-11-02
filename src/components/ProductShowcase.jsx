const products = [
  {
    id: 1,
    name: "Minimalist Card Holder",
    price: 29,
    image:
      "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Wireless Earbuds",
    price: 99,
    image:
      "https://images.unsplash.com/photo-1518443730443-2f7e0526dd4a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Noise-cancel Headphones",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1518441902113-c1d3d215e3ca?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Hand‑picked products
            </h2>
            <p className="text-gray-600 mt-2">Beautifully designed essentials you’ll love.</p>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex items-center rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:shadow"
          >
            View all
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <article key={p.id} className="group rounded-2xl overflow-hidden border border-black/10 bg-white shadow-sm hover:shadow-md transition">
              <div className="aspect-square overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900 truncate">{p.name}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-gray-900 font-semibold">${p.price}</span>
                  <button className="rounded-lg bg-gray-900 text-white px-3 py-2 text-xs font-medium hover:bg-black">
                    Add to cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
