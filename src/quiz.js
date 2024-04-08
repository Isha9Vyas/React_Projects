import React from "react";
 import image2 from './image2.jpg';
import clock from './clock.jpg';


const Quiz = () => {
    return (
        <div style={{ backgroundImage: 'linear-gradient(to right,#5A9A5D,#407E89,#407E89)', padding: '5px', }}>
            <div>
                <h1 style={{ color: 'white', margin: '19px' }}>verif.</h1>
                <b><h4 style={{color: 'white', marginLeft:"1378px" , "marginTop":"-40px"}}>App Design</h4></b>
            </div>
            

            <div style={{ display: 'flex'}}>

                 <div style={{ backgroundColor: "rgba(255, 255, 255, 0.60)", flex: '2', margin: '8px' }}>
                    <div> <h1 style={{padding:'15px', marginRight:'535px'}}>verif.</h1>
                    <img style={{"border-radius":"30%" , "width":"45px" , "height":"45px" ,"marginTop":"-160px" ,"padding":"128px","float":"right" }} src={image2} alt="image2"/> 
                    <p style={{"position":"relative","left":"840px","marginTop":"-40px"}}><b>Burhanul Islam</b></p>
                    <p style={{"position":"relative","left":"865px","marginBottom":"-45px"}}>126464356</p>
                    </div>  <br></br><br></br><br></br>
                    <div style={{ backgroundColor: "white", flex: '7', margin: '9px' }}>
                        
                        <img style={{"border-radius":"30%" , "width":"45px" , "height":"45px" ,"marginbottom":"-150px" ,"padding":"5px","float":"left" }} src={clock} alt="clock"/>
                        <p style={{"position":"relative","right":"-10px","marginTop":"25px"}}>Time Reamining</p>
                        <p style={{"position":"relative","right":"-10px","marginBottom":"255px"}}><b>14 : 44 : 00</b><br/>
                        <h4 style={{"marginTop":"25px"}}>Question 1 of 10</h4>
                        <p style={{"marginTop":"10px"}}>Which Of The Following is a Popular Programming Language For a Dewveloping Multimdeia Webpages. </p>
                        <div style={{"marginTop":"25px",height:"150px","width":"190px"}}>
                        <center><h4 style= {{"border-radius": "10px", "border":" 1px solid black", "padding": "18px", "Width": "10px", "height": "6px","marginTop":"-30"}}>A. COBOL</h4></center>
                        </div>                        
                        </p>
                        

                       
                        
                        





                       
                    
                    
                </div>
               
                </div>

                <div style={{ backgroundColor: "rgba(255, 255, 255, 0.60)", flex: '1', margin: '8px' }}>
                    <h1>verif.</h1>
                </div>

            </div>


        </div>
        
    

    );
}

export default Quiz;