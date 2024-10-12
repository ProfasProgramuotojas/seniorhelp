
import TaskType from '../components/TaskType';

const types = [
  { number: '+37063003800', type: 'Kompiuteriu' },
  { number: '+37063003800', type: 'Prekėmis' },
  { number: '+37063003800', type: 'Vaistais' },
  { number: '+37063003800', type: 'Augintiniu' },
  { number: '+37063003800', type: 'Namų ruoša' },
];

const page = () => {
  return (
    <div className='senior-global'>
      <div className='senior-subheader-text'>Reikia pagalbos su:</div>
      {types.map((task) => {
        return <TaskType task={task} />;

      })}
    </div>
  );
};

export default page;
