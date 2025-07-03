import { useState, useEffect } from 'react';
import bike1 from '../assets/bike_fix.jpg';
import bike2 from '../assets/bike_fix_1.jpg';
import bike3 from '../assets/bike_fix_2.jpg';

const images = [bike1,bike2,bike3];


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

  const date = new Date(formData.date);

  const form = new FormData();
  form.append('entry.588181732', formData.name);             // Name
  form.append('entry.618549867', formData.mobile);           // Mobile
  form.append('entry.41781572', formData.address);           // Address
  form.append('entry.797320591', formData.time);           // time
  
  form.append('entry.654029894_year', date.getFullYear());   // Year
  form.append('entry.654029894_month', date.getMonth() + 1); // Month (0-indexed)
  form.append('entry.654029894_day', date.getDate());        // Day
  try {
    await fetch('https://docs.google.com/forms/d/e/1FAIpQLSe20TTJ0_DxJRIwBOozTLuqRcvWcOhBrAb7IHIShLgLOepMTg/formResponse', {
      method: 'POST',
      mode: 'no-cors',
      body: form,
    });

    alert('📞 We will call you shortly!');
    setFormData({
      name: '',
      mobile: '',
      address: '',
      date: '',
      time: '',
    });
  } catch (err) {
    console.error('❌ Form submit failed:', err);
    alert('Something went wrong!');
  }
};



  return (
    <section className="mt-10 py-10 px-4 bg-slate-100">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden grid md:grid-cols-2">
        {/* LEFT: Image Slideshow */}
        <div className="relative h-96 md:h-auto">
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

        {/* RIGHT: Form */}
        <div className="p-8 bg-white">
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

            <div className="grid sm:grid-cols-3 gap-4">
              {/* <input
                type="text"
                name="pincode"
                placeholder="411011"
                value={formData.pincode}
                onChange={handleChange}
                className="bg-gray-100 text-gray-900 px-4 py-2 rounded border border-gray-300"
              /> */}
              {/* <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="bg-gray-100 text-gray-900 px-4 py-2 rounded border border-gray-300"
              >
                <option value="">Select Area</option>
                <option>Area 1</option>
                <option>Area 2</option>
                <option>Area 3</option>
              </select> */}
              {/* <button
                type="button"
                className="bg-yellow-500 text-black font-bold px-4 py-2 rounded hover:bg-yellow-400 transition"
                onClick={() => alert('📍 Location detection coming soon!')}
              >
                Detect Pincode
              </button> */}
            </div>

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
