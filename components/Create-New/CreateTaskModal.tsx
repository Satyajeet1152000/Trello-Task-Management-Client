import { useModal } from "@/context/ModelContext";
import CreateNewTaskForm from "./CreateNewTaskForm";

const CreateTaskModal = () => {
    const { isModalOpen, hideModal, modalValue } = useModal();

    if (!isModalOpen) return null;
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-end">
            <div className="relative h-full w-[600px]">
                <CreateNewTaskForm
                    hideModal={hideModal}
                    listStatus={modalValue}
                />
            </div>
        </div>
    );
};

export default CreateTaskModal;
