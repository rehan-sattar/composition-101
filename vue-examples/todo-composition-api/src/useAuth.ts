import { ref } from 'vue'

export function useAuthentication() {
  const isAuthenticated = ref(false)

  const login = (username) => {
    // Simulating authentication logic, for example purposes
    isAuthenticated.value = true
    console.log(`User ${username} logged in.`)
  }

  const logout = () => {
    // Simulating logout logic
    isAuthenticated.value = false
    console.log('User logged out.')
  }

  const checkAuthentication = () => {
    return isAuthenticated.value
  }

  return { isAuthenticated, login, logout, checkAuthentication }
}
