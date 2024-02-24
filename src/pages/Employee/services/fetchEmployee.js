// Adjust the path as per your project structure

import axiosInstance from "../../../api";
import ENDPOINTS from "../../../api/ENDPOINTS";

const fetchEmployees = () => {
  return axiosInstance.get(ENDPOINTS.EMPLOYEES);
};

export default fetchEmployees;
