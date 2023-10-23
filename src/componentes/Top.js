import '../style-sheets/Top.css';

function Top ({ num, name, img, des }) {
  return (
    <div className='top-container'>
      <h2>#{num} {name}</h2>
      <img src={require(`../imagenes/${img}.jpg`)} />
      <div className='container-description'>
      <p>{des}</p>
      </div>
    </div>
  );
}

export default Top;