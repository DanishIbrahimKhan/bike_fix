import { useState } from "react";
import ServiceRequestModal from "./ServiceRequestModal";

const priceData = [
  {
    category: "Bike Service Labour Price List (Up to 180 CC)",
    priceRange: "₹ 49 - ₹ 499",
    services: [
      { name: "General Servicing", price: "₹ 449" },
      { name: "Coolant", price: "₹ 99" },
      { name: "Bike Body Wash", price: "₹ 99" },
      { name: "Oil Filter Replacement", price: "₹ 99" },
      { name: "Air Filter Change", price: "₹ 149" },
      { name: "Battery Condition Testing", price: "₹ 49" },
      { name: "Suspension", price: "₹ 299" },
      { name: "Wheels Testing", price: "₹ 299" },
      { name: "Electrical", price: "₹ 99 - ₹ 299" },
      { name: "Accessory Fitting", price: "₹ 199 - ₹ 399" },
    ],
  },
  {
    category: "Bike Service Labour Price List (Above 180 CC)",
    priceRange: "₹ 49 - ₹ 599",
    services: [
      { name: "General Servicing", price: "₹ 449" },
      { name: "Coolant", price: "₹ 99" },
      { name: "Bike Body Wash", price: "₹ 99" },
      { name: "Oil Filter Replacement", price: "₹ 99" },
      { name: "Air Filter Change", price: "₹ 149" },
      { name: "Battery Condition Testing", price: "₹ 49" },
      { name: "Suspension", price: "₹ 299" },
      { name: "Wheels Testing", price: "₹ 299" },
      { name: "Electrical", price: "₹ 99 - ₹ 299" },
      { name: "Accessory Fitting", price: "₹ 199 - ₹ 399" },
    ],
  },
  {
    category: "Advanced Labour Price List",
    priceRange: "₹ 199 - ₹ 999",
    services: [
      { name: "Doorstep Inspection", price: "₹ 149" },
      { name: "Engine Cease (Half)", price: "₹ 799" },
      { name: "Engine Cease (Full)", price: "₹ 999" },
      { name: "Engine Oil Change with Oil", price: "₹ 400 - ₹ 950" },
      { name: "Brake Shoe (part+labour)", price: "₹ 199 - ₹ 249" },
      { name: "Brake Pad (part+labour)", price: "₹ 249 - ₹ 349" },
    ],
  },
];

export default function LabourPriceList() {
 const [modalOpen, setModalOpen] = useState(false);
  return (
    <section className="bg-slate-100 text-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-500 text-center mb-8">
          Bike Service Labour Price List
        </h2>

        <p className="text-center mb-10 max-w-3xl mx-auto text-sm md:text-base text-gray-600">
          Wondering how much does it cost to service a bike? Bike repair or motorcycle service cost may depend
          on the type of service you opt for. These are estimated labour costs. Final pricing will be
          provided by the assigned mechanic. Spare parts are extra.
        </p>

        {priceData.map((section, i) => (
          <div
            key={i}
            className="mb-12 bg-white border border-yellow-500 rounded-lg shadow-md"
          >
            <div className="px-6 py-4 border-b border-yellow-500 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-yellow-600">{section.category}</h3>
              <span className="text-sm bg-yellow-500 text-black px-3 py-1 rounded font-semibold">
                {section.priceRange}
              </span>
            </div>

            <table className="w-full text-left text-sm text-gray-700">
              <thead>
                <tr className="border-b border-yellow-400 bg-yellow-100">
                  <th className="px-6 py-3">Service Type</th>
                  <th className="px-6 py-3">Price</th>
                </tr>
              </thead>
              <tbody>
                {section.services.map((item, idx) => (
                  <tr key={idx} className="border-t border-gray-200 hover:bg-yellow-50">
                    <td className="px-6 py-3">{item.name}</td>
                    <td className="px-6 py-3">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}

        <div className="text-sm text-gray-600 mt-8 space-y-2 max-w-3xl mx-auto">
          <p>* Price of the Engine Oil may vary by location and brand.</p>
          <p>* ₹149 visiting charge applies even if services are not availed.</p>
          <p>* Charges above are for labour only. Parts cost extra.</p>
          <p>* GST applicable on total bill.</p>
        </div>

        <div className="text-center mt-8">
          <button onClick={() => setModalOpen(true)} className="bg-yellow-500 text-black font-bold px-6 py-3 rounded hover:bg-yellow-400 transition">
            Book Now
          </button>
        </div>
      </div>
      <ServiceRequestModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    
    </section>
  );
}
