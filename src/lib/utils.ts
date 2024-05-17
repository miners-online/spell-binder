import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import areEqual from "deep-equal";
import { BaseEditor, BaseRange, Range, Editor, Transforms } from "slate";
import { useCallback, useState } from "react";
import { ReactEditor } from "slate-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function useSelection(editor: BaseEditor & ReactEditor) {
  const [selection, setSelection] = useState(editor.selection);
  const setSelectionOptimized = useCallback(
    (newSelection: BaseRange) => {
      // don't update the component state if selection hasn't changed.
      if (areEqual(selection, newSelection)) {
        return;
      }
      setSelection(newSelection);
    },
    [setSelection, selection]
  );

  return [selection, setSelectionOptimized];
}

export function getActiveStyles(editor: Editor) {
  return new Set(Object.keys(Editor.marks(editor) ?? {}));
}

export function toggleStyle(editor: Editor, style: string) {
  const activeStyles = getActiveStyles(editor);
  if (activeStyles.has(style)) {
    Editor.removeMark(editor, style);
  } else {
    Editor.addMark(editor, style, true);
  }
}

export function removeStyles(editor: Editor) {
  const activeStyles = getActiveStyles(editor);
  for (const style of activeStyles) {
    Editor.removeMark(editor, style);
  }
}

export function addStyles(editor: Editor, styles: string[]) {
  for (const style of styles) {
    Editor.addMark(editor, style, true);
  }
}

export function getTextBlockStyle(editor: BaseEditor) {
  const selection = editor.selection;
  if (selection == null) {
    return null;
  }
  // gives the forward-direction points in case the selection was
  // was backwards.
  const [start, end] = Range.edges(selection);

  //path[0] gives us the index of the top-level block.
  let startTopLevelBlockIndex = start.path[0];
  const endTopLevelBlockIndex = end.path[0];

  let blockType = null;
  while (startTopLevelBlockIndex <= endTopLevelBlockIndex) {
    const [node, _] = Editor.node(editor, [startTopLevelBlockIndex]);
    if (blockType == null) {
      blockType = node.type;
    } else if (blockType !== node.type) {
      return "multiple";
    }
    startTopLevelBlockIndex++;
  }

  return blockType;
}

export function setBlockType(editor: BaseEditor, blockType: string) {
  Transforms.setNodes(
    editor,
    { type: blockType },
    { match: (n) => Editor.isBlock(editor, n) }
  );
}

export function removeBlockType(editor: BaseEditor) {
  Transforms.setNodes(
    editor,
    { type: "paragraph" },
    { match: (n) => Editor.isBlock(editor, n) }
  );
}
