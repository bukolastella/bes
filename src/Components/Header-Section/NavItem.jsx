import styles from "./NavItem.module.css";
function NavItem({ children }) {
  return <li className={styles.item}>{children}</li>;
}

export default NavItem;
