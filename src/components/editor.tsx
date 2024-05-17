import { Editable, Slate, withReact } from "slate-react";

import { Descendant, createEditor } from "slate";
import { useCallback, useMemo } from "react";
import useEditorConfig from "@/lib/editor-config";
import { useSelection } from "@/lib/utils";
import Toolbar from './toolbar';


export type EditorProps = {
	document: Descendant[]
	onChange: ((value: Descendant[]) => void)
}


export default function Editor({ document, onChange }: EditorProps) {
  const editor = useMemo(() => withReact(createEditor()), []);
	const [selection, setSelection] = useSelection(editor);

	const { renderElement, renderLeaf, onKeyDown } = useEditorConfig(editor);

  const onChangeHandler = useCallback(
    (document : Descendant[]) => {
      onChange(document);
	    setSelection(editor.selection);
    },
    [editor.selection, onChange, setSelection]
  );

  return (
    <Slate editor={editor} initialValue={document} onChange={onChangeHandler}>
			<Toolbar selection={selection} editor={editor}/>
      <Editable renderElement={renderElement} renderLeaf={renderLeaf} onKeyDown={onKeyDown}/>
    </Slate>
  );
}
