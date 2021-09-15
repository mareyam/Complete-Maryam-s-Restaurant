import React,{useState} from 'react'

const MyFaq = ({Question, Answer}) => {
    const[show, setShow] = useState(false);

    return (
        <>
        <div className="MyFaqMain">
            <p className="MyFaqMainp1" style={{marginBottom: "-29px"}} onClick={() => setShow(!show)}>+</p>
            <h1 className="FaqSubDivSubDiv1h1">{Question}</h1>
        </div>
            {show && <p className="FaqSubDivSubDiv1p1">{Answer}</p>}
        </>
    )
}

export default MyFaq;
