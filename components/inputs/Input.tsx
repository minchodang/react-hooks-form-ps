interface inputProps {
  placeholder: string;
  value: string;
}

export const Input = ({ placeholder, value }: inputProps) => {
  return (
    <>
      <input placeholder={placeholder} value={value} />
    </>
  );
};
