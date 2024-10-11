import TaskType from "../components/TaskType";

const types = [
  { number: "+37063003800", type: "Kompiuteriu" },
  { number: "+37063003800", type: "Prekėmis" },
  { number: "+37063003800", type: "Vaistais" },
  { number: "+37063003800", type: "Augintiniu" },
];

const page = () => {
  return (
    <div className="senior-global">
      <div className="senior-header">
        <div className="senior-header-text">Pagalba programėlėje</div>
      </div>
      <div className="senior-subheader-text">Reikia pagalbos su:</div>
      {types.map((task) => {
        return (
          <div>
            <TaskType task={task} />
          </div>
        );
      })}
    </div>
  );
};

export default page;
