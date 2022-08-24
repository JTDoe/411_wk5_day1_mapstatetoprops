import { connect } from "react-redux";
import Home from "../components/Home";

const mapStateToProp = (state) => {
  return {
    cars: state.cars,
    user: state.user
  };
};

export default connect(mapStateToProp)(Home);