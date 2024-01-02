import React from 'react';
import Header from './Header';
import Footer from './Footer';


const Layout = ({children}) => {
    return (
        <div style={{background:"radial-gradient(farthest-side ellipse at 10% 0, #333867 20%, #17193B)"}}>
         <Header/> 
         {children}
         <Footer/>
         </div> 
    );
};

export default Layout;