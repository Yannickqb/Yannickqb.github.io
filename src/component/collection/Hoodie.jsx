import hoodie from '../../assets/hoodie.webp';

export default function Hoodie() {
    return(
        <div className="card w-96 glass">
  <figure><img src={hoodie} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Life hack</h2>
    <p>How to park your car at your garage?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Learn now!</button>
    </div>
  </div>
</div>
    );
}
