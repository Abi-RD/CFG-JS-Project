import React, { useState } from "react";
import './contactUs.css';


const FORM_ENDPOINT = ""; // TODO - filled at the 2nd return section

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
        setSubmitted(true);
        }, 100);
    };


    if (submitted) {
        return (
            <>
            <div className="text-2xl">Thank you!</div>
            <div className="text-md">We'll be in touch soon.</div>
            </>
        );
    }

        return (
            <div className="container">    
                <div className="form-container">
                    <form
                        action={FORM_ENDPOINT}
                        onSubmit={handleSubmit}
                        method="POST"
                        target="_blank"
                    >
    
                            <div style={{textAlign: 'center'}}>
                                <h1> Contact Us </h1>
                                <p>
                                Got a question? We'd love to hear from you.<br/>
                                Send a message and we'll respond as soon as possible
                                </p>
                            </div><br/><br/>

                            <div className="col-sm-12">
                                <div className="form-group row">
                                    <label className="control-label col-sm-1.5" style={{ marginLeft: '20px' }}>First Name:</label>
                                    <div className="col-sm-4">
                                        <input type="firstname" className="form-control form-control-sm" id="colFormLabelSm" placeholder="John" />
                                    </div>
                                    <label className="control-label col-sm-1.5"  style={{ marginLeft: '60px' }}>Last Name:</label>
                                    <div className="col-sm-4" >
                                        <input type="lastname" className="form-control form-control-sm" id="colFormLabelSm" placeholder="Doe" />
                                    </div>
                                </div>
                            </div>
                            <br/>

                            <div class="col-sm-12">
                                <div className="form-group row">
                                <label className="control-label col-sm-1.5" >Email Address:</label>
                                    <div className="col-sm-4">
                                        <input type="email" className="form-control form-control-sm" id="colFormLabelSm" placeholder="example@email.com" />
                                    </div>                            
                                <label className="control-label col-sm-1.5"  style={{ marginLeft: '30px' }}>Confirm Email:</label>
                                    <div className="col-sm-4">
                                        <input type="confirmemail" className="form-control form-control-sm" id="colFormLabelSm" placeholder="example@email.com" />
                                    </div>
                                </div>
                            </div>
                            <br/>

                            <div class="col-sm-12">
                                <div class="form-group row">
                                <label class="control-label col-sm-1.5" style={{ marginLeft: '10px' }}>Day Contact:</label>
                                    <div class="col-sm-4">
                                        <input type="daycontact" class="form-control form-control-sm" id="colFormLabelSm" placeholder="01234567890" />
                                    </div>                            
                                <label class="control-label col-sm-1.5"  style={{ marginLeft: '30px' }}>Mobile Contact:</label>
                                    <div class="col-sm-4">
                                        <input type="mobilecontact" class="form-control form-control-sm" id="colFormLabelSm" placeholder="+44 1234567890" />
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <br/>

                            <div class="col-sm-12">
                                <label className="control-label col-sm-2" style={{ marginLeft: '60px' }}>Your message</label>
                                <div className="col-sm-10">
                                    <textarea
                                        style={{ marginLeft: '60px' }}
                                        placeholder="Your message"
                                        name="message"
                                        class="form-control col-sm-12"
                                        rows={6}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-3 mt-3">
                                <div className="col-sm-4">
                                    <button
                                        type="submit"
                                        className="active:bg-blue-600 font-bold uppercase text-sm px-5 py-3 rounded shadow hover:shadow-lg mr-1 mb-1 ease-linear transition-all duration-150"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                    </form>
                </div>  
            </div>
        );
};

export default ContactForm;
