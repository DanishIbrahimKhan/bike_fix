import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import bike1 from '../assets/bike_fix.jpg';
import bike2 from '../assets/bike_fix_1.jpg';
import bike3 from '../assets/bike_fix_2.jpg';

const images = [
  'https://plus.unsplash.com/premium_photo-1664299589660-35f51cb645ca?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1527167747750-749ac47351a7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1623220940666-f4bcc07aaed9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1650569663281-44a28c984e2a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

export default function ServiceRequestCard() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    address: '',
    date: '',
    time: '',
  });

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, mobile, address, date, time } = formData;

    if (!name.trim() || !mobile.trim() || !address.trim() || !date || !time) {
      Swal.fire({
        icon: 'warning',
        title: 'Incomplete Form',
        text: 'Please fill in all fields before submitting.',
      });
      return;
    }

    if (!/^\d{10}$/.test(mobile)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Mobile Number',
        text: 'Please enter a valid 10-digit mobile number.',
      });
      return;
    }

    try {
      const selectedDate = new Date(date);
      const form = new FormData();

      form.append('entry.1708715124', name);
      form.append('entry.1640112910', mobile);
      form.append('entry.267682140', address);
      form.append('entry.247346093', time);
      form.append('entry.1572358225_year', selectedDate.getFullYear());
      form.append('entry.1572358225_month', selectedDate.getMonth() + 1);
      form.append('entry.1572358225_day', selectedDate.getDate());

      await fetch(
        //'https://docs.google.com/forms/d/e/1FAIpQLSe20TTJ0_DxJRIwBOozTLuqRcvWcOhBrAb7IHIShLgLOepMTg/formResponse',
        'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfXsWBw6EeWhDsMaWdNAbJXP2bruLaKUiB-hAG2xGjzoKLf8g/formResponse',
        {
          method: 'POST',
          mode: 'no-cors',
          body: form,
        }
      );

      Swal.fire({
        icon: 'success',
        title: 'Request Submitted!',
        text: '📞 We will call you shortly.',
      });

      setFormData({
        name: '',
        mobile: '',
        address: '',
        date: '',
        time: '',
      });
    } catch (err) {
      console.error('❌ Form submit failed:', err);
      Swal.fire({
        icon: 'error',
        title: 'Submission Failed',
        text: 'Something went wrong. Please try again later.',
      });
    }
  };

  return (
    <section className="mt-16 py-10 px-4 bg-slate-100">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden grid md:grid-cols-2">
        {/* LEFT ON DESKTOP, BELOW ON MOBILE */}
        <div className="relative h-96 md:h-auto order-2 md:order-1">
          <img
            src={images[currentImage]}
            alt="Bike Service"
            className="w-full h-full object-cover transition-all duration-700"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentImage ? 'bg-yellow-500' : 'bg-white/50'
                }`}
              ></span>
            ))}
          </div>
        </div>

        {/* FORM – RIGHT ON DESKTOP, TOP ON MOBILE */}
        <div className="p-8 bg-white order-1 md:order-2">
          <h2 className="text-2xl font-bold text-yellow-500 mb-6 text-center">
            Bike Repair <span className="text-gray-800">– See Price</span>
          </h2>

          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-gray-100 text-gray-900 px-4 py-2 rounded border border-gray-300"
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="bg-gray-100 text-gray-900 px-4 py-2 rounded border border-gray-300"
              />
            </div>

            <textarea
              name="address"
              placeholder="Enter street address and locality"
              value={formData.address}
              onChange={handleChange}
              rows="2"
              className="bg-gray-100 text-gray-900 px-4 py-2 rounded border border-gray-300"
            ></textarea>

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="bg-gray-100 text-gray-900 px-4 py-2 rounded border border-gray-300"
              />
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="bg-gray-100 text-gray-900 px-4 py-2 rounded border border-gray-300"
              >
                <option value="">Select Time Slot</option>
                <option>9 AM - 11 AM</option>
                <option>11 AM - 1 PM</option>
                <option>2 PM - 4 PM</option>
                <option>4 PM - 6 PM</option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-yellow-500 text-black font-bold py-3 rounded hover:bg-yellow-400 mt-4 transition"
            >
              Request a Callback
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
