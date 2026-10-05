"use client";

import { useEffect, useState } from "react";

const notes = ["ship good things", "stay curious", "make it happen", "keep creating"];

export function DevAtmosphere() {
  const [note, setNote] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setNote((current) => (current + 1) % notes.length), 4200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="dev-atmosphere" aria-hidden="true">
      <div className="dev-background-image" />
      <div className="dev-scene">
        <div className="dev-scene-glow" />
        <div className="dev-ai-core"><span>AI</span></div>
        <div className="dev-editor">
          <div className="dev-editor-top"><i /><i /><i /><span>agent.ts · building</span></div>
          <div className="dev-editor-code">
            <span><b>01</b> <i>const</i> agent = <em>createBuilder</em>();</span>
            <span><b>02</b> agent.<i>think</i>(<strong>"big ideas"</strong>);</span>
            <span><b>03</b> <i>while</i> (dreams) {'{'} </span>
            <span><b>04</b> &nbsp; await agent.<em>build</em>();</span>
            <span><b>05</b> {'}'}</span>
            <span className="dev-editor-cursor"><b>06</b> <i>ship</i>(<strong>"something great"</strong>);</span>
          </div>
          <div className="dev-build-status"><span /> building something great</div>
        </div>
        <span className="dev-vibe">✦ {notes[note]} ✦</span>
        <span className="dev-scene-spark dev-scene-spark-one">✳</span>
        <span className="dev-scene-spark dev-scene-spark-two">✦</span>
      </div>
    </div>
  );
}
