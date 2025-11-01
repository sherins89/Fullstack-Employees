import express from "express";
const router = express.Router();
export default router;

//CRUD for postgres //

import {
  createEmployee,
  getEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
} from "#db/queries.employees";

// express GET return array of employees //
router.get("/", async (req, res) => {
  const employees = await getEmployees();
  res.send(employees);
});
