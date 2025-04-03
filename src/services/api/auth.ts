import { API_URL } from "@/configs/config";
import axios from "axios";
import { jwtDecode } from "jwt-decode";





export async function logout() {
  try {
    // Remove token and role from localStorage
    localStorage.removeItem("authToken");
    localStorage.removeItem("userRole");

    // Remove token from cookies
    document.cookie = "auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  } catch (error) {
    console.error("Error during logout:", error);
    throw new Error("Logout failed. Please try again.");
  }
}