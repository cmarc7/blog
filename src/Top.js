import './Top.css';

function Top ({ num, nombre, img, des }) {
  return (
    <>
      <h2>#{num}{nombre}</h2>
      <img src={require(`${img}`)} />
      <p>{des}</p>
    </>
  );
}

export default Top;