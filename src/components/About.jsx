import { motion } from 'framer-motion';
import aboutImg from '../assets/about_img.png';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section-padding" style={{ position: 'relative' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div style={{ position: 'relative' }}>
                            <img src={aboutImg} alt="Smart Farming" style={{ width: '100%', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }} />
                            {/* Floating Stat Card */}
                            <div className="glass" style={{
                                position: 'absolute',
                                bottom: '-30px',
                                right: '-20px',
                                padding: '2rem',
                                borderRadius: '16px',
                                color: 'white',
                                minWidth: '200px'
                            }}>
                                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#CCFF00', lineHeight: 1 }}>95%</div>
                                <div style={{ fontSize: '0.9rem', color: '#A8C6B0', marginTop: '0.5rem' }}>Water Efficiency Increase</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span style={{ color: '#00A651', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>About Us</span>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', marginTop: '0.5rem' }}>Revolutionizing <span className="text-gradient">Modern Farming</span></h2>
                        <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                            At Verdia, we merge traditional agricultural wisdom with cutting-edge technology. Our smart systems monitor crop health in real-time, optimizing resources for a sustainable planet and higher yields.
                        </p>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                            {['AI-Driven Crop Analysis & Forecasting', 'Precision Irrigation Robots', 'Sustainable Organic Pest Control'].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', color: '#fff' }}>
                                    <CheckCircle2 color="#CCFF00" size={24} /> {item}
                                </li>
                            ))}
                        </ul>
                        <button className="btn btn-primary" style={{ marginTop: '2.5rem' }}>Learn More About Us</button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
