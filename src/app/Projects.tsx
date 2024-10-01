import PageHeader from "../component/PageHeader";
import Work from "../component/Work";
import { Works } from "../utils/util";

const Projects = () => {
  const desc = {
    title: "Projects",
    Text: "Projects and ideas I’ve worked on",
  };
  return (
    <PageHeader value={desc}>
      <ul className="flex flex-col gap-10 py-10">
        {Works.map((value) => {
          return <Work value={value}  />;
        })}
      </ul>
    </PageHeader>
  );
}

export default Projects