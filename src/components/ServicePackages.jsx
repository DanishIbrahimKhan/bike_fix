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
    <section className="bg-slate-100 text-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-500 mb-10">
          Choose Your Service Package
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-yellow-500 mb-2">{pkg.title}</h3>
                <p className="text-2xl font-semibold text-gray-900 mb-2">{pkg.price}</p>
                <p className="text-sm text-gray-600 mb-1">{pkg.time}</p>
                <p className="text-sm text-gray-600 mb-1">{pkg.description}</p>
                <p className="text-sm text-gray-600 mb-4">{pkg.points}</p>
                <button className="text-yellow-500 underline hover:text-yellow-600 text-sm">
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
