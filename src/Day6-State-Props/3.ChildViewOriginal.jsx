
const ChildView = (meraProps) => {
    return (
      <div
        style={{
          backgroundColor: "white",
          height: 140,
          width: 100,
          padding: 12,
          boxShadow: "silver 0px 0px 1px 1px",
        }}
      >
        <p>
          {meraProps.name} from {meraProps.city}
        </p>
      </div>
    );
  };

  export default ChildView;