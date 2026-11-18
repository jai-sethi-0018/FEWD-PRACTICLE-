import { createUser, saveUserToDatabase } from "./registerUser.js";
import { fetchDashboardData, renderDashboard } from "./dashboard.js";

// Synchronous execution demonstration
console.log("=== [Sync] Program Started ===");

// Using let & const
let studentName = "Jai Sethi";
const studentEmail = "jai.sethi@mca.edu.in";

// Register user using default role ("MCA Student") and rest skills
const newUser = createUser(studentName, studentEmail, undefined, "HTML", "CSS", "JavaScript", "React");

// Destructuring for quick preview log
const { id, name, role } = newUser;
console.log(`[Sync] User Object Created -> ID: ${id}, Name: ${name}, Role: ${role}`);

// Asynchronous workflow using async/await
const runRegistrationAndDashboard = async () => {
  try {
    // 1. Save user asynchronously with a callback
    const savedUser = await saveUserToDatabase(newUser, (u) => {
      console.log(`[Callback] Confirmation email queued for: ${u.email}`);
    });

    // 2. Load dashboard asynchronously after saving completes
    const dashboardData = await fetchDashboardData(savedUser);

    // 3. Display final dashboard
    renderDashboard(dashboardData);
    console.log("=== [Async] All Operations Completed Successfully ===");
  } catch (error) {
    console.error(`[Error] Process failed: ${error.message}`);
  }
};

// Start async operation
runRegistrationAndDashboard();

// Synchronous line proving non-blocking asynchronous execution
console.log("=== [Sync] Main thread continues without blocking while async tasks run... ===\n");