import React, { useEffect } from 'react';
import Header from './header/Header';
import Pictures from './pictures/Pictures';
import Services from './services/Services';
import About from './about/About';
import Contact from './contact/Contact';

const MainPage = () => {
    useEffect(() => {
  window.scrollTo(0, 0)
}, [])
    return (
        <div>
            <Header />
            <Pictures />
            <About />
            <Services fromAccountOrNot = {false} />
            <Contact />
        </div>
    )
}

export default MainPage
