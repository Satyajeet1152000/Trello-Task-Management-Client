"use client";

// ModalContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context state
interface ModalContextType {
    isModalOpen: boolean;
    showModal: (value?: string) => void;
    hideModal: () => void;
    modalValue: string | null;
}

// Create Context
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Define the Provider's props
interface ModalProviderProps {
    children: ReactNode;
}

// Create Provider Component
export const ModalProvider = ({ children }: ModalProviderProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalValue, setModalValue] = useState<string | null>(null);

    const showModal = (value?: string) => {
        setModalValue(value ?? null);
        setIsModalOpen(true);
    };

    const hideModal = () => {
        setModalValue(null);
        setIsModalOpen(false);
    };

    return (
        <ModalContext.Provider
            value={{ isModalOpen, modalValue, showModal, hideModal }}
        >
            {children}
        </ModalContext.Provider>
    );
};

// Custom hook to use modal context
export const useModal = (): ModalContextType => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
};
