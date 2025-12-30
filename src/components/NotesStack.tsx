'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useMemo, memo } from 'react';

interface Note {
    id: string;
    title: string;
    content: string;
    date: string;
    color?: string;
}

interface NotesStackProps {
    notes: Note[];
}

// Beautiful pastel colors for notes
const noteColors = [
    '#FFF8E7', '#E8F4F8', '#F8E8F8', '#E8F8E8', '#FFF0E8',
    '#F0F8FF', '#FFFACD', '#F0FFF0', '#FFE4E1', '#E6E6FA',
];

// Memoized single note component
const PeelingNote = memo(function PeelingNote({
    note,
    index,
    totalNotes,
    noteColor,
    scrollStart,
}: {
    note: Note;
    index: number;
    totalNotes: number;
    noteColor: string;
    scrollStart: number;
}) {
    const { scrollY } = useScroll();

    const scrollEnd = scrollStart + 300;

    // Simple transform without spring for better performance
    const progress = useTransform(
        scrollY,
        [scrollStart, scrollEnd],
        [0, 1]
    );

    // Animation values tied to scroll
    const rotateX = useTransform(progress, [0, 1], [0, -50]);
    const rotateY = useTransform(progress, [0, 1], [0, 30]);
    const translateX = useTransform(progress, [0, 1], [0, 150]);
    const translateY = useTransform(progress, [0, 1], [0, -200]);
    const scale = useTransform(progress, [0, 1], [1, 0.75]);
    const opacity = useTransform(progress, [0, 0.7, 1], [1, 0.9, 0]);

    const zIndex = totalNotes - index;
    const rotations = [-2, 1.5, -1, 2, -0.5, 1.2, -1.5, 2.2];
    const baseRotation = rotations[index % rotations.length];

    return (
        <motion.div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                zIndex,
                transformOrigin: 'bottom right',
                rotateX,
                rotateY,
                x: translateX,
                y: translateY,
                scale,
                opacity,
                rotate: baseRotation,
            }}
        >
            <div
                style={{
                    background: `linear-gradient(145deg, ${noteColor} 0%, ${noteColor}ee 100%)`,
                    borderRadius: '8px',
                    padding: '28px',
                    minHeight: '280px',
                    position: 'relative',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), 0 8px 20px rgba(0, 0, 0, 0.25)',
                }}
            >
                {/* Corner fold */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        width: '40px',
                        height: '40px',
                        background: `linear-gradient(315deg, #0a0a0a 0%, #0a0a0a 50%, ${noteColor}99 50%, ${noteColor} 100%)`,
                        borderRadius: '0 0 8px 0',
                    }}
                />

                {/* Dynamic light sheen */}
                <motion.div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: `linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)`,
                        x: useTransform(progress, [0, 1], ['-100%', '100%']),
                        pointerEvents: 'none',
                        zIndex: 5,
                        borderRadius: '8px',
                    }}
                />

                <h2
                    style={{
                        fontSize: '1.3rem',
                        fontWeight: 600,
                        color: '#1a1a1a',
                        marginBottom: '14px',
                        lineHeight: 1.3,
                    }}
                >
                    {note.title}
                </h2>
                <p
                    style={{
                        fontSize: '0.9rem',
                        fontWeight: 400,
                        color: '#4a4a4a',
                        lineHeight: 1.7,
                        whiteSpace: 'pre-line',
                    }}
                >
                    {note.content}
                </p>
                <span
                    style={{
                        position: 'absolute',
                        bottom: '16px',
                        left: '28px',
                        fontSize: '0.7rem',
                        fontWeight: 500,
                        color: '#888',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                    }}
                >
                    {note.date}
                </span>
            </div>
        </motion.div>
    );
});

export default function NotesStack({ notes }: NotesStackProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const noteColorMap = useMemo(() => {
        return notes.map((note, index) => note.color || noteColors[index % noteColors.length]);
    }, [notes]);

    // Pre-calculate scroll positions
    const scrollPositions = useMemo(() => {
        return notes.map((_, index) => index * 300);
    }, [notes]);

    return (
        <div
            ref={containerRef}
            style={{
                minHeight: `${notes.length * 350}px`,
                position: 'relative',
            }}
        >
            <div
                style={{
                    position: 'sticky',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '0 20px',
                }}
            >
                <div
                    style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '480px',
                        height: '380px',
                    }}
                >
                    {notes.map((note, index) => (
                        <PeelingNote
                            key={note.id}
                            note={note}
                            index={index}
                            totalNotes={notes.length}
                            noteColor={noteColorMap[index]}
                            scrollStart={scrollPositions[index]}
                        />
                    ))}

                </div>
            </div>
        </div>
    );
}
