const rsaPackages = [
  {
    title: "Two-wheeler RSA - Silver",
    price: "₹ 599/-",
    visits: "3 Visits",
    features: ["Towing*", "Battery Jumpstart"],
  },
  {
    title: "Two-wheeler RSA - Gold",
    price: "₹ 999/-",
    visits: "5 Visits",
    features: ["Towing*", "Flat Tyre - Tubeless*"],
  },
  {
    title: "Two-wheeler RSA - Platinum",
    price: "₹ 1499/-",
    visits: "5 Visits",
    features: ["Towing*", "Flat Tyre - Tubeless*"],
  },
  {
    title: "Two-wheeler RSA - EV",
    price: "₹ 1499/-",
    visits: "5 Visits",
    features: ["Towing*", "Flat Tyre - Tubeless*"],
  },
];

export default function RSAPackages() {
  return (
    <section className="bg-gray-950 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-400 mb-10">
          Roadside Assistance (RSA) Packages
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {rsaPackages.map((pkg, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-yellow-500 rounded-lg shadow-lg p-6 flex flex-col justify-between hover:scale-[1.02] transition"
            >
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">{pkg.title}</h3>
                <p className="text-2xl font-semibold text-white mb-2">{pkg.price}</p>
                <p className="text-sm text-gray-300 mb-2">{pkg.visits}</p>
                {pkg.features.map((feature, i) => (
                  <p key={i} className="text-sm text-gray-300">
                    {feature}
                  </p>
                ))}
                <button className="text-yellow-400 underline hover:text-yellow-300 text-sm mt-3">
                  See checklist
                </button>
              </div>

              <button className="mt-6 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 rounded transition">
                Check Price
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
