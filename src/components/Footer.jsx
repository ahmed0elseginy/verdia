import { Sprout, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ marginTop: '0', borderTop: '1px solid rgba(255,255,255,0.1)', background: '#020503' }} className="section-padding">
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>

                    {/* Brand */}
                    <div>
                        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>
                            <Sprout color="#CCFF00" size={32} />
                            Ver<span style={{ color: '#CCFF00' }}>dia</span>
                        </a>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Pioneering the future of sustainable agriculture through innovation, robotics and AI technology.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', transition: 'all 0.3s' }}
                                    onMouseOver={(e) => e.currentTarget.style.background = '#00A651'}
                                    onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: '#fff' }}>Quick Links</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            {['Home', 'About Us', 'Solutions', 'Case Studies', 'News', 'Contact'].map((item) => (
                                <li key={item}><a href="#" className="hover-text-primary">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: '#fff' }}>Contact Us</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                                <MapPin size={20} color="#CCFF00" />
                                <span>123 Innovation Drive, AgriTech City</span>
                            </li>
                            <li style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                                <Phone size={20} color="#CCFF00" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                                <Mail size={20} color="#CCFF00" />
                                <span>hello@verdia.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', color: '#666' }}>
                    <p>&copy; 2024 Verdia Technologies Inc. All rights reserved.</p>
                </div>
            </div>
            <style>{`
                .hover-text-primary:hover { color: #CCFF00; transition: color 0.3s; }
            `}</style>
        </footer>
    );
};

export default Footer;
