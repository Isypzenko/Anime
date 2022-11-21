import "./ButtonGroup.css";

import Button from "../../Button";


const genres = [
  {
    name: "Война",
    id: 123
  },
  {
    name: "Драма",
    id: 123
  },
  {
    name: "Детектив",
    id: 123
  },
  {
    name: "История",
    id: 123
  },
  {
    name: "Комедия",
    id: 123
  },
  {
    name: "Меха",
    id: 123
  },
  {
    name: "Мистика",
    id: 123
  },
  {
    name: "Музыкальный",
    id: 123
  },
  {
    name: "Повседневность",
    id: 123
  },
  {
    name: "Приключения",
    id: 123
  },
  {
    name: "Пародия",
    id: 123
  },
  {
    name: "Романтика",
    id: 123
  },
  {
    name: "Сёнэн",
    id: 123
  },
]

const ButtonGroup = () => {
  return (
    <div className="button-group">
      <Button className="button-group__item">Жанры</Button>
      <Button className="button-group__item">Онгоинги</Button>
      <Button className="button-group__item">Расписание</Button>
    </div>
  )
}



export default ButtonGroup;