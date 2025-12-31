'use client';

import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';
import NotesStack from '@/components/NotesStack';
import AddNoteButton from '@/components/AddNoteButton';

// Day 1 Notes - Original Monochrome
const day1Notes = [
    {
        id: '1',
        title: 'While Studying',
        content: `D. Which are my weak chapters?
        
Identify your weak areas first.
Focus on understanding, not just memorizing.

Self-awareness is the first step to improvement.`,
        date: 'Day 1',
        color: '#f8f8f8',
    },
    {
        id: '2',
        title: 'While Exam Paper/Receiving',
        content: `Find out what went wrong:

1) What concept is mistake
2) Memory error
3) Formula error
4) Method error
5) Presentation error
6) Calculation error
7) Time management`,
        date: 'Day 1',
        color: '#f0f0f0',
    },
    {
        id: '3',
        title: 'Skill of the 21st Century',
        content: `Articulating Skill

The ability to express/explain your thoughts, ideas, opinions, feelings in an easily understandable way to the listener.

→ Helps us to understand & explain the concept to us and others.`,
        date: 'Day 1',
        color: '#f5f5f5',
    },
    {
        id: '4',
        title: 'Tips to Improve Articulating Skill',
        content: `1) List all the points you would like to share
2) Form a structure
3) Connect to your heart and emotions
4) Relate to your own real life experiences and day to day activities
5) Bring your inner child out and keep your inner child alive
6) Abstract thinking → Relating known concept with invisible, Unknown and extract and derive new concept`,
        date: 'Day 1',
        color: '#fafafa',
    },
    {
        id: '5',
        title: 'Smart Learning Study Skills Workshop',
        content: `26/12/25

Right Consciousness
        ↓
Right Choices
        ↓
Right Consequences

Formula for Success:
Success = Failure x Self Reflection`,
        date: 'Day 1',
        color: '#f8f8f8',
    },
    {
        id: '6',
        title: 'Test Paper Analysis',
        content: `In the corrected paper, do self reflection and find out:

1) What chapters you did well?
2) What chapters you did not do well?
3) What subjects you do well? [Vol 1 or Vol 2]
4) What careless mistakes I did?
5) What are my repeated mistakes?
6) What are my preventive measures?`,
        date: 'Day 1',
        color: '#f0f0f0',
    },
    {
        id: '7',
        title: 'Wisdom Quote',
        content: `"If you sweat during peace time,
 you will not bleed during war time."

Prepare hard now.
The effort you put in today will protect you tomorrow.`,
        date: 'Day 1',
        color: '#f5f5f5',
    },
    {
        id: '8',
        title: 'WAR CRY',
        content: `D. Lively
2) Team Co-ordination
3) Creative
4) Loudest
5) Entertaining`,
        date: 'Day 1',
        color: '#fafafa',
    },
    {
        id: '9',
        title: 'Learning from "Let us Know" & "War Cry" Game',
        content: `1) To develop Self awareness
2) To develop social skills
3) To ask doubts from teachers
4) To clarify doubts with friends
5) Abstract thinking
6) To develop Articulating skill`,
        date: 'Day 1',
        color: '#f8f8f8',
    },
    {
        id: '10',
        title: 'My Favorites',
        content: `1) Prettiest: Preety
2) Food: Chicken Fried rice with Sauce
3) Movie: Sivakarthikeyan with Sai Pallavi
4) Recent Film: Amaran
5) Subject: Biology`,
        date: 'Day 1',
        color: '#f0f0f0',
    },
    {
        id: '11',
        title: 'Team Roles',
        content: `1) Team Leader → Unity & Win, Giving best & Represent
   (Nithish)

2) Deputy Leader → Supporting leader
   (Dhanyaa)

3) Team Treasurer → Handling Money
   (Lathika)

4) Team Motivator → Encouraging
   (Vikas)`,
        date: 'Day 1',
        color: '#f5f5f5',
    },
    {
        id: '12',
        title: 'Day-1 Challenges',
        content: `1) Do "Know myself" worksheet [pg 6-11]

2) Pg no-41 & 42
   Post pg no-42 in group before tonight

3) Any one lesson using Articulating skill & abstracting skill, in your own subject`,
        date: 'Day 1',
        color: '#fafafa',
    },
];

