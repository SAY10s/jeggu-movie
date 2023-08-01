import "./App.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landingpage">
      <div
        className="title"
        onClick={() => {
          navigate("/graj");
        }}
      >
        Zobacz twoją grę!
      </div>
    </div>
  );
};

export default LandingPage;
