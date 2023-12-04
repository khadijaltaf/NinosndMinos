import React from "react";
import Nav from "../Navbar/Nav1.jsx";
import "./Faq.css";
import Footer from "../Footer/Footer.jsx";
import Second from "../Second/Second.jsx";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import { useState } from "react";

const Faq = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div>
      <Nav />
      <Second />
<br />
      <div className="container">
        <h2 className="heading">Account </h2>
        <Accordion open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)} className="headingacc">
          01: Is an account required in order to shop with you?
          </AccordionHeader>
          <AccordionBody className='acc'>
          You may place an order without creating an account. However, if you create an account, you won't need to enter your information each time you make a purchase from us.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)} className="headingacc">
          02: How will I reset my password if i forget it? 
          </AccordionHeader>
          <AccordionBody className='acc'>
          The "Forgot Password" option is available on the sign-in page. After entering your email address, select "Submit." To reset your password, you will receive an email.
          </AccordionBody>
        </Accordion>
        
        <h2 className="heading">Orders </h2>
        <Accordion open={open === 3}>
          <AccordionHeader onClick={() => handleOpen(3)} className="headingacc">
          01: What if a customer wants to cancel the order / replace the order? 

          </AccordionHeader>
          <AccordionBody className='acc'>
          We complete every order as quickly as we can. If you would want to modify your order or cancel it, please contact us right away at contactus@ninosandminos.shop While we can't guarantee that the order will be cancelled, we will try our best to consider all of your demands depending upon the situation. 

          </AccordionBody>
        </Accordion>

        <Accordion open={open === 4}>
          <AccordionHeader onClick={() => handleOpen(4)} className="headingacc">
          02: What if incorrect order / damaged product is delivered? 


          </AccordionHeader>
          <AccordionBody className='acc'>
          If an incorrect order / damaged item is shipped, a replacement will be sent. Before any claims are processed, you must email visual proof of the incorrect order / damaged item or items with detail order summary receipt to contactus@ninosandminos.shop within 7-14 days of purchase. Note : The cost of returning items will be borne by costumer in context with exchange. 


          </AccordionBody>
        </Accordion>



        <h2 className="heading">Payment</h2>
        <Accordion open={open === 5}>
          <AccordionHeader onClick={() => handleOpen(5)} className="headingacc">
          01: What are the indications of order confirmation provided by you?  


          </AccordionHeader>
          <AccordionBody className='acc'>
          The confirmation email will be sent to you as an indication for your order confirmation. 



          </AccordionBody>
        </Accordion>

        <Accordion open={open === 6}>
          <AccordionHeader onClick={() => handleOpen(6)} className="headingacc">
          02: What are the availability of payment methods? 
 


          </AccordionHeader>
          <AccordionBody className='acc'>
          Payment methods available are Cash on Delivery ( COD ) and Debit / Credit Card. 



          </AccordionBody>
        </Accordion>

        <Accordion open={open === 7}>
          <AccordionHeader onClick={() => handleOpen(7)} className="headingacc">
          03: What is the maximum amount for which the order can be placed?


          </AccordionHeader>
          <AccordionBody className='acc'>
          There is no minimum limit of amount or number of products while placing the order


          </AccordionBody>
        </Accordion>


        <h2 className="heading">Shipping</h2>
        <Accordion open={open === 8}>
          <AccordionHeader onClick={() => handleOpen(8)} className="headingacc">
          01: What is the duration of delivery time? 



          </AccordionHeader>
          <AccordionBody className='acc'>
          The duration of delivery time is 2-5 working days.                    <br />Note : During the time of sale the delivery time might be increase slightly. 



          </AccordionBody>
        </Accordion>


        <Accordion open={open === 9}>
          <AccordionHeader onClick={() => handleOpen(9)} className="headingacc">
          02:  What are the delivery charges?



          </AccordionHeader>
          <AccordionBody className='acc'>
        
          The delivery charges will be PKR 149/- on each order. <br />
Note : During sale the delivery charges will increase to            
PKR 199/- but, free delivery over PKR 5000/- sale order receipt. 


          </AccordionBody>
        </Accordion>


        <Accordion open={open === 10}>
          <AccordionHeader onClick={() => handleOpen(10)} className="headingacc">
          03: What are the delivery modes offered by you? 


          </AccordionHeader>
          <AccordionBody className='acc'>
          
          Delivery modes offered by us :    <br />                              
          a) Cash on Delivery ( COD )      <br />                           
          b) Debit / Credit Card

          </AccordionBody>
        </Accordion>

        <Accordion open={open === 11}>
          <AccordionHeader onClick={() => handleOpen(11)} className="headingacc">
          04: What are the delivery areas offered by you?


          </AccordionHeader>
          <AccordionBody className='acc'>
          The area covered all over Pakistan ( nationwide ) delivery system.


          </AccordionBody>
        </Accordion>

       
      </div>

      <br />

      <Footer />
    </div>
  );
};

export default Faq;
