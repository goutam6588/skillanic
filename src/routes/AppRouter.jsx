// src/routes/AppRouter.jsx

import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../../componests/ScrollToTop";
import SuspenseLoader from "../loader/SuspenseLoader";
import ScrollProgressButton from "../../componests/ui/ScrollProgressButton";
import Testimonials from "../pages/Testimonials";
import Gallery from "../pages/Gallery";
import Careers from "../pages/Careers";
import Team from "../pages/Team";
import CareerDetails from "../pages/CareerDetails";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions";
import CookieConsent from "../components/CookieConsent";

// Global Modal Context — single source of truth for the enquiry modal
import { ModalProvider } from "../context/ModalContext";
import GlobalModal from "../components/GlobalModal";

// Offer Modal — separate modal for the GET OFFER button
import { OfferModalProvider } from "../context/OfferModalContext";
import OfferModal from "../components/OfferModal";

const Home        = lazy(() => import("../pages/Home"));
const About       = lazy(() => import("../pages/About"));
const CoursesPage = lazy(() => import("../pages/CoursesPage"));
const Contact     = lazy(() => import("../pages/Contact"));
const NotFound    = lazy(() => import("../pages/NotFound"));
const Placements  = lazy(() => import("../pages/Placements"));

export default function AppRouter() {
  return (

    <ModalProvider>
    <OfferModalProvider>
      <BrowserRouter>
        <ScrollToTop />

        <GlobalModal />
        <OfferModal />

        <Suspense fallback={<SuspenseLoader />}>
          <Routes>
            <Route path="/"           element={<Home />}        />
            <Route path="/about"      element={<About />}       />
            <Route path="/courses"    element={<CoursesPage />} />
            <Route path="/contact"    element={<Contact />}     />
            <Route path="/placements" element={<Placements />}  />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/gallery"    element={<Gallery />}     />
            <Route path="/careers"    element={<Careers />}     />
            <Route path="/team"       element={<Team />}        />
            <Route path="courses/:id" element={<CareerDetails />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <CookieConsent />

        <ScrollProgressButton />
      </BrowserRouter>
    </OfferModalProvider>
    </ModalProvider>
  );
}

