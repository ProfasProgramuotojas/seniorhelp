import jsonData from "../../data.json"
const page = () => {
  return (
    <div>
      <div>Po apačia matote visus pagalbos prašymus</div>
      {jsonData.map((request, key) => {
        return(
          <div key={key}>{request.type}</div>
        )
      })}
    </div>
  );
};

export default page;
