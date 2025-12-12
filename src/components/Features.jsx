import { motion } from 'framer-motion';
import { Drone, Sprout, BarChart3, CloudSun, Leaf, Bot } from 'lucide-react';

const features = [
    { icon: Drone, title: 'Drone Monitoring', desc: 'Aerial surveillance for real-time crop health assessment and detailed field mapping.' },
    { icon: Bot, title: 'Autonomous Robotics', desc: 'Robots that handle planting, weeding, and harvesting with sub-millimeter precision.' },
    { icon: BarChart3, title: 'Predictive Analytics', desc: 'Deep learning models that forecast yields and optimize planting schedules.' },
    { icon: CloudSun, title: 'Climate Control', desc: 'IoT sensors managing micro-climates in greenhouses for perfect growing conditions.' },
    { icon: Sprout, title: 'Smart Growth', desc: 'Automated nutrient delivery systems tailored to each individual plant\'s needs.' },
    { icon: Leaf, title: 'Eco-Sustainability', desc: 'Zero-waste processes that regenerate soil health and biodiversity.' },
];

const Features = () => {
    return (
        <section id="solutions" className="section-padding">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <span style={{ color: '#00A651', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Our Solutions</span>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem', marginTop: '0.5rem' }}>Technology for <span className="text-gradient">Growth</span></h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>Comprehensive technology stack designed for the modern agricultural enterprise.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                    {features.map((feature, i) => (
                        <motion.div 
                            key={i}
                            className="glass"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.02, translateY: -5 }}
                            style={{ padding: '2.5rem', borderRadius: '24px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', position: 'relative', overflow: 'hidden' }}
                        >
                            <div style={{
                                position: 'absolute', top: 0, left: 0, width: '100%', height: '4px',
                                background: 'linear-gradient(90deg, #00A651, #CCFF00)'
                            }}></div>

                            <div style={{
                                padding: '1rem',
                                background: 'rgba(0, 166, 81, 0.1)',
                                borderRadius: '16px',
                                marginBottom: '1.5rem',
                                color: '#CCFF00',
                                border: '1px solid rgba(0, 166, 81, 0.2)'
                            }}>
                                <feature.icon size={32} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{feature.title}</h3>
                            <p style={{ fontSize: '1rem', color: '#A8C6B0' }}>{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
