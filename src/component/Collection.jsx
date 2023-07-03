import logo from '../assets/logo.png';
import Hoodie from './collection/Hoodie';
import hoodie from '../assets/hoodie.webp';


export default function Collection() {
    return (
        <div className="hero min-h-screen bg-base-200 flex flex-col items-center justify-center">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">New Collection</h1>

                    <div className="flex gap-5 justify-center">
                        <div>
                            <span className="countdown font-mono text-4xl">
                                <span style={{ "--value": 15 }}></span>
                            </span>
                            days
                        </div>
                        <div>
                            <span className="countdown font-mono text-4xl">
                                <span style={{ "--value": 10 }}></span>
                            </span>
                            hours
                        </div>
                        <div>
                            <span className="countdown font-mono text-4xl">
                                <span style={{ "--value": 24 }}></span>
                            </span>
                            min
                        </div>
                        <div>
                            <span className="countdown font-mono text-4xl">
                                <span style={{ "--value": 13 }}></span>
                            </span>
                            sec
                        </div>
                    </div>

                    <div className="carousel carousel-center max-w-fit p-4 space-x-4 bg-neutral rounded-box">
                        <div className="carousel-item max-h-sm">
                            <img src={hoodie} />
                        </div>
                        <div className="carousel-item">
                            <img src="/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img src="/images/stock/photo-1494253109108-2e30c049369b.jpg" className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img src="/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img src="/images/stock/photo-1559181567-c3190ca9959b.jpg" className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="rounded-box" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
