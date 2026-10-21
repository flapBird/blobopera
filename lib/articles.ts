import { siteConfig } from "./site.config";

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  category: "ai-music" | "music-education" | "guides" | "music-appreciation";
  readingTime: number;
  publishedAt: string;
  updatedAt?: string;
  keywords: string[];
  relatedSlugs: string[];
}

export interface ArticleSection {
  heading: string;
  headingLevel: 2 | 3;
  body: string;
  listItems?: string[];
}

export interface ArticleContent {
  meta: ArticleMeta;
  sections: ArticleSection[];
}

const categoryNames: Record<string, string> = {
  "ai-music": "AI & Music Technology",
  "music-education": "Music Education",
  guides: "Guides & Tutorials",
  "music-appreciation": "Music Appreciation",
};

export function getCategoryLabel(cat: string): string {
  return categoryNames[cat] ?? cat;
}

const articles: ArticleContent[] = [




  {
    meta: {
      slug: "what-are-the-four-voice-types",
      title: "Blob Opera Voice Types: Bass, Tenor, Mezzo-Soprano, and Soprano",
      description: "What the four Blob Opera voices represent, their approximate ranges, how the quartet fits together, and how to hear bass, tenor, mezzo-soprano, and soprano.",
      category: "music-education",
      readingTime: 8,
      publishedAt: "2026-07-11",
      updatedAt: "2026-10-21",
      keywords: ["blob opera voice types", "bass tenor mezzo soprano", "opera voice types", "vocal ranges explained", "four voice types"],
      relatedSlugs: ["how-to-play-blob-opera", "5-music-games-for-classroom", "harmony-and-melody-in-blob-opera"],
    },
    sections: [
      {
        heading: "What Voice Type Actually Means",
        headingLevel: 2,
        body: "A voice type is shorthand for a cluster of qualities: the notes a singer can sustain comfortably, the part of the range where the voice sounds strongest, the color or timbre of the sound, and how agile it is. It is not a score or a ranking. Two sopranos can have very different instruments, and a singer's classification can depend on repertoire, training, and the judgment of a teacher or conductor. The approximate ranges people quote are guides rather than walls. Blob Opera uses four familiar labels to organize its quartet, which makes the experiment a friendly introduction to the vocabulary rather than a complete course in vocal classification.",
      },
      {
        heading: "The Four Voices at a Glance",
        headingLevel: 2,
        body: "From lowest to highest, the quartet represents these four categories. The ranges below are general references used in vocal pedagogy, not measured settings published by the Blob Opera team.",
        listItems: [
          "Bass: the lowest voice, roughly D2 to D4. Deep, resonant, and foundation-building.",
          "Tenor: the highest natural male voice, roughly C3 to C5. Bright and penetrating.",
          "Mezzo-soprano: the middle female voice, roughly A3 to A5. Warm, dark, and flexible.",
          "Soprano: the highest voice, roughly C4 to C6. Bright, agile, and expressive.",
        ],
      },
      {
        heading: "Bass: The Foundation",
        headingLevel: 2,
        body: "The bass is the lowest human voice type, typically placed around D2 to D4. Its strength is weight rather than flash: a good bass gives the harmony a floor, and in a choir the bass line often defines the root of the chord. Operatic basses play priests, kings, fathers, gods, and occasionally the devil, but the voice is not limited to villainy or gravity. In Blob Opera, the bass blob is the largest and sits at the bottom of the group. When you move it, the entire texture seems to shift because the lowest sounding note changes the harmonic ground under everything else. Start with the bass if you want to hear how much difference the bottom of a chord makes.",
      },
      {
        heading: "Tenor: The Leading Voice",
        headingLevel: 2,
        body: "The tenor is the highest natural male voice, with a working range commonly given as C3 to C5. Tenors are prized for brightness and carrying power: the voice can cut through an orchestra without sounding forced. In opera, tenors have traditionally sung the romantic and heroic leads, which is one reason the tenor is often the voice audiences remember first. In the quartet, the tenor sits in the middle-upper area and is a good choice for a first melody. It is high enough to stand out but low enough to leave space for the mezzo and soprano above it.",
      },
      {
        heading: "Mezzo-Soprano: The Warm Middle",
        headingLevel: 2,
        body: "The mezzo-soprano is the middle female voice, usually described as roughly A3 to A5. It is darker and fuller than a soprano, especially in the lower middle of the range, and it can move quickly when the music asks for agility. Opera gives mezzos a wide range of roles: confidantes, trouser roles, temptresses, and characters with complicated moral lives. In Blob Opera, the mezzo blob is the connective tissue between the tenor and the soprano. If the quartet sounds thin or top-heavy, try leading with the mezzo for a phrase; its warmth can fill the center of the texture without covering the outer voices.",
      },
      {
        heading: "Soprano: The Highest Voice",
        headingLevel: 2,
        body: "The soprano is the highest voice type, with an approximate range from C4 to C6. The voice is typically bright, agile, and capable of long expressive lines. Sopranos sing many of opera's most famous heroines, and the category includes very different instruments, from lyric sopranos with a smooth middle to coloraturas built for rapid ornamentation. In Blob Opera, the soprano is the top blob. Because it sits highest, it can easily dominate the quartet. Use it for a climax or a short answering phrase rather than leaving it at the top of its range for the entire performance. The contrast will make the high register feel more exciting.",
      },
      {
        heading: "How Blob Opera Uses These Labels",
        headingLevel: 2,
        body: "The four labels are an educational frame around a playful instrument. You do not audition, enter a range, or receive a score. You drag a character, and the experiment produces a synthesized voice with the general character of that category. Google describes the project as a machine-learning experiment trained on opera singing; the voices you hear are generated by a model, not recordings of four named singers. The public materials do not document exact per-blob pitch limits or a formal classification method, so treat the labels as an invitation to listen. They give you words for what you hear: this one is low and heavy, that one is high and light, and the two in the middle are doing something more complicated.",
      },
      {
        heading: "A Five-Minute Listening Exercise",
        headingLevel: 2,
        body: "You can train your ear without any prior music theory. Open the experiment and work through this sequence slowly:",
        listItems: [
          "Solo the bass and hum along on the lowest comfortable note you can produce. Notice where you feel the vibration.",
          "Solo the soprano and hum a light, high note. Notice how much less air pressure it takes than you expected.",
          "Play the tenor alone and describe its color with three adjectives. Repeat for the mezzo.",
          "Play bass and soprano together. Listen for the wide gap in the middle, then add the mezzo and hear it fill.",
          "Play all four and try to follow one voice with your attention for ten seconds without switching.",
        ],
      },
      {
        heading: "Voices the Quartet Leaves Out",
        headingLevel: 2,
        body: "Four is a design choice, not a claim that every singer fits one of four boxes. Opera also uses the baritone, which sits between the bass and tenor and sings many of the most important dramatic roles. The contralto is a low female voice, rarer than the mezzo but central to some repertoire. The countertenor sings in a high range that overlaps with female voices. Children's voices, choral subdivisions such as bass-baritone and lyric soprano, and the many vocal traditions outside Western opera all complicate the picture further. Blob Opera leaves those categories out because a quartet needs contrast and clarity, not because they are less important. The experiment is a doorway into the vocabulary, and the wider world of singing is much larger than four blobs.",
      },
      {
        heading: "Frequently Asked Questions",
        headingLevel: 2,
        body: "These are the questions listeners ask most often when they meet the quartet for the first time.",
      },
      {
        heading: "Is the bass always a man?",
        headingLevel: 3,
        body: "Voice type describes range and timbre, not identity. Opera has historically assigned roles by voice category, and the bass repertoire is usually sung by men, but singers of different genders can possess low voices. Blob Opera turns the categories into abstract characters rather than people, which is a useful reminder that the label is about sound.",
      },
      {
        heading: "Which blob is easiest for beginners?",
        headingLevel: 3,
        body: "Start with the tenor or the mezzo-soprano. Both sit in the middle of the texture, so it is easier to hear your melody against the automatic harmony. The bass and soprano are more extreme and can dominate quickly.",
      },
      {
        heading: "Can I change which voice a blob sings?",
        headingLevel: 3,
        body: "No. The quartet has four fixed characters. You change pitch and vowel color by moving a blob, but you cannot reassign the bass to a soprano range or swap the labels.",
      },
      {
        heading: "Are the ranges exact?",
        headingLevel: 3,
        body: "The ranges quoted here are conventional approximations, not measurements of the experiment. Real voices overlap and vary, and Blob Opera does not publish the precise limits of each synthesized character. Use the numbers as orientation, then trust your ears.",
      },
      {
        heading: "Why is there no baritone?",
        headingLevel: 3,
        body: "A quartet needs clear contrast, and the four chosen categories span a wide range with minimal overlap. Adding a baritone would make the ensemble denser and harder to parse for a beginner. The omission is a design decision, not a statement that baritones matter less.",
      },
      {
        heading: "Does a higher voice mean a better singer?",
        headingLevel: 3,
        body: "No. Range is only one quality. Technique, musicality, pronunciation, stamina, and interpretation matter more than the highest note a singer can reach. The same is true of the blobs: the soprano is not the winner, and the bass is not the loser.",
      },
    ],
  },




  {
    meta: {
      slug: "5-music-games-for-classroom",
      title: "Blob Opera in the Classroom: Lesson Plans and Music Games",
      description: "A practical 40-minute Blob Opera lesson plan for music teachers, with learning objectives, assessment ideas, classroom privacy notes, and more free music games.",
      category: "music-education",
      readingTime: 9,
      publishedAt: "2026-07-13",
      updatedAt: "2026-10-21",
      keywords: ["blob opera classroom", "music games for classroom", "blob opera lesson plan", "music teacher resources", "interactive music education"],
      relatedSlugs: ["how-to-play-blob-opera", "what-are-the-four-voice-types", "recording-guide"],
    },
    sections: [
      {
        heading: "Why Blob Opera Fits a Music Classroom",
        headingLevel: 2,
        body: "Blob Opera lowers the barrier to making a satisfying vocal sound. There is no instrument to tune, no embouchure to build, and no wrong note to fear. A student can drag a character and hear a musical result immediately, which makes the experiment useful for ear training, discussion of voice types, and a first experience of shaping a phrase. It also works with almost any hardware: a laptop, a Chromebook, a tablet, or a classroom display with speakers. The trade-offs are equally important. The experiment is hosted by Google, so it needs a working connection and may be affected by school filters. The interface can change without notice. There are no student accounts, which is good for privacy but means work is not saved in a class roster. Plan the lesson around a short, shared experience rather than a semester-long project.",
      },
      {
        heading: "What Students Can Learn",
        headingLevel: 2,
        body: "You do not need to teach the whole history of opera to justify the activity. Choose two or three objectives and assess those. Depending on your curriculum, a single lesson can address the following:",
        listItems: [
          "Identify the four represented voice types by relative register and tone color.",
          "Describe a gesture using musical vocabulary: higher, lower, step, leap, hold, vowel, phrase.",
          "Explain that harmony occurs when voices sound together, and that this quartet harmonizes automatically.",
          "Shape a short performance with a beginning, one contrast, and a deliberate ending.",
          "Evaluate a peer's performance with one specific observation rather than a general opinion.",
        ],
      },
      {
        heading: "Before Class: A Two-Minute Tech Check",
        headingLevel: 2,
        body: "Most classroom failures are preventable. Run this check on the same device and network students will use, not just on your phone at home:",
        listItems: [
          "Open the play page and click once inside the game area. Browsers often require a gesture before audio starts.",
          "Confirm that sound is coming from the room speakers or projector, not only from the laptop.",
          "Test one blob and, if you plan to use it, the recording and share control.",
          "Check that the browser is current and that extensions or filters are not blocking the embedded experiment.",
          "Prepare a fallback: a teacher-led humming exercise, a short recorded example, or another browser music tool.",
        ],
      },
      {
        heading: "A 40-Minute Lesson Plan",
        headingLevel: 2,
        body: "This structure works with upper elementary through high school. Shorten the phases rather than skipping the reflection for younger classes. The times are a guide, and the transitions matter more than the clock.",
      },
      {
        heading: "Warm-Up: Pitch Sirens (5 Minutes)",
        headingLevel: 3,
        body: "Ask students to stand and hum a gentle siren up and down on a comfortable vowel. Then show one blob on the screen and move it slowly up and down. Students mirror the direction with their hands and voices. This connects the visual gesture to pitch before anyone touches the device. Keep the humming quiet and relaxed; the goal is coordination, not volume.",
      },
      {
        heading: "Explore: Meet the Quartet (10 Minutes)",
        headingLevel: 3,
        body: "Introduce the four blobs by relative position rather than by a lecture. Ask which is highest and which is lowest, then play each one alone. Students offer three adjectives for each voice. Demonstrate that moving one blob changes the others, and ask a student to predict what will happen before you move it. If you have several devices, let pairs take turns leading one voice for thirty seconds; if you have one device, use the teacher station and let students direct the gestures verbally.",
      },
      {
        heading: "Listen: One Prepared Performance (8 Minutes)",
        headingLevel: 3,
        body: "Use a preset if one is available in your version, or perform a thirty-second piece yourself with a clear beginning, one contrast, and an ending. Give the class a focused listening task: raise a hand when the highest voice moves, or count how many phrases you hear. Afterwards, ask what changed and what stayed the same. This is the step where students move from pressing buttons to hearing structure. If the preset list has changed, treat that as part of the lesson: the hosted experiment is updated, and listeners adapt.",
      },
      {
        heading: "Create: A Two-Phrase Performance (10 Minutes)",
        headingLevel: 3,
        body: "In pairs or small groups, students plan four gestures: an opening, a move, a contrast, and an ending. Limit them to one lead voice so the task stays focused. The contrast can be a change of register, a change of vowel, or a pause. Give them two minutes to plan on paper, three minutes to practice, and the rest to refine. Do not require a recording. The point is a deliberate shape, not a polished product. Circulate and ask one question per group: where is your ending, and how will the audience know it has arrived?",
      },
      {
        heading: "Share and Reflect (5 Minutes)",
        headingLevel: 3,
        body: "Invite two or three groups to perform live. Ask the audience to offer one specific observation: I heard the melody go up, the pause made the ending clear, the soprano covered the other voices. Replace general praise with evidence. If you record, ask permission first and explain who will be able to open the link. Keep the reflection short; the contrast between two performances teaches more than a long discussion.",
      },
      {
        heading: "Extend: Draw the Contour (2 Minutes)",
        headingLevel: 3,
        body: "Students draw the shape of the performance as a line on paper: up for higher, down for lower, flat for a held note, a gap for silence. This is a bridge to notation and to the idea that a melody has a contour. Hum the line back as a class. For homework or a follow-up, ask students to draw the contour of a song they know and compare it with a partner's drawing.",
      },
      {
        heading: "Adaptations by Age and Setting",
        headingLevel: 2,
        body: "The same activity scales in several directions. Choose the version that matches your room rather than trying to run the full plan in every setting.",
        listItems: [
          "Grades K-2: keep the device with the teacher, use animal sounds and hand movements, and copy one gesture at a time.",
          "Grades 3-5: let pairs lead one voice, draw contours, and introduce the words pitch, phrase, and harmony.",
          "Middle and high school: compare voice types, discuss timbre and automatic harmony, and ask how much authorship the player really has.",
          "One-device classroom: run the lesson as a whole-class conductor activity, with students suggesting gestures and the teacher performing them.",
          "Homeschool: use the 15-minute version, with one warm-up, one exploration, one short performance, and one drawing.",
          "Remote learning: share your screen and audio, let students direct gestures in chat or unmute one at a time, and send the contour task as follow-up.",
        ],
      },
      {
        heading: "Assessment Without a Written Test",
        headingLevel: 2,
        body: "Assess what the lesson actually teaches: listening, control, and structure. An observation checklist can track whether a student identifies high and low voices, moves one blob deliberately, uses a contrast, and describes what they heard. A short exit ticket works well: one thing I heard, one thing I noticed, one thing I would change. If you need a rubric, score control, contrast, structure, and listening separately, and do not penalize a student for a device or network failure. Offer an equivalent task, such as drawing a contour or describing a recording, when technology gets in the way.",
      },
      {
        heading: "Classroom Management and Privacy",
        headingLevel: 2,
        body: "A few practical rules keep the lesson calm and the data simple:",
        listItems: [
          "No student accounts or names are needed. Do not ask students to enter personal information into the experiment.",
          "Set a volume limit and use headphones for station work. Four blobs at full volume can overwhelm a small room.",
          "Ask permission before recording a student's performance, and explain that anyone with the link may be able to open it.",
          "Do not post student recordings publicly without written permission that follows your school's policy.",
          "On shared devices, clear the browser's local storage or the gallery entries when the lesson ends.",
          "Remember that the game itself is embedded from Google, so loading it contacts Google's servers. Check your school's technology policy before class.",
        ],
      },
      {
        heading: "Four More Free Music Games for Stations",
        headingLevel: 2,
        body: "If you build a rotation, pair Blob Opera with tools that teach different skills. Verify each one on your school network first, because free access and features can change:",
        listItems: [
          "Chrome Music Lab Song Maker: a grid-based composer for melody, rhythm, and simple form.",
          "Incredibox: layered beatboxing that makes musical texture visible and easy to discuss.",
          "Ableton Learning Music: a structured introduction to beats, notes, scales, and chords.",
          "Typatone: turns typed letters into notes, connecting writing, pattern, and melody.",
        ],
      },
      {
        heading: "If the Lesson Does Not Go to Plan",
        headingLevel: 2,
        body: "Have a response ready for the predictable problems. If there is no sound, click inside the game area, check the tab mute and output device, and try headphones. If the network blocks the experiment, switch to the fallback rather than debugging in front of the class. If students finish early, ask them to add a second contrast or to draw a more detailed contour. If the room becomes chaotic, move to a single teacher-led device and give every student a listening job. If the recording control is missing or fails, skip recording and perform live. The Blob Opera not working guide on this site has a fuller checklist for browser, audio, network, and embed problems.",
      },
      {
        heading: "Frequently Asked Questions",
        headingLevel: 2,
        body: "These are the practical questions teachers ask before trying the experiment with a class.",
      },
      {
        heading: "Is Blob Opera free for schools?",
        headingLevel: 3,
        body: "Yes. The experiment is free to open and does not require a purchase or account. This independent site also does not charge for access. Your school network, however, may block the embedded page or audio, so test it in advance.",
      },
      {
        heading: "Do students need accounts?",
        headingLevel: 3,
        body: "No. Students can play without signing in, and they do not need to enter names or email addresses. Work is not saved to a class roster, so collect links or reflections separately if you need evidence of learning.",
      },
      {
        heading: "Is it suitable for young children?",
        headingLevel: 3,
        body: "The experiment uses abstract characters and vowel sounds, with no text-heavy content or fail states, which makes it approachable for young students. Supervision is still necessary, and you should follow your school's policy for third-party websites and audio.",
      },
      {
        heading: "Can we record and share a class performance?",
        headingLevel: 3,
        body: "If the recording control is available in your version, you can capture a performance and create a share link. Ask for student permission, explain who may be able to open the link, and avoid public posting without approval. The personal gallery on this site stores links only in the browser on that device.",
      },
      {
        heading: "Does Blob Opera teach music notation?",
        headingLevel: 3,
        body: "Not directly. It teaches listening, pitch direction, voice color, phrasing, and the idea of harmony. Pair it with a contour drawing or a simple notation activity to connect the sound to written symbols.",
      },
      {
        heading: "What if the internet fails during class?",
        headingLevel: 3,
        body: "Use the fallback you prepared: a teacher-led humming exercise, a contour drawing from memory, or a discussion of a recording you already have. The lesson can survive without the browser if the listening objective is clear.",
      },
    ],
  },

  {
    meta: {
      slug: "how-to-play-blob-opera",
      title: "How to Play Blob Opera: Controls, Tips, and First Performance",
      description: "A step-by-step Blob Opera tutorial: start the experiment, control pitch and vowels, shape a short melody, and record your first performance.",
      category: "guides",
      readingTime: 8,
      publishedAt: "2026-10-21",
      keywords: ["how to play blob opera", "blob opera controls", "blob opera tutorial", "blob opera tips", "play blob opera"],
      relatedSlugs: ["recording-guide", "blob-opera-not-working", "what-are-the-four-voice-types"],
    },
    sections: [
      {
        heading: "What You Need Before You Start",
        headingLevel: 2,
        body: "Blob Opera runs in a modern desktop or mobile browser and does not require an account, download, or payment on this site. You need a browser with JavaScript and audio playback enabled, a working speaker or headphones, and a reasonably stable connection because the experiment itself is hosted by Google Arts & Culture. Our page embeds that hosted experiment, so the game area is loading a third-party page rather than a local copy. If the frame stays blank, the troubleshooting guide covers the common causes. For a first session, use headphones if you can. Small pitch differences and the four separate voices are easier to hear without room noise.",
      },
      {
        heading: "Step 1: Open the Experiment",
        headingLevel: 2,
        body: "Open the Blob Opera play page and press the play control. The experiment may show a short introduction or a start button before the blobs appear; the exact screen can change when Google updates the experience. Click through that introduction and make sure the page has had one interaction before you expect sound, because browsers often require a click before allowing audio. You do not need to create a profile. There is no score, timer, or fail state, so you can experiment without a penalty. If nothing happens after a click, check the tab mute state and then try the official Google-hosted page. If the official page works but our embed does not, the problem is likely the embed or a browser extension rather than the experiment itself.",
      },
      {
        heading: "Meet the Four Blobs",
        headingLevel: 2,
        body: "Four characters represent the main voice categories. The bass is the largest and lowest on screen, the tenor sits above it, the mezzo-soprano is higher again, and the soprano occupies the top of the group. Each has a different vocal color, and the quartet is designed so that the parts fit together. You do not have to identify every voice before you begin: start by moving one blob and noticing how the others respond. The four labels are an introduction to operatic voice types, not a complete classification of every human voice. The quartet omits categories such as baritone, contralto, and countertenor. The voice-types guide explains the labels and their approximate ranges in more detail.",
      },
      {
        heading: "The Two Main Controls",
        headingLevel: 2,
        body: "Most of the interaction comes down to two dimensions. Drag a blob up or down to change pitch: up raises the represented pitch, and down lowers it. Move the blob along the other direction to change the vowel color. The exact direction can feel different depending on the screen and the version, so move slowly and listen rather than relying on a memorized gesture. You control one voice at a time; the other blobs respond and harmonize automatically. You are not entering chords note by note. The result is a cooperative instrument, which is why a single gesture can produce a complete vocal texture. If a gesture feels unpredictable, reduce the speed. A slow drag makes it easier to hear the relationship between your hand, the pitch, and the vowel. This is also the best way to learn the current layout if Google changes the interface.",
      },
      {
        heading: "Your First 60-Second Performance",
        headingLevel: 2,
        body: "Use this exercise as a first take. Pick the tenor or mezzo-soprano; these middle voices are easy to follow and leave room for the outer voices. Hold one note briefly, then move up a small step and back down. Repeat the shape once. Change one thing: make the second phrase lower, or change the vowel while keeping the pitch steady. Add a short pause by holding still. Silence is part of the performance, and you do not need continuous movement. Finish on a held note rather than stopping in the middle of a sweep. A deliberate ending makes even a short recording feel complete. The goal is not to reproduce a famous aria. It is to make a shape you can remember and repeat. A melody with a beginning, one contrast, and an ending is easier to listen to than a continuous stream of random gestures. Once the first version feels stable, record it and listen back. You will usually notice one thing to change: a phrase that is too long, a transition that is too fast, or a vowel that becomes muddy. Keep the second take focused on that one change.",
      },
      {
        heading: "Make It Sound Musical",
        headingLevel: 2,
        body: "Three habits help more than any hidden trick. First, think in phrases. Four to eight gestures can be enough for a phrase; then hold or pause before the next one. Second, use contrast sparingly. If everything is high and loud, nothing stands out. Move to a lower register or a softer vowel for one section, then return. Third, listen to the other voices. The quartet harmonizes automatically, but the blend still depends on your register and timing. If the texture sounds crowded, simplify your line. If it sounds empty, hold a note longer and let the harmony settle. These are general musical suggestions, not rules that Google has documented for the experiment. Blob Opera is designed for exploration, and there is no correct melody to find. The most useful skill is comparative listening: make a version, change one variable, and decide which result you prefer.",
      },
      {
        heading: "Common Beginner Mistakes",
        headingLevel: 2,
        body: "Most early frustration comes from a small number of habits. Use this list as a quick self-check:",
        listItems: [
          "Moving too fast. Fast gestures are dramatic, but they make it hard to hear pitch and vowel separately.",
          "Controlling every blob. The automatic harmony is the point; start with one voice.",
          "Ignoring the vowel control. Pitch gets the attention, but vowel color changes the character of the sound.",
          "Recording a long, unstructured take. A short performance with a clear ending is usually more satisfying.",
          "Never listening back. Playback reveals timing and balance problems that are hard to notice while playing.",
        ],
      },
      {
        heading: "Record and Share",
        headingLevel: 2,
        body: "When a take feels right, use the recording control in the hosted experiment to capture it. After stopping, play it back and decide whether it needs another attempt. The share option creates a link that replays the performance; recipients do not need an account on this site. The exact recording format and the current button layout are controlled by Google, so they can change. The recording guide covers planning, playback, sharing, and common link problems. If you want to keep links in one place, the personal gallery stores them in your own browser only; it is not a public archive.",
      },
      {
        heading: "A Five-Minute Practice Plan",
        headingLevel: 2,
        body: "You do not need a long session to improve. Try this sequence over five short sessions:",
        listItems: [
          "Day one: hold a single note and move two steps up and down.",
          "Day two: repeat a two-note shape in three different registers.",
          "Day three: add one vowel change while keeping the pitch steady.",
          "Day four: create two phrases and a pause between them.",
          "Day five: record a 30-second performance with a clear beginning and ending.",
        ],
      },
      {
        heading: "Frequently Asked Questions",
        headingLevel: 2,
        body: "These are the questions new players ask most often.",
      },
      {
        heading: "Is Blob Opera free?",
        headingLevel: 3,
        body: "Yes. The experiment is free to open and does not require a purchase or account. This independent site does not charge for access.",
      },
      {
        heading: "Do I need to sign up?",
        headingLevel: 3,
        body: "No. You can play and record without creating an account. A shared recording link can be opened without signing in.",
      },
      {
        heading: "Does Blob Opera work on a phone?",
        headingLevel: 3,
        body: "It is a browser-based experiment, so it can run on modern mobile browsers, but performance and touch behavior depend on the device. If it runs poorly, try a desktop browser and close other tabs.",
      },
      {
        heading: "Is there a wrong note?",
        headingLevel: 3,
        body: "There is no score or fail state. The experiment is designed for free exploration rather than a graded performance. That does not mean every combination sounds conventional; your ear is still the judge.",
      },
      {
        heading: "Can I use Blob Opera in a classroom?",
        headingLevel: 3,
        body: "Yes, with a tech check and a short plan. The classroom guide includes a 40-minute lesson structure and privacy reminders.",
      },
      {
        heading: "Why can't I hear anything?",
        headingLevel: 3,
        body: "Check the tab mute, system volume, output device, and browser audio permission. The troubleshooting guide has a full checklist.",
      },
    ],
  },

  {
    meta: {
      slug: "blob-opera-not-working",
      title: "Blob Opera Not Working? A Practical Troubleshooting Guide",
      description: "Blob Opera won't load, play sound, or respond? Work through this browser, audio, network, and embed checklist to isolate the cause.",
      category: "guides",
      readingTime: 7,
      publishedAt: "2026-10-21",
      keywords: ["blob opera not working", "blob opera not loading", "blob opera no sound", "blob opera won't play", "blob opera troubleshooting"],
      relatedSlugs: ["how-to-play-blob-opera", "recording-guide", "what-are-the-four-voice-types"],
    },
    sections: [
      {
        heading: "Start by Identifying the Failure",
        headingLevel: 2,
        body: "Troubleshooting is easier when you name the failure. A blank game frame, a loading spinner, silent audio, unresponsive blobs, and a broken shared link are different problems. Note which one you see before changing settings. Also note whether the rest of the page works: if the text, images, and navigation load but the game area does not, the problem is probably the third-party embed rather than your internet connection as a whole. If the entire page fails, start with the network. If the game works on another device, the issue is likely local to the original browser, extension, audio output, or hardware. This guide covers common causes, but it cannot diagnose a Google-side outage or a school firewall from the outside.",
      },
      {
        heading: "If the Experiment Does Not Load",
        headingLevel: 2,
        body: "Use these checks in order so that you change one variable at a time:",
        listItems: [
          "Open the official Google Arts & Culture experiment in a new tab. If it also fails, the problem is likely the network, the browser, or Google's service. If it works, return to this site and suspect the embed or an extension.",
          "Disable ad blockers, privacy extensions, and script blockers for this page, then reload. Some blockers treat third-party frames and audio scripts as trackers.",
          "Try a private or incognito window with extensions disabled.",
          "Try another browser (Chrome, Edge, Firefox, or Safari) and another network, such as a mobile hotspot instead of school Wi-Fi.",
          "Check that JavaScript is enabled and the browser is current.",
          "If you see a consent screen, complete it. Some embeds wait for a choice before loading content.",
        ],
      },
      {
        heading: "If the Blobs Appear but There Is No Sound",
        headingLevel: 2,
        body: "Silent audio is usually a local output problem rather than a broken experiment. Work through this list:",
        listItems: [
          "Click once inside the game area. Browsers often require a user gesture before audio can start.",
          "Check the tab mute icon and the system volume. On a laptop, the mute key may be independent of the volume slider.",
          "Check the output device. Headphones, Bluetooth speakers, and docking stations can be selected but disconnected.",
          "Look for a speaker or permission icon in the address bar and allow audio for the site.",
          "Turn off other audio-heavy tabs and apps, then reload.",
          "Try headphones. If sound works in headphones but not speakers, the output route is the problem.",
          "If a video or music site also has no sound, fix the system audio before troubleshooting the game.",
        ],
      },
      {
        heading: "If the Blobs Do Not Respond",
        headingLevel: 2,
        body: "The controls respond to a sustained drag, not a single click. If the blobs are visible but ignore you, try a slower, longer gesture first. On a touchscreen, use one finger and avoid a page-scroll gesture that competes with the game. Reload the page and wait for the game to finish loading before interacting. Close other graphics-heavy tabs; older devices and low-memory browsers can struggle, and Google notes that the experiment may not perform optimally on older devices. Fullscreen can make small gestures easier. If the pointer seems offset from the blob, reload once after resetting browser zoom and window size. Do not assume the device is broken: test the official page in the same browser to separate an embed problem from a game-environment problem.",
      },
      {
        heading: "If It Loads but Runs Slowly",
        headingLevel: 2,
        body: "Slow playback usually points to performance rather than a bug in the controls. Use a current browser, close unused tabs, disconnect screen-sharing or recording software, and try a wired connection if the network is unstable. Audio crackles can come from Bluetooth output, CPU load, or the system audio stack; test with wired headphones before blaming the experiment. If the page is smooth but sound lags behind your gesture, that is latency. Some latency is normal in browser audio. Reduce other load and test again. This site cannot tune Google's hosted experiment, and the public project materials do not document a latency setting.",
      },
      {
        heading: "If a Recording or Shared Link Fails",
        headingLevel: 2,
        body: "A recording link is separate from the play page, so a working game does not guarantee that an old link still opens. Confirm that you copied the complete URL, including the part after the # symbol. Open it in a normal browser tab rather than an in-app browser inside a social app. Make sure the link came from the official Blob Opera recording flow; a random Google Arts & Culture URL is not necessarily a recording. Test the link on another device or network. If it fails everywhere, the recording may be unavailable or the hosted service may have changed. If you are using this site's /watch helper, the URL parameter must contain the full recording link. The recording guide explains the share workflow in more detail.",
      },
      {
        heading: "Embedded Page vs Official Page",
        headingLevel: 2,
        body: "This page embeds the Google-hosted experiment. That keeps the game current, but it adds a layer between you and Google. Use a simple comparison: open the official experiment in the same browser; if it works there but not here, an extension, browser setting, or temporary embed problem is likely. Try incognito and another browser. If it fails in both places, the network, device, or Google's service is more likely. If the official page works on another device but not yours, compare browser versions, extensions, and audio output. That comparison is the fastest way to avoid pointless changes.",
      },
      {
        heading: "A 10-Point Quick Checklist",
        headingLevel: 2,
        body: "If you only have a minute, try these steps in order:",
        listItems: [
          "Use a current browser.",
          "Allow audio for the page.",
          "Unmute the tab and check the output device.",
          "Disable blockers for this page.",
          "Try incognito mode.",
          "Open the official page.",
          "Try another network.",
          "Close heavy tabs and apps.",
          "Reload once after each change.",
          "Test a recording link on another device.",
        ],
      },
      {
        heading: "What This Guide Cannot Fix",
        headingLevel: 2,
        body: "No troubleshooting guide can guarantee a fix. Google controls the hosted experiment, its availability, its browser support, and its recording links. If Google changes the interface, a button may move or a feature may disappear; this site cannot restore it. School and workplace networks may block the service even when the rest of the web works. Older devices may not have enough processing power for smooth audio. If you have tried the checklist and the official page still fails, the most useful next step is to try a different device and network, then report the issue through the feedback option on the official page. For embed problems specific to this site, use the contact page.",
      },
      {
        heading: "Frequently Asked Questions",
        headingLevel: 2,
        body: "These answers address the most common reasons players think Blob Opera is broken.",
      },
      {
        heading: "Is Blob Opera down right now?",
        headingLevel: 3,
        body: "There is no public status page for the experiment that this site can check. Test the official page on another network. If it fails there too, a service or network problem is likely.",
      },
      {
        heading: "Why does it work on my phone but not my laptop?",
        headingLevel: 3,
        body: "Browser version, extensions, audio output, and available memory differ. Compare those first, and try the laptop in a private window.",
      },
      {
        heading: "Can an ad blocker break Blob Opera?",
        headingLevel: 3,
        body: "Yes. Some blockers treat third-party frames and audio scripts as tracking. Test with blockers disabled for this page, then re-enable them one at a time.",
      },
      {
        heading: "Why is there no sound after I click play?",
        headingLevel: 3,
        body: "Check tab mute, system volume, output device, and browser audio permission. Try headphones and close other audio apps.",
      },
      {
        heading: "Can I play Blob Opera offline?",
        headingLevel: 3,
        body: "No. The experiment is hosted by Google and needs a connection to load, even though the controls run in the browser afterward.",
      },
      {
        heading: "Did Google remove Blob Opera?",
        headingLevel: 3,
        body: "This site has no information that the experiment has been removed. Availability can change, so test the official page rather than relying on a fixed assumption.",
      },
    ],
  },

  {
    meta: {
      slug: "recording-guide",
      title: "How to Record and Share Blob Opera Performances: Complete Guide",
      description: "Plan, record, review, and share a Blob Opera performance, plus how recording links work on this site, in the classroom, and when a link fails.",
      category: "guides",
      readingTime: 8,
      publishedAt: "2026-07-13",
      updatedAt: "2026-10-21",
      keywords: ["record blob opera", "blob opera recording", "share blob opera", "blob opera recorder", "save blob opera performance"],
      relatedSlugs: ["how-to-play-blob-opera", "city-themes-preset-songs", "blob-opera-not-working"],
    },
    sections: [
      {
        heading: "What the Built-In Recorder Does",
        headingLevel: 2,
        body: "Blob Opera includes a recording control inside the Google-hosted experiment. The basic workflow is simple: perform, stop, play the take back, and create a link that lets someone else hear it. The recording belongs to the hosted project rather than to this fan site, so the exact buttons, labels, and storage behavior can change when Google updates the experience. Google's public materials encourage recording and sharing, but they do not document the internal format or promise that a link reproduces every detail bit for bit. Treat the share link as a way to replay the performance inside the official player, not as a downloadable audio file. If you need a file for a project, check what the current interface offers before promising a format to a collaborator.",
      },
      {
        heading: "Before You Press Record",
        headingLevel: 2,
        body: "A little preparation saves several retakes. Work through this list before your first serious performance:",
        listItems: [
          "Open the experiment, click once inside it, and confirm that audio is working.",
          "Choose one lead voice. The tenor or mezzo-soprano is easiest to follow on a first recording.",
          "Decide how the performance will end. A held note is clearer than stopping in the middle of a sweep.",
          "Close heavy tabs and pause other audio so the browser has room to run smoothly.",
          "Use headphones if you are recording near other people, and check that the room is quiet.",
          "Decide whether you need a share link or just a private playback. The preparation is the same, but the sharing decision affects privacy.",
        ],
      },
      {
        heading: "Step-by-Step: Capture a Take",
        headingLevel: 2,
        body: "The control placement can vary, so look for the recording icon rather than relying on a memorized position. Start the experiment and spend thirty seconds warming up with slow gestures. When you are ready, start the recording, perform the shape you planned, and stop the take. Use the playback control to listen from the beginning. If the interface offers more than one take, keep track of which link belongs to which version by giving each one a short title in your notes. Do not reload the page in the middle of a take, and do not switch tabs if you can avoid it; both can interrupt audio or the recording state. If the recorder is missing entirely, try a current browser, make the window larger, and check the official page in the same browser before assuming the feature has been removed.",
      },
      {
        heading: "Plan a 30-Second Performance",
        headingLevel: 2,
        body: "Short recordings are easier to review and more satisfying to share. Use this five-part recipe as a starting point:",
        listItems: [
          "Opening: hold one note for two or three seconds so the listener can settle into the sound.",
          "Move: travel up or down by a small step, then return to the opening note.",
          "Contrast: change one dimension only, either the register or the vowel color.",
          "Return: come back to the opening register so the performance feels circular.",
          "Ending: hold the final note, then stop deliberately rather than fading out mid-gesture.",
        ],
      },
      {
        heading: "Review and Re-record",
        headingLevel: 2,
        body: "Listen to the whole take once without touching the controls. On the second listen, focus on one question at a time: Is the opening clear? Does the contrast arrive too early or too late? Is the ending obvious? Is one voice covering the others? Write down one change, then make a new take that addresses only that change. Comparing two versions is more useful than making five random attempts. Two or three focused takes are usually enough for a short piece. If you are recording with a class or a friend, let the performer listen first and describe what they heard before anyone else offers advice.",
      },
      {
        heading: "Share the Recording Link",
        headingLevel: 2,
        body: "After a take, use the share option near the playback controls. The experiment creates a unique URL that replays the performance. No account is required on either end, which is what makes the sharing model feel frictionless: you can send a link to a friend, a teacher, or a family member and they can open it in a browser. Copy the complete URL, including everything after the # symbol. That fragment is part of the recording reference, and a link that loses it may open the play page instead of your take. Test the link in a private window before sending it to a group. Avoid link shorteners and messaging tools that rewrite URLs, because the fragment may not survive the trip. Open the link in a normal browser tab rather than an in-app browser inside a social app.",
      },
      {
        heading: "Play a Recording on This Site",
        headingLevel: 2,
        body: "This site provides two helpers for organizing recordings. The gallery accepts a title, a short description, and a valid Blob Opera recording link, then stores the entry in your browser's local storage on that device. Nothing is uploaded, and the entries are not visible to other visitors. Clearing the browser's site data removes them. The watch page accepts a recording URL as a parameter and embeds the official player for that recording; it only accepts links in the recognized Blob Opera recording format, such as a gacembed.withgoogle.com/blob-opera link with the recording path after the #. Neither helper copies or re-hosts the audio. Both simply point the browser back to Google's player, so they depend on the same link and service that the original share button depends on.",
      },
      {
        heading: "Use Recordings in the Classroom",
        headingLevel: 2,
        body: "Recordings are useful for assessment and reflection, but they need a clear policy. Ask students for permission before recording, explain who will be able to open the link, and avoid posting a student's performance publicly without written approval that follows your school's rules. A shared class link can be posted in a learning management system if the class understands that anyone with the URL may be able to open it. Keep a simple naming convention so you can match a link to a student or group without putting personal information in the title. If you need a file for a presentation, check the current interface first; do not assume the experiment exports an audio file just because it can play a take back.",
      },
      {
        heading: "Troubleshooting Recording Problems",
        headingLevel: 2,
        body: "Most recording failures fall into a few categories. Use the shortest check that matches the symptom:",
        listItems: [
          "No recording control: update the browser, enlarge the window, and compare with the official page in the same browser.",
          "The take stops or sounds glitchy: close heavy tabs, shorten the performance, and try wired headphones.",
          "Playback is silent: click inside the player, check tab mute, system volume, and the output device.",
          "The share link does not open: copy the full URL including the fragment, avoid shorteners, and test in a private window.",
          "The link opens the play page instead of the recording: the recording fragment is missing or the link was truncated.",
          "The link works on one device but not another: test another network and browser before assuming the recording is gone.",
        ],
      },
      {
        heading: "Frequently Asked Questions",
        headingLevel: 2,
        body: "These are the questions that come up most often after a first recording.",
      },
      {
        heading: "Do I need an account to record?",
        headingLevel: 3,
        body: "No. You can record and share without creating an account on the experiment or on this site. A person opening the link also does not need to sign in.",
      },
      {
        heading: "Is there a download button?",
        headingLevel: 3,
        body: "Google's public materials describe recording, playback, and sharing, not a documented audio download. Check the current interface rather than assuming a format. If you need a video file for a lesson or portfolio, ask permission and use your operating system's screen recording tools only when that is allowed.",
      },
      {
        heading: "How long can a recording be?",
        headingLevel: 3,
        body: "The public materials do not state a maximum length. Short takes are safer for performance and easier to review, and they are usually more engaging to share. A focused thirty to sixty seconds is a good target for a first project.",
      },
      {
        heading: "Can I edit a recording after saving it?",
        headingLevel: 3,
        body: "There is no documented editor for trimming or rearranging a take. The practical workflow is to re-record with one specific change. Keeping notes on what you want to improve makes the second take much faster.",
      },
      {
        heading: "Are recordings public?",
        headingLevel: 3,
        body: "A recording is reachable by anyone who has the link, but the public materials do not describe it as a public directory or social feed. Treat the link as shareable rather than secret, and do not record anything you would not want a recipient to pass on.",
      },
      {
        heading: "Can I delete a recording?",
        headingLevel: 3,
        body: "The public materials do not document a deletion control for shared recordings. Record with that in mind, and avoid including personal information in a title or description. If a link must be withdrawn, stop distributing it and contact the official project through its published feedback channel.",
      },
      {
        heading: "Why does my shared link sound different from what I played?",
        headingLevel: 3,
        body: "The share link replays the performance inside the hosted player, and the public materials do not promise bit-for-bit reproduction of every synthesis detail. Small differences in browser, audio output, or playback timing can change what you notice. Compare the same link on two devices before treating it as a bug.",
      },
    ],
  },

  {
    meta: {
      slug: "city-themes-preset-songs",
      title: "Blob Opera Songs and World Tour Cities: What You Can Play",
      description: "Which Blob Opera preset songs and world tour cities Google has described, why the list can change, and how to use presets to learn the controls.",
      category: "guides",
      readingTime: 7,
      publishedAt: "2026-07-14",
      updatedAt: "2026-10-21",
      keywords: ["blob opera songs", "blob opera cities", "blob opera world tour", "blob opera preset songs", "blob opera la bamba"],
      relatedSlugs: ["how-to-play-blob-opera", "recording-guide", "why-blob-opera-is-genius"],
    },
    sections: [
      {
        heading: "What a Preset Performance Is",
        headingLevel: 2,
        body: "A preset is a prepared performance that the experiment can play for you. It is not a tutorial, a score, or a recording of a live singer. The blobs move through a planned sequence while the audience listens, which makes presets useful as demonstrations: they show what the quartet can do before you try to control it yourself. Presets also make the experiment feel like a small show rather than a toy. The important caveat is that the preset list belongs to the Google-hosted interface. Songs can appear, move, or disappear when the project is updated, and the same version may not be available in every region or on every device. If a song you remember is missing, that is usually a change in the hosted experience rather than a problem with your browser.",
      },
      {
        heading: "A Holiday Experiment First",
        headingLevel: 2,
        body: "Blob Opera launched in December 2020 as a holiday-themed experiment from Google Arts & Culture, created by David Li in collaboration with the project team. The original presentation leaned into seasonal music, which is why discussions of the experiment often mention holiday songs alongside the four blobs. The playful premise was simple: four characters, four voice types, and a browser interface that let anyone conduct a small vocal ensemble. That holiday framing is part of the project's identity, but it is not the whole story. The experiment later expanded with a world-tour presentation, and the playable quartet remained at the center of both versions.",
      },
      {
        heading: "The World Tour Cities",
        headingLevel: 2,
        body: "Google's world-tour story describes the blobs visiting a set of cities. The locations named in the project's public materials include Cape Town, London, Mexico City, New York, Paris, and Seoul. These are presentation themes and locations for performances, not six different quartets: the four voice characters remain the instrument you control. The city list is best treated as a snapshot of what Google has described, not as a permanent menu. A hosted experiment can rotate content, show a subset of locations, or change the visual treatment without publishing a changelog. If your version shows a different set of places, trust the interface in front of you and treat older articles, including this one, as historical context.",
        listItems: [
          "Cape Town, South Africa",
          "London, United Kingdom",
          "Mexico City, Mexico",
          "New York City, United States",
          "Paris, France",
          "Seoul, South Korea",
        ],
      },
      {
        heading: "Songs Google Has Mentioned",
        headingLevel: 2,
        body: "Google's public descriptions of the project mention seasonal classics, 'Frère Jacques,' and 'La Bamba.' Those references are useful because they are documented, but they are not a complete track list. The interface may show additional prepared pieces, and the names may be written differently in different languages. The blobs do not sing lyrics in the way a human choir would; their voices are built around vowel sounds, so a familiar tune is recognizable through its melody and rhythm rather than through words. That is part of the charm. It also means a preset is an interpretation, not a karaoke backing track. If you want to know what is available right now, open the experiment and look at the current controls rather than relying on an article written months earlier.",
      },
      {
        heading: "Why There Is No Reliable Complete List",
        headingLevel: 2,
        body: "A fan site cannot publish a definitive catalog of a hosted interface it does not control. Google has not provided a public API, a permanent changelog, or a guarantee that a given preset will remain available. Regional availability, browser support, and seasonal updates can all change what a visitor sees. Search results often mix screenshots from different years, which makes old lists look current. The honest approach is to separate three things: what Google has publicly described, what the interface shows today, and what you can create yourself by playing. This guide can help with the first, your browser can confirm the second, and the third does not depend on a preset at all.",
      },
      {
        heading: "How to Listen to a Preset",
        headingLevel: 2,
        body: "A preset is more useful when you listen with a job. Try this sequence the next time one is available:",
        listItems: [
          "Listen once without watching the screen. Identify the highest and lowest voices by ear.",
          "Listen again and count the phrases. Notice where the music pauses or changes direction.",
          "Watch one blob rather than the whole group. Describe its movement in three words.",
          "Listen for a repeated shape. Presets often rely on repetition to make a short piece feel complete.",
          "Compare the preset with your own free play. What does the prepared version do that you would not have tried?",
        ],
      },
      {
        heading: "Turn a Preset into Practice",
        headingLevel: 2,
        body: "You do not need to reproduce an entire song to learn from it. Pick one short phrase and treat it as an exercise. Hum the phrase first, then find the starting register with one blob. Move through the contour slowly, and do not worry about matching every note. Once the shape feels stable, change the vowel color and listen to how the character shifts. Add a deliberate ending, then record the result and compare it with the original. This process teaches phrasing and control more effectively than trying to copy a full arrangement gesture for gesture. It also avoids the frustration of chasing an exact reproduction that the interface may not allow.",
      },
      {
        heading: "Can You Add Your Own Song?",
        headingLevel: 2,
        body: "Blob Opera is an instrument and an experiment, not a general-purpose song player. Google's public materials do not document a MIDI import, a custom song upload, or a searchable song library. You can perform a melody by ear, and you can shape the quartet around a harmonic idea, but you should treat claims about hidden upload features with caution. Third-party sites sometimes describe workflows that the official project does not support, or they mix up Blob Opera with a different music tool. If a tutorial asks you to install something or enter an account password to unlock a song, stop and verify the claim against the official project page. The safest creative path is the one the interface actually offers: move the blobs, listen, and build your own short piece.",
      },
      {
        heading: "Classroom Ideas",
        headingLevel: 2,
        body: "The city list is a natural geography hook, but use it carefully. Ask students to locate the cities on a map and discuss how a presentation can change the feeling of a performance without changing the notes. Compare two presets, if available, and describe one difference in texture, register, or pacing. Avoid turning a city into a stereotype about local music; the world-tour theme is a visual and programming device, not a claim that one city has one musical style. For a longer lesson, pair a preset with the classroom lesson plan on this site and let students create a short response to what they heard.",
      },
      {
        heading: "Frequently Asked Questions",
        headingLevel: 2,
        body: "These answers separate documented information from details that depend on the current interface.",
      },
      {
        heading: "What songs can Blob Opera play?",
        headingLevel: 3,
        body: "The experiment can play prepared presets and can be controlled freely by the player. Google's public descriptions mention seasonal classics, 'Frère Jacques,' and 'La Bamba,' but there is no permanent public catalog of every preset.",
      },
      {
        heading: "Can I choose a specific song?",
        headingLevel: 3,
        body: "If the current interface offers a preset menu, you can choose from what is listed. There is no documented search or request feature for arbitrary songs. You can always approximate a melody by ear with the free controls.",
      },
      {
        heading: "Are the city themes still available?",
        headingLevel: 3,
        body: "That depends on the version Google is serving. The world-tour story describes Cape Town, London, Mexico City, New York, Paris, and Seoul, but a hosted experiment can change its presentation. Check the current page rather than an older screenshot.",
      },
      {
        heading: "Does each city have its own song?",
        headingLevel: 3,
        body: "The public materials do not document a permanent one-to-one mapping between cities and songs. Treat any such list you find online as unverified unless it comes from the official project and matches the interface you see.",
      },
      {
        heading: "Can I upload a MIDI file or my own composition?",
        headingLevel: 3,
        body: "No such import is documented in the official materials. Blob Opera is played through its own controls. For composition work with MIDI, use a tool designed for that purpose and keep Blob Opera for live exploration and performance.",
      },
      {
        heading: "Do the blobs sing words?",
        headingLevel: 3,
        body: "They produce vowel-based vocal sounds rather than lyrics. A familiar melody is recognizable through pitch and rhythm, not through text. That is also why the experiment is useful for focusing a listener on timbre and phrasing.",
      },
      {
        heading: "Why did a song disappear?",
        headingLevel: 3,
        body: "The experiment is hosted and updated by Google, and content can change without a public changelog. Seasonal programming, regional differences, or a redesign can all affect what appears. This site cannot restore a removed preset.",
      },
    ],
  },

  {
    meta: {
      slug: "how-blob-opera-works",
      title: "How Does Blob Opera Work? Machine Learning, Voices, and Harmony",
      description: "A sourced explanation of how Blob Opera turns four voices into a playable quartet: the 16 hours of training recordings, the singing model, the harmony model, and the limits of what Google has disclosed.",
      category: "ai-music",
      readingTime: 10,
      publishedAt: "2026-10-22",
      keywords: ["how does blob opera work", "blob opera machine learning", "blob opera harmony", "blob opera ai", "blob opera technical"],
      relatedSlugs: ["how-to-play-blob-opera", "ai-collaboration-vs-automation", "why-blob-opera-is-genius"],
    },
    sections: [
      {
        heading: "The Short Answer",
        headingLevel: 2,
        body: "Blob Opera is a browser-based machine-learning experiment in which four characters represent bass, tenor, mezzo-soprano, and soprano. You drag one blob up or down to change pitch and move it along the other axis to change vowel color. The other three voices respond and harmonize automatically. Google describes two trained models: one that learned to produce opera-inspired singing and one that learned to harmonize the player's input. The sound you hear is generated by the model, not a playback of the four singers' original recordings. That is the basic loop. The interesting part is everything hidden behind it: the source recordings, the two models, the real-time browser constraints, and the details Google has chosen not to publish.",
      },
      {
        heading: "Four Singers and Sixteen Hours of Source Material",
        headingLevel: 2,
        body: "Google credits four professional singers for the source material: tenor Christian Joel, bass Frederick Tong, mezzo-soprano Joanna Gamble, and soprano Olivia Doutney. Together they recorded 16 hours of singing. Google's project story describes the sessions as solo studio work in which the singers supplied operatic material written on one note and sung across a range of pitches. That kind of controlled material gives a model many examples of the same pitch with different vowels and voice types. It is also a reminder that the experiment began with real labor by real musicians, even though the finished blobs do not simply replay their voices. The recordings are not distributed as a public dataset, and the public materials do not include a dataset card, annotation guide, or licensing terms for reuse.",
      },
      {
        heading: "What the Singing Model Learned",
        headingLevel: 2,
        body: "David Li's public explanation says the 16 hours of singing were fed into a convolutional neural network that learned to reproduce each represented voice type. The official experiment page adds an important distinction: listeners hear the model's understanding of what opera singing sounds like, based on what it learned from the recordings. They do not hear the singers' original performances being stitched together. That distinction rules out a simple concatenative sampler. It does not tell us how the network represents pitch, vowels, transitions, or expression internally. Is the model generating a waveform directly, predicting an acoustic feature, or driving another synthesis stage? Google has not published that pipeline, so a confident diagram of the system would be speculation dressed up as fact.",
      },
      {
        heading: "The Second Model: Harmony in Real Time",
        headingLevel: 2,
        body: "Google says the team created two models: one taught the computer to sing and another taught it to harmonize. The second model is what makes the quartet feel responsive. When you move one blob, the other voices react around your input rather than remaining fixed. That is why a single gesture can produce a complete vocal texture instead of one lonely note. The public account stops at the behavior. It does not publish a chord vocabulary, a rule set, a training corpus, or a description of how far ahead the harmony model plans. We can hear that some results feel stable and others feel tense, but we cannot turn those impressions into a claim that the model follows a particular textbook of four-part writing. The honest description is behavioral: the model responds to the player's input in real time, and its internal method is not publicly documented.",
      },
      {
        heading: "Why the Quartet Feels Playable in a Browser",
        headingLevel: 2,
        body: "Interactive music only feels convincing when sound follows a gesture quickly and consistently. Delay can come from input handling, model computation, audio buffering, device drivers, and the output hardware. Blob Opera uses what Google calls modern web-audio technology and responds in real time, but the public materials do not specify the audio frame size, the sample generation method, or which computations happen locally versus through other browser resources. Google also notes that the experiment may not perform optimally on older devices. A separate, optimized 16-blob performance at Google I/O was described with WebAssembly SIMD, but that does not prove the public four-blob version uses the same architecture. The safe conclusion is that the experience is engineered for low-latency browser interaction, not that we know the exact optimization stack.",
      },
      {
        heading: "A Short History of Algorithmic Composition",
        headingLevel: 2,
        body: "Blob Opera belongs to a much older lineage of music made with systems. In 1787, a musical dice game attributed to Mozart let a player combine pre-composed fragments to produce a waltz. In 1957, Lejaren Hiller and Leonard Isaacson used the ILLIAC I computer to generate the Illiac Suite by encoding rules of counterpoint and harmony. Around the same period, Iannis Xenakis used mathematical probability to shape orchestral works. These projects differ enormously, but they share a question: how much of a piece can be specified by a process, and how much depends on a performer or a moment of choice? Blob Opera is not an autonomous composer. It is an interactive instrument in which a person supplies gestures and trained models supply voices and harmony. The history is useful context, not evidence about the experiment's training data or internal rules.",
      },
      {
        heading: "What Google Has Not Disclosed",
        headingLevel: 2,
        body: "Several details are often asserted online without a source. The public materials do not provide:",
        listItems: [
          "The exact convolutional network architecture, layer count, or parameter count used for the singing model.",
          "Training duration, hardware, loss functions, or the precise representation the model predicts.",
          "The annotation scheme, dataset license, or full contents of the 16 hours of recordings.",
          "The harmony model's architecture, training corpus, chord vocabulary, or rule set.",
          "A named neural vocoder or a sample-level waveform-generation method.",
          "Audio buffer size, frame size, latency budget, or which inference work happens on the device.",
          "Quantization, pruning, distillation, or other optimization techniques used in the public version.",
        ],
      },
      {
        heading: "How the Two Models Meet Your Gesture",
        headingLevel: 2,
        body: "You do not need the internal details to hear the division of labor. Pick one voice and hold a note. The other three settle into a chord around it. Move slowly upward or downward and listen to how the harmony follows. Change the vowel without changing pitch and notice that the character of the sound changes even though the represented note stays put. Now lead with a different voice. The same gesture will produce a different balance because the input has moved to another part of the quartet. Keep in mind that screen proximity is not a documented harmony control. Moving two blobs closer together on the canvas may change the visual composition, but the musical response comes from the model, not from a hidden distance slider. Listen to the result rather than inventing a rule for it.",
      },
      {
        heading: "A Five-Minute Listening Exercise",
        headingLevel: 2,
        body: "Use this sequence to hear the system without trying to reverse-engineer it:",
        listItems: [
          "Solo the bass and hold one note for five seconds. Listen to the lowest part of the texture.",
          "Add a slow slide upward and back. Notice whether the other voices move at the same time or respond after your gesture.",
          "Change only the vowel and describe the difference with three adjectives.",
          "Lead with the soprano and repeat the same shape. Compare the balance with the bass-led version.",
          "Record a thirty-second take and listen back. Name one moment where the quartet felt stable and one where it felt tense.",
        ],
      },
      {
        heading: "Blob Opera Is Not a Voice Simulator",
        headingLevel: 2,
        body: "The experiment represents four voice categories, not every human voice. It does not accept microphone input, teach breath support, display notation, or evaluate a singer. It produces vowel-based vocal sound rather than lyrics, and its harmony is automatic rather than a chord editor. Those limits are part of the design. A four-voice quartet with a forgiving interface is easier to understand than a complete vocal simulator, and the constraint is what makes the first minute so approachable. Treat Blob Opera as an interactive introduction to register, ensemble sound, and model-generated voice. It is a doorway into deeper listening, not a substitute for training or a scientific model of singing.",
      },
      {
        heading: "Frequently Asked Questions",
        headingLevel: 2,
        body: "These answers separate published project facts from details that are not documented.",
      },
      {
        heading: "Are the blobs singing recordings of real people?",
        headingLevel: 3,
        body: "No. Four singers recorded the source material, but Google says the experiment produces the model's understanding of opera singing rather than replaying the original voices.",
      },
      {
        heading: "How many models does Blob Opera use?",
        headingLevel: 3,
        body: "Google describes two: one for the singing voices and one for harmony. The second lets the other blobs respond to and harmonize the player's input in real time.",
      },
      {
        heading: "What kind of neural network does it use?",
        headingLevel: 3,
        body: "David Li publicly identified a convolutional neural network for the singing model. Google has not published the architecture or training recipe, and the harmony model's architecture is not documented.",
      },
      {
        heading: "Does Blob Opera use a neural vocoder?",
        headingLevel: 3,
        body: "That is not documented. Neural vocoders are a real technology used in audio generation, but applying the term to Blob Opera without a source would be a guess.",
      },
      {
        heading: "Can I play Blob Opera offline?",
        headingLevel: 3,
        body: "No. The experiment is hosted by Google and needs a connection to load. The controls may run locally after loading, but the page itself is not an offline download.",
      },
      {
        heading: "Why do the other blobs harmonize automatically?",
        headingLevel: 3,
        body: "A second trained model responds to your input. Google has not published the rule set or training data behind that response, so the audible behavior is the reliable evidence.",
      },
      {
        heading: "Is Blob Opera AI-generated music?",
        headingLevel: 3,
        body: "It is a collaborative AI instrument. The voices and harmony are model-generated, but a person shapes the performance through gestures. It is not an autonomous system that writes a complete piece from a prompt.",
      },
      {
        heading: "How long did training take?",
        headingLevel: 3,
        body: "Google has not disclosed the training duration, hardware, or loss functions. The public figure that is documented is the 16 hours of source singing.",
      },
    ],
  },

  {
    meta: {
      slug: "harmony-and-melody-in-blob-opera",
      title: "Harmony and Melody in Blob Opera: A Practical Guide",
      description: "How Blob Opera's automatic harmony responds to your gestures, plus a practical method for shaping melodies with contour, repetition, phrasing, and contrast.",
      category: "guides",
      readingTime: 9,
      publishedAt: "2026-10-22",
      keywords: ["blob opera harmony", "blob opera melody", "how to make a melody in blob opera", "blob opera tips", "automatic harmony"],
      relatedSlugs: ["how-to-play-blob-opera", "what-are-the-four-voice-types", "vocal-expression-in-blob-opera"],
    },
    sections: [
      {
        heading: "What You Control and What the Quartet Supplies",
        headingLevel: 2,
        body: "Blob Opera gives you a small set of controls and a large amount of automatic support. You move one blob at a time. One direction changes pitch and the other changes vowel color. The remaining three voices respond with harmony, so you are never placing every note of a chord by hand. That division is the key to the whole experience. You are shaping a line inside an ensemble, not programming a four-part arrangement. Once you accept that, melody becomes the main job: make the lead voice say something clear, and let the quartet handle the supporting texture. You can switch which blob leads, but you still control one voice at a time. There is no chord grid, no MIDI editor, and no documented way to assign a specific chord to a specific moment.",
      },
      {
        heading: "Harmony Without a Theory Prerequisite",
        headingLevel: 2,
        body: "Harmony is what happens when two or more notes sound together. Listeners hear some combinations as stable and others as tense, and music often works by moving between those feelings. Those impressions are real, but they are also shaped by culture, familiarity, and context. A chord that sounds unresolved in one style may sound perfectly settled in another. Blob Opera does not require you to name intervals or chords before you begin. Start by noticing whether the quartet sounds grounded, restless, bright, or crowded. Then change one thing and listen again. That habit is more useful than memorizing a rule you cannot hear. The experiment is a place to train perception, not a theory test with a hidden answer key.",
      },
      {
        heading: "Why Screen Distance Is Not a Harmony Slider",
        headingLevel: 2,
        body: "A common assumption is that dragging blobs closer together creates tension and pulling them apart creates stability. The screen geometry is not a documented harmony control. The musical response comes from the voices you move, their pitch, their vowel color, and the harmony model's response. Two blobs can look close together while the sounding interval is wide, and they can look far apart while the harmony remains stable. Use the visual layout as a way to find and grab a character, not as a chord diagram. This matters for practice: if you believe distance controls harmony, you will spend time arranging the screen instead of listening. Move one voice deliberately, hold still, and judge the result by ear.",
      },
      {
        heading: "Start a Melody With One Voice",
        headingLevel: 2,
        body: "Pick the tenor or mezzo-soprano for a first melody. Both sit in the middle of the texture, so your line stays audible without covering the quartet. Hum a shape before you touch the screen: up a little, down a little, then a longer note. Now reproduce that shape slowly. A melody does not need many notes. Four to eight gestures can be enough for a phrase, especially when the harmony is already filling the space. Resist the urge to move constantly. A held note gives the listener time to hear the chord and gives your next move a clear starting point. If you cannot hum your line back after playing it, simplify it. Singability is a better first target than complexity.",
      },
      {
        heading: "Shape a Line With Steps and Leaps",
        headingLevel: 2,
        body: "Many memorable melodies mix small steps with an occasional larger leap. That is a useful starting point, not a universal law. In Blob Opera, try a connected contour first: move by small amounts, repeat the shape, then change one leap. The repetition makes the change audible. If every gesture is a wide jump, the listener has no stable reference; if every gesture is a tiny step, the line can feel static. Contrast is what makes a shape feel deliberate. A leap is more effective when it arrives after a phrase the ear already knows. Record two versions, one with a small change and one with a large leap, and decide which one communicates the idea you intended.",
      },
      {
        heading: "Let the Melody Breathe",
        headingLevel: 2,
        body: "Music phrases breathe. A singer needs air, and a listener needs a moment to absorb what just happened. In Blob Opera, a pause can be a held note or a brief stillness between gestures. Try building phrases of four to eight gestures, then hold or stop before the next phrase. Ask where a singer would naturally take a breath. That is usually a good place to end the phrase, even though the blobs do not actually breathe. Silence is part of the performance. A short pause can make the next entrance feel intentional and can keep a busy quartet from turning into a wall of sound. If you are recording, a pause also gives the listener a clear marker for the structure of the take.",
      },
      {
        heading: "Create Contrast With Register, Vowel, and Density",
        headingLevel: 2,
        body: "Contrast is the engine of a short performance. Blob Opera does not document a volume control, so avoid thinking in terms of loud and soft. Think in dimensions you can actually shape. Register is one: move the lead voice lower for a grounded section and higher for a climax. Vowel color is another: a bright open vowel feels different from a rounded one even at the same pitch. Pace is a third: a slow slide feels smooth, while a quick gesture feels more dramatic. Density is a fourth: you control one voice, but the harmony around it can feel fuller or sparser depending on register and movement. Change one dimension at a time. If you change register, vowel, and speed together, you will hear a difference but you will not know which choice caused it.",
      },
      {
        heading: "A Five-Step Melody Exercise",
        headingLevel: 2,
        body: "Use this sequence when you want a short piece with a clear shape:",
        listItems: [
          "Choose one lead voice and hold a starting note for three seconds.",
          "Move up or down by a small step, then return to the starting note.",
          "Repeat the shape once so the listener has a reference.",
          "Add one contrast: a leap, a register change, or a vowel change. Pick only one.",
          "End on a held note, then stop. Listen back and name the moment that worked best.",
        ],
      },
      {
        heading: "A Harmony Listening Test",
        headingLevel: 2,
        body: "You do not need to identify chords to hear the ensemble. Try this test with four short passes:",
        listItems: [
          "Lead with the bass and hold. Describe the texture as grounded, heavy, or something else.",
          "Lead with the soprano and hold the same duration. Notice whether the quartet feels brighter or more exposed.",
          "Move the lead voice slowly through three nearby pitches. Listen for a moment that feels stable and one that feels restless.",
          "Change only the vowel at one of those pitches. Notice whether the harmony seems to change color even though you did not move the pitch.",
          "Switch the lead voice and repeat the same contour. Compare the balance rather than looking for a correct answer.",
        ],
      },
      {
        heading: "Common Mistakes",
        headingLevel: 2,
        body: "Most problems in a short performance come from a few habits:",
        listItems: [
          "Trying to control all four blobs. Start with one line and let the harmony do its job.",
          "Moving constantly. Holds and pauses make the next gesture meaningful.",
          "Changing too many dimensions at once. Compare one variable at a time.",
          "Confusing screen distance with musical tension. Judge by ear, not by layout.",
          "Making the take too long. A focused thirty to sixty seconds is easier to shape and review.",
          "Never listening back. Playback reveals balance and pacing problems that are hard to notice while playing.",
        ],
      },
      {
        heading: "Frequently Asked Questions",
        headingLevel: 2,
        body: "These are the questions players ask when they move from random gestures to deliberate shaping.",
      },
      {
        heading: "Does Blob Opera harmonize automatically?",
        headingLevel: 3,
        body: "Yes. Google describes a second model that lets the other blobs respond to and harmonize your input in real time. You do not place each harmony note yourself.",
      },
      {
        heading: "Can I control the chords directly?",
        headingLevel: 3,
        body: "No chord grid or chord-selection control is documented. You influence the harmony by choosing which voice leads, where it moves, and which vowel it uses. The exact harmony logic is not public.",
      },
      {
        heading: "Why does the harmony change when I move one blob?",
        headingLevel: 3,
        body: "The harmony model responds to your input. Changing pitch, vowel, or the leading voice gives it a different musical context, so the other parts adjust. The internal method is not documented.",
      },
      {
        heading: "Is there a wrong note?",
        headingLevel: 3,
        body: "There is no score, timer, or fail state. That does not mean every combination sounds conventional; your ear is still the judge. The experiment is designed for exploration rather than graded performance.",
      },
      {
        heading: "How long should a melody be?",
        headingLevel: 3,
        body: "A few phrases are enough. Four to eight gestures per phrase and a total of thirty to sixty seconds is a practical target for a first recording. Longer takes are harder to shape and review.",
      },
      {
        heading: "Can I learn from a preset?",
        headingLevel: 3,
        body: "If a preset is available in your version, listen for its register changes, repeated shapes, and ending. A preset is a prepared performance, not a notation tutorial, so use it as a listening reference rather than a score to copy.",
      },
      {
        heading: "What is voice leading?",
        headingLevel: 3,
        body: "Voice leading describes how individual musical lines move while forming harmony together. Small, singable motions are common in many styles, but Blob Opera does not publish a rule set, so you should not assume it follows a particular textbook method.",
      },
    ],
  },

  {
    meta: {
      slug: "vocal-expression-in-blob-opera",
      title: "Vocal Expression in Blob Opera: Vowels, Vibrato, Portamento, and Dynamics",
      description: "A listener's guide to expression in Blob Opera: how vowel color, pitch movement, vibrato, portamento, and perceived intensity shape a performance.",
      category: "music-education",
      readingTime: 9,
      publishedAt: "2026-10-22",
      keywords: ["blob opera vibrato", "blob opera vowels", "portamento singing", "dynamic range singing", "vocal expression"],
      relatedSlugs: ["what-are-the-four-voice-types", "harmony-and-melody-in-blob-opera", "how-to-play-blob-opera"],
    },
    sections: [
      {
        heading: "Expression From Three Dimensions You Can Shape",
        headingLevel: 2,
        body: "Blob Opera gives the player a deliberately small control surface. Pitch is the obvious dimension: move a blob higher or lower and the represented voice follows. Vowel color is the second: moving along the other axis changes the character of the sound without necessarily changing the note. Timing is the third: a slow gesture, a held note, or a sudden movement changes how the same pitch feels. Everything expressive in the experiment grows from those three dimensions plus the automatic harmony around them. There is no documented volume slider, no vibrato knob, and no articulation menu. That limitation is useful. It focuses attention on the choices a singer makes with pitch, color, and timing before adding effects.",
      },
      {
        heading: "Vowel Color: Ah, Oo, and the Space Between",
        headingLevel: 2,
        body: "Sing the same note on 'ah' as in 'father,' then on 'oo' as in 'boot.' The pitch is identical, but the sound is dramatically different. The difference comes largely from the shape of the vocal tract: tongue position, jaw opening, and lip rounding change which frequencies are emphasized. An open 'ah' tends to sound brighter and more present, while a rounded 'oo' tends to sound darker and more covered. Blob Opera lets you move between vowel colors while holding a pitch, which makes the effect easy to hear. The exact screen direction can be described as forward and backward in Google's guide, but a flat display can make it feel horizontal. Do not rely on a memorized direction. Move slowly, hold the pitch as steady as you can, and listen for the change in color. Then repeat the same vowel shift on a different blob. The same gesture will sound different because the underlying voice category is different.",
      },
      {
        heading: "Vibrato: Movement Inside a Held Note",
        headingLevel: 2,
        body: "Vibrato is a regular, pulsing change in pitch that adds warmth and life to a sustained note. In trained singing it is often described as roughly five to eight oscillations per second, but the rate and width vary by singer, style, pitch, and intention. It is not a cosmetic wobble applied from outside; it emerges from coordinated breath, vocal-fold behavior, and resonance. A straight tone is also a legitimate expressive choice, so a steady pitch is not automatically less musical. Blob Opera's sustained tones have an opera-inspired character that can prompt a discussion about vibrato, but Google does not publish a vibrato rate for each blob or claim that the model reproduces a documented physiological vibrato. Listen for movement in a held note, then compare it with recordings of real singers. Treat the experiment as a listening prompt, not a measurement instrument.",
      },
      {
        heading: "Portamento: The Audible Slide",
        headingLevel: 2,
        body: "Portamento is a smooth, audible slide from one pitch to another. It is related to legato, but the two terms are not identical. Legato means connecting notes without silence; portamento goes further and lets the listener hear the pitch travel through the space between them. A quick slide can create urgency, while a slow, wide slide can feel dramatic or cinematic. Blob Opera's continuous pitch control makes a slide easy to perform: move slowly and the voice passes through the intermediate pitches. Google's public materials do not isolate portamento as a separately measured training target, so we should not claim that the model was explicitly trained to imitate a particular singer's portamento. The reliable observation is simpler: a continuous gesture produces a continuous-sounding glide, and the speed and width of that gesture change its expressive effect.",
      },
      {
        heading: "Dynamics Without a Volume Slider",
        headingLevel: 2,
        body: "Dynamic contrast is central to singing. A soft passage can feel intimate; a powerful climax can feel overwhelming. Blob Opera's documented controls are pitch and vowel color, and Google does not document a separate volume control. That means you should not assume that dragging faster makes the blobs louder or that a lower register is automatically quieter. You can still create a perceived arc. Change register, pace, vowel color, repetition, and the density of your gestures. A low, slow, repeated phrase feels different from a high, wide, quick one even if the actual output level is similar. This is a compositional suggestion, not a claim that the model simulates breath pressure or vocal effort. Listen for the illusion of intensity rather than looking for a hidden fader.",
      },
      {
        heading: "A Four-Part Listening Exercise",
        headingLevel: 2,
        body: "Use one blob and four short passes to isolate the expressive dimensions:",
        listItems: [
          "Hold a single note without moving. Describe the tone color and any movement you hear inside the sustain.",
          "Move slowly up and back down. Notice whether the slide sounds continuous or stepped, and how the harmony responds.",
          "Hold the pitch steady and change only the vowel. Name the change in brightness, roundness, or openness.",
          "Create a short phrase with one low section, one high section, and a held ending. Describe the arc without using the words loud or soft.",
        ],
      },
      {
        heading: "Build an Expressive Phrase",
        headingLevel: 2,
        body: "A short performance can feel complete without many notes. Try this five-part shape:",
        listItems: [
          "Open on a held note in a comfortable middle register.",
          "Change the vowel once while keeping the pitch steady, so the listener hears color rather than motion.",
          "Slide to a nearby pitch and hold it long enough for the harmony to settle.",
          "Move to a higher or lower register for the high point, then return.",
          "End on a held note with a deliberate stop rather than a fade in the middle of a gesture.",
        ],
      },
      {
        heading: "What the Experiment Does Not Teach",
        headingLevel: 2,
        body: "Blob Opera can sharpen your ear for color, glide, and phrasing, but it is not a singing lesson. It does not teach breath support, vocal-fold coordination, resonance placement, diction, or healthy practice habits. It does not accept a microphone or evaluate your voice, and it represents only four broad categories. Vibrato, portamento, and dynamic contrast in real singing involve physiology and style that a browser experiment cannot reproduce. Keep the distinction clear: the blobs are a model-inspired instrument, not a vocal coach. If you are a singer, use the experiment to test your perception and to describe what you hear, then take technical questions to a qualified teacher.",
      },
      {
        heading: "Classroom Connection",
        headingLevel: 2,
        body: "The four dimensions make a compact classroom listening activity. Ask students to describe a held note with three adjectives, then change only the vowel and describe it again. Have them draw the shape of a portamento as a line, or compare a slow slide with a quick one. The experiment needs no student accounts, which keeps the setup simple. Pair the activity with the voice-types guide so students can connect timbre to register, and use the classroom lesson plan for a longer structure. The goal is not to name every effect correctly. It is to give students vocabulary for what they hear and a reason to listen twice.",
      },
      {
        heading: "Frequently Asked Questions",
        headingLevel: 2,
        body: "These answers address the expressive features listeners notice most often.",
      },
      {
        heading: "Does Blob Opera have vibrato?",
        headingLevel: 3,
        body: "The sustained tones have an opera-inspired character that may include pitch movement, but Google does not publish a vibrato rate or claim a physiological vibrato model. Listen and compare with real singers rather than treating it as a measurement.",
      },
      {
        heading: "Can I control volume?",
        headingLevel: 3,
        body: "No separate volume control is documented. Pitch and vowel color are the documented controls. You can shape perceived intensity with register, pace, repetition, and density, but that is an interpretive effect rather than a simulated dynamic control.",
      },
      {
        heading: "Are the blobs singing words?",
        headingLevel: 3,
        body: "No. They produce vowel-based vocal sounds rather than lyrics. A familiar tune is recognizable through pitch and rhythm, not through text.",
      },
      {
        heading: "What is the difference between portamento and glissando?",
        headingLevel: 3,
        body: "Both involve sliding through pitches, and usage overlaps. Portamento often refers to a expressive vocal or string slide between two notes, while glissando is a broader term for a continuous slide across a range. In Blob Opera, a slow continuous gesture can sound like either.",
      },
      {
        heading: "Why does a slow gesture sound smoother?",
        headingLevel: 3,
        body: "A slow gesture gives the ear time to follow the pitch change and lets the harmony settle. A fast gesture compresses the transition. This is an audible effect of the interaction, not proof of a particular synthesis method.",
      },
      {
        heading: "Can I sound like a specific singer?",
        headingLevel: 3,
        body: "No voice cloning or named-singer mode is documented. The quartet represents four broad voice categories. The model learned from professional recordings, but the output is its own interpretation rather than a copy of an individual performer.",
      },
      {
        heading: "Is this useful for singers?",
        headingLevel: 3,
        body: "It can be useful for listening and vocabulary, especially for vowel color and phrasing. It is not a technique trainer and should not replace work with a qualified teacher or attention to vocal health.",
      },
    ],
  },

  {
    meta: {
      slug: "what-is-opera",
      title: "What Is Opera? A Beginner's Guide and Short History",
      description: "A beginner's guide to opera: its voices, arias, recitatives, and ensembles, a short history from Florence to the modern stage, and how Blob Opera fits in.",
      category: "music-appreciation",
      readingTime: 9,
      publishedAt: "2026-07-15",
      updatedAt: "2026-10-22",
      keywords: ["what is opera", "opera explained for beginners", "opera history", "opera music guide", "introduction to opera"],
      relatedSlugs: ["what-are-the-four-voice-types", "why-blob-opera-is-genius", "how-blob-opera-works"],
    },
    sections: [
      {
        heading: "Opera in One Sentence",
        headingLevel: 2,
        body: "Opera is a story told through singing, with instrumental music, staging, and often dance. It is sometimes called the original multimedia art form because it combines words, music, design, and performance in one evening. The label covers a huge range of works, from intimate chamber pieces to spectacles with large orchestras and choruses. At its core, though, opera does what spoken theater does: it puts people on stage and lets them want, argue, love, grieve, and change. The difference is that the emotional life of the story is carried by the voice. That is why opera can feel overwhelming to a newcomer and why it can also be immediately moving once the conventions become familiar.",
      },
      {
        heading: "The Building Blocks",
        headingLevel: 2,
        body: "Most operas use a handful of recognizable units. An aria is a solo number in which a character reflects on a feeling or decision; it is often the part audiences remember. Recitative is a speech-like style of singing that moves the plot forward. A duet or larger ensemble lets several characters sing at once, sometimes expressing different feelings about the same event. The chorus can represent a crowd, a community, or a collective voice. An overture or prelude is an instrumental opening that sets the mood. Not every opera uses every element, and composers have stretched or abandoned these forms for centuries. Knowing the terms simply gives you handholds for your first listening.",
      },
      {
        heading: "The Voices",
        headingLevel: 2,
        body: "Opera is built around voice categories. The bass sits lowest, the tenor is the highest natural male voice, the mezzo-soprano occupies the middle female range, and the soprano reaches the top. Operas also use baritones, contraltos, countertenors, and many subcategories. These labels describe range, timbre, and the kind of roles a singer is usually asked to perform; they are not a ranking of talent. A character may be written for a specific voice type because the composer wants a particular color, power, or agility. When you listen, try to notice the difference between a low, grounded line and a bright, high one before worrying about the exact label. The voice-types guide on this site goes deeper into the four categories represented in Blob Opera.",
      },
      {
        heading: "A Short History: Florence, 1597",
        headingLevel: 2,
        body: "Opera emerged in Florence around 1597, when a group of intellectuals known as the Florentine Camerata tried to recreate the dramatic power of ancient Greek theater. They believed Greek drama had been sung rather than spoken, so they developed a style of recitative that moved between speech and song. Claudio Monteverdi's L'Orfeo, first performed in 1607, is one of the earliest operas still regularly staged, and it helped establish the combination of recitative, aria, chorus, and instrumental color that later composers inherited. The art form spread quickly through Italian courts and cities, then across Europe. From the beginning, opera was expensive, collaborative, and tied to power as well as art.",
      },
      {
        heading: "Mozart and the Eighteenth Century",
        headingLevel: 2,
        body: "Mozart transformed opera in the late eighteenth century by making characters feel like recognizable people rather than allegorical types. The Marriage of Figaro, Don Giovanni, and The Magic Flute are very different works, but each uses music to reveal psychology: a character's charm, self-deception, or courage is audible in the way the line is written. Mozart also mastered the ensemble finale, in which several characters sing simultaneously about different things, creating a musical image of dramatic conflict. The eighteenth century also saw serious opera and comic opera develop along separate tracks, with different conventions and audiences. Mozart worked across those boundaries rather than ignoring them.",
      },
      {
        heading: "The Nineteenth Century",
        headingLevel: 2,
        body: "The nineteenth century produced a vast repertory that still dominates opera houses. Giuseppe Verdi gave Italian opera memorable melodies and intense dramatic situations; Richard Wagner expanded harmony, orchestration, and scale, and argued for a total union of music, poetry, and staging. Paris, Vienna, Prague, and Saint Petersburg developed their own traditions. National identity, revolution, religion, and folklore became operatic subjects. The century also saw the rise of the star singer and the touring opera company. It is tempting to summarize the period with a few names, but the reality is plural: comic opera, grand opera, bel canto, and music drama were different projects with different audiences and rules.",
      },
      {
        heading: "The Twentieth and Twenty-First Centuries",
        headingLevel: 2,
        body: "Twentieth-century opera fragmented into many styles. Puccini's verismo explored ordinary lives and intense emotion; Debussy, Berg, Shostakovich, Britten, and Janacek each built distinctive dramatic worlds. Minimalist composers such as Philip Glass and John Adams found new ways to combine repetition, speech, and historical subjects. Contemporary opera includes chamber works, site-specific productions, multimedia, and collaborations with filmmakers and digital artists. New operas are still being commissioned, and companies are rethinking casting, staging, and repertory. The art form that began in a Florentine academy is not a museum piece; it is a living practice that keeps changing its relationship to technology and audience.",
      },
      {
        heading: "Why Operas Are Long",
        headingLevel: 2,
        body: "A full evening can run two to four hours or more, with intermissions. Length comes from the way opera builds dramatic and musical arcs: arias give characters time to reflect, ensembles complicate the action, and orchestral passages set the scene. Some works are much shorter, and many audiences start with excerpts rather than a complete performance. You do not have to commit to a four-hour evening on your first attempt. Listen to a famous aria, read a synopsis, or watch a single act. Once the voices and conventions become familiar, the larger structure is easier to follow. Intermissions are part of the experience too: they give the audience and the performers a chance to reset.",
      },
      {
        heading: "Opera in the Digital Age",
        headingLevel: 2,
        body: "Recordings, cinema broadcasts, and streaming have made opera available far beyond the opera house. Subtitles and synopses lower the language barrier, and backstage documentaries show how productions are built. Interactive experiments take a different path. Blob Opera is not an opera: it has no plot, no libretto, no staging, and no human singers on stage. It is an opera-inspired instrument that lets a player shape a quartet of model-generated voices. Its value is introductory and playful. It can give a new listener a reason to explore vocal range, ensemble sound, and the idea of harmony, but it does not replace the experience of a live singer, an orchestra, or a dramatic production.",
      },
      {
        heading: "How to Listen to Your First Opera",
        headingLevel: 2,
        body: "A little preparation makes the first experience much friendlier:",
        listItems: [
          "Choose a famous work with a clear story, such as The Magic Flute, La Traviata, Carmen, or La Boheme.",
          "Read a one-page synopsis before you listen so you are not trying to follow the plot and the subtitles at the same time.",
          "Start with two or three well-known excerpts rather than the entire opera.",
          "Use subtitles or a translated libretto; you do not need to understand the original language to follow the emotion.",
          "If you attend in person, dress comfortably and arrive early. Opera audiences are less formal than the stereotype suggests.",
          "Notice one voice at a time: who is singing, how high or low the line sits, and how the orchestra supports it.",
        ],
      },
      {
        heading: "Frequently Asked Questions",
        headingLevel: 2,
        body: "These are the questions newcomers ask most often.",
      },
      {
        heading: "Is opera always in Italian?",
        headingLevel: 3,
        body: "No. Italian has a long history in opera, but major repertory exists in German, French, Russian, Czech, English, and other languages. Composers have also written operas in local languages and mixed languages.",
      },
      {
        heading: "Do I need to understand the language?",
        headingLevel: 3,
        body: "It helps to know the story, but you do not need to be fluent. Subtitles, synopses, and translations are standard. Much of the emotional information is carried by the music and the voice.",
      },
      {
        heading: "What is the difference between opera and musical theater?",
        headingLevel: 3,
        body: "Opera usually relies on trained, often unamplified voices with an orchestra, while musical theater often uses amplification and a broader mix of popular styles. The boundaries are not absolute, and many works borrow from both traditions.",
      },
      {
        heading: "Why do opera singers sound like that?",
        headingLevel: 3,
        body: "Operatic singing is designed to carry over an orchestra without a microphone. That requires resonance, breath control, and a trained voice, but the stereotype of constant shouting is misleading. Singers use a wide range of colors, dynamics, and phrasing.",
      },
      {
        heading: "What is a libretto?",
        headingLevel: 3,
        body: "The libretto is the text of an opera: the words, stage directions, and dramatic structure. It is usually written by a librettist, sometimes in collaboration with the composer.",
      },
      {
        heading: "How long is an opera?",
        headingLevel: 3,
        body: "Many full-length operas run two to four hours, often with intermissions. One-act and chamber operas can be much shorter. The length depends on the work, the production, and the edition.",
      },
      {
        heading: "Is Blob Opera an opera?",
        headingLevel: 3,
        body: "No. It is an interactive, opera-inspired machine-learning experiment. It has no plot, libretto, staging, or live singers. It can be a playful introduction to operatic voices and harmony, but it is not a substitute for the art form.",
      },
      {
        heading: "Where did opera begin?",
        headingLevel: 3,
        body: "It emerged in Florence around 1597, associated with the Florentine Camerata. Monteverdi's L'Orfeo, first performed in 1607, is one of the earliest operas still widely performed.",
      },
    ],
  },

  {
    meta: {
      slug: "why-blob-opera-is-genius",
      title: "Why Blob Opera Is Genius: Design, Play, and Musical Accessibility",
      description: "A design analysis of Blob Opera: radical simplicity, automatic harmony, character design, forgiving interaction, and why it appeals to children and professionals alike.",
      category: "music-appreciation",
      readingTime: 8,
      publishedAt: "2026-07-16",
      updatedAt: "2026-10-22",
      keywords: ["blob opera review", "interactive music design", "why blob opera is popular", "music accessibility", "Google Arts and Culture experiments"],
      relatedSlugs: ["how-blob-opera-works", "what-is-opera", "ai-collaboration-vs-automation"],
    },
    sections: [
      {
        heading: "The First Principle: Remove Every Barrier",
        headingLevel: 2,
        body: "The most striking thing about Blob Opera is how much it removes. There is no login screen, no tutorial gate, no instrument to tune, and no score to learn before you can make a sound. The interaction can be described in one sentence: drag a blob and the quartet sings. That simplicity is not an accident of low ambition. It sits on top of a large amount of technical and design work: recorded source material, trained models, automatic harmony, a responsive browser interface, and four characters that make the controls legible at a glance. The result feels effortless because the complexity has been pushed out of the user's way. Good creative tools often do exactly that: they hide the machinery and leave the expressive decision in the foreground.",
      },
      {
        heading: "The Interaction Is the Tutorial",
        headingLevel: 2,
        body: "Blob Opera does not explain itself with a manual. It teaches through immediate feedback. Move a blob up and the pitch rises; move it along the other axis and the vowel color changes; hold still and the harmony settles. A player can discover the basic vocabulary in seconds without knowing the words pitch, vowel, or harmony. That is a different model of onboarding from a traditional music app, which often asks the user to choose an instrument, configure audio, and learn a notation system before the first meaningful sound. Blob Opera reverses the order. The first sound comes almost immediately, and the concepts arrive afterward as descriptions of what the player has already done. The experiment also has no fail state, which lowers the cost of trying something unexpected. Discovery is the curriculum.",
      },
      {
        heading: "Collaboration, Not Replacement",
        headingLevel: 2,
        body: "The player does not control every note. One voice is under direct control, while the other three respond through a harmony model. Google also describes a separate model for the singing voices. That division creates a useful creative tension: the human supplies intention and timing, while the system supplies a coherent vocal and harmonic context. It is reasonable to call this collaboration, as long as the word is not stretched too far. The models do not have intentions, negotiate, or take initiative in the way a human collaborator would. The agency is asymmetric. Still, the experience is not automation in the sense of a prompt producing a finished track. The player is inside the feedback loop, reacting to the harmony and changing the next gesture. That loop is the design achievement.",
      },
      {
        heading: "Character Design Does Emotional Work",
        headingLevel: 2,
        body: "The blobs are not realistic singers, and that is their advantage. They are colorful, rounded, and expressive. The bass is large and grounded; the soprano is smaller and higher in the group. They close their eyes when they sing, and their mouths move with the vowel sounds. These details give the player something to read emotionally before understanding anything about voice types. A technical demonstration with four abstract sliders might produce the same notes, but it would not invite the same kind of attachment. The characters turn a model into a small ensemble with personalities. That framing makes the experiment approachable to children, memorable to casual visitors, and easy to describe to someone else. The design is doing explanatory work at the same time as it is doing emotional work.",
      },
      {
        heading: "Forgiving by Design",
        headingLevel: 2,
        body: "Blob Opera has no wrong notes in the sense of a score, timer, or fail state. A player can move a blob anywhere and get a musical response. That forgiveness is liberating, especially for people who have been told they are not musical. It does not mean every combination is conventional or beautiful. The harmony can feel tense, crowded, or unresolved, and the player's ear is still the judge. The important design choice is that a questionable result is not punished. It is simply another sound to evaluate. This encourages experimentation and makes the experiment safe for a classroom, a first-time visitor, or a professional who wants to sketch an idea without setting up a session. Low stakes do not have to mean low ambition.",
      },
      {
        heading: "Why It Appeals Across Ages and Skills",
        headingLevel: 2,
        body: "The same interface can serve very different users. A young child can enjoy the colors and the cause-and-effect of dragging. A music teacher can use the quartet to demonstrate register, timbre, and harmony. A professional musician can improvise with it or use it as a quick sketch. A visitor with no musical training can make a satisfying sound in the first minute. There are no difficulty levels and no separate beginner mode. The tool meets each user at the level of attention they bring. That is rare in educational software, which often segments audiences into age bands and assumes that simpler means childish. Blob Opera's simplicity is structural: it removes obstacles without removing the possibility of nuance. A user can stay on the surface or listen more deeply, and the interface supports both.",
      },
      {
        heading: "Expectation, Surprise, and Taste",
        headingLevel: 2,
        body: "Music psychology offers useful ideas for describing why the experiment feels engaging. Listeners bring expectations shaped by familiarity, culture, and prior listening. A phrase that feels predictable in one style can feel fresh in another. Blob Opera mixes user choice with model response, so a gesture may produce a harmony that feels like the obvious next step or a small surprise. That mixture can hold attention, but we should be careful about turning it into a scientific explanation. Google has not published a psychological study showing that this specific balance explains the experiment's reception. The safer claim is experiential: the combination of control and response gives the player something to anticipate, and anticipation is part of what makes listening active. Different users will describe the same moment differently, and that variation is part of the point.",
      },
      {
        heading: "What Blob Opera Leaves Out",
        headingLevel: 2,
        body: "The design is defined as much by omission as by addition. There is no notation, no lyric input, no microphone analysis, no mixing console, and no full simulation of every human voice. The quartet represents four broad categories rather than the full range of operatic and non-Western vocal traditions. Those limits keep the interaction legible. A tool that tried to do everything would need menus, modes, and documentation, and it would lose the immediate drag-and-sing quality. The omissions also mean the experiment should not be oversold. It is not a vocal trainer, a composition suite, or a replacement for live opera. It is a carefully scoped interactive instrument, and the scope is a large part of why it works.",
      },
      {
        heading: "Design Lessons for Creative AI",
        headingLevel: 2,
        body: "Blob Opera suggests a few principles for anyone building a creative AI tool. Make the human role intuitive: the player drags characters, not parameters. Hide technical complexity without hiding the result: the harmony is automatic, but it is immediately audible. Make the output forgiving enough to encourage experimentation, while leaving room for taste and judgment. Preserve a sense of agency: the performance should feel like something the player made, even if the model contributes notes the player did not specify. Those principles do not guarantee a good tool, but they explain why this one is easy to understand and hard to forget. The experiment is a case study in designing around a human gesture rather than around a model's capabilities.",
      },
      {
        heading: "Frequently Asked Questions",
        headingLevel: 2,
        body: "These questions come up when people try to explain why the experiment works.",
      },
      {
        heading: "Is Blob Opera really AI?",
        headingLevel: 3,
        body: "Yes. Google describes a machine-learning experiment with trained models for singing and harmony. The voices are model-generated interpretations rather than playback of the source recordings.",
      },
      {
        heading: "Why is Blob Opera so popular?",
        headingLevel: 3,
        body: "The accessible interaction, charming characters, immediate sound, and easy sharing all lower the barrier to participation. It is difficult to prove a single cause, but the combination makes the experiment easy to try and easy to describe to someone else.",
      },
      {
        heading: "Is it good for kids?",
        headingLevel: 3,
        body: "The abstract characters, lack of text-heavy content, and forgiving interaction make it approachable for children. Supervision and your school's policy for third-party sites still matter, and no student account is required.",
      },
      {
        heading: "Is Blob Opera a game?",
        headingLevel: 3,
        body: "It has game-like play, but there is no score, timer, level, or win state. It is better described as an interactive instrument or an experiment with a playful interface.",
      },
      {
        heading: "Does it replace music education?",
        headingLevel: 3,
        body: "No. It can introduce voice types, register, timbre, and ensemble listening, but it does not teach notation, technique, or repertoire. It works best as a doorway and a discussion prompt.",
      },
      {
        heading: "Why do the blobs look like that?",
        headingLevel: 3,
        body: "The abstract, rounded design makes the characters readable and expressive without pretending to be realistic singers. The visual differences also help players distinguish the four voices before they know the musical labels.",
      },
      {
        heading: "Can professional musicians use it?",
        headingLevel: 3,
        body: "Yes, as a quick improvisation or sketching tool. The controls are limited compared with a DAW or notation program, so it is best for exploring texture, register, and harmonic response rather than detailed production.",
      },
    ],
  },

  {
    meta: {
      slug: "ai-collaboration-vs-automation",
      title: "Blob Opera and AI: Collaboration, Authorship, and Creative Agency",
      description: "Where Blob Opera sits between a tool and an autonomous generator, what the player actually controls, and how to think about authorship in AI-assisted music.",
      category: "ai-music",
      readingTime: 8,
      publishedAt: "2026-07-18",
      updatedAt: "2026-10-22",
      keywords: ["AI music collaboration", "AI creativity vs automation", "AI-assisted composition", "human AI music", "AI tools for musicians"],
      relatedSlugs: ["how-blob-opera-works", "why-blob-opera-is-genius", "how-to-play-blob-opera"],
    },
    sections: [
      {
        heading: "The Spectrum From Tool to Generator",
        headingLevel: 2,
        body: "Discussions of AI in creative work often collapse very different relationships into one category. At one end of the spectrum is a tool: the software executes a precise instruction and adds little of its own. At the other end is an autonomous generator: a user supplies a prompt and receives a finished output with no further involvement. Most interesting systems sit somewhere between those poles. Blob Opera is a clear example of the middle. The player supplies gestures, timing, and phrasing; trained models supply voices and automatic harmony. The result is neither a traditional instrument nor a prompt-to-song generator. It is an interactive system in which human and model contribute different parts of the same performance. That distinction matters because it changes the questions we should ask about authorship, skill, and creative value.",
      },
      {
        heading: "What the Player Controls in Blob Opera",
        headingLevel: 2,
        body: "The player controls one voice at a time. Moving a blob changes pitch; moving along the other axis changes vowel color; holding still or moving quickly changes the timing and perceived character of the line. The player also decides which voice leads, when to pause, and how the performance ends. Recording, when available, fixes a take and creates a share link. Those are meaningful creative decisions, but they are not the whole piece. The player does not place every harmony note, choose a chord symbol, or specify the internal synthesis. The other three voices respond through a model. So the player controls the musical surface and the shape of the performance, while the system controls much of the texture underneath. That division is the source of both the experiment's accessibility and its distinctive sound.",
      },
      {
        heading: "What the Models Contribute",
        headingLevel: 2,
        body: "Google describes two trained models: one for the singing voices and one for harmony. The singing model produces opera-inspired vocal sound based on recordings by four professional singers, but Google says the output is the model's understanding rather than a replay of those voices. The harmony model lets the other blobs respond to and harmonize the player's input in real time. The public materials do not disclose the harmony model's architecture, training data, or rule set, so we should not claim that it follows a particular theory of voice leading or that it chooses chords from a published vocabulary. What we can say is that it contributes coordinated notes the player did not individually specify. That contribution is substantial enough that calling the player the sole author of every note would be inaccurate. Calling the model the author would be equally inaccurate.",
      },
      {
        heading: "Why Collaboration Is a Better Description Than Automation",
        headingLevel: 2,
        body: "Automation usually implies that a process runs without moment-to-moment human involvement. Blob Opera is the opposite: the human is in the loop continuously. A gesture changes the input, the harmony responds, and the player reacts to that response. The performance is shaped through feedback rather than generated in one shot. This is why the collaboration metaphor is useful, even though it has limits. The player is not operating a fixed instrument with predictable mechanics; the system is making musical decisions in response to the player. At the same time, the system is not a person with intentions, taste, or the ability to disagree. It is a learned response surface. The interaction is collaborative in the functional sense that both sides contribute to the output, not in the sense that two conscious agents are negotiating.",
      },
      {
        heading: "Authorship: Who Made the Performance?",
        headingLevel: 2,
        body: "Authorship questions become complicated when a model contributes notes. One useful approach is to separate the layers. The player contributes gesture, timing, phrasing, and the decision to record and share. The project team contributed the model, the interface, the voice design, and the harmony behavior. The four source singers contributed the musical material from which the voices were learned, though their original recordings are not replayed. A performance is therefore a joint product of human choices and a designed system, with a long chain of contributors behind the system. Copyright and credit rules vary by jurisdiction and by the terms of the platform, and this article cannot give legal advice. For commercial use, read the relevant terms and seek professional guidance rather than assuming that a recording link grants ownership of every element.",
      },
      {
        heading: "The Limits of the Collaboration Metaphor",
        headingLevel: 2,
        body: "It is worth being precise about what collaboration does not mean here. The models do not understand the performance, form intentions, or adapt to the player's emotional state in a human sense. They do not negotiate or take initiative. The human has asymmetric control: the player can start, stop, and change the lead voice, while the system responds within its learned behavior. Calling the interaction a collaboration is a design description, not a claim about machine consciousness. The metaphor is still useful because it captures the feedback loop and the shared contribution. It becomes misleading only when it is used to overstate the system's agency or to erase the human decisions that shape the result. A good description can hold both truths: the model contributes materially, and the person remains responsible for the performance.",
      },
      {
        heading: "What Makes a Good Creative AI Tool",
        headingLevel: 2,
        body: "Blob Opera suggests four principles that apply beyond this experiment. First, the human's role should be intuitive: in Blob Opera, you drag characters, not parameters. Second, the system should handle complexity invisibly, so the user does not have to think about formants or harmonic analysis to make a musical choice. Third, the output should be forgiving enough to encourage experimentation; a wrong move should produce a different sound, not a failure state. Fourth, the tool should preserve a sense of agency, so the result feels like something the player made rather than something the machine did to them. These principles are not a formula for every creative tool, but they explain why Blob Opera is easy to understand and why its restrictions feel productive rather than punitive.",
      },
      {
        heading: "Classroom and Studio Uses",
        headingLevel: 2,
        body: "In a classroom, Blob Opera can demonstrate the difference between a human-controlled line and an automatically harmonized texture. Students can discuss which decisions belong to the player and which belong to the system, then compare two performances with different lead voices. In a studio or rehearsal, the experiment can serve as a quick sketch for register, vowel color, or ensemble balance. It is not a production tool: it does not offer multitrack editing, MIDI export, or detailed mixing. Its value is immediacy. A musician can test an idea in seconds and then move to a more capable tool if the idea deserves development. That is a legitimate role for a creative AI system: not replacing the studio, but shortening the distance between a thought and a first sound.",
      },
      {
        heading: "The Future of AI Music Tools",
        headingLevel: 2,
        body: "The broader lesson is not that AI will replace musicians or that it will leave them untouched. It is that the design of the interface determines what kind of relationship the user has with the system. A prompt box encourages delegation; a responsive instrument encourages interaction. Blob Opera shows that a model can contribute substantial musical material while the human remains the source of gesture and intent. Future tools will likely explore both ends of the spectrum, from autonomous generation to fine-grained performance control. The most interesting ones may follow Blob Opera's example by making the model's contribution audible and the human's role legible. The technology will change, but the design question is stable: what should the person do, and what should the system do?",
      },
      {
        heading: "Frequently Asked Questions",
        headingLevel: 2,
        body: "These questions come up when people try to place Blob Opera on the AI spectrum.",
      },
      {
        heading: "Is Blob Opera AI-generated?",
        headingLevel: 3,
        body: "The voices and harmony are model-generated, but the performance is shaped by human gestures. It is better described as a collaborative AI instrument than as a fully automated generator.",
      },
      {
        heading: "Who owns a Blob Opera performance?",
        headingLevel: 3,
        body: "The public materials do not provide a simple ownership rule, and copyright varies by jurisdiction. A performance involves the player's choices, the project's models and interface, and the source material behind them. For commercial use, read the platform terms and seek professional advice.",
      },
      {
        heading: "Does the AI compose the melody?",
        headingLevel: 3,
        body: "The player shapes the lead line through pitch, vowel, and timing choices. The model supplies voices and automatic harmony. It is not an autonomous composer that writes a complete melody from a prompt.",
      },
      {
        heading: "What is the difference between AI-assisted and automated music?",
        headingLevel: 3,
        body: "AI-assisted music keeps a human in the feedback loop, making decisions while the system responds. Automated music usually refers to a process that generates a finished output with little or no moment-to-moment human input.",
      },
      {
        heading: "Is collaboration just a marketing word?",
        headingLevel: 3,
        body: "It can be, but in Blob Opera it describes a real feedback loop: the player acts, the harmony responds, and the player reacts again. The models do not have human intentions, so the word should not be read as a claim about machine agency.",
      },
      {
        heading: "Can I use Blob Opera professionally?",
        headingLevel: 3,
        body: "The controls are limited compared with a DAW or notation program, and the recording workflow produces a share link rather than a full production file. It can be useful for sketching and demonstration, but check the terms before commercial release.",
      },
      {
        heading: "Will AI replace musicians?",
        headingLevel: 3,
        body: "That framing treats a diverse set of technologies as one thing. AI changes tasks, workflows, and access to tools; it does not erase the human decisions that make a performance meaningful. Blob Opera is a small example of a system designed to extend human agency rather than remove it.",
      },
    ],
  },
];

