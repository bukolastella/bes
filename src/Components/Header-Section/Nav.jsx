// import NavItem from "./NavItem";
// import Logo from "./Logo";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

function Nav({ open, setOpen }) {
  // const navItems = ["What We Do", "Our Projects", "Our Company"];
  console.log(open);
  return (
    <nav>
      {/* <Logo /> */}
      <ul className={open ? styles.open : ""}>
        <li onClick={() => setOpen(false)}>
          <NavLink to="/whatwedo">What We Do</NavLink>
        </li>
        <li onClick={() => setOpen(false)}>
          <NavLink to="/ourprojects">Our Projects</NavLink>
        </li>
        <li onClick={() => setOpen(false)}>
          <NavLink to="/ourcompany">Our Company</NavLink>
        </li>

        <li onClick={() => setOpen(false)} className={styles.contactLink}>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>

        {/* {navItems.map((item) => (
          <NavItem key={item}>{item}</NavItem>
        ))} */}
      </ul>
    </nav>
  );
}

export default Nav;
