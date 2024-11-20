import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';

// Lazy load components
const Home = lazy(() => import('./Pages/Home/Home'));
const UnderDevelopmentPage = lazy(() => import('./Pages/NotFound/NotFound'));
const Donate = lazy(() => import('./Pages/Donate/Donate'))

// App.js
const spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-2xl font-semibold">Loading...</h1>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={spinner}>
            <Routes>
              <Route path="/" element={<Home />} />

              {/* About Routes */}
              <Route path="/about" element={<UnderDevelopmentPage />} />
              <Route path="/about/ourStory" element={<UnderDevelopmentPage />} />
              <Route path="/about/team" element={<UnderDevelopmentPage />} />
              <Route path="/about/careers" element={<UnderDevelopmentPage />} />

              {/* Causes Routes */}
              <Route path="/causes" element={<UnderDevelopmentPage />} />
              <Route path="/causes/education" element={<UnderDevelopmentPage />} />
              <Route path="/causes/healthcare" element={<UnderDevelopmentPage />} />
              <Route path="/causes/environment" element={<UnderDevelopmentPage />} />

              {/* Get Involved Routes */}
              <Route path="/getInvolved" element={<UnderDevelopmentPage />} />
              <Route path="/getInvolved/donate" element={<UnderDevelopmentPage />} />
              <Route path="/getInvolved/volunteer" element={<UnderDevelopmentPage />} />
              <Route path="/getInvolved/fundraise" element={<UnderDevelopmentPage />} />

              {/* Contact Route */}
              <Route path="/contact" element={<UnderDevelopmentPage />} />

              {/* Legal Routes */}
              <Route path="/privacyPolicy" element={<UnderDevelopmentPage />} />
              <Route path="/termsOfService" element={<UnderDevelopmentPage />} />

              {/* Donate Route */}
              <Route path='/donate' element={<Donate/>}/>
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;