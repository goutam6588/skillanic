/**
 * OfferModalContext — Independent state for the Get Offer Modal.
 *
 * Mirrors the ModalContext pattern but keeps its own isOpen flag so
 * the normal enquiry modal and the offer modal can work independently.
 */

import { createContext, useCallback, useContext, useMemo, useState } from "react";

// ─── Context ────────────────────────────────────────────────────────────────

const OfferModalContext = createContext(null);

// ─── Provider ───────────────────────────────────────────────────────────────

export function OfferModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openOfferModal = useCallback(() => setIsOpen(true), []);
  const closeOfferModal = useCallback(() => setIsOpen(false), []);
  const toggleOfferModal = useCallback(() => setIsOpen((prev) => !prev), []);

  const value = useMemo(
    () => ({ isOpen, openOfferModal, closeOfferModal, toggleOfferModal }),
    [isOpen, openOfferModal, closeOfferModal, toggleOfferModal]
  );

  return (
    <OfferModalContext.Provider value={value}>
      {children}
    </OfferModalContext.Provider>
  );
}

// ─── Hook ───────────────────────────────────────────────────────────────────

/**
 * useOfferModal — consume the Get Offer Modal context.
 *
 * Usage:
 *   const { openOfferModal } = useOfferModal();
 *   <button onClick={openOfferModal}>Get Offer</button>
 */
export function useOfferModal() {
  const context = useContext(OfferModalContext);
  if (!context) {
    throw new Error(
      "[useOfferModal] must be used inside <OfferModalProvider>. " +
      "Make sure <OfferModalProvider> wraps your application root."
    );
  }
  return context;
}