// Day 2 Notes - Sunset Warmth
const day2Notes = [
    {
        id: 'd2-1',
        title: 'Day 2 - The Warmth of Learning',
        content: `Welcome to Phase 2.

Building on established foundations.
The sunset theme represents reflection and readiness.

Focus on your internal drive.`,
        date: 'Day 2',
        color: '#FFD6A5',
    },
    {
        id: 'd2-2',
        title: '4 Stages of Life (Revisited)',
        content: `Reflecting on the natural progression:

1) Brahmacharya - Student
2) Grahastha - Social contribution
3) Vanaprastha - Retreat and focus
4) Sanyasa - Unity with the goal`,
        date: 'Day 2',
        color: '#FFAB76',
    },
    {
        id: 'd2-3',
        title: 'The Mirror of Meta Cognition',
        content: `Look within to understand without.

High Meta Cognition = Conscious choice.
Low Meta Cognition = Reactive impulse.

Be the waterbottle, not the cola bottle.`,
        date: 'Day 2',
        color: '#FFD8B1',
    },
];

// Day 3 Notes - Nature Flow
const day3Notes = [
    {
        id: 'd3-1',
        title: 'Day 3 - Growth & Environment',
        content: `Time Management breakdown:
86,400 seconds in a day.

Every second is a seed for growth.
Don't let laziness or fear overshadow your potential.`,
        date: 'Day 3',
        color: '#E8F5E9',
    },
    {
        id: 'd3-2',
        title: 'Study Temple Ergonomics',
        content: `Transform your space:
1. Air flow matters.
2. Lighting is key.
3. Posture (90° spinal cord).

Keep your environment clean and clutter-free.`,
        date: 'Day 3',
        color: '#C8E6C9',
    },
];

// Day 4 Notes - Indigo Tech
const day4Notes = [
    {
        id: 'd4-1',
        title: 'Day 4 - Strategic Execution',
        content: `Framework for Victory:

Plan → Prioritise → Execute.

Know exactly where you are standing.
Verify your progress with the PDF.`,
        date: 'Day 4',
        color: '#E1F5FE',
    },
    {
        id: 'd4-2',
        title: 'Final Missions',
        content: `Missions:
1. Temple photo submission.
2. Selfie video reflection.
3. The NO SCREEN Challenge (5pm-8am).

Execute with precision.`,
        date: 'Day 4',
        color: '#BBDEFB',
    },
];

const teamMembers = [
    'Kiruthiga',
    'Dhanya',
    'Lathika',
    'Kshethrada',
    'Preethi',
    'Maxin',
    'Nitish',
    'Vikas',
    'Sasidharan'
];

const allNotes = [...day1Notes, ...day2Notes, ...day3Notes, ...day4Notes];

