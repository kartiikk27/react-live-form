import React, { useState } from 'react';
import './LiveForm.css';

export default function LiveForm() {
  const [liveInput, setLiveInput] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleLiveInputChange = (e) => {
    setLiveInput(e.target.value);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="container">
      <h2>Live Input Tracker</h2>
      <input
        type="text"
        value={liveInput}
        onChange={handleLiveInputChange}
        placeholder="Type something..."
        className="input"
      />
      <p className="live-value">Live value: {liveInput}</p>

      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleFormChange}
          placeholder="Name"
          className="input"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleFormChange}
          placeholder="Email"
          className="input"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleFormChange}
          placeholder="Password"
          className="input"
          required
        />
        <button type="submit" className="button">Submit</button>
      </form>
    </div>
  );
}
