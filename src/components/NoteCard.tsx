'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface NoteCardProps {
    title: string;
    content: string;
    date: string;
    rotation?: number;
    children?: ReactNode;
}

export default function NoteCard({
    title,
    content,
    date,
    rotation = 0
}: NoteCardProps) {
    return (
        <motion.div
            className="note-card paper-texture"
            style={{
                transform: `rotate(${rotation}deg)`,
            }}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1]
            }}
        >
            <h2 className="note-title">{title}</h2>
            <p className="note-content">{content}</p>
            <span className="note-date">{date}</span>
        </motion.div>
    );
}
