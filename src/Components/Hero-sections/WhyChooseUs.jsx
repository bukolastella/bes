import Container from "../Reusable-Components/Container";
import styles from "./WhyChooseUs.module.css";
import WhyChooseUsCard from "./WhyChooseUsCard";

const whyChooseUsArray = [
  {
    heading: "Integrated Excellence in Construction",
    text: "Embracing a spectrum of specialized services, our project pledges a commitment to excellence that seamlessly integrates various construction disciplines. From piling works to telecommunications, each facet is nurtured to perfection.",
  },
  {
    heading: "Expertise and Experience",
    text: "Our project weaves together the threads of telecommunication, borehole drilling, and geotechnical analysis expertise, crafting innovation and reliability, adorned with a spectrum of versatile colors",
  },
  {
    heading: "Quality and Precision",
    text: "From crafting solid foundations through piling works to architectural feats of civil engineering, our project becomes the blueprint for dreams realized. Our color choices resonate with strength and professionalism, mirroring our unwavering commitment.",
  },
  {
    heading: "Navigating Success, Guiding Projects",
    text: "In the realm of construction, we stand as navigators, guiding your projects from concept to completion. With shades of stability and growth, our colors mirror our values, ensuring your visions find a concrete existence.",
  },
];

function WhyChooseUs() {
  return (
    <Container paddingType="sidePaddings" background="#fff">
      <div className={styles.whyChooseUs}>
        <p>Benefits</p>
        <h2>Why Choose Us</h2>
        <div className={styles.cardContainer}>
          {whyChooseUsArray.map((card) => (
            <WhyChooseUsCard
              heading={card.heading}
              key={card.heading}
              text={card.text}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default WhyChooseUs;
