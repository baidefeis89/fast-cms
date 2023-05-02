import getHomeData from './utils/getHomeData';
import Element from './components/Sections/Element';
import Section from './components/Sections/Section';

export default async function Home() {
  const sections = await getHomeData();

  return (
    <>
      {sections.map((section) => {
        return (
          <Section key={section.id} background={section.background}>
            {section.elements.map((element, index) => (
              <Element key={index} data={element.content} />
            ))}
          </Section>
        );
      })}
    </>
  );
}
