import { siteConfig } from "./site.config";

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  category: "ai-music" | "music-education" | "guides" | "music-appreciation";
  readingTime: number;
  publishedAt: string;
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
      slug: "how-ai-learns-to-sing",
      title: "How AI Learns to Sing: From Opera Recordings to AI Voice",
      description: "Discover how AI learns to sing by training on professional opera recordings, mastering vibrato, and creating natural vocal synthesis in real time.",
      category: "ai-music",
      readingTime: 8,
      publishedAt: "2026-07-09",
      keywords: ["AI singing", "machine learning music", "vocal synthesis AI", "how AI learns to sing", "neural network voice"],
      relatedSlugs: ["real-time-vocal-synthesis", "from-recordings-to-ai-voice", "what-is-vibrato"],
    },
    sections: [
      {
        heading: "The Challenge of Teaching a Machine to Sing",
        headingLevel: 2,
        body: "Singing contains more than words and a target note. A useful model must represent changing pitch and vocal color while responding quickly enough to feel playable. Blob Opera turns that research problem into a simple browser interaction: vertical movement changes pitch and another direction changes the vowel sound. Google describes the result as a machine-learning experiment, not as a recording player or a complete simulation of a human singer.",
      },
      {
        heading: "The Dataset: 16 Hours of Professional Opera",
        headingLevel: 2,
        body: "Google credits tenor Christian Joel, bass Frederick Tong, mezzo-soprano Joanna Gamble, and soprano Olivia Doutney. Together they recorded 16 hours of singing. David Li says that material was fed into a convolutional neural network that learned to reproduce each represented voice type. Google has not published a detailed dataset card, annotation scheme, or complete training recipe, so those details should not be inferred from the public demonstration.",
      },
      {
        heading: "What the Neural Network Actually Learns",
        headingLevel: 2,
        body: "The official experiment page makes an important distinction: listeners do not hear the four singers' original voices. They hear the model's understanding of what opera singing sounds like, based on what it learned from the recordings. That statement supports describing the output as model-generated. It does not reveal exactly how the system represents formants, expression, or transitions internally.",
      },
      {
        heading: "Real-Time Inference at Your Fingertips",
        headingLevel: 2,
        body: "Blob Opera responds to gestures in real time and uses modern web-audio technology. Google notes that the experiment may not perform optimally on older devices. Public project materials do not specify the audio frame size, sample generation method, or which computations happen locally versus through other browser resources, so this article does not assign an undocumented architecture to the experience.",
      },
      {
        heading: "Beyond Blob Opera",
        headingLevel: 2,
        body: "Blob Opera is a clear example of machine learning being used as part of an interactive instrument. It lowers the barrier to exploring vocal range and harmony, but it should not be treated as evidence for every claim about modern voice AI. Broader topics such as neural vocoders, accessibility tools, and production software involve different systems and need their own sources.",
      },
    ],
  },

  {
    meta: {
      slug: "real-time-vocal-synthesis",
      title: "Real-Time Vocal Synthesis in a Browser: What We Know",
      description: "Learn what Google publicly confirms about Blob Opera's responsive browser experience, without assigning undocumented technology to the project.",
      category: "ai-music",
      readingTime: 7,
      publishedAt: "2026-07-09",
      keywords: ["browser audio synthesis", "real-time vocal synthesis", "Web Audio API", "neural network audio", "browser-based AI"],
      relatedSlugs: ["how-ai-learns-to-sing", "from-recordings-to-ai-voice", "the-harmony-engine"],
    },
    sections: [
      {
        heading: "The Browser as a Real-Time Audio Platform",
        headingLevel: 2,
        body: "Modern browsers can schedule, generate, process, and play audio through standardized web technologies. Blob Opera uses what Google calls the latest web-audio technology and responds to gestures in real time. Google has discussed WebAssembly SIMD for a separate, optimized 16-blob performance used at Google I/O, but that statement should not be used to claim that every public version has the same architecture.",
      },
      {
        heading: "The Latency Challenge",
        headingLevel: 2,
        body: "Interactive audio feels convincing only when sound follows a gesture quickly and consistently. Delay can come from input handling, model computation, audio buffering, device drivers, and output hardware. Techniques such as model compression or smaller buffers exist in the wider field, but Google has not publicly said that Blob Opera uses a particular quantization, pruning, or inference strategy.",
      },
      {
        heading: "Neural Network Optimization for Real-Time Use",
        headingLevel: 2,
        body: "David Li publicly identified the singing model as a convolutional neural network. That is the safe level of architectural detail available from the project's own account. There is no official statement that the public experiment generates audio one sample at a time or uses dilated convolutions, receptive-field reduction, or distillation. Those ideas are relevant to other audio models, but attributing them to Blob Opera would be speculation.",
      },
      {
        heading: "Why Browser-Based Synthesis Matters",
        headingLevel: 2,
        body: "A browser interface removes the need to install specialist music software, but an embedded third-party experience still loads resources from its host and remains subject to that provider's privacy practices. Users should not assume that no network request occurs simply because the controls feel immediate. The reliable accessibility claim is narrower: the experiment is playable in a supported browser and was designed for people regardless of musical skill.",
      },
    ],
  },

  {
    meta: {
      slug: "from-recordings-to-ai-voice",
      title: "The 16 Hours of Singing Behind Blob Opera",
      description: "A sourced account of the four opera singers, the recording sessions, and the limited technical details Google has published.",
      category: "ai-music",
      readingTime: 9,
      publishedAt: "2026-07-18",
      keywords: ["voice model training", "AI voice dataset", "opera singing AI", "neural network training audio", "machine learning voice"],
      relatedSlugs: ["how-ai-learns-to-sing", "real-time-vocal-synthesis", "the-harmony-engine"],
    },
    sections: [
      {
        heading: "The Recording Sessions",
        headingLevel: 2,
        body: "Google selected four professional performers for the voice types represented in the experiment: tenor Christian Joel, bass Frederick Tong, mezzo-soprano Joanna Gamble, and soprano Olivia Doutney. Google's project story says the singers worked alone in the studio for hours and described the supplied material as parts of opera written on one note, sung across a range of pitches. Together the sessions produced 16 hours of singing.",
      },
      {
        heading: "Labeling and Annotation",
        headingLevel: 2,
        body: "The public accounts mention a map of sound containing elements such as vowels, consonants, and different notes. They do not publish the files, labels, annotation process, or licensing terms as a reusable dataset. It is therefore accurate to say the recordings covered vocal material used for learning, but not to invent a detailed metadata schema.",
      },
      {
        heading: "Spectral Analysis and Feature Engineering",
        headingLevel: 2,
        body: "Audio machine-learning projects often transform recordings into representations that make useful patterns easier to learn. Spectrograms, pitch contours, and other acoustic features are common across the field. Google has not said which of those representations Blob Opera used, so they are useful background concepts rather than confirmed parts of this project's pipeline.",
      },
      {
        heading: "Training the Neural Network",
        headingLevel: 2,
        body: "David Li's published explanation says the 16 hours were fed into a convolutional neural network, which learned to reproduce each voice type based on what it heard. The official experiment page adds that listeners hear the model's understanding rather than the original voices. Training duration, hardware, loss functions, and input-output representation have not been publicly specified.",
      },
      {
        heading: "Fine-Tuning for Natural Expression",
        headingLevel: 2,
        body: "The final experience demonstrates that the trained system can connect pitch and vowel controls to a recognizable opera-inspired result. It does not reveal whether the team used adversarial training, perceptual losses, or a separate fine-tuning stage. Those methods belong in a general survey of audio generation unless a project source confirms their use.",
      },
    ],
  },

  {
    meta: {
      slug: "the-harmony-engine",
      title: "The Harmony Engine: How AI Creates Four-Part Harmony in Real Time",
      description: "Learn what Google confirms about Blob Opera's second model, which lets the other voices respond and harmonize in real time.",
      category: "ai-music",
      readingTime: 8,
      publishedAt: "2026-07-18",
      keywords: ["AI harmony generation", "automatic harmonization", "music theory AI", "four-part harmony", "voice leading AI"],
      relatedSlugs: ["understanding-harmony-through-play", "how-ai-learns-to-sing", "what-are-the-four-voice-types"],
    },
    sections: [
      {
        heading: "Why Harmony Is Harder Than Melody",
        headingLevel: 2,
        body: "Blob Opera combines four represented voice types in one responsive ensemble. Google says the team created two models: one taught the computer to sing and another taught it to harmonize. The official experiment page describes the second model as letting the blobs respond to and harmonize a user's input in real time. It does not publish a rule set or training corpus for that model.",
      },
      {
        heading: "How the Engine Monitors Your Input",
        headingLevel: 2,
        body: "When you move a blob, the remaining voices react around that input. This is why one gesture can sound like a coordinated group rather than four unrelated tones. Describing the audible result does not tell us how often the system updates, whether it predicts future chords, or which musical features it evaluates internally; those details are not in Google's public account.",
      },
      {
        heading: "Voice Leading Principles",
        headingLevel: 2,
        body: "Voice leading is the study of how individual musical lines move while forming harmony together. Small, singable movements are common, but real music uses many styles and exceptions. Blob Opera can prompt a listener to notice these relationships. Google has not stated that its harmony model performs a rule-based search or follows a specific textbook treatment of four-part writing.",
      },
      {
        heading: "Why It Sounds Musical, Not Mechanical",
        headingLevel: 2,
        body: "The experience feels collaborative because the user's gesture and the model's response are heard together. Listeners may describe some results as expected, surprising, stable, or tense, but those impressions should not be turned into undocumented claims about controlled randomness, delayed entries, or the model selecting a particular chord type.",
      },
    ],
  },

  {
    meta: {
      slug: "what-are-the-four-voice-types",
      title: "What Are the Four Voice Types? Bass, Tenor, Mezzo, and Soprano",
      description: "Learn the differences between bass, tenor, mezzo-soprano, and soprano voice types -- their ranges, characteristics, and how to hear them in action.",
      category: "music-education",
      readingTime: 8,
      publishedAt: "2026-07-11",
      keywords: ["vocal ranges explained", "voice types bass tenor mezzo soprano", "singing voice classification", "four main voice types", "opera voice types"],
      relatedSlugs: ["understanding-harmony-through-play", "what-is-vibrato", "vowel-shapes-ah-vs-oo"],
    },
    sections: [
      {
        heading: "Why Voice Types Matter",
        headingLevel: 2,
        body: "Voice typing is not about labeling singers as better or worse. It describes qualities such as comfortable range, timbre, and tessitura, and professional classification is more nuanced than a single pitch chart. Blob Opera represents four categories: bass, tenor, mezzo-soprano, and soprano. Opera also includes other classifications, including baritone and contralto, so these four are an introduction rather than a complete system.",
      },
      {
        heading: "Bass: The Foundation",
        headingLevel: 2,
        body: "The bass is the lowest human voice type, typically ranging from approximately D2 to D4. The bass voice has a rich, resonant quality that provides harmonic grounding. In choral music, the bass line is the foundation upon which all other harmonies are built. In Blob Opera, the bass blob is the largest and sits lowest on the screen, anchoring the quartet's sound with its deep, warm tones.",
      },
      {
        heading: "Tenor: The Leading Voice",
        headingLevel: 2,
        body: "The tenor is the highest natural male voice, with a typical range from C3 to C5. The tenor voice is characterized by its brightness, power, and ability to cut through an orchestral texture. In opera, tenors traditionally sing the heroic lead roles. In Blob Opera, the tenor blob provides the melody's core, carrying the most prominent musical line in many arrangements.",
      },
      {
        heading: "Mezzo-Soprano: The Warm Middle",
        headingLevel: 2,
        body: "The mezzo-soprano is the middle female voice, with a range from approximately A3 to A5. The mezzo voice is darker and richer than the soprano's, with a particularly warm lower register. In opera, mezzos often play character roles and villains. The mezzo-soprano blob occupies the crucial space between the male and female voices, creating connective tissue that makes the quartet's harmony feel complete.",
      },
      {
        heading: "Soprano: The Highest Voice",
        headingLevel: 2,
        body: "The soprano is the highest human voice type, with a range from approximately C4 to C6. The soprano voice is bright, agile, and capable of remarkable emotional expression. Sopranos often sing the romantic lead in operas and are frequently the most recognizable voice in any ensemble. The soprano blob sits at the top of the quartet, adding sparkle and emotional intensity to the ensemble sound.",
      },
      {
        heading: "How to Hear the Differences",
        headingLevel: 2,
        body: "The best way to learn to distinguish voice types is to hear them side by side, and Blob Opera makes this remarkably easy. Play each blob individually to hear its unique character. The bass produces deep, rumbling sounds that you can almost feel in your chest. The tenor is brighter and more focused. The mezzo-soprano is warm and full. The soprano is clear and cutting. Then play them together and listen to how they blend -- this is the same voice typing system used in professional choral music.",
      },
    ],
  },

  {
    meta: {
      slug: "understanding-harmony-through-play",
      title: "Understanding Harmony Through Play: A Beginner's Guide",
      description: "Learn the basics of musical harmony in an accessible way, from consonance and dissonance to chord building, using playful tools that make music theory intuitive.",
      category: "music-education",
      readingTime: 7,
      publishedAt: "2026-07-11",
      keywords: ["how to understand harmony", "harmony for beginners", "music theory for beginners", "learn harmony", "consonance and dissonance"],
      relatedSlugs: ["the-harmony-engine", "what-are-the-four-voice-types", "tips-for-beautiful-melodies"],
    },
    sections: [
      {
        heading: "What Is Harmony, Really?",
        headingLevel: 2,
        body: "At its simplest, harmony is what happens when two or more notes sound at the same time. But that definition does not capture the magic. Harmony is the emotional language of music -- it is what makes a major chord feel happy, a minor chord feel sad, and a suspended chord feel like it is waiting for resolution. Harmony gives music its direction, its tension and release, its sense of arrival. And despite sounding like a complex music theory concept, harmony is something you already understand intuitively. You recognize a happy chord when you hear it, even if you cannot name it.",
      },
      {
        heading: "Consonance and Dissonance",
        headingLevel: 2,
        body: "The two most fundamental concepts in harmony are consonance and dissonance. Consonant intervals -- like octaves, fifths, and thirds -- sound stable and pleasing. Dissonant intervals -- like seconds and sevenths -- sound tense and unstable. Music works by moving between these two states: tension builds on dissonance, and release comes from resolving to consonance. In Blob Opera, you can hear this directly. Drag the blobs close together and you will hear more tension. Spread them apart and you will hear more stability.",
      },
      {
        heading: "Learning by Doing",
        headingLevel: 2,
        body: "The best way to explore harmony here is to control one blob with a slow line and listen to how the other voices respond. Repeat the same shape in a different register and compare the result. The experiment's second model harmonizes the input in real time, but Google does not publish the exact rules or chord vocabulary it learned.",
      },
    ],
  },

  {
    meta: {
      slug: "what-is-vibrato",
      title: "What Is Vibrato? The Science and Art of Vocal Oscillation",
      description: "Explore what vibrato is, how it works physiologically, why it makes singing sound expressive, and how AI models replicate this natural vocal phenomenon.",
      category: "music-education",
      readingTime: 6,
      publishedAt: "2026-07-18",
      keywords: ["what is vibrato", "vocal vibrato explained", "how vibrato works", "vibrato technique singing", "natural vibrato"],
      relatedSlugs: ["how-ai-learns-to-sing", "vowel-shapes-ah-vs-oo", "tips-for-beautiful-melodies"],
    },
    sections: [
      {
        heading: "The Physics of Vibrato",
        headingLevel: 2,
        body: "Vibrato is a regular, pulsating change in pitch that adds warmth, richness, and expressiveness to a sustained note. Technically, it is a frequency modulation -- the pitch oscillates slightly above and below the target note at a rate of roughly 5 to 8 oscillations per second. This is not a conscious wobble but a natural acoustic phenomenon produced by healthy coordination of breath support, vocal fold tension, and resonance. A good vibrato sounds effortless, preventing a sustained note from becoming flat and lifeless.",
      },
      {
        heading: "How AI Replicates Vibrato",
        headingLevel: 2,
        body: "Blob Opera's sustained tones have an opera-inspired character that can be used to start a listening discussion about vibrato. Google confirms that the voice model learned from professional singers, but it does not claim that the system reproduces a documented vibrato rate for each voice type. Listen for pitch movement, then compare it with recordings of real singers rather than treating the experiment as a measurement tool.",
      },
      {
        heading: "Why Vibrato Matters for Natural Sounding Synthesis",
        headingLevel: 2,
        body: "Vibrato is one of several cues that shape a sustained singing tone, alongside breath, resonance, articulation, and changing dynamics. A steady pitch is not automatically inhuman: singers also use straight tone deliberately. Blob Opera offers an approachable example of stylized vocal sound, not a complete model of healthy singing technique.",
      },
    ],
  },

  {
    meta: {
      slug: "vowel-shapes-ah-vs-oo",
      title: "Vowel Shapes in Singing: Why 'Ah' and 'Oo' Sound Different",
      description: "Discover how vowel shapes transform the singing voice, from formant acoustics to the difference between 'ah' and 'oo', and how AI models them.",
      category: "music-education",
      readingTime: 7,
      publishedAt: "2026-07-18",
      keywords: ["vowel shapes singing", "singing vowels ah oo ee", "vocal timbre", "formant frequencies explained", "how vowels affect singing"],
      relatedSlugs: ["what-is-vibrato", "what-are-the-four-voice-types", "how-ai-learns-to-sing"],
    },
    sections: [
      {
        heading: "The Same Pitch, Completely Different Sound",
        headingLevel: 2,
        body: "Sing the same note twice -- first on 'ah' (as in 'father'), then on 'oo' (as in 'boot'). The pitch is identical, but the sound is dramatically different. That difference is timbre, and it is controlled primarily by the shape of your vocal tract. Your tongue position, jaw opening, and lip rounding all change the resonant properties of your mouth and throat, filtering the sound produced by your vocal folds in different ways.",
      },
      {
        heading: "The 'Ah' Vowel: Open and Bright",
        headingLevel: 2,
        body: "An 'ah' vowel is generally produced with a more open mouth shape than an 'oo' vowel, although exact tongue and jaw positions vary by language, singer, and pitch. Its formant pattern gives it a recognizably open quality. Blob Opera lets horizontal or depth-oriented movement change vowel color; the safest way to learn the direction in the current version is to move slowly and listen.",
      },
      {
        heading: "The 'Oo' Vowel: Rounded and Mellow",
        headingLevel: 2,
        body: "An 'oo' vowel normally involves lip rounding and a high back tongue position, producing a lower formant pattern than an open 'ah'. In Blob Opera, changing the non-pitch direction changes the vowel sound while the vertical position controls pitch. The visual direction can be described as forward and backward in Google's guide, even though a flat screen may make it feel horizontal.",
      },
      {
        heading: "Practical Exercises",
        headingLevel: 2,
        body: "Select just one blob and slowly drag it from far left to far right while keeping the pitch constant. Listen to how the timbre changes. On the left, you hear a bright, open 'ah.' On the right, a soft, rounded 'oo.' Now do the same with a different blob to hear how the same vowel transition sounds at a different pitch. This is one of the best ways to train your ear to hear vowel shapes, because you isolate the variable being changed while keeping everything else constant.",
      },
    ],
  },

  {
    meta: {
      slug: "5-music-games-for-classroom",
      title: "5 Interactive Music Games to Transform Your Classroom",
      description: "A practical guide to using free interactive music games in education, with lesson plan ideas for each tool - perfect for music teachers and homeschool educators.",
      category: "music-education",
      readingTime: 9,
      publishedAt: "2026-07-13",
      keywords: ["music games for classroom", "teaching music with games", "interactive music education", "music teacher resources", "free music games education"],
      relatedSlugs: ["understanding-harmony-through-play", "what-are-the-four-voice-types", "tips-for-beautiful-melodies"],
    },
    sections: [
      {
        heading: "Why Games Work in Music Education",
        headingLevel: 2,
        body: "Game-based learning addresses one of the fundamental challenges of music education: the gap between understanding a concept theoretically and experiencing it physically. A student can read about harmony, but until they hear and manipulate it, the concept remains abstract. Interactive music games bridge this gap by turning abstract musical concepts into direct, physical interactions. They also lower the barrier to entry -- students who feel intimidated by traditional instruments can participate immediately.",
      },
      {
        heading: "1. Blob Opera: Harmony and Voice Types",
        headingLevel: 3,
        body: "Blob Opera can introduce four represented voice types and the idea of responsive harmony. In a short lesson, ask students to identify the register of each blob, control one voice at a time, and describe how the other three respond. End by recording a brief class performance and discussing which observations came from listening and which came from the official project description.",
      },
      {
        heading: "2. Chrome Music Lab: Song Maker",
        headingLevel: 3,
        body: "Chrome Music Lab's Song Maker is a grid-based composition tool that makes music notation visual and intuitive. Students draw patterns on a pitch-and-time grid, selecting instruments and tempo. It is excellent for teaching rhythm, pitch relationships, and basic composition. Give students a four-bar structure and ask them to create a melody using stepwise motion that ends on the home note -- this teaches melodic contour and tonal center without requiring notation knowledge.",
      },
      {
        heading: "3. Incredibox: Rhythm and Texture",
        headingLevel: 3,
        body: "Incredibox is a beatboxing simulator where students drag sounds onto animated characters to build layered compositions. Each character represents a different element: beat, bass, melody, and effects. It is excellent for teaching musical texture. Start with just the beat layer, then add bass, then melody. Ask students to describe how the texture changes with each addition. This builds listening skills that transfer directly to analyzing recorded music.",
      },
      {
        heading: "4. Ableton Learning Music",
        headingLevel: 3,
        body: "Ableton's Learning Music website provides a structured introduction to music fundamentals, starting from pitch and rhythm and progressing through scales, chords, and song structure. Each concept is paired with interactive tools. The modular structure works well for self-paced learning, with students progressing at their own speed. The site is particularly strong at explaining why the major scale sounds the way it does.",
      },
      {
        heading: "5. Typatone: Creative Writing Meets Music",
        headingLevel: 3,
        body: "Typatone turns typing into music -- each letter produces a different note, creating a direct connection between written language and musical expression. Ask students to type their names and listen to the melody their name creates. This teaches that scales are sets of notes with specific emotional characters -- a concept that traditional music theory often struggles to convey to beginners.",
      },
    ],
  },

  {
    meta: {
      slug: "recording-guide",
      title: "How to Record and Share Your Blob Opera Performances",
      description: "A complete guide to recording your Blob Opera performances, from the basic workflow to creative techniques -- no sign-up or downloads required.",
      category: "guides",
      readingTime: 5,
      publishedAt: "2026-07-13",
      keywords: ["record blob opera", "share music recordings", "blob opera recording", "browser music recording", "save music online"],
      relatedSlugs: ["tips-for-beautiful-melodies", "city-themes-preset-songs", "understanding-harmony-through-play"],
    },
    sections: [
      {
        heading: "Getting Started with Recording",
        headingLevel: 2,
        body: "Blob Opera includes a recording control for capturing a performance and playing it back. Google encourages users to record and share creations, but its public guide does not document the exact storage format or promise bit-for-bit reproduction. In the current interface, look for the recording controls inside the Google-hosted experiment.",
      },
      {
        heading: "Playback and Review",
        headingLevel: 2,
        body: "After stopping, use playback to review the shape of the performance. Listen for a clear beginning and ending, repeated gestures, and changes of register. The feature is useful for revision even without making assumptions about whether Google stores audio, gestures, or another internal representation.",
      },
      {
        heading: "Sharing Your Performance",
        headingLevel: 2,
        body: "Blob Opera allows you to share recordings via a unique link. After recording, look for the share option near the playback controls. The system generates a URL encoding your performance data. Anyone who opens the link can hear your exact performance. No account or sign-up is required on either end. This frictionless sharing model lets you create, share, and let others experience your music without any registration barrier.",
      },
    ],
  },

  {
    meta: {
      slug: "city-themes-preset-songs",
      title: "Exploring Blob Opera's City Themes and Preset Songs",
      description: "A sourced look at Blob Opera's holiday songs and later world-tour locations, which may change as Google updates the experiment.",
      category: "guides",
      readingTime: 5,
      publishedAt: "2026-07-14",
      keywords: ["blob opera city themes", "blob opera preset songs", "blob opera cities", "Google Arts and Culture experiments"],
      relatedSlugs: ["recording-guide", "tips-for-beautiful-melodies", "why-blob-opera-is-genius"],
    },
    sections: [
      {
        heading: "More Than a Backdrop",
        headingLevel: 2,
        body: "Blob Opera began as a holiday experiment with optional seasonal songs. Google later created a world-tour version and described locations including Cape Town, London, Mexico City, New York, Paris, and Seoul. The set of places visible in the hosted experience may change, so a fixed three-city list is not reliable.",
      },
      {
        heading: "How Preset Songs Work",
        headingLevel: 2,
        body: "Google's descriptions mention songs such as seasonal classics, 'Frère Jacques,' and 'La Bamba.' Presets demonstrate a prepared performance rather than revealing how the machine-learning models were trained. Controls and song availability belong to the Google-hosted interface and can be revised without this fan site changing.",
      },
      {
        heading: "Learning from Presets",
        headingLevel: 2,
        body: "Use a preset as a listening reference: identify the highest and lowest parts, notice repeated gestures, and compare the prepared version with free play. Avoid treating the animation as a formal score or assuming that every visible movement maps to a documented composition rule.",
      },
    ],
  },

  {
    meta: {
      slug: "tips-for-beautiful-melodies",
      title: "Tips for Creating Beautiful Melodies in Blob Opera",
      description: "Practical tips for composing beautiful melodies with Blob Opera -- from understanding melodic contour to using dynamics and phrasing effectively.",
      category: "guides",
      readingTime: 6,
      publishedAt: "2026-07-14",
      keywords: ["create beautiful melodies", "melody writing tips", "music creation for beginners", "how to make a melody", "blob opera tips"],
      relatedSlugs: ["understanding-harmony-through-play", "recording-guide", "what-are-the-four-voice-types"],
    },
    sections: [
      {
        heading: "Start with One Voice",
        headingLevel: 2,
        body: "The most common mistake new players make is trying to control all four blobs at once. Resist this urge. Start with a single blob -- the tenor is a good choice because it sits in the middle of the vocal range. Focus on creating a simple, singable melody. A good melody has shape: it moves up and down, has a high point (the climax), and returns to a resting place. Think of it as telling a story with pitch -- departure, adventure, return.",
      },
      {
        heading: "Use Stepwise Motion",
        headingLevel: 2,
        body: "Many singable melodies combine stepwise motion with occasional leaps, but there is no single formula shared by every memorable tune. In Blob Opera, try a slow connected contour, repeat it, and then change one leap. Comparing the versions is more useful than treating a stylistic suggestion as a universal rule.",
      },
      {
        heading: "Pay Attention to Phrasing",
        headingLevel: 2,
        body: "Just as spoken language has phrases separated by breaths, music has phrases separated by pauses or held notes. A good melody breathes. Try creating short musical phrases of 4 to 8 notes, separated by a held note or a brief silence. This gives your listener time to absorb each phrase. Listen to how a singer would perform your melody -- where would they naturally take a breath? That is where your phrase should end.",
      },
      {
        heading: "Vary Dynamics and Vowel Shapes",
        headingLevel: 2,
        body: "Drag speed and position affect more than just pitch. Moving a blob slowly creates smooth, connected notes. Moving it quickly produces more dramatic transitions. Holding a blob steady at the far left produces a bright 'ah' vowel; moving toward the right softens it to 'oo.' Use these dimensions to add emotional color. A climax might feature a high note on a bright vowel, while gentle passages work well with softer vowels.",
      },
    ],
  },

  {
    meta: {
      slug: "what-is-opera",
      title: "What Is Opera? A Beginner's Guide to the Art Form",
      description: "A warm, accessible introduction to opera -- what it is, how it works, the different voice types, and how modern technology makes it approachable for everyone.",
      category: "music-appreciation",
      readingTime: 7,
      publishedAt: "2026-07-15",
      keywords: ["what is opera", "opera explained for beginners", "opera music guide", "introduction to opera", "opera for beginners"],
      relatedSlugs: ["opera-history-in-5-minutes", "what-are-the-four-voice-types", "why-blob-opera-is-genius"],
    },
    sections: [
      {
        heading: "Opera Is Just Storytelling Through Song",
        headingLevel: 2,
        body: "Opera can feel intimidating -- the language barrier, the elaborate costumes, the length of performances. But at its core, opera is simply a story told through singing, supported by an orchestra and staging. It is the original multi-media art form, combining music, drama, visual design, and often dance. Like any good story, opera deals with universal human emotions: love, jealousy, revenge, forgiveness, hope, and despair. The music amplifies these emotions in a way that spoken theater cannot match.",
      },
      {
        heading: "The Building Blocks of Opera",
        headingLevel: 2,
        body: "Opera is built from several standard elements. The aria is a solo song where a character expresses their emotions, often the most memorable part of an opera. Recitative is a speech-like singing style that advances the plot. Duets and ensembles let multiple characters interact musically. The chorus represents crowds or communities. The overture is an instrumental opening that sets the musical mood. Understanding these elements makes watching an opera much more approachable.",
      },
      {
        heading: "Opera in the Digital Age",
        headingLevel: 2,
        body: "Opera has repeatedly reached audiences through new media, from printed scores and recordings to radio, cinema, and streaming. Blob Opera is an opera-inspired interactive experiment, not opera itself and not a replacement for live singers, dramatic storytelling, or stagecraft. It can nevertheless give a new listener a playful reason to explore vocal range and ensemble sound.",
      },
    ],
  },

  {
    meta: {
      slug: "opera-history-in-5-minutes",
      title: "Opera History in 5 Minutes: From Florence to AI",
      description: "A concise journey through opera history -- from its birth in 16th-century Italy to Mozart, Verdi, Wagner, and the AI experiments of today.",
      category: "music-appreciation",
      readingTime: 6,
      publishedAt: "2026-07-15",
      keywords: ["history of opera", "opera origin", "classical music history", "opera timeline", "evolution of opera"],
      relatedSlugs: ["what-is-opera", "why-blob-opera-is-genius", "what-are-the-four-voice-types"],
    },
    sections: [
      {
        heading: "The Birth: Florence, 1597",
        headingLevel: 2,
        body: "Opera was born in Florence around 1597, when a group of intellectuals called the Florentine Camerata sought to recreate the dramatic power of ancient Greek theater. They believed Greek dramas were sung rather than spoken, so they invented stile recitativo -- a halfway point between speech and song. The first great operatic composer was Claudio Monteverdi, whose 1607 work L'Orfeo is still performed today. Monteverdi established the basic structure that composers would follow for centuries.",
      },
      {
        heading: "Mozart's Revolution",
        headingLevel: 2,
        body: "Mozart transformed opera in the late 18th century by creating characters who felt like real people rather than archetypes. The Marriage of Figaro, Don Giovanni, and The Magic Flute are masterpieces of musical characterization -- the music itself tells you who each character is. Mozart also perfected the ensemble finale, where multiple characters sing simultaneously, each expressing different emotions, creating a musical representation of dramatic conflict.",
      },
      {
        heading: "The Romantic Century: Verdi and Wagner",
        headingLevel: 2,
        body: "The 19th century produced enduring repertory by composers including Verdi and Wagner and expanded the scale and expressive demands of many opera productions. Blob Opera pays tribute to the singing voice, but Google does not say that its models were trained on the works of a particular historical composer or school.",
      },
      {
        heading: "Modern Opera and the Future",
        headingLevel: 2,
        body: "The 20th century saw opera fragment into diverse styles, from Puccini's verismo to minimalist opera by Glass and Adams. Today, opera continues evolving through digital streaming, cinema broadcasts, and interactive experiments. Blob Opera is part of this ongoing evolution, extending opera's reach into new technological contexts. The art form that began in a Florentine palace over 400 years ago is still finding new voices.",
      },
    ],
  },

  {
    meta: {
      slug: "why-blob-opera-is-genius",
      title: "Why Blob Opera Is Genius: Design for Joy and Accessibility",
      description: "An in-depth analysis of what makes Blob Opera a design masterpiece, from barrier-free interaction to emotional design and music accessibility.",
      category: "music-appreciation",
      readingTime: 7,
      publishedAt: "2026-07-16",
      keywords: ["blob opera review", "interactive music design", "Google Arts and Culture experiments", "AI music tools", "music accessibility"],
      relatedSlugs: ["what-is-opera", "tips-for-beautiful-melodies", "the-harmony-engine"],
    },
    sections: [
      {
        heading: "The First Principle: Remove Every Barrier",
        headingLevel: 2,
        body: "The most brilliant thing about Blob Opera is everything it removes. There is no login screen, no tutorial, no instruction manual, no wrong answers. The entire interaction model can be described in one sentence: drag the blobs and they sing. This is radical simplicity achieved through extraordinary technical complexity. Most music software requires you to learn something before you can create. Blob Opera requires nothing -- you are making music before you have time to wonder if you are doing it right.",
      },
      {
        heading: "AI as Collaborator, Not Replacement",
        headingLevel: 2,
        body: "Blob Opera divides control between a person and two trained systems. The person supplies gestures; one model produces opera-inspired voices and another harmonizes the input. It is reasonable to describe the result as collaboration, but not to claim that the human makes every musical decision: the harmony response is part of the model's contribution.",
      },
      {
        heading: "Emotional Design Through Character",
        headingLevel: 2,
        body: "The blobs themselves are a masterclass in emotional design. They are not realistic -- they are cartoonish, colorful, and expressive. Each has a distinct visual personality: the bass is large and grounded, the soprano is small and bright. They close their eyes when they sing. Their mouths move with the vowel sounds. These details create an emotional connection that makes users care about the blobs as characters, not just as controls. This emotional framing transforms a technical demo into a beloved cultural artifact.",
      },
      {
        heading: "Why It Works for Everyone",
        headingLevel: 2,
        body: "Blob Opera's universal appeal comes from its refusal to categorize its audience. It works for young children who enjoy the colors and sounds. It works for music teachers using it as a classroom tool. It works for professional musicians improvising with it. It works for people who have never thought about music in their lives. This is the hallmark of great design: the same interface a five-year-old can use also satisfies a professional's creative needs. There are no difficulty levels -- the tool meets each user at their level.",
      },
    ],
  }
