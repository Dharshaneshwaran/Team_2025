'use client';

import { motion } from 'framer-motion';
import NotesStack from '@/components/NotesStack';
import AddNoteButton from '@/components/AddNoteButton';
import Link from 'next/link';

const day2Notes = [
    {
        id: 'd2-1',
        title: '🦍 Gorilla Wisdom: 4 Stages of Life',
        content: `Every gorilla goes through these stages:

🌱 1) Self Development → Brahmacharya
   (Young gorilla learning jungle skills!)

👨‍👩‍👧 2) Social Development → Grahastha
   (Building your troop!)

🧘 3) Not to desire for anything → Vanaprastha
   (Wise silverback mode!)

🌟 4) Lost interest in everything → Sanyasa
   (Legendary gorilla status!)`,
        date: 'Day 2 🍌',
        color: '#FFF8E7',
    },
    {
        id: 'd2-2',
        title: '🧠 Gorilla Brain Power: Meta Cognition',
        content: `↳ Thinking about your thinking
   (Even gorillas do this!)

🍾 HIGH Meta Cognition Gorilla:
   → Responds after thinking wisely
   → Like a calm Waterbottle 💧

🥤 LOW Meta Cognition Gorilla:
   → Reacts without thinking
   → Like a shaken Coca Cola bottle! 💥`,
        date: 'Day 2 🦍',
        color: '#E8F4F8',
    },
    {
        id: 'd2-3',
        title: '🎯 Steps for Meta Cognition',
        content: `When life throws bananas at you 🍌:

😰 Step 1: Face the uncomfortable situation
         or negative thought
              ↓
🛑 Step 2: DON'T immediately react!
   (No chest-beating yet!)
              ↓
⏸️ Step 3: Take a PAUSE
   (Breathe like a meditating gorilla)
              ↓
🧠 Step 4: Think meta cognitively about
   your negative thoughts & feelings`,
        date: 'Day 2 🌴',
        color: '#F8E8F8',
    },
    {
        id: 'd2-4',
        title: '💭 Respond Wisely, Young Gorilla!',
        content: `🎯 Respond wisely instead of reacting 
   like a Coca Cola bottle! 🥤💥

❓ Why we don't get interest in studies?

📚 Learning from "Hunt the Wolf" 🐺:

1) When we have a CLEAR GOAL 🎯
   → Interest and focus will come 
   AUTOMATICALLY! 

   Like a gorilla spotting bananas! 🍌👀`,
        date: 'Day 2 🦍',
        color: '#E8F8E8',
    },
    {
        id: 'd2-5',
        title: '🤝 Accountability Friend (Gorilla Buddy!)',
        content: `Every successful gorilla needs a buddy!

🦍 An Accountability Friend is:

→ A friend who helps you ACHIEVE your goal
  (Your jungle success partner!)

→ Who gives you CRITICAL feedback
  (Honest gorilla sounds! 🗣️)

→ Who CARES for your success
  (Real troop member! ❤️)

❓ Who is YOUR gorilla buddy? 🦍🤝🦍`,
        date: 'Day 2 💪',
        color: '#FFF0E8',
    },
    {
        id: 'd2-6',
        title: '⭕ Golden Circle: Why Study Well?',
        content: `The Gorilla Golden Circle:
   WHY → HOW → WHAT

🎯 Why should I study well?

1️⃣ Knowledge (Big brain gorilla! 🧠)
2️⃣ Confidence that I know many things
3️⃣ To be a ROLE MODEL 🌟
4️⃣ Marks (Banana rewards! 🍌)
5️⃣ Can do inventions & service to people
6️⃣ Can teach the illiterate people`,
        date: 'Day 2 🎓',
        color: '#F0F8FF',
    },
    {
        id: 'd2-7',
        title: '⚠️ What If I Don\'t Study?',
        content: `Warning! Dangers of lazy gorilla life:

😢 Parent hope decreases
   (Sad silverback vibes...)

📉 Self confidence decreases
   (Small gorilla energy!)

🌍 Can't survive in society
   (Kicked out of the troop!)

👥 People may follow me & do the same
   (Bad influence gorilla!)

😔 Can take wrong decisions
   because of depression`,
        date: 'Day 2 ⚡',
        color: '#FFE4E1',
    },
    {
        id: 'd2-8',
        title: '🎖️ 5 P\'s of Performance',
        content: `Army Motto: "Service Above Self" 🪖

The 5 P's of a Champion Gorilla:

1️⃣ PAIN 💪
   (No pain, no gain!)

2️⃣ PRESSURE ⚡
   → Pressure gives performance!
   → External 🌍 + Internal 💭
   → Self Pressure & self revolving

3️⃣ PRIDE 🦍 (Proud gorilla stance!)

4️⃣ PURPOSE 🎯 (Know your WHY!)

5️⃣ PASSION 🔥 (Burn for it!)`,
        date: 'Day 2 🏆',
        color: '#E6E6FA',
    },
    {
        id: 'd2-9',
        title: '📋 Day 2 CHALLENGES!',
        content: `🦍 Gorilla Mission for Today:

1️⃣ Do "Find your learning style" worksheet
   📖 Pages 18 to 36
   (Know your gorilla brain type!)

2️⃣ Do mock test of your recent
   Physics half yearly question paper
   🧪 (Science gorilla mode!)

3️⃣ Tomorrow night:
   🎤 Parent's voice note
   (Record the wisdom!)

GO CRUSH IT! 💪🦍🔥`,
        date: 'Day 2 ✅',
        color: '#FFFACD',
    },
];

