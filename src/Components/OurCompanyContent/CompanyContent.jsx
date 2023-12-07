import Container from "../Reusable-Components/Container";
import CompanyContentDiv from "./CompanyContentDiv";
import Map from "./Map";
// import styles from "./Map.module.css";

function CompanyContent() {
  return (
    <Container>
      <Map />
      <CompanyContentDiv />
    </Container>
  );
}

export default CompanyContent;
