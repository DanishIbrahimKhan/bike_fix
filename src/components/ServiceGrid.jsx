import { FaCalendarAlt, FaPaintRoller, FaShieldAlt, FaDoorOpen, FaCog, FaBroom, FaTools, FaCarBattery, FaShoppingCart, FaBolt, FaCogs, FaTruckMoving } from 'react-icons/fa';

const services = [
  { icon: <FaCalendarAlt size={40} />, label: 'Periodic Service' },
  { icon: <FaPaintRoller size={40} />, label: 'Dent & Paint' },
  { icon: <FaShieldAlt size={40} />, label: 'Bike Insurance' },
  { icon: <FaDoorOpen size={40} />, label: 'Doorstep Service' },
  { icon: <FaCog size={40} />, label: 'Wheel Care' },
  { icon: <FaBroom size={40} />, label: 'Detailing' },
  { icon: <FaTools size={40} />, label: 'Accidental Repair' },
  { icon: <FaCarBattery size={40} />, label: 'Bike Batteries' },
  { icon: <FaShoppingCart size={40} />, label: 'Buy Spare Parts' },
  { icon: <FaBolt size={40} />, label: 'EV Bike Service' },
  { icon: <FaCogs size={40} />, label: 'Engine Repair' },
  { icon: <FaTruckMoving size={40} />, label: 'Bike RSA Services' },
];

export default function ServiceGrid() {
  return (
    <section className="bg-gray-950 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-900 hover:bg-yellow-400 hover:text-black transition-colors duration-200 text-white p-5 rounded-lg shadow-md flex flex-col items-center justify-center"
          >
            <div className="mb-3">{service.icon}</div>
            <p className="font-medium text-sm">{service.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
