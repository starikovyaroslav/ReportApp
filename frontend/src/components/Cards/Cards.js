import "./Cards.css";
import telephone from "../../images/mobile-svgrepo-com.svg";
import mail from "../../images/mail-svgrepo-com.svg";
export default function Cards({ users, openCard, setUserInfo }) {
  const onClickCard = (item) => {
    setUserInfo(item);
    openCard(true);
  };
  return (
    <section className="cards">
      <div className="cards__container">
        {users.map((item, id) => {
          return (
            <div className="card" key={id} onClick={() => onClickCard(item)}>
              <h2 className="card__name">{item.name}</h2>
              <div className="card__info">
                <div className="card__telephone">
                  <img
                    className="card__icon"
                    src={telephone}
                    alt="telephone-icon"
                  />
                  <p className="card__text">{item.phone}</p>
                </div>
                <div className="card__mail">
                  <img className="card__icon" src={mail} alt="telephone-icon" />
                  <p className="card__text card__text underline">
                    {item.email}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
