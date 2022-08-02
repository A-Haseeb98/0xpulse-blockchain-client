import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
const Home = React.lazy(() => import("../Pages/Home/Home"));
// const About = React.lazy(() => import("../Pages/About/About"));
const NotFound = React.lazy(() => import("../Pages/NotFound/NotFound"));

const Main = () => {
    return (
        <>
            <main>
                <ScrollToTop>
                    <Suspense>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/home" element={<Home />} />
                            {/* <Route path="/about" element={<About />} /> */}
                            <Route path="*" element={<NotFound/>} />
                        </Routes>
                    </Suspense>
                </ScrollToTop>
            </main>
        </>
    );
};

export default Main;