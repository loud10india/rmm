"use client";
import AnimatedText from "@/components/common/AnimatedText";
import React, { useState } from "react";

export default function Contact() {
    // your email address
    const yourEmail = "poojaverma140400@gmail.com";

    // State for form fields
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        message: "",
    });

    // State for form submission result
    const [result, setResult] = useState("");

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Include additional data like firstName, lastName, etc.
        const dataToSend = {
            firstName: formData.name.split(" ")[0] || "", // Get first name from full name
            lastName: formData.name.split(" ")[1] || "", // Get last name from full name
            email: formData.email,
            phone: formData.mobile,
            message: formData.message,
        };

        // send form data to the server
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataToSend),
            });

            if (response.ok) {
                setResult("Message sent successfully!");
                // Reset form fields
                setFormData({
                    name: "",
                    email: "",
                    mobile: "",
                    message: "",
                });
            } else {
                const errorData = await response.json(); // Assuming the server returns a JSON error message
                setResult(`Failed to send the message: ${errorData.message}`);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setResult("An error occurred. Please try again.");
        }
    };
    return (
        <div className='container position-relative'>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className='row mb-50'>
                        <div className='col-lg-10'>
                            <h2 className='section-caption mb-xs-10'>Contact Us</h2>
                            <h3 className='section-title mb-0'>
                                <span className='wow charsAnimIn' data-splitting='chars'>
                                    <AnimatedText text="Have questions or need a quote? Let's talk!" />
                                </span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='row mb-60 mb-sm-50'>
                        {/* Contact Item */}
                        <div className='col-sm-6 mb-xs-30 d-flex align-items-stretch'>
                            <div className='alt-features-item border-left mt-0 wow fadeScaleIn' data-wow-delay='.3s'>
                                <div className='alt-features-icon'>
                                    <svg
                                        width={24}
                                        height={24}
                                        viewBox='0 0 24 24'
                                        fill='currentColor'
                                        aria-hidden='true'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fillRule='evenodd'
                                        clipRule='evenodd'
                                    >
                                        <path d='M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z' />
                                    </svg>
                                    <div className='alt-features-icon-s'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            width={24}
                                            height={24}
                                            viewBox='0 0 24 24'
                                            fill='currentColor'
                                            aria-hidden='true'
                                        >
                                            <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.445 17.827c-3.684 1.684-9.401-9.43-5.8-11.308l1.053-.519 1.746 3.409-1.042.513c-1.095.587 1.185 5.04 2.305 4.497l1.032-.505 1.76 3.397-1.054.516z' />
                                        </svg>
                                    </div>
                                </div>
                                <h4 className='alt-features-title'>Say hello</h4>
                                <div className='alt-features-descr clearlinks'>
                                    <div>+91 98872 19894</div>
                                    <div>
                                        <a href='mailto:info@rajasthanmm.com'>info@rajasthanmm.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Contact Item */}
                        {/* Contact Item */}
                        <div className='col-sm-6 d-flex align-items-stretch'>
                            <div className='alt-features-item border-left mt-0 wow fadeScaleIn' data-wow-delay='.5s'>
                                <div className='alt-features-icon'>
                                    <svg
                                        width={24}
                                        height={24}
                                        viewBox='0 0 24 24'
                                        fill='currentColor'
                                        aria-hidden='true'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fillRule='evenodd'
                                        clipRule='evenodd'
                                    >
                                        <path d='M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602' />
                                    </svg>
                                </div>
                                <h4 className='alt-features-title'>Location</h4>
                                <div className='alt-features-descr'>E-232-A, TUNKRA ROAD, MODANGANJ, KISHANGARH, AJMER, Rajasthan - 305801</div>
                            </div>
                        </div>
                        {/* End Contact Item */}
                    </div>
                </div>
            </div>
            <div className='row wow fadeInUp' data-wow-delay='0.5s'>
                <div className='col-md-6 mb-sm-50'>
                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className='form contact-form pe-lg-5' id='contact_form'>
                        <div className='row'>
                            <div className=''>
                                {/* Name */}
                                <div className='form-group'>
                                    <label htmlFor='name'>Name</label>
                                    <input
                                        type='text'
                                        name='name'
                                        id='name'
                                        className='input-lg round form-control'
                                        placeholder='Enter your name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        pattern='.{3,100}'
                                        required
                                        aria-required='true'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-6'>
                                {/* Email */}
                                <div className='form-group'>
                                    <label htmlFor='email'>Email</label>
                                    <input
                                        type='email'
                                        name='email'
                                        id='email'
                                        className='input-lg round form-control'
                                        placeholder='Enter your email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        pattern='.{5,100}'
                                        required
                                        aria-required='true'
                                    />
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                {/* Mobile */}
                                <div className='form-group'>
                                    <label htmlFor='mobile'>Phone</label>
                                    <input
                                        type='tel'
                                        name='mobile'
                                        id='mobile'
                                        className='input-lg round form-control'
                                        placeholder='Enter your mobile number'
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        pattern='[0-9]{10}' // Adjust the pattern for your phone number format
                                        required
                                        aria-required='true'
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Message */}
                        <div className='form-group'>
                            <label htmlFor='message'>Message</label>
                            <textarea
                                name='message'
                                id='message'
                                className='input-lg round form-control'
                                style={{ height: 130 }}
                                placeholder='Enter your message'
                                value={formData.message}
                                onChange={handleChange}
                                defaultValue={""}
                            />
                        </div>
                        <div className='row'>
                            <div className='col-lg-5'>
                                {/* Send Button */}
                                <div className='pt-20'>
                                    <button
                                        type='submit'
                                        className='submit_btn btn btn-mod btn-large btn-round btn-hover-anim'
                                        id='submit_btn'
                                        aria-controls='result'
                                    >
                                        <span>Send Message</span>
                                    </button>
                                </div>
                            </div>
                            <div className='col-lg-7'>
                                {/* Inform Tip */}
                                <div className='form-tip pt-20 pt-sm-0 mt-sm-20'>
                                    <i className='icon-info size-16' />
                                    All the fields are required. By sending the form you agree to the <a href='#'>Terms &amp; Conditions</a> and{" "}
                                    <a href='#'>Privacy Policy</a>.
                                </div>
                            </div>
                        </div>
                        <div id='result' role='region' aria-live='polite' aria-atomic='true'>
                            {result && <p>{result}</p>}
                        </div>
                    </form>
                    {/* End Contact Form */}
                </div>
                <div className='col-md-6 d-flex align-items-stretch'>
                    {/* Google Map */}
                    <div className='map-boxed'>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2717.1394851898626!2d74.8556669!3d26.612713799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396bf140a7ca77e9%3A0xd60e10f8e1f2f6ac!2sRAJASTHAN%20MACHINE%20MANUFACTURER!5e1!3m2!1sen!2sin!4v1733903723909!5m2!1sen!2sin'
                            width='600'
                            height='450'
                            loading='lazy'
                            referrerpolicy='no-referrer-when-downgrade'
                        ></iframe>
                    </div>
                    {/* End Google Map */}
                </div>
            </div>
        </div>
    );
}
