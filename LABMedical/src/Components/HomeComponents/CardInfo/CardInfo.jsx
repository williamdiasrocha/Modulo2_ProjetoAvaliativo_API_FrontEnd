import './CardInfo.css'

function CardInfo({ titulo, valor, svg }) {
  return (
    <div className="card" style={{ marginBottom: "0", paddingTop: '5px' }}>
      <div
        className="card-body align-items-center"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0px" }}
      >
        <img src={svg} className="card-svg" style={{ width: "90px", marginLeft: '20px' }} />
        <h1 style={{ fontSize: "55px",marginLeft: '-10px' }}>{valor}</h1>
      </div>
      <div
        className="card-title d-flex justify-content-center"
        style={{ marginTop: "0", marginBottom: "5px", position: "relative" }}
      >
        <h2 style={{ fontSize: '25px', marginBottom: "0",marginTop: "15px", position: "absolute", top: "50%", transform: "translateY(-50%)" }}>{titulo}</h2>
      </div>
    </div>
  );
}

export default CardInfo;
