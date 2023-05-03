import Element from './components/Sections/Element';
import Section from './components/Sections/Section';
import getData from './utils/getData';

export default async function Home() {
  const { sections } = await getData('home');

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
