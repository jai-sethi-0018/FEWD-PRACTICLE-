// Asynchronous function returning a Promise to simulate dashboard fetching
export const fetchDashboardData = (user) => {
  return new Promise((resolve) => {
    console.log(`[Async Step 2] Loading personalized dashboard for ${user.name}... (Please wait 1.5s)`);

    setTimeout(() => {
      // Destructuring selected fields from user object
      const { id, name, role, skills } = user;

      const dashboardInfo = {
        userId: id,
        welcomeMessage: `Welcome back, ${name}!`,
        assignedRole: role,
        enrolledCourses: ["Front End Web Development", "Data Structures", "DBMS"],
        skillCount: skills.length,
        skillsList: skills,
      };

      resolve(dashboardInfo);
    }, 1500);
  });
};

// Arrow function using Template Literals to display the dashboard
export const renderDashboard = (dashboard) => {
  const { userId, welcomeMessage, assignedRole, enrolledCourses, skillsList } = dashboard;

  console.log("\n==========================================");
  console.log(`           USER DASHBOARD (${userId})        `);
  console.log("==========================================");
  console.log(`Status  : ${welcomeMessage}`);
  console.log(`Role    : ${assignedRole}`);
  console.log(`Skills  : ${skillsList.join(", ")}`);
  console.log(`Courses : ${enrolledCourses.join(" | ")}`);
  console.log("==========================================\n");
};