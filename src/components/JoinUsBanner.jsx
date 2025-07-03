import { FaUsers, FaHome, FaStore } from "react-icons/fa";

export default function JoinUsBanner() {
  const items = [
    {
      icon: <FaUsers className="text-5xl mb-4 group-hover:text-yellow-500 transition" />,
      title: "Are you a Bike Mechanic?",
      description:
        "Join our network of two-wheeler mechanics across India and start earning today!",
    },
    {
      icon: <FaHome className="text-5xl mb-4 group-hover:text-yellow-500 transition" />,
      title: "Register your bike Workshop?",
      description:
        "Register your bike workshop with us and start getting huge customers base and increase your business.",
    },
    {
      icon: <FaStore className="text-5xl mb-4 group-hover:text-yellow-500 transition" />,
      title: "Looking for Franchise?",
      description:
        "Start a multi-brand two wheeler service workshop franchise today and become your own boss.",
    },
  ];

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="group bg-gray-100 hover:bg-white transition border border-gray-300 rounded-lg text-center p-6 shadow-md"
          >
            {item.icon}
            <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
