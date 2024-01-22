import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-monokai';

const Editor = () => {
  return (
    <AceEditor
      mode="java"
      theme="monokai"
      fontSize={14}
      height="400px"
      width="100%"
      value=""
      onChange={(code) => {
        console.log(code); // Handle the code change
      }}
    />
  );
};

export default Editor;
