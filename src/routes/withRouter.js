import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [state, setState] = useState("");
    //  console.log(state);

    useEffect(() => {
      if (state === "/") {
        navigate("/");
      } else {
        console.log("no need redirecting");
      }
    }, [state]);

    // console.log(location);
    return <Component state={setState} location={location} />;
  };

  return Wrapper;
};
