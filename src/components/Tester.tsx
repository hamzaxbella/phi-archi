import { client } from "../lib/sanity";

// create an async function to fetch project from sanity
const getProject = async (locale : string) => {
  const query = `
    * [_type == 'project'] {
        title {
          ${locale}
        },
        description {
          ${locale}
        },
    }`;
  const data = client.fetch(query);
  return data;
};

export default async function Tester({locale} : {locale: string}) {
  const projects: any[] = await getProject(locale);
  console.log(projects[0].title)

  return (
    <div>
      {projects.map((project , index) => 
        (
            <div>
                <p key={index}>{project.title[locale]}</p>
                <p>{locale}</p>
            </div>
        )
      )}
    </div>
  );
}
