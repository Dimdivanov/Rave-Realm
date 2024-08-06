import React from 'react';
import styles from './ModalRemove.module.css';

export default function ModalRemove({ onClose, onDeleteClick }) {
    return (
        <div className={styles.modalOverlay}>
            <div
                className={styles.modalBackdrop}
                aria-hidden="true"
                onClick={onClose}
            ></div>
            <div className={styles.modalContent}>
                <div className={styles.modalContainer}>
                    <div className={styles.modalHeader}>
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-800">
                            <svg
                                className="h-6 w-6 text-red-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                                />
                            </svg>
                        </div>
                        <h3 className={styles.modalTitle} id="modal-title">
                            Delete Confirmation
                        </h3>
                    </div>
                    <div className={styles.modalBody}>
                        <p className="text-sm text-white">
                            Are you sure you want to delete this item?
                        </p>
                    </div>
                    <div className={styles.modalFooter}>
                        <button
                            type="button"
                            onClick={onDeleteClick}
                            className={`${styles.modalButton} ${styles.deleteButton}`}
                        >
                            Delete
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className={`${styles.modalButton} ${styles.cancelButton}`}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
