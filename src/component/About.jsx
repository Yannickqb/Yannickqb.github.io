import mariano from '../assets/mar.png';

export default function About() {
  return (
    <div className="hero min-h-cover bg-base-200 bg-opacity-50 mt-10">
  <div className="hero-content flex-col lg:flex-row">
    <img src={mariano} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">About Me</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Learn more</button>
    </div>
  </div>
</div>
  );
}
