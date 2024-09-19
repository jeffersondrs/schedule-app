import React from 'react';
import { Modal } from '@/components/';

interface RemoveModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const RemoveModal = ({ isOpen, onClose, onConfirm }: RemoveModalProps) => (
  <Modal isOpen={isOpen} isClose={onClose}>
    <div className="flex flex-col justify-center items-center gap-3">
      <p className="text-lg font-bold text-gray-200">
        Are you sure you want to remove this schedule?
      </p>
      <div className="flex flex-row justify-center items-center gap-3">
        <button
          className="text-sm font-bold text-gray-200"
          onClick={onClose}
          type="button"
          title="Cancel"
        >
          Cancel
        </button>
        <button
          className="text-sm font-bold text-gray-200 border border-purple-900 hover:bg-purple-800 transform
          transition-all duration-200 ease-in-out
           rounded-md p-2"
          onClick={onConfirm}
          type="button"
          title="Confirm"
        >
          Confirm
        </button>
      </div>
    </div>
  </Modal>
);

export default RemoveModal;
