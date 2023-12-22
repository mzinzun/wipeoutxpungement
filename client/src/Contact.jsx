import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        legalName: '',
        arrestingNames: '',
        address: '',
        phoneNumber: '',
        dob: '',
        pendingCharges: '',
        additionalInfo: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Handle form submission here

        // Reset form data
        setFormData({
            legalName: '',
            arrestingNames: '',
            address: '',
            phoneNumber: '',
            dob: '',
            pendingCharges: '',
            additionalInfo: ''
        });
    };
    return (
        <div className='p-5 w-50'>
            {/* refactor for to use bootstrap instead of react-bootstrap   */}
            <h1>Contact</h1>
            <p>Fill out the form below and I will get back to you as soon as possible.</p>
            <p>Or you can call me at 555-555-5555</p>
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input
                    type="text"
                    className="form-control"
                    id="legalName"
                    placeholder="Enter legal name"
                    value={formData.legalName}
                    onChange={handleChange} />
                    <label htmlFor="legalName" className='text-danger'>Legal Name:</label>
                </div>
                <div className="form-floating  mb-3">
                    <input type="email" className="form-control" id="email" placeholder="Enter email" value={formData.email} onChange={handleChange} />
                    <label htmlFor="email" className='text-danger'>Email:</label>
                </div>
                <div className="form-floating  mb-3">
                    <input type="tel" className="form-control" id="phone" placeholder="Enter phone" value={formData.phone} onChange={handleChange} />
                    <label htmlFor="phone" className="form-label">Phone:</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea className="form-control" id="message" rows="3" value={formData.message} onChange={handleChange}></textarea>
                    <label htmlFor="message" className='text-danger'>Message:</label>
                </div>
                <div className="mb-3">
                    <label htmlFor="contactMethod" className='text-danger'>Preferred Contact Method:</label>
                    <select className="form-select" id="contactMethod" value={formData.contactMethod} onChange={handleChange}>
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
