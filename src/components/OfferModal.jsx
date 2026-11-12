import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion as Motion } from "framer-motion";

import { useOfferModal } from "../context/OfferModalContext";
import { useSanityContent } from "../hooks/useSanityContent";
import { getSanityImageUrl } from "../sanity/image";
import EnquiryForm from "../pages/EnquiryForm/EnquiryForm";

// ============================================================
// FALLBACK IMAGE (same as GlobalModal's hardcoded image)
// ============================================================

const FALLBACK_IMAGE =
  "https://res.cloudinary.com/dd3qjg9qb/image/upload/q_auto:best,f_auto/v1786481384/ak_yiq5wg.png";

// ============================================================
// BACKDROP ANIMATION
// ============================================================

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.2, ease: "easeIn" } },
};

// ============================================================
// MODAL ANIMATION
// ============================================================

const panelVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 320,
      damping: 28,
      mass: 0.8,
      opacity: { duration: 0.2, ease: "easeOut" },
    },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    y: 10,
    transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
  },
};

// ============================================================
// REDUCED MOTION
// ============================================================

const reducedVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

// ============================================================
// OFFER MODAL
// ============================================================

export default function OfferModal() {
  const { isOpen, closeOfferModal } = useOfferModal();
  const closeButtonRef = useRef(null);

  // Fetch offer modal image from Sanity
  const { value: offerContent } = useSanityContent("homePage.offerModal", {});
  const modalImage = getSanityImageUrl(offerContent?.image, FALLBACK_IMAGE);

  // ==========================================================
  // REDUCED MOTION
  // ==========================================================

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const backdropAnimation = prefersReducedMotion ? reducedVariants : backdropVariants;
  const panelAnimation = prefersReducedMotion ? reducedVariants : panelVariants;

  // ==========================================================
  // BODY SCROLL LOCK
  // ==========================================================

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isOpen]);

  // ==========================================================
  // ESCAPE KEY
  // ==========================================================

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeOfferModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeOfferModal]);

  // ==========================================================
  // FOCUS CLOSE BUTTON
  // ==========================================================

  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 80);

    return () => clearTimeout(timer);
  }, [isOpen]);

  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <AnimatePresence>
      {isOpen && (
        <Motion.div
          key="offer-modal-backdrop"
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            p-2
            sm:p-4
            bg-black/40
            backdrop-blur-sm
          "
          variants={backdropAnimation}
          initial="hidden"
          animate="visible"
          exit="exit"
          role="dialog"
          aria-modal="true"
          aria-label="Get offer form"
          onClick={closeOfferModal}
          style={{ willChange: "opacity" }}
        >
          {/* ==================================================
              MAIN MODAL
          ================================================== */}

          <Motion.div
            key="offer-modal-panel"
            className="
              relative
              w-full
              max-w-[420px]
              md:max-w-4xl
              h-auto
              max-h-[calc(100vh-16px)]
              md:max-h-[90vh]
              flex
              flex-col
              rounded-xl
              md:rounded-[18px]
              bg-white
              shadow-2xl
              ring-1
              ring-black/10
              overflow-hidden
            "
            variants={panelAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(event) => event.stopPropagation()}
            style={{ willChange: "transform, opacity" }}
          >

            {/* =================================================
                MOBILE HEADER
            ================================================= */}

            <div
              className="
                relative
                flex
                md:hidden
                items-center
                justify-center
                h-[42px]
                flex-shrink-0
                bg-[#003366]
                px-4
              "
            >
              <h2
                className="
                  text-[12px]
                  font-bold
                  uppercase
                  tracking-wider
                  text-white
                "
              >
                GET OFFER
              </h2>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeOfferModal}
                className="
                  absolute
                  right-2.5
                  top-1/2
                  -translate-y-1/2
                  rounded-full
                  p-1
                  text-white
                  hover:bg-white/10
                  transition
                  cursor-pointer
                  focus:outline-none
                "
                aria-label="Close offer form"
              >
                <X size={16} />
              </button>
            </div>

            {/* =================================================
                CONTENT AREA
            ================================================= */}

            <div
              className="
                flex
                flex-col
                md:flex-row
                min-h-0
                overflow-hidden
              "
            >

              {/* =================================================
                  OFFER MODAL IMAGE (from Sanity CMS)
              ================================================= */}

              <div
                className="
                  relative
                  w-full
                  h-[205px]
                  sm:h-[220px]
                  md:h-auto
                  md:min-h-[460px]
                  md:w-[46%]
                  flex-shrink-0
                  bg-neutral-100
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                  p-0
                  m-0
                "
              >
                <img
                  src={modalImage}
                  alt="Get Offer"
                  className="
                    w-full
                    h-full
                    object-cover
                    object-center
                  "
                  loading="eager"
                  decoding="async"
                />
              </div>

              {/* =================================================
                  FORM SIDE
              ================================================= */}

              <div
                className="
                  w-full
                  md:w-[54%]
                  flex
                  flex-col
                  min-h-0
                  bg-white
                  overflow-hidden
                "
              >

                {/* =================================================
                    DESKTOP HEADER
                ================================================= */}

                <div
                  className="
                    hidden
                    md:flex
                    relative
                    h-[48px]
                    flex-shrink-0
                    items-center
                    justify-center
                    bg-[#063f7d]
                    px-5
                  "
                >
                  <h2
                    className="
                      text-base
                      font-bold
                      uppercase
                      tracking-wider
                      text-white
                    "
                  >
                    GET OFFER
                  </h2>

                  <button
                    type="button"
                    onClick={closeOfferModal}
                    className="
                      absolute
                      right-3
                      top-1/2
                      -translate-y-1/2
                      rounded-full
                      p-1.5
                      text-white
                      hover:bg-white/10
                      transition
                      cursor-pointer
                      focus:outline-none
                    "
                    aria-label="Close offer form"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* =================================================
                    FORM BODY
                ================================================= */}

                <div
                  className="
                    flex-1
                    min-h-0
                    px-4
                    py-3
                    sm:px-5
                    sm:py-4
                    md:px-5
                    md:py-5
                    overflow-hidden
                  "
                >
                  <EnquiryForm />
                </div>

              </div>

            </div>
          </Motion.div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
}
