import { FaUsers, FaHome, FaStore } from "react-icons/fa";

export default function JoinUsBanner() {
  const items = [
    {
      icon: <FaUsers className="text-5xl mb-4 group-hover:text-yellow-300 transition" />,
      title: "Are you a Bike Mechanic?",
      description:
        "Join our network of two-wheeler mechanics across India and start earning today!",
    },
    {
      icon: <FaHome className="text-5xl mb-4 group-hover:text-yellow-300 transition" />,
      title: "Register your bike Workshop?",
      description:
        "Register your bike workshop with us and start getting huge customers base and increase your business.",
    },
    {
      icon: <FaStore className="text-5xl mb-4 group-hover:text-yellow-300 transition" />,
      title: "Looking for Franchise?",
      description:
        "Start a multi-brand two wheeler service workshop franchise today and become your own boss.",
    },
  ];

  return (
    <section className="bg-gray-950 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="group bg-gray-900 hover:bg-gray-800 transition border border-gray-800 rounded-lg text-yellow-400 text-center p-6"
          >
            {item.icon}
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-yellow-300">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
