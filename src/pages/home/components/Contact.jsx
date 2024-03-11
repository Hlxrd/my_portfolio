import React from 'react';

export const Contact = () => {
    return (
        <>
            <div variant="h5" className="mb-6 p-2 flex flex-col justify-between items-start">
                <h1 className='text-2xl'><b>GET IN TOUCH</b></h1>
                <form action="">
                    <div>
                        <label htmlFor="">Your name :</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Your Email</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Your message</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </form>
            </div>
        </>
    );
};
