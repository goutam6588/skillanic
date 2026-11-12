/**
 * ModalContext — Single source of truth for the Global Enquiry Modal.
 *
 * Architecture decision: We use a separate Context object (not collocating
 * state and dispatch in one object) so that components which only need to
 * open/close the modal do NOT re-render when `isOpen` changes. If you need
 * that split later, replace with two contexts (ModalStateContext +
 * ModalDispatchContext). For this project one context is sufficient.
 */

import { createContext, useCallback, useContext, useMemo, useState } from "react";

// ─── Context ────────────────────────────────────────────────────────────────

const ModalContext = createContext(null);

// ─── Provider ───────────────────────────────────────────────────────────────

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  // Stable references — these never change between renders, so any component
  // that only destructures openModal / closeModal won't re-render when isOpen
  // changes because we memoize the full context value below.
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);
  const toggleModal = useCallback(() => setIsOpen((prev) => !prev), []);

  // useMemo ensures the context object reference is stable so long as none of
  // the four values change — preventing all consumers from re-rendering on
  // every parent render cycle.
  const value = useMemo(
    () => ({ isOpen, openModal, closeModal, toggleModal }),
    [isOpen, openModal, closeModal, toggleModal]
  );

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
}

// ─── Hook ───────────────────────────────────────────────────────────────────

/**
 * useModal — consume the Global Modal context.
 *
 * Usage (in any component, no prop drilling needed):
 *
 *   const { openModal } = useModal();
 *   <button onClick={openModal}>Enquire Now</button>
 *
 * Throws a clear error if used outside <ModalProvider> to surface
 * misconfiguration during development.
 */
export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error(
      "[useModal] must be used inside <ModalProvider>. " +
      "Make sure <ModalProvider> wraps your application root."
    );
  }
  return context;
}
