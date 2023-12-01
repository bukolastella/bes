import NavItem from "./NavItem";
import styles from "./Nav.module.css";
function Nav() {
  const navItems = ["What We Do", "Our Projects", "Our Company"];
  return (
    <ul className={styles.nav}>
      {navItems.map((item) => (
        <NavItem key={item}>{item}</NavItem>
      ))}
    </ul>
  );
}

export default Nav;
