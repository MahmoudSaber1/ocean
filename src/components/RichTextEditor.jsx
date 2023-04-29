import React from "react";
import { Editor } from "primereact/editor";

const RichTextEditor = ({ onChangeRichTextEditor, editorState }) => (
	<div className="card">
		<Editor
			value={editorState}
			onTextChange={(e) => onChangeRichTextEditor(e.htmlValue)}
			style={{ height: "320px" }}
		/>
	</div>
);
export default RichTextEditor;
