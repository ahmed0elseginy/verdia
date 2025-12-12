import { motion } from 'framer-motion';
import { Send, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const GetStarted = () => {
    return (
        <section className="section-padding" style={{ minHeight: '100vh', paddingTop: '8rem' }}>
            <div className="container">
                <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#A8C6B0', marginBottom: '2rem', fontSize: '0.9rem' }}>
                    <ArrowLeft size={16} /> Back to Home
                </Link>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                            Ready to <span className="text-gradient">Upgrade</span> Your Farm?
                        </h1>
                        <p style={{ fontSize: '1.1rem', color: '#A8C6B0', marginBottom: '2.5rem' }}>
                            Join hundreds of forward-thinking agricultural enterprises using Verdia to increase yields and reduce environmental impact.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {[
                                { title: 'Free Consultation', desc: 'Expert assessment of your current infrastructure.' },
                                { title: 'Custom Implementation', desc: 'Tailored solutions compatible with your crops.' },
                                { title: '24/7 Support', desc: 'Dedicated technical team always on standby.' }
                            ].map((item, i) => (
                                <div key={i} className="glass" style={{ padding: '1.5rem', borderRadius: '16px', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <div style={{ background: 'rgba(0, 166, 81, 0.2)', padding: '0.5rem', borderRadius: '50%', color: '#CCFF00' }}>
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>{item.title}</h4>
                                        <p style={{ fontSize: '0.9rem', margin: 0 }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form className="glass" style={{ padding: '2.5rem', borderRadius: '24px' }} onSubmit={(e) => e.preventDefault()}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Get in Touch</h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div className="form-group">
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#A8C6B0' }}>First Name</label>
                                        <input type="text" placeholder="John" style={inputStyle} />
                                    </div>
                                    <div className="form-group">
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#A8C6B0' }}>Last Name</label>
                                        <input type="text" placeholder="Doe" style={inputStyle} />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#A8C6B0' }}>Email Address</label>
                                    <input type="email" placeholder="john@company.com" style={inputStyle} />
                                </div>

                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#A8C6B0' }}>Area of Interest</label>
                                    <select style={inputStyle}>
                                        <option value="">Select a solution...</option>
                                        <option value="drones">Drone Monitoring</option>
                                        <option value="robotics">Autonomous Robotics</option>
                                        <option value="analytics">Predictive Analytics</option>
                                        <option value="full">Full Suite Integration</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#A8C6B0' }}>Message</label>
                                    <textarea rows="4" placeholder="Tell us about your farm..." style={{ ...inputStyle, resize: 'vertical' }}></textarea>
                                </div>

                                <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                                    Send Request <Send size={18} />
                                </button>
                                <p style={{ fontSize: '0.8rem', textAlign: 'center', marginTop: '1rem', color: '#666' }}>
                                    We respect your privacy. No spam, ever.
                                </p>
                            </div>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

const inputStyle = {
    width: '100%',
    padding: '0.8rem 1rem',
    borderRadius: '8px',
    border: '1px solid rgba(255,255,255,0.1)',
    background: 'rgba(5, 10, 6, 0.4)',
    color: '#fff',
    fontSize: '1rem',
    fontFamily: 'inherit',
    outline: 'none',
    boxSizing: 'border-box'
};

export default GetStarted;
