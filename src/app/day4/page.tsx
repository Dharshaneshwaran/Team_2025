'use client';

import { motion } from 'framer-motion';
import NotesStack from '@/components/NotesStack';
import AddNoteButton from '@/components/AddNoteButton';
import Link from 'next/link';

const day4Notes = [
    {
        id: 'd4-1',
        title: '💻 Day 4 - Strategic Execution',
        content: `Framework for Victory:

Plan → Prioritise → Execute. 🚀

Know exactly where you are standing.
Verify your progress with the PDF. 📊`,
        date: 'Day 4 🔵',
        color: '#E1F5FE',
    },
    {
        id: 'd4-2',
        title: '🏁 Final Missions',
        content: `Missions:
1. 📸 Temple photo submission.
2. 🎥 Selfie video reflection.
3. 📵 The NO SCREEN Challenge (5pm-8am).

Execute with precision. ⚡`,
        date: 'Day 4 ⚡',
        color: '#BBDEFB',
    },
];

export default function Day4Page() {
    const handleAddNote = () => {
        console.log('Add new note');
    };

    return (
        <main
            style={{
                minHeight: '100vh',
                background: '#050a14', // Deep tech blue background
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Tech Grid Background */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'linear-gradient(rgba(144,202,249,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(144,202,249,0.05) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
                }}
            />

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
                    background: 'linear-gradient(180deg, rgba(5,10,20,0.9) 0%, transparent 100%)',
                    backdropFilter: 'blur(5px)',
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
                                background: 'linear-gradient(135deg, #42A5F5 0%, #1565C0 100%)',
                                borderRadius: '8px', // Squarer for tech feel
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '24px',
                                boxShadow: '0 0 15px rgba(33, 150, 243, 0.5)',
                            }}
                            animate={{
                                boxShadow: ['0 0 15px rgba(33, 150, 243, 0.5)', '0 0 25px rgba(33, 150, 243, 0.8)', '0 0 15px rgba(33, 150, 243, 0.5)'],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        >
                            🚀
                        </motion.div>
                        <span
                            style={{
                                fontSize: '1.25rem',
                                fontWeight: 700,
                                background: 'linear-gradient(90deg, #90CAF9, #42A5F5)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                letterSpacing: '1px',
                                fontFamily: 'monospace'
                            }}
                        >
                            Grateful Gorillas
                        </span>
                    </Link>
                </motion.div>

                <motion.div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <Link href="/day3" style={{ textDecoration: 'none' }}>
                        <motion.span
                            style={{
                                fontSize: '0.8rem',
                                color: '#888',
                                fontWeight: 500,
                                padding: '6px 14px',
                                borderRadius: '4px',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                            }}
                            whileHover={{
                                color: '#90CAF9',
                                borderColor: '#90CAF9',
                                background: 'rgba(144, 202, 249, 0.1)',
                            }}
                        >
                            ← Day 3
                        </motion.span>
                    </Link>
                    <motion.span
                        style={{
                            fontSize: '0.875rem',
                            color: '#90CAF9',
                            fontWeight: 600,
                            padding: '6px 14px',
                            borderRadius: '4px',
                            background: 'rgba(33, 150, 243, 0.1)',
                            border: '1px solid rgba(33, 150, 243, 0.3)',
                            boxShadow: '0 0 10px rgba(33, 150, 243, 0.2)',
                        }}
                    >
                        Day 4 🔵 • {day4Notes.length} notes
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
                    zIndex: 1
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Floating Tech Elements */}
                <motion.div
                    style={{
                        position: 'absolute',
                        top: '15%',
                        left: '10%',
                        fontSize: '40px',
                        opacity: 0.5
                    }}
                    animate={{
                        y: [0, -10, 0],
                        opacity: [0.3, 0.7, 0.3]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                >
                    📡
                </motion.div>
                <motion.div
                    style={{
                        position: 'absolute',
                        bottom: '20%',
                        right: '10%',
                        fontSize: '40px',
                        opacity: 0.5
                    }}
                    animate={{
                        y: [0, -15, 0],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1
                    }}
                >
                    💻
                </motion.div>

                {/* Big Number */}
                <motion.div
                    style={{
                        fontSize: '120px',
                        fontWeight: 900,
                        background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '-40px',
                        zIndex: -1
                    }}
                >
                    04
                </motion.div>

                <motion.h1
                    style={{
                        fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                        fontWeight: 800,
                        letterSpacing: '-2px',
                        marginBottom: '16px',
                        lineHeight: 1.1,
                        color: '#E3F2FD'
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                >
                    INDIGO
                    <motion.span
                        style={{
                            color: '#2196F3',
                            marginLeft: '15px'
                        }}
                        animate={{
                            textShadow: ['0 0 10px rgba(33,150,243,0)', '0 0 20px rgba(33,150,243,0.8)', '0 0 10px rgba(33,150,243,0)']
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity
                        }}
                    >
                        TECH
                    </motion.span>
                </motion.h1>

                <motion.p
                    style={{
                        fontSize: '1.2rem',
                        color: '#90A4AE',
                        maxWidth: '500px',
                        marginBottom: '48px',
                        lineHeight: 1.6,
                        fontFamily: 'monospace'
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                >
                    System Online. Protocol: Executing Final Missions.
                    <br />
                    <span style={{ color: '#42A5F5' }}>Initialize sequence 👇</span>
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
                            width: '2px',
                            height: '60px',
                            background: 'linear-gradient(180deg, #42A5F5 0%, transparent 100%)',
                        }}
                        animate={{ height: ['0px', '60px', '0px'], opacity: [0, 1, 0], translateY: [0, 20, 40] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'linear'
                        }}
                    />
                </motion.div>
            </motion.section>

            {/* Notes Stack Section */}
            <section style={{ paddingBottom: '200px', position: 'relative', zIndex: 2 }}>
                <NotesStack notes={day4Notes} />
            </section>

            {/* Add Note Button */}
            <AddNoteButton onClick={handleAddNote} />

            {/* Ambient Glow */}
            <div
                style={{
                    position: 'fixed',
                    bottom: '-20%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '60vw',
                    height: '40vh',
                    background: 'radial-gradient(circle, rgba(33,150,243,0.15) 0%, transparent 70%)',
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />
        </main>
    );
}
