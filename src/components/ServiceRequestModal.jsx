import { useState } from 'react';
import Swal from 'sweetalert2';

export default function ServiceRequestModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    address: '',
    date: '',
    time: '',
  });

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
      // form.append('entry.588181732', name);
      // form.append('entry.618549867', mobile);
      // form.append('entry.41781572', address);
      // form.append('entry.797320591', time);
      // form.append('entry.654029894_year', selectedDate.getFullYear());
      // form.append('entry.654029894_month', selectedDate.getMonth() + 1);
      // form.append('entry.654029894_day', selectedDate.getDate());
      form.append('entry.1708715124', name);
      form.append('entry.1640112910', mobile);
      form.append('entry.267682140', address);
      form.append('entry.247346093', time);
      form.append('entry.1572358225_year', selectedDate.getFullYear());
      form.append('entry.1572358225_month', selectedDate.getMonth() + 1);
      form.append('entry.1572358225_day', selectedDate.getDate());

      
      await fetch(
        // 'https://docs.google.com/forms/d/e/1FAIpQLSe20TTJ0_DxJRIwBOozTLuqRcvWcOhBrAb7IHIShLgLOepMTg/formResponse',
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

      setFormData({ name: '', mobile: '', address: '', date: '', time: '' });
      onClose();
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Submission Failed',
        text: 'Something went wrong. Please try again later.',
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/50">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 relative animate-fade-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 text-xl font-bold hover:text-black"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-yellow-500 mb-4 text-center">
          Bike Repair <span className="text-gray-800">Request</span>
        </h2>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-100 px-4 py-2 rounded border"
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            className="bg-gray-100 px-4 py-2 rounded border"
          />
          <textarea
            name="address"
            placeholder="Street address and locality"
            value={formData.address}
            onChange={handleChange}
            rows="2"
            className="bg-gray-100 px-4 py-2 rounded border"
          ></textarea>
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="bg-gray-100 px-4 py-2 rounded border"
            />
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="bg-gray-100 px-4 py-2 rounded border"
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
            className="bg-yellow-500 text-black font-bold py-3 rounded hover:bg-yellow-400 transition"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
