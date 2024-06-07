/**
 * The original file found at https://github.com/facebook/lexical/blob/main/examples/react-rich/src/plugins/TreeViewPlugin.tsx:
 * 
 * The original file is licensed under the MIT license.
 */

import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import {TreeView} from '@lexical/react/LexicalTreeView';

export default function TreeViewPlugin(): JSX.Element {
  const [editor] = useLexicalComposerContext();
  return (
    <TreeView
      viewClassName="tree-view-output"
      treeTypeButtonClassName="debug-treetype-button"
      timeTravelPanelClassName="debug-timetravel-panel"
      timeTravelButtonClassName="debug-timetravel-button"
      timeTravelPanelSliderClassName="debug-timetravel-panel-slider"
      timeTravelPanelButtonClassName="debug-timetravel-panel-button"
      editor={editor}
    />
  );
}
