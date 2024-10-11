const Task = ({data}) => {
  return (
    <div>
      {`${data.type} ${data.location} ${data.date} ${data.name}`}
    </div>
  );
};

export default Task;
