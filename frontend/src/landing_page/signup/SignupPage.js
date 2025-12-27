import React, { useRef } from 'react';
import Hero from './Hero.js';
import Benefits from './Benefits.js';
import FAQs from './FAQs.js';
import OpenAccount from '../OpenAccount.js'
import Card from './Card.js';
import Hed from './Hed.js'
import Mid from './Mid.js'

function Signup() {
    const signupRef = useRef(null);

    const scrollToSignup = () => {
        if (signupRef.current) {
            signupRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            
             <Hero/>
             <Mid/>
             <Hed/>
             <Benefits/>
              <Card/>
            <FAQs /> 
            <OpenAccount />
        </>
    );
}

export default Signup;