export function getAllArticles(): ArticleContent[] {
  return articles;
}

export function getArticleBySlug(slug: string): ArticleContent | undefined {
  return articles.find((a) => a.meta.slug === slug);
}

export function getArticlesByCategory(cat: string): ArticleContent[] {
  return articles.filter((a) => a.meta.category === cat);
}

export function getRelatedArticles(slug: string, max: number = 3): ArticleContent[] {
  const article = articles.find((a) => a.meta.slug === slug);
  if (!article) return [];
  return article.meta.relatedSlugs
    .map((relatedSlug) => articles.find((a) => a.meta.slug === relatedSlug))
    .filter((related): related is ArticleContent => Boolean(related))
    .slice(0, max);
}

export function getAllArticleSlugs(): string[] {
  return articles.map((a) => a.meta.slug);
}

export function getAllArticleMetas(): ArticleMeta[] {
  return articles.map((a) => a.meta);
}

export const featuredGuideSlugs = [
  "how-to-play-blob-opera",
  "how-blob-opera-works",
  "recording-guide",
  "city-themes-preset-songs",
  "blob-opera-not-working",
  "5-music-games-for-classroom",
  "what-are-the-four-voice-types",
  "harmony-and-melody-in-blob-opera",
];

export function getFeaturedGuides(): ArticleMeta[] {
  return featuredGuideSlugs
    .map((slug) => getArticleBySlug(slug)?.meta)
    .filter((meta): meta is ArticleMeta => Boolean(meta));
}

export const categoryOrder: string[] = [
  "ai-music",
  "music-education",
  "guides",
  "music-appreciation",
];
