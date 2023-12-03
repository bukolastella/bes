// import Container from "../Reusable-Components/Container";
import Container from "../Reusable-Components/Container";
import Card from "./Card";
import styles from "./SummaryOfJobs.module.css";
// import Container from "../Reusable-Components/Container";
const myArray = [
  { num: "10+", text: "Years  Experience" },
  { num: "500+", text: "Projects Done" },
  { num: "100+", text: "Clients Satisfied" },
  { num: "100+", text: "Cities Visited" },
];
function SummaryOfJobs() {
  return (
    <Container paddingType="sidePaddings" background="#EEF5F2">
      <div className={styles.summaryDiv}>
        {myArray.map((each) => (
          <Card text={each.text} heading={each.num} key={each.text} />
        ))}
      </div>
    </Container>
  );
}

export default SummaryOfJobs;
