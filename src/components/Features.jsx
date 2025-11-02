import { Shield, Truck, Zap, BarChart } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Real-time Inventory",
    desc: "Always-in-sync stock levels that update instantly across devices.",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    desc: "PCI-compliant checkout powered by Stripe with 3D Secure.",
  },
  {
    icon: Truck,
    title: "Order Tracking",
    desc: "Transparent order status with notifications at every step.",
  },
  {
    icon: BarChart,
    title: "Admin Dashboard",
    desc: "Sales, customers, and inventory insights at a glance.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-indigo-50/40" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Everything you need to sell online
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Built for performance, security, and scale — without sacrificing aesthetics.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow transition"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex items-center justify-center mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
