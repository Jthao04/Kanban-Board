import { JwtPayload } from 'jwt-decode';
import jwtDecode from 'jwt-decode';

class AuthService {
  getProfile() {
    const token = this.getToken();
    if (!token) return null;
    return jwtDecode<JwtPayload>(token);
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token); 
  }
  
  isTokenExpired(token: string) {
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      if (!decoded.exp) return true; 
      const currentTime = Date.now() / 1000; 
      return decoded.exp < currentTime; 
    } catch (error) {
      return true; 
    }
  }

  getToken(): string {
    return localStorage.getItem('id_token') || ''; 
  }

  login(idToken: string) {
    localStorage.setItem('id_token', idToken); 
    window.location.assign('/'); 
  }

  logout() {
    localStorage.removeItem('id_token'); 
    window.location.assign('/login'); 
  }
}

export default new AuthService();