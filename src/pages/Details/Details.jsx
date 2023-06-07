import { useEffect, useState } from "react";
import { useNavigation, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Swal from 'sweetalert2';
import Loader from "../../components/Loader";


const Details = () => {
    const { id } = useParams();
    const [singleData, setSingleData] = useState('');
    const { image, name, summary, rating, language, averageRuntime, ended, status } = singleData;
    const navigation = useNavigation();

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
            .then(res => res.json())
            .then(data => setSingleData(data))
    }, [id]);

    if (navigation.state === 'loading') {
        return <Loader></Loader>
    }

    const handleForm = event => {
        event.preventDefault();
        const form = event.target;
        const movieName = form.movieName.value;
        const movieLang = form.movieLang.value;
        const duration = form.duration.value;
        const status = form.status.value;
        const yourName = form.yourName.value;
        const yourEmail = form.yourEmail.value;
        const bookingData = {movieName, movieLang, duration, status, yourName, yourEmail};
        // console.log(bookingData);
        handleBookClick(bookingData);

    }

    const handleBookClick = (bookingData) => {
        const existingData = localStorage.getItem('bookingData');
        const parsedData = existingData ? JSON.parse(existingData) : [];
        const newData = [...parsedData, bookingData];

        localStorage.setItem('bookingData', JSON.stringify(newData));
        Swal.fire(
            'Successfully!',
            'Booking successfully',
            'success'
        )
    }

    return (
        <main className="px-4 py-12 md:p-28">
            <section className="grid md:grid-cols-4">
                <div className="md:flex gap-4 justify-start md:col-span-3 items-center">
                    <figure>
                        <img className="md:w-[300px] md:h-[180px] object-cover rounded-lg" src={image?.original} alt="" />
                    </figure>
                    <div>
                        <h1 className="text-xl font-bold">{name}</h1>
                        <p className="flex gap-2 items-center"><FaStar className="text-yellow-500" /> {rating?.average}</p>
                        <p>{summary}</p>
                    </div>
                </div>
                <div className="md:flex justify-end mt-6">
                    <div>
                        <p>Language: {language}</p>
                        <p>Duration: {averageRuntime} min</p>
                        <p>Ended: {ended ? ended : 'N/A'}</p>
                        <p>Status: {status}</p>
                    </div>
                </div>
            </section>

            <section>
                <form className='mt-10' onSubmit={handleForm}>
                    <div className="grid md:grid-cols-4 items-center gap-8">
                        <div>
                            <label className='block text-gray-400' htmlFor="movieName">Movie Name</label>
                            <input className='border-2 border-gray-300 rounded-md w-full p-2 mt-2 focus:border-2' type="text" name="movieName" id="" defaultValue={name} disabled/>
                        </div>

                        <div>
                            <label className='block text-gray-400' htmlFor="movieLang">Language</label>
                            <input className='border-2 border-gray-300 rounded-md w-full p-2 mt-2' type="text" name="movieLang" id="" defaultValue={language} disabled/>
                        </div>

                        <div>
                            <label className='block text-gray-400' htmlFor="duration">Duration</label>
                            <input className='border-2 border-gray-300 rounded-md w-full p-2 mt-2' type="text" name="duration" id="" defaultValue={averageRuntime} disabled/>
                        </div>

                        <div>
                            <label className='block text-gray-400' htmlFor="status">Status</label>
                            <input className='border-2 border-gray-300 rounded-md w-full p-2 mt-2' type="text" name="status" id="" defaultValue={status} disabled />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 items-center gap-8 mt-4">
                        <div>
                            <label className='block text-gray-400' htmlFor="yourName">Your Name</label>
                            <input className='border-2 border-gray-300 rounded-md w-full p-2 mt-2 focus:border-2' type="text" name="yourName" id="" required />
                        </div>
                        <div>
                            <label className='block text-gray-400' htmlFor="yourEmail">Your Email</label>
                            <input className='border-2 border-gray-300 rounded-md w-full p-2 mt-2 focus:border-2' type="email" name="yourEmail" id="" required />
                        </div>
                    </div>
                    <button onClick={handleBookClick} type='submit' className='bg-indigo-500 w-full p-2 mt-8 rounded-md text-lg text-white'>Book</button>
                </form>
            </section>
        </main>
    );
};

export default Details;