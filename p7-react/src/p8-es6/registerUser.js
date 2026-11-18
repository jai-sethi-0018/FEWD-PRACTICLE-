// Global tracking using var (demonstrating var, let, const)
var totalRegistrations = 0;

// Arrow function with Default Parameters, Rest Parameter, Spread Operator & Object Literal Extensions
export const createUser = (
  name,
  email,
  role = "MCA Student", // Default parameter
  ...skills             // Rest parameter
) => {
  const registeredAt = new Date().toLocaleTimeString();

  // Base object
  const baseDetails = {
    name,          // Object literal shorthand
    email,
    role,
    skills,
    registeredAt,
  };

  // Spread operator to add extra metadata
  const fullUser = {
    ...baseDetails,
    id: `USR-${100 + ++totalRegistrations}`,
    isActive: true,
  };

  return fullUser;
};

// Asynchronous simulation using Promise + Callback
export const saveUserToDatabase = (user, onSaveCallback) => {
  return new Promise((resolve, reject) => {
    console.log(`[Async Step 1] Saving user "${user.name}" to database... (Please wait 2s)`);

    setTimeout(() => {
      if (!user.email.includes("@")) {
        reject(new Error("Invalid email format!"));
        return;
      }

      // Invoke callback function once saved
      if (typeof onSaveCallback === "function") {
        onSaveCallback(user);
      }

      resolve(user);
    }, 2000);
  });
};