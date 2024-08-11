const InputField = ({ labelTitle, placeTitle, onChange }) => {
  return (
    <div>
      <label htmlFor="name">{labelTitle}</label>
      <input
        onChange={onChange}
        id="name"
        type="text"
        placeholder={placeTitle}
      />
    </div>
  );
};

export default InputField;