,

  {
    meta: {
      slug: "neural-vocoders-explained",
      title: "Neural Vocoders Explained: How AI Generates Audio",
      description: "An accessible explanation of how neural vocoders work — from WaveNet to real-time audio generation, and why they produce such natural-sounding voices.",
      category: "ai-music",
      readingTime: 8,
      publishedAt: "2026-07-16",
      keywords: ["neural vocoder", "WaveNet explained", "AI audio generation", "neural network audio", "how AI generates voice"],
      relatedSlugs: ["how-ai-learns-to-sing", "real-time-vocal-synthesis", "from-recordings-to-ai-voice"],
    },
    sections: [
      {
        heading: "What Is a Vocoder?",
        headingLevel: 2,
        body: "The term 'vocoder' predates modern machine learning. Traditional vocoders analyze characteristics of one signal and apply them to another, while the modern phrase 'neural vocoder' usually refers to a trained model that converts an acoustic representation into a waveform. Different systems use different architectures, and the term should not be applied to a project unless its documentation supports it.",
      },
      {
        heading: "WaveNet: The Breakthrough",
        headingLevel: 2,
        body: "In 2016, DeepMind published a paper introducing WaveNet, a deep neural network that generated raw audio waveforms one sample at a time. Prior to WaveNet, most text-to-speech systems used concatenative synthesis (stitching together pre-recorded fragments) or parametric synthesis (mathematically modeling the vocal tract). Both approaches had obvious artifacts — you could always tell the voice was synthetic. WaveNet was different: it modeled the probability distribution of each audio sample conditioned on all previous samples, which produced speech that was nearly indistinguishable from a human recording.",
      },
      {
        heading: "How Neural Vocoders Generate Audio in Real Time",
        headingLevel: 2,
        body: "WaveNet-style autoregressive generation can be computationally expensive because later samples depend on earlier ones. Researchers have developed parallel and lightweight alternatives. These facts provide background for neural audio research, but Google has not identified Blob Opera as a WaveNet or neural-vocoder implementation. Its published description names a convolutional neural network without specifying this generation method.",
      },
      {
        heading: "Why Vocoder Quality Matters for AI Voice",
        headingLevel: 2,
        body: "Waveform generation is one factor in perceived voice quality, alongside data, controls, acoustic representation, timing, and artistic design. Blob Opera's charm also comes from its characters and forgiving interaction. Because the project does not publicly identify a vocoder, its sound should be discussed without attributing quality to an undocumented component.",
      },
    ],
  },

  {
    meta: {
      slug: "what-is-portamento",
      title: "What Is Portamento? The Art of the Glide Between Notes",
      description: "Discover the physics and beauty of portamento — the smooth glide between two pitches — and how it makes AI-generated singing sound more natural.",
      category: "music-education",
      readingTime: 6,
      publishedAt: "2026-07-17",
      keywords: ["what is portamento", "portamento in singing", "glide between notes", "vocal slides", "portamento AI singing"],
      relatedSlugs: ["how-ai-learns-to-sing", "what-is-vibrato", "tips-for-beautiful-melodies"],
    },
    sections: [
      {
        heading: "Portamento vs Legato: Different Types of Smoothness",
        headingLevel: 2,
        body: "Portamento is often confused with legato, but they are distinct techniques. Legato refers to playing or singing notes in a connected, smooth manner with no silence between them. Portamento goes further: it audibly slides through the intermediate pitches between the starting and ending note. Think of a trombone sliding between two notes versus a violin playing them connected but distinct. In vocal music, portamento is a deliberate expressive choice — a quick slide can add emotional urgency, while a slow, wide portamento creates a dramatic, almost cinematic effect.",
      },
      {
        heading: "The Physics of a Pitch Glide",
        headingLevel: 2,
        body: "During portamento, a singer maintains sound while pitch travels between notes. The rate and shape of that movement affect how the gesture is perceived. Blob Opera lets a player move continuously through pitch, but Google's public materials do not isolate portamento as a separately measured training target.",
      },
      {
        heading: "Why Portamento Is a Test of AI Voice Quality",
        headingLevel: 2,
        body: "A continuous control can reveal whether an interactive instrument moves smoothly or in audible steps. Try a slow vertical gesture in Blob Opera and describe what you hear. That listening exercise does not prove which synthesis method is used or whether the model represents portamento in the same physiological way as a singer.",
      },
    ],
  },

  {
    meta: {
      slug: "history-of-algorithmic-composition",
      title: "Algorithmic Composition: A History of Computer-Generated Music",
      description: "From Mozart's musical dice game to modern AI music tools, explore how composers have used rules and algorithms to create music for centuries.",
      category: "music-appreciation",
      readingTime: 7,
      publishedAt: "2026-07-17",
      keywords: ["algorithmic composition", "computer-generated music", "history of AI music", "algorithmic music", "music and algorithms"],
      relatedSlugs: ["why-blob-opera-is-genius", "opera-history-in-5-minutes", "the-harmony-engine"],
    },
    sections: [
      {
        heading: "Before Computers: Mozart's Musical Dice Game",
        headingLevel: 2,
        body: "The idea of using a systematic process to generate music predates computers by centuries. In 1787, Mozart (or a contemporary using his name) published a 'Musikalisches Wurfelspiel' — a musical dice game. A player would roll dice to select pre-composed musical fragments from a table, then combine them in sequence to create a waltz. Each fragment fit harmonically with the others, so any combination produced a serviceable piece. This is arguably the first algorithmic composition system: a set of rules that generates music without moment-to-moment human input.",
      },
      {
        heading: "The 1950s and 60s: Computers Enter the Picture",
        headingLevel: 2,
        body: "The first true computer-generated compositions emerged in the 1950s. Lejaren Hiller and Leonard Isaacson used the ILLIAC I computer at the University of Illinois to generate the Illiac Suite for string quartet (1957). They programmed rules of counterpoint and harmony into the computer and had it choose notes that satisfied the constraints. Around the same time, Iannis Xenakis used mathematical probability theory to compose orchestral works, translating physical models like gas diffusion into musical parameters. These pioneers established the conceptual framework that modern AI music tools build upon.",
      },
      {
        heading: "From Rules to Machine Learning",
        headingLevel: 2,
        body: "Many early computer-music systems used explicitly programmed rules, while modern machine-learning systems can learn statistical patterns from examples. Google confirms that Blob Opera uses a second model for harmonization, but it does not publish whether that model learned from scores, audio, rules, or another representation. The broader history helps frame the experiment without filling that gap with speculation.",
      },
      {
        heading: "Where Blob Opera Fits in This History",
        headingLevel: 2,
        body: "Blob Opera creates a responsive loop: a person chooses gestures while trained models produce voices and harmony. It is better described as an interactive instrument than as a system that autonomously composes a complete opera. Comparisons with historical chance music or modern generators can be useful, but they are interpretations rather than claims made by the creators.",
      },
    ],
  },

  {
    meta: {
      slug: "psychology-of-musical-preference",
      title: "The Psychology of Musical Preference: Why We Like What We Like",
      description: "Explore the psychology behind why certain melodies, harmonies, and rhythms appeal to us — and how understanding musical preference can deepen your music appreciation.",
      category: "music-appreciation",
      readingTime: 7,
      publishedAt: "2026-07-18",
      keywords: ["music psychology", "why we like music", "musical preference", "music and emotion", "psychology of music"],
      relatedSlugs: ["understanding-harmony-through-play", "what-are-the-four-voice-types", "why-blob-opera-is-genius"],
    },
    sections: [
      {
        heading: "Why Some Melodies Grab Us Instantly",
        headingLevel: 2,
        body: "Have you ever wondered why certain melodies stick in your head after a single listen while others fade immediately? Research in music psychology has identified several factors. Melodies with a mix of stepwise motion and occasional leaps tend to be more memorable than those that move erratically or stay flat. A clear contour — a recognizable shape of ascending and descending — makes a melody easier to remember. And melodies that create and resolve tension (through harmonic or rhythmic means) trigger the brain's reward system. These principles apply whether you are listening to Beethoven or conducting blobs in Blob Opera.",
      },
      {
        heading: "The Power of Expectation and Surprise",
        headingLevel: 2,
        body: "Expectation is one important idea in music cognition, but enjoyment varies across listeners, cultures, familiarity, and context. Blob Opera creates a mixture of user choice and model response that may feel predictable at one moment and surprising at another. The creators have not published a psychological study proving that this mechanism explains the experiment's popularity.",
      },
      {
        heading: "Why Major and Minor Sound Different",
        headingLevel: 2,
        body: "In common-practice Western music, major and minor triads differ in the quality of the third above the root. Simple ratios such as 5:4 and 6:5 describe just-intonation versions, while equal-tempered instruments use approximations. Emotional associations with major and minor are strongly shaped by musical and cultural context. Google has not published Blob Opera's chord vocabulary or tuning decisions.",
      },
    ],
  },

  {
    meta: {
      slug: "dynamic-range-in-singing",
      title: "Dynamic Range in Singing: From Whisper to Forte",
      description: "Learn how dynamic range shapes vocal expression, from the science of loudness to the art of emotional contrast in singing and AI voice synthesis.",
      category: "music-education",
      readingTime: 6,
      publishedAt: "2026-07-18",
      keywords: ["dynamic range singing", "vocal dynamics explained", "loudness in singing", "forte piano singing", "vocal expression"],
      relatedSlugs: ["what-is-vibrato", "vowel-shapes-ah-vs-oo", "tips-for-beautiful-melodies"],
    },
    sections: [
      {
        heading: "What Dynamic Range Means for the Voice",
        headingLevel: 2,
        body: "Dynamic range in singing refers to the span between the quietest and loudest sounds a voice can produce. A trained opera singer can command a dynamic range of 30 to 40 decibels — meaning their loudest notes carry roughly 1,000 times more acoustic power than their quietest. This range is not just about volume; it affects timbre, tone color, and emotional impact. A pianissimo (very soft) passage creates intimacy and vulnerability, while a fortissimo (very loud) climax conveys power and passion. The contrast between them is what gives music its emotional architecture.",
      },
      {
        heading: "How the Body Controls Loudness",
        headingLevel: 2,
        body: "Singers change loudness through coordinated airflow, vocal-fold behavior, resonance, and articulation. The relationship is complex and should not be reduced to a single instruction for vocal technique. Blob Opera learned from professional recordings, but Google does not say that it explicitly models breath pressure or vocal-fold resistance.",
      },
      {
        heading: "Dynamic Contrast in Blob Opera",
        headingLevel: 2,
        body: "Blob Opera's documented controls change pitch and vowel sound; Google does not document gesture speed as a volume control. You can still create a perceived arc by changing register, pace, repetition, and density, but that is a compositional suggestion rather than a claim about the model simulating vocal effort.",
      },
    ],
  },

  {
    meta: {
      slug: "ai-collaboration-vs-automation",
      title: "When AI Helps You Create: Collaboration vs Automation in Music",
      description: "A thoughtful exploration of the spectrum between AI-assisted creativity and fully automated music generation, using Blob Opera as a case study in collaborative AI.",
      category: "ai-music",
      readingTime: 8,
      publishedAt: "2026-07-18",
      keywords: ["AI music collaboration", "AI creativity vs automation", "AI-assisted composition", "human AI music", "AI tools for musicians"],
      relatedSlugs: ["why-blob-opera-is-genius", "how-ai-learns-to-sing", "the-harmony-engine"],
    },
    sections: [
      {
        heading: "The Spectrum from Tool to Creator",
        headingLevel: 2,
        body: "When we talk about AI in creative fields, we often collapse very different relationships into a single category. In reality, AI systems exist on a spectrum. At one end are tools: the AI does nothing creative on its own and merely executes the user's precise instructions. At the other end are autonomous generators: the user provides a prompt and the AI produces a finished output with no further human input. The most interesting territory — and where Blob Opera lives — is in the middle: collaborative systems where the AI handles technical complexity while the human makes all expressive decisions.",
      },
      {
        heading: "Why Collaboration Matters More Than Automation",
        headingLevel: 2,
        body: "Blob Opera gives the player immediate control over gestures while its models contribute vocal output and harmony. The player does not control every generated note, and it is a philosophical overreach to declare that other generated music can have no expressive purpose. The defensible point is that this interface keeps a human action inside the feedback loop.",
      },
      {
        heading: "What Makes a Good Creative AI Tool",
        headingLevel: 2,
        body: "Based on Blob Opera's success, we can identify several principles for effective creative AI tools. First, the interface must make the human's role intuitive — in Blob Opera, you drag blobs, not parameters. Second, the AI must handle complexity invisibly — the user should never have to think about formant frequencies or harmonic analysis. Third, the output must be forgiving — in Blob Opera, there are no wrong notes, only different musical choices. Fourth, the tool should amplify the user's sense of agency, not diminish it. When you create something in Blob Opera, it feels like your creation, not the AI's.",
      },
      {
        heading: "The Future of AI in Music Creation",
        headingLevel: 2,
        body: "The collaborative model that Blob Opera exemplifies points toward a future where AI tools expand the circle of who can create music rather than replacing those who already do. A child who cannot play an instrument can still craft a meaningful musical performance. A music teacher can demonstrate harmonic concepts without needing to arrange for a quartet. A professional musician can rapidly sketch vocal arrangements without booking studio time. The technology will undoubtedly improve, but the most important design insight — that the AI should serve the human's creative intent, not replace it — will remain central.",
      },
    ],
  }
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
  return articles.filter((a) => article.meta.relatedSlugs.includes(a.meta.slug)).slice(0, max);
}

export function getAllArticleSlugs(): string[] {
  return articles.map((a) => a.meta.slug);
}

export function getAllArticleMetas(): ArticleMeta[] {
  return articles.map((a) => a.meta);
}

export const categoryOrder: string[] = [
  "ai-music",
  "music-education",
  "guides",
  "music-appreciation",
];
