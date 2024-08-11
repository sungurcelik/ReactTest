const Button = ({buttonText}) => {
  
  const buttonStyle = {
    backgroundColor:
      buttonText === "Kullanıcı Girişi"
        ? "greenyellow"
        : buttonText === "Yönetici Girişi"
        ? "orangered"
        : "yellow",
  };
  return (
    <div className="user-login" style={buttonStyle}>
      {buttonText}
    </div>
  );
};

export default Button;
