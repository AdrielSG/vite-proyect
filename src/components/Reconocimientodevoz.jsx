import React, { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import "regenerator-runtime/runtime";
import "bootstrap/dist/css/bootstrap.min.css";

const SpeechToText = () => {
  const [text, setText] = useState("");
  const [submittedText, setSubmittedText] = useState("");
  
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  React.useEffect(() => {
    setText(transcript);
  }, [transcript]);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    setSubmittedText(text);
    setText("");
    resetTranscript();
  };

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: "es-ES" });
  };

  return (
    <div className="container p-4 border rounded shadow">
      <input 
        type="text" 
        value={text} 
        onChange={handleInputChange} 
        placeholder="Escribe o usa el micrófono..." 
        className="form-control mb-2"
      />
      <div className="d-flex gap-2 mb-2">
        <button onClick={handleSubmit} className="btn btn-primary">Enviar</button>
        <button onClick={startListening} disabled={listening} className="btn btn-secondary">
          {listening ? "Escuchando..." : "Iniciar micrófono"}
        </button>
      </div>
      {submittedText && (
        <div className="mt-4 p-2 border rounded bg-light">
          <strong>Texto enviado:</strong> {submittedText}
        </div>
      )}
    </div>
  );
};

export default SpeechToText;