export default function Home() {
    const { scrollY, scrollYProgress } = useScroll();
    const [isHovering, setIsHovering] = useState(false);

    // Mouse positions for custom cursor
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Smooth cursor movement
    const smoothMouseX = useSpring(mouseX, { stiffness: 250, damping: 20 });
    const smoothMouseY = useSpring(mouseY, { stiffness: 250, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    // Calculate note positions based on viewport to stay responsive
    const [viewportHeight, setViewportHeight] = useState(800);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        setViewportHeight(window.innerHeight);
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);

        const handleResize = () => setViewportHeight(window.innerHeight);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scrollUnit = Math.max(viewportHeight * 0.4, 250); // Dynamic step
    const day1End = day1Notes.length * scrollUnit;
    const day2Start = day1End + scrollUnit * 1.5;
    const day2End = day2Start + day2Notes.length * scrollUnit;
    const day3Start = day2End + scrollUnit * 1.5;
    const day3End = day3Start + day3Notes.length * scrollUnit;
    const day4Start = day3End + scrollUnit * 1.5;
    const day4End = day4Start + day4Notes.length * scrollUnit;
    const finaleStart = day4End + scrollUnit * 1.5;

    // Day-specific Opacities
    const day1Opacity = useTransform(scrollY, [0, day1End, day2Start], [1, 1, 0]);
    const day2Opacity = useTransform(scrollY, [day1End, day2Start, day2End, day3Start], [0, 1, 1, 0]);
    const day3Opacity = useTransform(scrollY, [day2End, day3Start, day3End, day4Start], [0, 1, 1, 0]);
    const day4Opacity = useTransform(scrollY, [day3End, day4Start, day4End, finaleStart], [0, 1, 1, 0]);

    // Finale Opacity
    const finaleOpacity = useTransform(scrollY, [day4End, finaleStart, finaleStart + 200], [0, 0, 1]);

    // Transition overlays (dip to black)
    const transitionOverlay1To2 = useTransform(scrollY, [day1End, day1End + 250, day2Start - 250, day2Start], [0, 1, 1, 0]);
    const transitionOverlay2To3 = useTransform(scrollY, [day2End, day2End + 250, day3Start - 250, day3Start], [0, 1, 1, 0]);
    const transitionOverlay3To4 = useTransform(scrollY, [day3End, day3End + 250, day4Start - 250, day4Start], [0, 1, 1, 0]);
    const transitionOverlayFinale = useTransform(scrollY, [day4End, day4End + 250, finaleStart - 250, finaleStart], [0, 1, 1, 0]);

    // Side Progress Bars
    const day2ProgressHeight = useTransform(scrollY, [day2Start, day2End], ["0%", "100%"]);
    const day3ProgressHeight = useTransform(scrollY, [day3Start, day3End], ["0%", "100%"]);
    const day4ProgressHeight = useTransform(scrollY, [day4Start, day4End], ["0%", "100%"]);

    // Top Progress Bar Color
    const progressBarColor = useTransform(
        scrollY,
        [0, day2Start, day3Start, day4Start, finaleStart],
        ['#f8f8f8', '#FFAB76', '#81C784', '#90CAF9', '#ffffff']
    );

    return (
        <main style={{ minHeight: `${finaleStart + (teamMembers.length * 400) + 1500}px`, background: '#0a0a0a', position: 'relative' }}>

            {/* Final Touch: Film Grain Overlay */}
            <div className="film-grain" />

            {/* Final Touch: Custom Cursor Follower - Hide on touch */}
            {!isTouchDevice && (
                <motion.div
                    className={`cursor-follower ${isHovering ? 'active' : ''}`}
                    style={{
                        left: smoothMouseX,
                        top: smoothMouseY,
                        translateX: '-50%',
                        translateY: '-50%',
                    }}
                />
            )}

            {/* Final Touch: Top Progress Bar */}
            <motion.div
                className="scroll-progress-bar"
                style={{
                    scaleX: scrollYProgress,
                    backgroundColor: progressBarColor
                }}
            />

            {/* Day 1 UI: Original Monochrome Background */}
            <motion.div style={{ position: 'fixed', inset: 0, opacity: day1Opacity, pointerEvents: 'none', zIndex: 0 }}>
                {/* Subtle vertical lines */}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={`d1-line-${i}`}
                        style={{
                            position: 'absolute',
                            width: '1px',
                            height: '200px',
                            background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.05), transparent)',
                            left: `${15 + i * 18}%`,
                            top: '0%',
                        }}
                        animate={{ y: ['0vh', '100vh'] }}
                        transition={{ duration: 15 + i * 2, repeat: Infinity, ease: 'linear', delay: i }}
                    />
                ))}
            </motion.div>

            {/* Day 2 UI: Sunset Warmth */}
            <motion.div style={{ position: 'fixed', inset: 0, opacity: day2Opacity, pointerEvents: 'none', zIndex: 0 }}>
                <div style={{ position: 'absolute', bottom: '-10%', left: '50%', transform: 'translateX(-50%)', width: '80vw', height: '60vh', background: 'radial-gradient(circle, rgba(255,171,118,0.1) 0%, transparent 70%)', borderRadius: '50%' }} />
                {/* Floating side bar - Right */}
                <motion.div style={{ position: 'absolute', right: 'clamp(10px, 3vw, 30px)', top: '50%', y: '-50%', width: '4px', height: '150px', background: 'rgba(255,171,118,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                    <motion.div style={{ width: '100%', height: day2ProgressHeight, background: '#FFAB76' }} />
                </motion.div>
            </motion.div>

            {/* Day 3 UI: Nature Flow */}
            <motion.div style={{ position: 'fixed', inset: 0, opacity: day3Opacity, pointerEvents: 'none', zIndex: 0 }}>
                <div style={{ position: 'absolute', top: '20%', left: '10%', width: '30vw', height: '40vh', background: 'radial-gradient(circle, rgba(129,199,132,0.08) 0%, transparent 70%)' }} />
                {/* Floating side bar - Left */}
                <motion.div style={{ position: 'absolute', left: 'clamp(10px, 3vw, 30px)', top: '50%', y: '-50%', width: '4px', height: '150px', background: 'rgba(129,199,132,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                    <motion.div style={{ width: '100%', height: day3ProgressHeight, background: '#81C784' }} />
                </motion.div>
            </motion.div>

            {/* Day 4 UI: Indigo Tech */}
            <motion.div style={{ position: 'fixed', inset: 0, opacity: day4Opacity, pointerEvents: 'none', zIndex: 0 }}>
                {/* Grid watermark */}
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(144,202,249,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(144,202,249,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                <motion.div style={{ position: 'absolute', right: '10%', top: '20%', fontSize: 'min(12vw, 150px)', fontWeight: 900, color: 'rgba(144,202,249,0.05)', letterSpacing: '-2px' }}>04</motion.div>
            </motion.div>

            {/* Finale UI: Cinematic Team Credits (Mission Impossible Style) */}
            <motion.div
                style={{
                    position: 'fixed',
                    inset: 0,
                    opacity: finaleOpacity,
                    zIndex: 10,
                    backgroundColor: '#000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden'
                }}
            >
                {/* Dynamic Background */}
                <div style={{ position: 'absolute', inset: 0, opacity: 0.1 }}>
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '150vw', height: '150vh', background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 60%)' }} />
                </div>

                {/* Team Name Zoom Sequence */}
                <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {teamMembers.map((name, i) => {
                        const start = finaleStart + (i * 400);
                        const mid = start + 300;
                        const end = mid + 300;

                        // Randomized but deterministic offsets based on index
                        const xOffset = (i % 2 === 0 ? 80 : -80) * (i % 3 + 1);
                        const rotateOffset = (i % 2 === 0 ? 10 : -10) * (i % 2 + 0.5);

                        // Zoom through effect with Zig-Zag - Optimized for clarity
                        const scale = useTransform(scrollY, [start, mid, end], [0.8, 1.1, 2.5]);
                        const opacity = useTransform(scrollY, [start, start + 150, mid, end - 150, end], [0, 1, 1, 1, 0]);
                        const blur = useTransform(scrollY, [start, mid, end], ["blur(2px)", "blur(0px)", "blur(6px)"]);
                        const y = useTransform(scrollY, [start, end], [60, -60]);
                        const x = useTransform(scrollY, [start, end], [xOffset * 0.3, xOffset * -0.8]);
                        const rotate = useTransform(scrollY, [start, end], [rotateOffset * 0.5, rotateOffset * -0.8]);

                        return (
                            <motion.div
                                key={name}
                                style={{
                                    position: 'absolute',
                                    fontSize: 'clamp(1.5rem, 10vw, 6rem)',
                                    fontWeight: 900,
                                    color: '#fff',
                                    letterSpacing: 'clamp(-2px, -0.3vw, -1px)',
                                    textAlign: 'center',
                                    textTransform: 'uppercase',
                                    scale,
                                    opacity,
                                    filter: blur,
                                    y,
                                    x,
                                    rotate,
                                    textShadow: '0 0 15px rgba(255,255,255,0.15)',
                                    width: '90%'
                                }}
                            >
                                {name}
                            </motion.div>
                        );
                    })}

                    {/* Final Branding Appear */}
                    <motion.div
                        style={{
                            position: 'absolute',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            opacity: useTransform(scrollY, [finaleStart + (teamMembers.length * 400) + 200, finaleStart + (teamMembers.length * 400) + 500], [0, 1]),
                            width: '90%',
                            textAlign: 'center'
                        }}
                    >
                        <div style={{ width: 'clamp(20px, 5vw, 40px)', height: '4px', background: '#fff', marginBottom: '24px' }} />
                        <h2 style={{ fontSize: 'clamp(1rem, 4vw, 1.4rem)', fontWeight: 600, color: '#fff', textTransform: 'uppercase', letterSpacing: 'clamp(4px, 1.5vw, 12px)' }}>
                            Grateful Gorillas
                        </h2>
                        <span style={{ fontSize: 'clamp(0.6rem, 2vw, 0.8rem)', color: '#666', marginTop: '12px', fontWeight: 500, letterSpacing: '2px' }}>
                            MISSION COMPLETED • 2025
                        </span>
                    </motion.div>
                </div>
            </motion.div>

            {/* Transition Overlays */}
            <motion.div style={{ position: 'fixed', inset: 0, background: '#000', opacity: transitionOverlay1To2, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                <span style={{ color: '#fff', fontSize: 'var(--fluid-h2)', fontWeight: 700 }}>Day 2</span>
            </motion.div>
            <motion.div style={{ position: 'fixed', inset: 0, background: '#000', opacity: transitionOverlay2To3, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                <span style={{ color: '#fff', fontSize: 'var(--fluid-h2)', fontWeight: 700 }}>Day 3</span>
            </motion.div>
            <motion.div style={{ position: 'fixed', inset: 0, background: '#000', opacity: transitionOverlay3To4, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                <span style={{ color: '#fff', fontSize: 'var(--fluid-h2)', fontWeight: 700 }}>Day 4</span>
            </motion.div>
            <motion.div style={{ position: 'fixed', inset: 0, background: '#000', opacity: transitionOverlayFinale, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                <span style={{ color: '#fff', fontSize: 'var(--fluid-h2)', fontWeight: 700 }}>The Team</span>
            </motion.div>

            {/* Header */}
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                style={{
                    position: 'fixed', top: 0, left: 0, right: 0, padding: 'clamp(16px, 4vw, 24px) clamp(20px, 5vw, 40px)', zIndex: 90,
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    background: 'linear-gradient(180deg, rgba(10,10,10,0.8) 0%, transparent 100%)',
                    backdropFilter: 'blur(10px)',
                    paddingTop: 'calc(clamp(16px, 4vw, 24px) + var(--safe-area-top))'
                }}
            >
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
                >
                    <motion.div
                        whileHover={{ rotate: 180 }}
                        style={{ width: 'clamp(24px, 4vw, 32px)', height: 'clamp(24px, 4vw, 32px)', background: '#f8f8f8', borderRadius: '6px' }}
                    />
                    <span style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', fontWeight: 600, color: '#f0f0f0' }}>Grateful Gorillas</span>
                </motion.div>
                <span style={{ fontSize: 'clamp(0.65rem, 2vw, 0.875rem)', color: '#888', textAlign: 'right' }}>{allNotes.length} Missions Stacked</span>
            </motion.header>

            {/* Intro Section */}
            <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 10vw' }}>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ fontSize: 'var(--fluid-h1)', fontWeight: 800, color: '#f0f0f0', letterSpacing: '-3px', lineHeight: 0.9 }}
                >
                    Progressive
                    <br />
                    <span style={{ color: '#444' }}>Mindset.</span>
                </motion.h1>
                <div style={{ width: '1px', height: 'clamp(60px, 15vh, 100px)', background: 'linear-gradient(180deg, #666, transparent)', marginTop: '40px' }} />
            </section>

            {/* Notes Stack */}
            <section style={{ paddingBottom: '20vh' }}>
                <NotesStack notes={allNotes} />
            </section>

            <AddNoteButton onClick={() => { }} />

        </main>
    );
}
