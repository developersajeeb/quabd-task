import { Link, useLoaderData } from 'react-router-dom';
import bannerImg from '../../assets/banner-img.jpg';
import { FaStar } from "react-icons/fa";

const Home = () => {
    const allMovies = useLoaderData();

    return (
        <>
            <header>
                <div className="hero min-h-screen bg-base-200 bg-cover bg-center" style={{ backgroundImage: `url(${bannerImg})` }}>
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold text-white">One-Stop Film Hub</h1>
                            <p className="py-6 text-gray-200">Unveiling the Allure of Serendipity: Embrace the Unexplored and Embody the Extraordinary.</p>
                            <button className="btn bg-indigo-500 text-white hover:bg-black">Get Started</button>
                        </div>
                    </div>
                </div>
            </header>
            <main className='px-4 py-12 md:p-10 lg:p-28'>
                <section className='grid md:grid-cols-3 gap-10'>
                    {
                        allMovies?.map(movie => <div key={movie?.show?.id} className="card bg-base-100 shadow-xl image-full h-80">
                            <figure><img className='w-full' src={movie?.show?.image?.original} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl">{movie?.show?.name}</h2>
                                <p className='flex gap-2'><FaStar className='text-yellow-500 mt-1' /> {movie?.show?.rating?.average}</p>
                                <p>Runtime: {movie?.show?.runtime ? movie?.show?.runtime + ' min' : "N/A"}</p>
                                <p>Type: {movie?.show?.type}</p>
                                <p>Status: {movie?.show?.status}</p>
                                <div className="card-actions mt-4">
                                    <Link to={`/details/${movie?.show?.id}`} >
                                        <button className="btn bg-indigo-500 text-white hover:bg-black">Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>)
                    }
                </section>
            </main>
        </>
    );
};

export default Home;