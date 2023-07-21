
// Parent context
import ChildD24A from "./3.ChildComp";
import { ProfileProvider } from "./1.Context/profileContext";

const ParentD24A = () => {
  return (
    <ProfileProvider value={{ name: "Satyam", city: "Jabalpur" }}>
      <div>
        <p>I am Parent D24A</p>
        <ChildD24A />
      </div>
    </ProfileProvider>
  );
};

export default ParentD24A;