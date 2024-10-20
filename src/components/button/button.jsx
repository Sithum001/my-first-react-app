import "./style.css"

const ButtonComponent = ({onClickNum,label}) => {
  return (
    <>
      <button className="button-style" onClick={onClickNum}>{label}</button>

    </>
  );
};
export default ButtonComponent;
