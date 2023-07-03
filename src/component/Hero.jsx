import React from 'react';
import logo from '../assets/logo.png';

export default function Hero({ coiffeurRef }) {
    const handleScrollToCoiffeur = () => {
        coiffeurRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="hero min-h-screen" style={{ marginTop: '60px', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(${logo})` }}>
            <div className="hero-overlay bg-opacity-0"></div>
            <div className="hero-content text-center text-white">
                <div className="max-w-md mx-auto bg-base-200 bg-opacity-50 " style={{ padding: '2.5px', borderRadius: '25px' }}>
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">
                        I'm Marián Pavlič, an experienced and passionate hairdresser dedicated to enhancing your natural beauty. With personalized styles and a commitment to your satisfaction, I'm here to bring your hair dreams to life. Discover examples of my work, read testimonials, and explore the range of services I offer. Let's create a look that reflects your unique personality and leaves you feeling confident and refreshed. Marián Pavlič
                    </p>
                </div>
            </div>
        </div>
    );
}
