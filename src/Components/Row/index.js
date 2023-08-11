import Button from '../Button';
import './row.css';

function Row(props) {
  console.log(props);
  return (
    <div className="Row">
      {props.numbers.map((element) => {
        return <Button key={element} text={element} />;
      })}
    </div>
  );
}

export default Row;
