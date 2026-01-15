export function LoginService(user, passwd) {
  // Primero revisamos si hay un registro temporal
  const tempUser = JSON.parse(sessionStorage.getItem('tempUser'));

  if (tempUser && user === tempUser.user && passwd === tempUser.passwd) {
    return {
      name: tempUser.name,
      lastName: tempUser.lastname,
      role: "user",  // Rol por defecto para usuarios registrados
      image: "",
    };
  }

  // O el usuario admin predefinido
  if (user === "admin" && passwd === "admin123") {
    return {
      name: "Administrador",
      lastName: "Main",
      role: "admin",
      image: "",
    };
  }

  return null; // Login fallido
}
