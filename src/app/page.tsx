import Element from './components/Sections/Element';
import Section from './components/Sections/Section';
import Data from './data/home.json';

export default async function Home() {
  const { sections } = Data;

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
