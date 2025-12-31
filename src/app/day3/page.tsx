'use client';

import { motion } from 'framer-motion';
import NotesStack from '@/components/NotesStack';
import AddNoteButton from '@/components/AddNoteButton';
import Link from 'next/link';

const day3Notes = [
    {
        id: 'd3-1',
        title: '� Day 3 - Growth & Environment',
        content: `Time Management breakdown:
86,400 seconds in a day. ⏳

Every second is a seed for growth.
Don't let laziness or fear overshadow your potential.`,
        date: 'Day 3 �',
        color: '#E8F5E9',
    },
    {
        id: 'd3-2',
        title: '🏡 Study Temple Ergonomics',
        content: `Transform your space:
1. 🌬️ Air flow matters.
2. 💡 Lighting is key.
3. 🧘 Posture (90° spinal cord).

Keep your environment clean and clutter-free.`,
        date: 'Day 3 �',
        color: '#C8E6C9',
    },
];

export default function Day3Page() {
    const handleAddNote = () => {
        console.log('Add new note');
    };

    return (
        <main
            style={{
                minHeight: '100vh',
                background: 'linear-gradient(180deg, #051a05 0%, #0a260a 100%)', // Deep forest green background
                position: 'relative',
            }}
        >
            {/* Header */}
            <motion.header
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    padding: '24px 40px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    zIndex: 100,
                    background: 'linear-gradient(180deg, #051a05 0%, transparent 100%)',
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
                <motion.div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                    }}
                    whileHover={{ scale: 1.02 }}
                >
                    <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <motion.div
                            style={{
                                width: '40px',
                                height: '40px',
                                background: 'linear-gradient(135deg, #66BB6A 0%, #43A047 100%)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '24px',
                                boxShadow: '0 4px 20px rgba(76, 175, 80, 0.4)',
                            }}
                            animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, -5, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        >
                            🍃
                        </motion.div>
                        <span
                            style={{
                                fontSize: '1.25rem',
                                fontWeight: 700,
                                background: 'linear-gradient(90deg, #66BB6A, #81C784)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                letterSpacing: '-0.5px',
                            }}
                        >
                            Grateful Gorillas
                        </span>
                    </Link>
                </motion.div>

                <motion.div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <Link href="/day2" style={{ textDecoration: 'none' }}>
                        <motion.span
                            style={{
                                fontSize: '0.8rem',
                                color: '#888',
                                fontWeight: 500,
                                padding: '6px 14px',
                                borderRadius: '20px',
                                background: 'rgba(255,255,255,0.05)',
                            }}
                            whileHover={{
                                color: '#81C784',
                                background: 'rgba(129, 199, 132, 0.1)',
                            }}
                        >
                            ← Day 2
                        </motion.span>
                    </Link>
                    <motion.span
                        style={{
                            fontSize: '0.875rem',
                            color: '#81C784',
                            fontWeight: 600,
                            padding: '6px 14px',
                            borderRadius: '20px',
                            background: 'rgba(129, 199, 132, 0.15)',
                            border: '1px solid rgba(129, 199, 132, 0.3)',
                        }}
                    >
                        Day 3 🌿 • {day3Notes.length} notes
                    </motion.span>
                </motion.div>
            </motion.header>

            {/* Intro Section */}
            <motion.section
                style={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: '0 20px',
                    position: 'relative',
                    overflow: 'hidden',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Floating leaves */}
                <motion.div
                    style={{
                        position: 'absolute',
                        top: '10%',
                        left: '8%',
                        fontSize: '50px',
                    }}
                    animate={{
                        y: [0, -20, 0],
                        rotate: [-10, 10, -10],
                        x: [0, 10, 0]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                >
                    �
                </motion.div>
                <motion.div
                    style={{
                        position: 'absolute',
                        top: '20%',
                        right: '10%',
                        fontSize: '40px',
                    }}
                    animate={{
                        y: [0, -25, 0],
                        rotate: [5, -15, 5],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.5,
                    }}
                >
                    �
                </motion.div>
                <motion.div
                    style={{
                        position: 'absolute',
                        bottom: '25%',
                        left: '12%',
                        fontSize: '45px',
                    }}
                    animate={{
                        y: [0, -15, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1,
                    }}
                >
                    �
                </motion.div>
                <motion.div
                    style={{
                        position: 'absolute',
                        bottom: '20%',
                        right: '15%',
                        fontSize: '35px',
                    }}
                    animate={{
                        y: [0, -18, 0],
                        rotate: [0, 20, 0],
                    }}
                    transition={{
                        duration: 4.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.8,
                    }}
                >
                    �
                </motion.div>

                {/* Big nature emoji */}
                <motion.div
                    style={{ fontSize: '100px', marginBottom: '20px' }}
                    animate={{
                        y: [0, -15, 0],
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                >
                    🌳
                </motion.div>

                <motion.h1
                    style={{
                        fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                        fontWeight: 800,
                        letterSpacing: '-3px',
                        marginBottom: '16px',
                        lineHeight: 1.1,
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                >
                    <motion.span
                        style={{
                            background: 'linear-gradient(90deg, #66BB6A, #81C784, #A5D6A7, #66BB6A)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundSize: '200% 100%',
                        }}
                        animate={{
                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    >
                        DAY 3
                    </motion.span>
                    <br />
                    <span style={{ color: '#fff', fontSize: '0.6em' }}>
                        Nature Flow:
                        <motion.span
                            style={{ color: '#81C784', marginLeft: '10px' }}
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            GROWTH
                        </motion.span>
                    </span>
                </motion.h1>

                <motion.p
                    style={{
                        fontSize: '1.2rem',
                        color: '#888',
                        maxWidth: '500px',
                        marginBottom: '48px',
                        lineHeight: 1.6,
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                >
                    Plant your seeds, nurture your mind, and watch yourself grow. �
                    <br />
                    <span style={{ color: '#81C784' }}>Scroll down to enter the jungle 👇</span>
                </motion.p>

                <motion.div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '8px',
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    <motion.div
                        style={{
                            width: '30px',
                            height: '50px',
                            border: '3px solid #81C784',
                            borderRadius: '15px',
                            display: 'flex',
                            justifyContent: 'center',
                            paddingTop: '10px',
                        }}
                    >
                        <motion.div
                            style={{
                                width: '6px',
                                height: '12px',
                                background: '#81C784',
                                borderRadius: '3px',
                            }}
                            animate={{ y: [0, 12, 0] }}
                            transition={{
                                duration: 1.2,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }}
                        />
                    </motion.div>
                </motion.div>
            </motion.section>

            {/* Notes Stack Section */}
            <section style={{ paddingBottom: '200px' }}>
                <NotesStack notes={day3Notes} />
            </section>

            {/* Add Note Button */}
            <AddNoteButton onClick={handleAddNote} />

            {/* Ambient gradient */}
            <div
                style={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '200px',
                    background: 'linear-gradient(0deg, #051a05 0%, transparent 100%)',
                    pointerEvents: 'none',
                    zIndex: 50,
                }}
            />
        </main>
    );
}
