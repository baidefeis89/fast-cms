import Section from '../components/Sections/Section';
import Element from '../components/Sections/Element';
import getData from '../utils/getData';

const Page = async (context: any) => {
  const { slug } = context.params;
  const { sections } = await getData(slug[0] || slug);

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
};

export default Page;
