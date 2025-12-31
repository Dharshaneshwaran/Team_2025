'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useMemo, memo, useState, useEffect } from 'react';

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

    const scrollEnd = scrollStart + Math.max(300, 300); // We can make this dynamic if needed
    const progress = useTransform(scrollY, [scrollStart, scrollEnd], [0, 1]);

    // Animation values tied to scroll - Adjusted for mobile legibility
    const rotateX = useTransform(scrollY, [scrollStart, scrollEnd], [0, -45]);
    const rotateY = useTransform(scrollY, [scrollStart, scrollEnd], [0, 25]);
    const translateX = useTransform(scrollY, [scrollStart, scrollEnd], [0, 60]); // Reduced for mobile
    const translateY = useTransform(scrollY, [scrollStart, scrollEnd], [0, -100]); // Reduced for mobile
    const scale = useTransform(scrollY, [scrollStart, scrollEnd], [1, 0.85]);
    const opacity = useTransform(scrollY, [scrollStart, scrollEnd - 50, scrollEnd], [1, 1, 0]);

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
                className="note-card"
                style={{
                    background: `linear-gradient(145deg, ${noteColor} 0%, ${noteColor}ee 100%)`,
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
                        width: 'clamp(30px, 8vw, 40px)',
                        height: 'clamp(30px, 8vw, 40px)',
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

                <h2 className="note-title">{note.title}</h2>
                <p className="note-content">{note.content}</p>
                <span
                    style={{
                        position: 'absolute',
                        bottom: 'clamp(12px, 3vw, 16px)',
                        left: 'clamp(20px, 5vw, 28px)',
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
    const [viewportHeight, setViewportHeight] = useState(800);

    useEffect(() => {
        setViewportHeight(window.innerHeight);
        const handleResize = () => setViewportHeight(window.innerHeight);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const noteColorMap = useMemo(() => {
        return notes.map((note, index) => note.color || noteColors[index % noteColors.length]);
    }, [notes]);

    // Pre-calculate scroll positions based on viewport height
    const scrollUnit = Math.max(viewportHeight * 0.4, 250);
    const scrollPositions = useMemo(() => {
        return notes.map((_, index) => index * scrollUnit);
    }, [notes, scrollUnit]);

    return (
        <div
            ref={containerRef}
            style={{
                minHeight: `${notes.length * scrollUnit + 500}px`,
                position: 'relative',
                padding: '0 var(--section-padding)',
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
                }}
            >
                <div
                    style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '480px',
                        // Maintain aspect ratio while being responsive
                        aspectRatio: '1 / 1.1',
                        maxHeight: '75vh',
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
