import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[82vh] overflow-hidden">
      {/* Spline 3D Scene as full-width cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Soft gradient overlays for readability (won't block Spline interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/20 to-white/90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm">
          Modern • Minimal • Fintech-ready
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          A modern e‑commerce platform for the next era
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-gray-700">
          Real-time inventory, secure payments with Stripe, and seamless order tracking — all in a responsive, delightful experience.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
          <a
            href="#products"
            className="inline-flex items-center justify-center rounded-xl bg-gray-900 text-white px-6 py-3 text-sm font-medium shadow hover:bg-black"
          >
            Start shopping
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-6 py-3 text-sm font-medium text-gray-900 hover:shadow"
          >
            Explore features
          </a>
        </div>
      </div>
    </section>
  );
}
