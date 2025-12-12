import { motion } from 'framer-motion';
import heroBg from '../assets/hero_bg.png';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" style={{
            position: 'relative',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden'
        }}>
            {/* Background */}
            <div style={{
                position: 'absolute',
                inset: 0,
                zIndex: -1
            }}>
                <img src={heroBg} alt="Hero Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, rgba(5,10,6,0.5), rgba(5,10,6,0.8) 80%, #050A06 100%)'
                }} />
            </div>

            <div className="container">
                <div style={{ maxWidth: '800px', paddingTop: '6rem' }}>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ color: '#CCFF00', fontWeight: 'bold', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
                    >
                        <span style={{ width: '40px', height: '2px', background: '#CCFF00' }}></span> The Future of Agriculture
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}
                    >
                        Cultivating <br /> <span className="text-gradient">Tomorrow's Harvest</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        style={{ fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '600px', color: '#e0e0e0' }}
                    >
                        Empowering farmers with sustainable AI-driven solutions and advanced robotics to maximize yield and minimize environmental impact.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
                    >
                        <button className="btn btn-primary">
                            Explore Solutions <ArrowRight size={20} />
                        </button>
                        <button className="btn btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>Watch Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
