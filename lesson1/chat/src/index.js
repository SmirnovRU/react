import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import styles from "./index.module.css";

// const FilmList = ({ films }) => {
//   return films.map((film) => {
//     return (
//       <div>
//         <h2>title: {film.title}</h2>
//         <h2>year: {film.year}</h2>
//       </div>
//     );
//   });
// };

// class ClassComponent extends React.Component {
//   render() {
//     const { age, films } = this.props;
//     return (
//       <div>
//         <h1>Hello Class component</h1>
//         <h2>Age: {age}</h2>
//         <FilmList films={films} />
//       </div>
//     );
//   }
// }

// function FunctionComponent({ age, films }) {
//   return (
//     <div>
//       <h1>Hello Function component</h1>
//       <h2>Age: {age}</h2>
//       <FilmList films={films} />
//     </div>
//   );
// }

// const Parent = () => {
//   const age = 23;
//   const films = [
//     { title: "films1", year: 2020 },
//     { title: "films2", year: 2020 },
//   ];
//   return (
//     <div>
//       <h1>Parent</h1>
//       <ClassComponent age={age} films={films} />
//       <hr />
//       <FunctionComponent age={age} films={films} />
//     </div>
//   );
// };

function Message({ text }) {
  return (
    <div>
      <h1 className={styles.message__text}>{text}</h1>
    </div>
  );
}

function App() {
  const text = "Переданный пропсом техт-константа";
  return (
    <div>
      <Message text={text} />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
