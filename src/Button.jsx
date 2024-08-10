const Button = (props) => {
  return (
    <div
      className="user-login"
      style={{
        backgroundColor:
          props.buttonText === "Kullanıcı Girişi"
            ? "greenyellow"
            : props.buttonText === "Yönetici Girişi"
            ? "orangered"
            : "yellow",
      }}
    >
      {props.buttonText}
    </div>
  );
};

export default Button;
