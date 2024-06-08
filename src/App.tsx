import {
  FluentProvider,
  webLightTheme,
  makeStyles,
  tokens
} from "@fluentui/react-components";

import {AutoFocusPlugin} from '@lexical/react/LexicalAutoFocusPlugin';
import {InitialConfigType, LexicalComposer} from '@lexical/react/LexicalComposer';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';

import ExampleTheme from './ExampleTheme';
import ToolbarPlugin from './plugins/ToolbarPlugin';
import TreeViewPlugin from './plugins/TreeViewPlugin';

import "./App.scss"
import { Navigation } from "./Navigation";
import { Hamburger } from "@fluentui/react-nav-preview";



function Placeholder() {
  return <div className="editor-placeholder">Enter some rich text...</div>;
}


const useStyles = makeStyles({
  root: {
    overflow: "hidden",
    display: "flex",
    height: "600px",
  },
  content: {
    flex: "1",
    paddingLeft: "64px",
    paddingRight: "64px",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: tokens.colorNeutralBackground2
  },
  editor: {
    backgroundColor: tokens.colorNeutralBackground1,
    height: "90%"
  },
  field: {
    display: "flex",
    marginTop: "4px",
    marginLeft: "8px",
    flexDirection: "column",
    gridRowGap: tokens.spacingVerticalS,
  },
});

const editorConfig: InitialConfigType = {
  namespace: 'React.js Demo',
  nodes: [],
  // Handling of errors during update
  onError(error: Error) {
    throw error;
  },
  // The editor theme
  theme: ExampleTheme,
};


export default function App() {
  const styles = useStyles();
  return (
    <FluentProvider theme={webLightTheme}>
      <div className={styles.root}>
        <Navigation/>
        <div className={styles.content}>
          <LexicalComposer initialConfig={editorConfig}>
            <ToolbarPlugin />
            <div className={styles.editor}>
              <RichTextPlugin
                contentEditable={<ContentEditable/>}
                placeholder={<Placeholder />}
                ErrorBoundary={LexicalErrorBoundary}
              />
              <HistoryPlugin />
              <AutoFocusPlugin />
              {/* <TreeViewPlugin /> */}
            </div>
          </LexicalComposer>
        </div>
      </div>
    </FluentProvider>
  );
}