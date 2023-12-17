import React from "react";
import Contact from "./Contact";
import './App.css';

function Home() {
    return (
        <>
            <div className="home row justify-content-around align-items-center">
                <blockquote className="blocktext col-5">
                    <span>
                        <h3>I am Misty Oliver... Expungement Specialist!</h3>
                    </span>
                    I would like to help anyone get their 2nd chance without breaking you to do so.  Most of us have done our time, building ourselves back up and might even still be struggling. I am your gal that has the experience, knowledge and willingness to help you.  I am not an attorney so attorney advice I can not give.  But I can give experience, opinion, and the individual help you need.
                </blockquote>
                <section className='homeImg col-4 border'>
                    <img className='img img-fluid' src="../src/assets/misty2.jpg" alt="legal" />
                </section>
            </div>
            <div className="home row justify-content-around align-items-center">
                <section className='homeImg col-4 border'>
                    <img className='img img-fluid' src="../src/assets/photo1.jpg" alt="legal" />
                </section>
                <blockquote className="blocktext col-5">
                    <span>
                        <h3>I am Misty Oliver... Expungement Specialist!</h3>
                    </span>
                    I would like to help anyone get their 2nd chance without breaking you to do so.  Most of us have done our time, building ourselves back up and might even still be struggling. I am your gal that has the experience, knowledge and willingness to help you.  I am not an attorney so attorney advice I can not give.  But I can give experience, opinion, and the individual help you need.
                </blockquote>

            </div>
            <Contact />
        </>

    )
}
export default Home