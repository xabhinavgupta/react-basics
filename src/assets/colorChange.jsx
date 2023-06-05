const TextView = ({ label, size, color, bold }) => {
    return (
      <p style={{ color, fontSize: size, fontWeight: bold ? "bold" : "normal" }}>
        {label}
      </p>
    );
  };
  
  TextView.defaultProps = {
    label: "",
    size: 11,
    color: "black",
    bold: false,
  };
  
  export default TextView;  
  
  