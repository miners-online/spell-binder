import { Editable, Slate, withReact } from "slate-react";

import { Descendant, createEditor } from "slate";
import { useMemo } from "react";
import useEditorConfig from "@/lib/editor-config";


export type EditorProps = {
	document: Descendant[]
	onChange: ((value: Descendant[]) => void)
}


export default function Editor({ document, onChange }: EditorProps) {
  const editor = useMemo(() => withReact(createEditor()), []);
	const { renderElement, renderLeaf } = useEditorConfig(editor);
  return (
    <Slate editor={editor} initialValue={document} onChange={onChange}>
      <Editable renderElement={renderElement} renderLeaf={renderLeaf}/>
    </Slate>
  );
}
