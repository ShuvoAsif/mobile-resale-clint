import React, { useEffect, useState } from 'react';
import PrivateRoute from '../../../Routes/PrivateRoute';
import AddCard from './AddCard';
import BookingModal from './BookingModal';

const Addvertisement = () => {
    const [addmobiles, setaddmobiles] = useState([]);
    const [product, setProduct] = useState(null);


    useEffect(() => {
        fetch('https://mobile-resale-server-seven.vercel.app/advertisemobiles')
            .then(res => res.json())
            .then(data => setaddmobiles(data));
    }, [])



    return (
        <section>
            <div className='bg-zinc-100 pb-3'>
                {
                    addmobiles ?
                        <div>
                            <h1 className="text-4xl py-5 text-center font-bold">Advertised Items</h1>
                            <h1 className="text-3xl py-5 text-center font-bold">Get discount On this products</h1>
                        </div>
                        :
                        <></>
                }
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                    {
                        addmobiles.map(addmobile => <AddCard
                            key={addmobile._id}
                            addmobile={addmobile}
                            setProduct={setProduct}
                        ></AddCard>)
                    }
                </div>
                {
                    product &&
                    <PrivateRoute><BookingModal
                        setProduct={setProduct}
                        product={product}
                    ></BookingModal></PrivateRoute>
                }
            </div >
        </section>
    );
};

export default Addvertisement;