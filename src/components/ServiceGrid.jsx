import {
  FaCalendarAlt,
  FaPaintRoller,
  FaShieldAlt,
  FaDoorOpen,
  FaCog,
  FaBroom,
  FaTools,
  FaCarBattery,
  FaShoppingCart,
  FaBolt,
  FaCogs,
  FaTruckMoving,
} from 'react-icons/fa';

const services = [
  { icon: <FaCalendarAlt size={32} />, label: 'Periodic Service' },
  { icon: <FaPaintRoller size={32} />, label: 'Dent & Paint' },
  { icon: <FaShieldAlt size={32} />, label: 'Bike Insurance' },
  { icon: <FaDoorOpen size={32} />, label: 'Doorstep Service' },
  { icon: <FaCog size={32} />, label: 'Wheel Care' },
  { icon: <FaBroom size={32} />, label: 'Detailing' },
  { icon: <FaTools size={32} />, label: 'Accidental Repair' },
  { icon: <FaCarBattery size={32} />, label: 'Bike Batteries' },
  { icon: <FaShoppingCart size={32} />, label: 'Buy Spare Parts' },
  { icon: <FaBolt size={32} />, label: 'EV Bike Service' },
  { icon: <FaCogs size={32} />, label: 'Engine Repair' },
  { icon: <FaTruckMoving size={32} />, label: 'Bike RSA Services' },
];

export default function ServiceGrid() {
  return (
    <section className="bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white hover:bg-yellow-500 hover:text-black transition-colors duration-300 text-gray-800 p-5 rounded-xl shadow-sm flex flex-col items-center justify-center"
          >
            <div className="mb-3 text-yellow-500">{service.icon}</div>
            <p className="font-medium text-sm">{service.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
