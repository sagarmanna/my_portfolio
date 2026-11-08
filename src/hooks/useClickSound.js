import { useEffect } from "react";

export default function useClickSound() {
  useEffect(() => {
    let context;
    let tapBuffer;
    let lastClick = -Infinity;
    let disposed = false;
    const play = async event => {
      if (!(event.target instanceof Element)) return;
      const control = event.target.closest("button, [role='button'], [data-sound='on']");
      if (!control || control.matches(":disabled, [aria-disabled='true'], [data-sound='off']")) return;
      if (performance.now() - lastClick < 80) return;
      lastClick = performance.now();
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        context ??= new AudioContext();
        if (context.state === "suspended") await context.resume();
        if (disposed || context.state !== "running") return;
        const time = context.currentTime;
        if (!tapBuffer) {
          tapBuffer = context.createBuffer(1, Math.ceil(context.sampleRate * .035), context.sampleRate);
          const samples = tapBuffer.getChannelData(0);
          for (let i = 0; i < samples.length; i++) {
            const progress = i / samples.length;
            samples[i] = (Math.random() * 2 - 1) * Math.exp(-progress * 9);
          }
        }
        const tap = context.createBufferSource();
        const filter = context.createBiquadFilter();
        const volume = context.createGain();
        tap.buffer = tapBuffer;
        filter.type = "bandpass";
        filter.frequency.value = 1100;
        filter.Q.value = .65;
        volume.gain.setValueAtTime(0, time);
        volume.gain.linearRampToValueAtTime(.18, time + .001);
        volume.gain.exponentialRampToValueAtTime(.0001, time + .032);
        tap.connect(filter);
        filter.connect(volume);
        volume.connect(context.destination);
        tap.onended = () => { tap.disconnect(); filter.disconnect(); volume.disconnect(); };
        tap.start(time);
      } catch { /* Navigation and controls must work even without audio. */ }
    };
    // Capture also covers controls inside modal portals that stop propagation.
    document.addEventListener("click", play, true);
    return () => {
      disposed = true;
      document.removeEventListener("click", play, true);
      if (context && context.state !== "closed") void context.close().catch(() => {});
    };
  }, []);

}
