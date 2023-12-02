// import NavItem from "./NavItem";
// import Logo from "./Logo";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

function Nav() {
  // const navItems = ["What We Do", "Our Projects", "Our Company"];
  return (
    <nav>
      {/* <Logo /> */}
      <ul className={styles.nav}>
        <li>
          <NavLink to="/whatwedo">What We Do</NavLink>
        </li>
        <li>
          <NavLink to="/ourprojects">Our Projects</NavLink>
        </li>
        <li>
          <NavLink to="/ourcompany">Our Company</NavLink>
        </li>

        {/* {navItems.map((item) => (
          <NavItem key={item}>{item}</NavItem>
        ))} */}
      </ul>
    </nav>
  );
}

export default Nav;
