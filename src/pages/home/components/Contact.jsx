import React from 'react';

export const Contact = () => {
    return (
        <>
            <section className=" d-flex flex-column  align-items-lg-center  column-gap-4 mt-5 ">
                <div className=" text-center w-lg-50 d-lg-flex flex-lg-column align-items-center mt-lg-4 gap-5">
                    <img src="./public/img/section-img.png " alt="" width="7%" />
                    
                </div>
                <div className=" flex flex-column gap-5 p-3 w-[98vw]   h-[50vh] justify-center items-center">
                    <div className="w-[70%] h-[90%] bg-slate-800  flex justify-between items-center ">
                        
                        <div className="mb-3 mb-3 d-flex gap-3 rounded">
                            <div>
                                <label htmlFor="Name" className="form-label">
                                    Your name :
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="name@example.com"
                                />
                            </div>
                        </div>
                        
                        <div className="mb-3 ">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">
                                Leave a message :
                            </label>
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows={3}
                                defaultValue={""}
                                placeholder='Your message'
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
