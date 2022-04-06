const Textarea = ({ textToUse, onChange }) => {
  return (
    <div className="code border border-primary">
      <pre>
        <code>
          <div contenteditable="true" onInput={onChange} value={textToUse}>
            This text can be edited by the user.
          </div>
        </code>
      </pre>
    </div>

  );
};

export default Textarea;