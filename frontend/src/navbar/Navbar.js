import "./Navbar.css"
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
      <nav>
        <div class="logo">Forms-builder</div>  
        <ul>
          <li><a href="/">Home</a></li>
          <li><Link to="/generate">Generate</Link></li>

        </ul>
      </nav>
    
  )
}
