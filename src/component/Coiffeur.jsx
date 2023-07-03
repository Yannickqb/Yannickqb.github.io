import marianoVideo from '../assets/mariano.mp4';

export default function Coiffeur() {
  const playVideoOnScroll = () => {
    const video = document.getElementById('coiffeurVideo');
    if (video) {
      video.play();
    }
  };

  return (
    <div className="hero min-h-cover bg-base-200 bg-opacity-50">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <video id="coiffeurVideo" className="max-w-sm rounded-lg shadow-2xl" onCanPlay={playVideoOnScroll} autoPlay muted loop>
          <source src={marianoVideo} type="video/mp4" />
        </video>
        <div>
          <h1 className="text-5xl font-bold">Unleash Your Style</h1>
          <p className="py-6">
          Experience the epitome of grooming perfection at our renowned barber shop. Our master barber combines skill, passion, and dedication to create a transformative experience like no other. With unparalleled expertise, personalized service, and a commitment to staying at the forefront of the industry, we proudly offer the best barbering services in town. Step into a world of refined luxury and unleash your style with our extraordinary barber.          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
