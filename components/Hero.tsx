import GameEmbed from "./GameEmbed";

export default function Hero() {
  return (
    <section className="hero-gradient px-4 pt-4 pb-8 sm:pt-6 sm:pb-10">
      <GameEmbed />

      <div className="max-w-5xl mx-auto mt-6 text-center">
        <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-text-dark">
          Play Blob Opera Online
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-text-dark/80 leading-7 mt-2">
          Conduct four machine-learning opera voices, explore pitch and vowel
          sounds, and hear the quartet harmonize your gestures in real time.
        </p>
      </div>
    </section>
  );
}