export default function Day2Page() {
    const handleAddNote = () => {
        console.log('Add new note');
    };

    return (
        <main
            style={{
                minHeight: '100vh',
                background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)',
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
                    background: 'linear-gradient(180deg, #0a0a0a 0%, transparent 100%)',
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
                                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '24px',
                                boxShadow: '0 4px 20px rgba(255, 215, 0, 0.4)',
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
                            🦍
                        </motion.div>
                        <span
                            style={{
                                fontSize: '1.25rem',
                                fontWeight: 700,
                                background: 'linear-gradient(90deg, #FFD700, #FFA500)',
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
                    <Link href="/" style={{ textDecoration: 'none' }}>
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
                                color: '#FFD700',
                                background: 'rgba(255,215,0,0.1)',
                            }}
                        >
                            ← Day 1
                        </motion.span>
                    </Link>
                    <motion.span
                        style={{
                            fontSize: '0.875rem',
                            color: '#FFD700',
                            fontWeight: 600,
                            padding: '6px 14px',
                            borderRadius: '20px',
                            background: 'rgba(255,215,0,0.15)',
                            border: '1px solid rgba(255,215,0,0.3)',
                        }}
                    >
                        Day 2 🔥 • {day2Notes.length} notes
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
                {/* Floating bananas */}
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
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                >
                    🍌
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
                    🌴
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
                    💪
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
                    🔥
                </motion.div>

                {/* Big gorilla emoji */}
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
                    🦍
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
                            background: 'linear-gradient(90deg, #FFD700, #FFA500, #FF6B00, #FFD700)',
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
                        DAY 2
                    </motion.span>
                    <br />
                    <span style={{ color: '#fff', fontSize: '0.6em' }}>
                        Gorilla Mode:
                        <motion.span
                            style={{ color: '#00ff00', marginLeft: '10px' }}
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            ACTIVATED
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
                    Time to beat your chest and conquer your goals! 🥁
                    <br />
                    <span style={{ color: '#FFD700' }}>Scroll down for gorilla wisdom 👇</span>
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
                            border: '3px solid #FFD700',
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
                                background: '#FFD700',
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
                <NotesStack notes={day2Notes} />
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
                    background: 'linear-gradient(0deg, #0a0a0a 0%, transparent 100%)',
                    pointerEvents: 'none',
                    zIndex: 50,
                }}
            />
        </main>
    );
}
