import { connect } from "react-redux";
import Dashboard from "../components/Dashboard";

const mapStateToProp = (state) => {
  return {
    cars: state.cars,
    user: state.user
  };
};

export default connect(mapStateToProp)(Dashboard);