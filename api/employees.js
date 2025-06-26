import express from "express";
import {
  createEmployee,
  getEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
} from "#db/queries/employees";
const router = express.Router();
export default router;

// TODO: this file!
router.get("/", async (req, res) => {
  try {
    const employees = await getEmployees();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch employees" });
  }
});

router.post("/", async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).json({ error: "Request body is required" });
    }

    const { name, birthday, salary } = req.body;

    if (!name || !birthday || salary === undefined) {
      return res.status(400).json({
        error:
          "Missing required fields: name, birthday, and salary are required",
      });
    }

    const newEmployee = await createEmployee({ name, birthday, salary });
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(500).json({ error: "Failed to create employee" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id) || req.params.id !== id.toString()) {
      return res.status(400).json({ error: "ID must be a positive integer" });
    }

    const employee = await getEmployee(id);

    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }

    res.json(employee);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch employee" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id) || req.params.id !== id.toString()) {
      return res.status(400).json({ error: "ID must be a positive integer" });
    }

    if (!req.body) {
      return res.status(400).json({ error: "Request body is required" });
    }

    const { name, birthday, salary } = req.body;

    if (!name || !birthday || salary === undefined) {
      return res.status(400).json({
        error:
          "Missing required fields: name, birthday, and salary are required",
      });
    }

    const updatedEmployee = await updateEmployee({
      id,
      name,
      birthday,
      salary,
    });

    if (!updatedEmployee) {
      return res.status(404).json({ error: "Employee not found" });
    }

    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.status(500).json({ error: "Failed to update employee" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id) || req.params.id !== id.toString()) {
      return res.status(400).json({ error: "ID must be a positive integer" });
    }

    const deletedEmployee = await deleteEmployee(id);

    if (!deletedEmployee) {
      return res.status(404).json({ error: "Employee not found" });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete employee" });
  }
});
