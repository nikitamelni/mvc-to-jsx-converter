const Textarea = ({ textToUse, onChange }) => {
  return (
      <textarea
        className="w-50 h-100 mh-100 bg-dark text-light"
        id="exampleFormControlTextarea1"
        rows="40"
        value={textToUse}
        onChange={onChange}
      ></textarea>
  );
};

export default Textarea;