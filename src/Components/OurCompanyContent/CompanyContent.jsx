import Container from "../Reusable-Components/Container";
import CompanyContentDiv from "./CompanyContentDiv";
import Map1 from "./Map1";
// import styles from "./Map.module.css";

function CompanyContent() {
  return (
    <Container>
      <Map1 />
      <CompanyContentDiv />
    </Container>
  );
}

export default CompanyContent;
