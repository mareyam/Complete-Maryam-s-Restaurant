import React,{useState} from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeFooterDetails from "./HomeFooterDetails";
import FaqList from "./FaqList";
import MyFaq from "./MyFaq";
import HomeFooterImages from "./HomeFooterImages";


const Faq = () => {
    const [faq, setFaq] = useState(FaqList);
    
    return (
      /*   <div className="FaqMainDiv">
            <img className="FaqMainDivImage1"src="https://expertphotography.b-cdn.net/wp-content/uploads/2019/01/food-photography-blogs-dark.jpg"/>
            */
        <div className="FaqMainDiv">
          <div className="row">
      
            <img className="FaqMainDiv_img1" src="https://expertphotography.b-cdn.net/wp-content/uploads/2019/01/food-photography-blogs-dark.jpg"/>

            <div className="FaqSubDiv1">
              
         {/*   https://i.pinimg.com/originals/de/d6/8c/ded68c284ea81c0c4eb99299723f97b4.jpg  */}
         <div className="FaqSubDiv2">
         <div className="row ">
            <div className="col">
               <h1 className="FaqSubDiv2h11">Kitchen Essentials</h1>
        <ol>
        <li>
               <h6 className="FaqSubDiv2h61">CHEF'S KNIFE <span>
               a good chef's knife is like a good bourbon - aged, complex, and toasty brown.  Okay it's not like a good bourbon, but it is the single most important tool you can have in your kitchen.  A good chef's knife isn't necessarily the most expensive one - it's heavy, well-balanced, comfortable, forged, and most importantly, razor sharp.  Your annoying foodie friends will drone on about how 'a sharp knife is a safe knife'.  Well, it's true, you should listen to your friends, they care about your safety.  It will also increase your speed and efficiency in the kitchen, and teach you a very valuable lesson in hand placement discipline when you inevitably hack off a bit of finger.
               </span></h6>
        </li>
        <li>
               <h6 className="FaqSubDiv2h61">CUTTING BOARD <span>
               I know you got a great deal on the 3-pack of paperback-sized cutting boards at IKEA - hell, I did too - but these cutting boards are almost useless.  Try chopping a bunch of carrots on that adorable dollhouse prop and see what happens.  Your hands are crowded, the board's slipping all over the place, carrots are tumbling into the impossible-to-reach gap between your oven and the counter.  Your life is the black-and-white segment of an infomercial.  Get a huge (24x18"), heavy, thick-ass cutting board.  You'll be stunned how much more comfortable you are with a massive surface on which to chop vegetables, form meatballs, break down a chicken.  It's like flying first class, but not even at all like it.
               </span></h6>
        </li>
        <li>
               <h6 className="FaqSubDiv2h61">INSTANT-READ THERMOMETER <span>
               A fast, accurate thermometer is an unrelenting lifesaver for almost any dish.  Forget squeezing your fingers together to feel your steak's doneness - a thermometer will ensure that your meat, oil, bread, chocolate, and more are at the perfect temperature.  It's indispensable.
               </span></h6>
         </li>
         <li> 
               <h6 className="FaqSubDiv2h61">STAINLESS STEEL SKILLET: <span>
               A high-walled, 12" wide, well-made stainless skillet is an opportunity to create some really wonderful things.  Learning chefs shy away from stainless as it's widely known as the kind of pan food "sticks to".  Which is true - more than that, it's the goal.  You want your food to stick to this skillet, it's how you make crusts and build fond.  It takes some practice - these scenarios require high heat, lots of fat, and the correct recipe.  You DO want to use stainless steel when you're putting a dark, crunchy crust on the outside of a steak, while building a sticky brown layer of fond at the bottom of the skillet, hissing in anticipation to be softened and scraped up with some wine, some beef stock, some herbs.  You DO NOT want to cook, say, eggs.  For that, you should go with:
               </span></h6>
        </li>
        <li> 
               <h6 className="FaqSubDiv2h61">NON-STICK COOKWARE:<span>
               nonstick cookware isn't just a safety net, it's a legitimately better way of cooking some foodstuffs.  Making sunny side-up eggs in a stainless skillet is the equivalent of making homemade graham crackers - yeah, sure, you can do it...but why the hell would you?  There's a better option.  A nonstick skillet that goes in the oven is inexpensive, versatile, and time-saving.
               </span></h6>
        </li>  
        </ol>
            </div>
            <div className="col">
               <h6 className="FaqSubDiv2h6">FREQUENTLY ASKED QUESTIONS</h6>
       
         {
             faq.map((curElem) =>
              {
                const {id} = curElem;
                return <MyFaq key={id} {...curElem} />
              })
         }
            </div>


         </div>
      </div>
     
   

     </div>   
     
     <div className="FaqSubDiv2FooterDiv1">
          <div className="FaqFooter">
          <div className="FaqSubDiv2FooterDiv2">
      
      <div className="home5SubMain">
          {
            HomeFooterImages.map((curElem) =>
            {
                return (
                    <div className="home5SubMain1">
                          <img className="home5SubMain1Img" src={curElem.img} />
                    </div>
                    
                )
            })
          }
        </div>
       
        <div className="home5SubMain2">
            <p className="home5SubMain4In2p1"> 2020 Binge Entertainment, LLC. All rights reserved.</p>  
        </div>
        </div>



          </div>
    </div>  
     </div>
     </div>
                 
        
    )
}

export default Faq;

