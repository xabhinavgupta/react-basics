import ChildView from "./2.ChildView";
const ParentView = () => {
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
        <ChildView name="Ajit" city="Mumbai" number="10234" />
        <ChildView name="Sohail" city="Bhopal" />
        <ChildView name="Khusi" city="Bhopal" />
        <ChildView name="Reetika" city="Delhi" />
        <ChildView name="Arun" city="Morena" />
        <ChildView name="Varun" city="Delhi" />
        <ChildView name="Sachin" city="Bangalore" />
        <ChildView name="Deepak" city="Bihar" />
        <ChildView name="Manasvi" city="Bhopal" />
        <ChildView />
      </div>
    );
  };
  
  export default ParentView;