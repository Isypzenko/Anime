import "./DropDown.css";

const DropDown = ({ list }) => {
  return (
    <ul className="drop-down">
      {list.map((item, index) => {
        return <li className="drop-down__item" key={index + "dropDown"}>{item.name}</li>
      })}
    </ul>
  )
}

export default DropDown;