import { useModal } from "@/context/ModelContext";
import CreateNewTaskForm from "./CreateNewTaskForm";

const CreateTaskModal = () => {
    const { isModalOpen, hideModal, modalData } = useModal();

    if (!isModalOpen) return null;
    return (
        <div
            className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-end"
            onClick={hideModal}
        >
            <div
                className="relative h-full w-[600px]"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <CreateNewTaskForm
                    hideModal={hideModal}
                    modalData={modalData}
                />
            </div>
        </div>
    );
};

export default CreateTaskModal;
