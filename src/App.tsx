import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import CookieBanner from './components/CookieBanner';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Leisure = lazy(() => import('./pages/Leisure'));
const Wildlife = lazy(() => import('./pages/Wildlife'));
const Hunting = lazy(() => import('./pages/Hunting'));
const AccommodationPage = lazy(() => import('./pages/Accommodation'));
const PriceList = lazy(() => import('./pages/PriceList'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const HidesGallery = lazy(() => import('./pages/HidesGallery'));
const Stadsjagter = lazy(() => import('./pages/Stadsjagter'));
const Abattoir = lazy(() => import('./pages/Abattoir'));
const Aalwynpark = lazy(() => import('./pages/Aalwynpark'));
const Lapa = lazy(() => import('./pages/Lapa'));
const Bosberaad = lazy(() => import('./pages/Bosberaad'));

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function App() {
    return (
        <Router>
            <ScrollToTop />
            <CookieBanner />
            <Suspense fallback={<div className="min-h-screen bg-rugania-cream" />}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="leisure" element={<Leisure />} />
                        <Route path="wildlife" element={<Wildlife />} />
                        <Route path="hunting" element={<Hunting />} />
                        <Route path="accommodation" element={<AccommodationPage />} />
                        <Route path="pricing" element={<PriceList />} />
                        <Route path="gallery" element={<GalleryPage />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="privacy" element={<Privacy />} />
                        <Route path="terms" element={<Terms />} />
                        <Route path="hides-gallery" element={<HidesGallery />} />
                        <Route path="stadsjagter" element={<Stadsjagter />} />
                        <Route path="abattoir" element={<Abattoir />} />
                        <Route path="aalwynpark" element={<Aalwynpark />} />
                        <Route path="lapa" element={<Lapa />} />
                        <Route path="bosberaad" element={<Bosberaad />} />
                    </Route>
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
