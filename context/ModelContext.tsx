"use client";

import { PriorityType, StatusType } from "@/lib/schema";
// ModalContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context state

export interface ModelDataType {
    taskOperation: "create" | "update";
    _id: string;
    title: string;
    status: StatusType;
    priority: PriorityType;
    deadline: Date;
    description: string;
    favorite: boolean;
    user: string;
    createdAt: Date;
    updatedAt: Date;
    __v?: string;
}
interface ModalContextType {
    isModalOpen: boolean;
    showModal: (data?: ModelDataType) => void;
    hideModal: () => void;
    modalData: ModelDataType | null;
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
    const [modalData, setModalData] = useState<ModelDataType | null>(null);

    const showModal = (data?: ModelDataType) => {
        setModalData(data || null);
        setIsModalOpen(true);
    };

    const hideModal = () => {
        setModalData(null);
        setIsModalOpen(false);
    };

    return (
        <ModalContext.Provider
            value={{ isModalOpen, modalData, showModal, hideModal }}
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
