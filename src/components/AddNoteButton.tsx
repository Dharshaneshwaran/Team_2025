'use client';

import { motion } from 'framer-motion';

interface AddNoteButtonProps {
    onClick?: () => void;
}

export default function AddNoteButton({ onClick }: AddNoteButtonProps) {
    return (
        <motion.button
            className="add-button"
            onClick={onClick}
            whileHover={{
                scale: 1.1,
                boxShadow: '0 24px 64px rgba(0, 0, 0, 0.6)',
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: 0.5,
                ease: [0.4, 0, 0.2, 1]
            }}
        >
            <motion.svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{ rotate: 0 }}
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
            >
                <path
                    d="M12 5V19M5 12H19"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </motion.svg>
        </motion.button>
    );
}
