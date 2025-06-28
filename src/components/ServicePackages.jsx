const packages = [
  {
    title: "At-Home Classic Package",
    price: "₹ 899/-",
    time: "Takes 1.0 hour",
    description: "For up to 200 cc Two-Wheelers",
    points: "12 Points Inspection",
  },
  {
    title: "At-Home Premium Package",
    price: "₹ 1199/-",
    time: "Takes 1.0 hour",
    description: "For 200 - 300 cc Two-Wheelers",
    points: "15 Points Inspection",
  },
  {
    title: "At-Home Royal Package",
    price: "₹ 1999/-",
    time: "Takes 1.0 hour",
    description: "For Royal Enfield Bikes",
    points: "15 Points Inspection",
  },
  {
    title: "At-Home Sports Package",
    price: "₹ 2899/-",
    time: "Takes 1.0 hour",
    description: "For Sports Bikes",
    points: "19 Points Inspection",
  },
];

export default function ServicePackages() {
  return (
    <section className="bg-gray-950 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-400 mb-10">
          Choose Your Service Package
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-yellow-500 rounded-lg shadow-lg p-6 flex flex-col justify-between hover:scale-[1.02] transition"
            >
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">{pkg.title}</h3>
                <p className="text-2xl font-semibold text-white mb-2">{pkg.price}</p>
                <p className="text-sm text-gray-300 mb-1">{pkg.time}</p>
                <p className="text-sm text-gray-300 mb-1">{pkg.description}</p>
                <p className="text-sm text-gray-300 mb-4">{pkg.points}</p>
                <button className="text-yellow-400 underline hover:text-yellow-300 text-sm">
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
