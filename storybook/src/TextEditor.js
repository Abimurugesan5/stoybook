import React, { useState, useEffect } from "react";
import Editor from "./Editor";

export default function TextEditor()  {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [ setData] = useState("");

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <div className="App">

      <Editor
        name="description"
        type="text"
        onChange={(data) => {
          setData(data);
        }}
        editorLoaded={editorLoaded}
      />

    </div>
  );
}
