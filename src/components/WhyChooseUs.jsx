import { FaTools, FaMotorcycle, FaShieldAlt, FaCogs } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-100 text-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mb-10">
          <div className="flex flex-col items-center">
            <FaMotorcycle size={30} className="text-yellow-500 mb-2" />
            <p className="text-sm font-medium">Free Pickup & Drop</p>
          </div>
          <div className="flex flex-col items-center">
            <FaTools size={30} className="text-yellow-500 mb-2" />
            <p className="text-sm font-medium">Trained Mechanic</p>
          </div>
          <div className="flex flex-col items-center">
            <FaShieldAlt size={30} className="text-yellow-500 mb-2" />
            <p className="text-sm font-medium">10 Days Warranty</p>
          </div>
          <div className="flex flex-col items-center">
            <FaCogs size={30} className="text-yellow-500 mb-2" />
            <p className="text-sm font-medium">Genuine Spare Parts</p>
          </div>
        </div>

        {/* Description */}
        <div className="text-gray-700 text-sm leading-6 space-y-4">
          <h2 className="text-2xl font-bold text-yellow-500 mb-3">
            Doorstep Bike Service
          </h2>
          <p>
            Are you not comfortable entrusting the maintenance of your
            two-wheeler to a local motorbike mechanic or an unknown person? Are
            you also concerned about the authenticity of spare parts used in
            your bike? We understand the importance of your motorcycle in daily
            commuting and its performance.
          </p>
          <p>
            With <strong>doorstep bike service</strong> experience hassle-free service from trained professionals.
            We use 100% genuine spare parts and provide service packages starting
            at just ₹599. Choose from various engine oil options, schedule visits
            conveniently, and enjoy warranty-backed service.
          </p>
          <p>
            Unlike nearby local garages, we ensure high-quality support, pricing
            transparency, and a seamless customer experience — all through the
          </p>
        </div>
      </div>
    </section>
  );
}
