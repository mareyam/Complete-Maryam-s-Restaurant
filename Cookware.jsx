import React,{useState} from 'react'
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import MusicNoteSharpIcon from '@material-ui/icons/MusicNoteSharp';
import CloudSharpIcon from '@material-ui/icons/CloudSharp';
import HomeFooterDetails from './HomeFooterDetails';

const Cookware = () => {
    
    const [saveInput, setInput] = useState({
        email:"",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const inputFields = (event) =>
    {
       setInput(event.target.value);
    }

    const onSubmits = (event) =>
    {
        setIsSubmitted("thank you for subscribing");
        setIsSubmitted(true);
    }

    return (
        <div className="CookwareMainDiv">
            <h1 className="CookwareMainDivh11">Introducing <b>BABISH COOKWARE</b></h1>
            <img className="CookwareMainDivi1" src="https://itk-assets.nyc3.cdn.digitaloceanspaces.com/2020/04/caraway-cookware-1620x911.jpg"/>
            <h1 className="CookwareMainDivh12">The Basics, Made Better</h1>

            <div className="CookwareMainDivSubDiv1">

            <h4 className="CookwareMainDivSubDiv1h41">meet babish cookware</h4>
            <p className="CookwareMainDivSubDiv1p1">I’m launching my all-new line of cookware in three phases;<b>starting with everything you need to prep your meals.</b>
            <br/><br/> I wanted to create a high quality line of products with a price point palatable for everyday chefs. The basics, simply made better.</p>
           
            <button className="CookwareMainDivSubDiv1b1">VISIT THE AMAZON STORE</button>
            <hr/>
            
            <h4 className="CookwareMainDivSubDiv1h41">stay in the loop</h4>
            <p className="CookwareMainDivSubDiv1p1">More products are coming in the coming weeks and months. If you’d like to stay in the loop about the next Babish Cookware release, add your email to the mailing list!</p>
            
            {
                !isSubmitted? 
                <div className="CookwareisSubmitted">
                    <h4>
                        <bold>
                            Subscribe
                        </bold>
                        <br/>
                        <small>
                        Sign up with your email address to receive news and updates.
                        <hr/>
                        </small>
                    </h4>
                        <input className="CookwareMainDivSubDiv1input1" name="email" onChange={inputFields} value={saveInput.email} type="text" placeholder="Email Address"/>
                        <br/>
                        <button className="CookwareMainDivSubDiv1b2"onClick={onSubmits}>Sign Up</button>

                    </div>
                    :
                    <div className="CookwareisSubmitted!">
                    <h4 className="CookwareMainDivSubDiv1h42"><small>Thank you for subscribing :) </small></h4></div>
            }

                      <img className="CookwareMainDivSubDiv1Image1" src="https://images.squarespace-cdn.com/content/v1/590be7fd15d5dbc6bf3e22d0/1616718086279-IIM7PAQ9MWBP53Q6OGDC/210316_BabishCookware_9305.jpg?format=1500w"/>
                      <h1 className="CookwareMainDivSubDiv1h11">THE PRODUCTS: PREP</h1> 
                      <div className="CookwareMainDivSubDivSubDiv1">
                          <h3 className="CookwareMainDivSubDivSubDiv1h31">ROLLING PIN</h3>
                          <p className="CookwareMainDivSubDivSubDiv1p1">Here to roll the smoothest, evenest, and prettiest pastry crusts ever seen.</p>
                          <button className="CookwareMainDivSubDivSubDiv1b1">BUY NOW</button>
                      </div>
                      <img className="CookwareMainDivSubDiv1Image2" src="https://images.squarespace-cdn.com/content/v1/590be7fd15d5dbc6bf3e22d0/1623764009838-3AXTLT39Y2Q7OHTLLPAV/131307A.jpg"/>
                      <div className="CookwareMainDivSubDivSubDiv2">
                          <h3 className="CookwareMainDivSubDivSubDiv1h31">CUTTING BOARD</h3>
                          <p className="CookwareMainDivSubDivSubDiv1p1">Plenty of room to chop, slice, dice, mince and more.</p>
                          <button className="CookwareMainDivSubDivSubDiv1b1">BUY NOW</button>  
                      </div>
                      <img className="CookwareMainDivSubDiv1Image3" src="https://images.squarespace-cdn.com/content/v1/590be7fd15d5dbc6bf3e22d0/1623763167863-TKHSB3H1WQ6OUMO3EVH6/131290A.jpg"/>
                      <img className="CookwareMainDivSubDiv1Image4" src="https://images.squarespace-cdn.com/content/v1/590be7fd15d5dbc6bf3e22d0/1616709890866-JYR9KI6YI4QYKUEWYL8H/210316_BabishCookware_9211.jpg?format=1500w"/>
                      <div className="CookwareMainDivSubDivSubDiv3">
                          <h3 className="CookwareMainDivSubDivSubDiv1h31">CHEF'S KNIFE</h3>
                          <p className="CookwareMainDivSubDivSubDiv1p1">The classic. German stainless steel.</p>
                          <button className="CookwareMainDivSubDivSubDiv1b1">BUY NOW</button>  
                      </div>

                      <div className="CookwareMainDivSubDivSubDiv4">
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/q7zxaMWOfnY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                      <div className="CookwareMainDivSubDivSubDiv1Icons">
                        <YouTubeIcon/>&nbsp;&nbsp;&nbsp;
                        <FacebookIcon/>&nbsp;&nbsp;&nbsp;
                        <TwitterIcon/>&nbsp;&nbsp;&nbsp;
                        <MusicNoteSharpIcon/>&nbsp;&nbsp;&nbsp;
                        <CloudSharpIcon/>&nbsp;&nbsp;&nbsp;
                        <InstagramIcon/>
                      </div>                                         
                </div>
                <div className="CookwareMainDivSubDivSubDiv1Footer">
                   <HomeFooterDetails/>
                </div>
                
            </div>
    )
}

export default Cookware
