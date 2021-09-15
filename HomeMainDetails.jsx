import React, {useState} from 'react'

const HomeMainDetails = () => {  //Home Main Details and Input Fields
    const [saveInput, setInput] = useState({
        fname:"",
        lname:"",
        email:"",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const inputFields = (event) =>
    {
        const {value, name} = event.target;
        setInput((preValue) =>
        {
            return {
                ...preValue,
                [name] : value,
            };
        })
    }

    const onSubmits = (event) =>
    {
        setIsSubmitted("thank you for subscribing");
        setIsSubmitted(true);
    }

  
    return (
        <div className="HomeMainDetails">
            <div className="home3Main">
                <h1 className="home3Mainh2"><bold>Patreon</bold><br/><small>
                   The support from my audience not only makes the show possible, it begets the creation of new series like Basics with Babish.  I want to be part of the new wave of media creators, and your contributions are helping make that a reality.</small>
                </h1>
            </div>

            <div className="home4Main">
                {!isSubmitted? 

                <div className="isSubmitted">
                    <h4>
                        <bold>
                            Subscribe
                        </bold>
                        <br/>
                        <small>
                        Sign up with your email address to receive news and updates.
                        </small>
                    </h4>
                        <input className="home4MainInput" name="fname" onChange={inputFields} value={saveInput.fname} type="text" placeholder="First Name"/>
                        <input className="home4MainInput" name="lname" onChange={inputFields} value={saveInput.lname} type="text" placeholder="Last Name"/>
                        <input className="home4MainInput" name="email" onChange={inputFields} value={saveInput.email} type="text" placeholder="Email Address"/>
                        <button onClick={onSubmits}>Sign Up</button>

                    </div>
                    :
                    <div className="isSubmitted!">
                    <h4 className="home4Mainh4"><small>Thank you for subscribing :) </small></h4></div>
                    }
            </div>
        </div>
    )
}

export default HomeMainDetails;
