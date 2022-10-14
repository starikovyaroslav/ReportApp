import "./Modal.css";

export default function Modal({ opened, setOpened, userInfo }) {
  return (
    <section
      className={opened ? "modal opened" : "modal"}
      onClick={() => setOpened(false)}
    >
      <button className="modal__close-button"></button>
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal__name">{userInfo.name}</h2>
        <div className="modal__info">
          <div className="modal__wrapper">
            <p className="modal__subtitle">Телефон:</p>
            <p className="modal__subtitle">Почта:</p>
            <p className="modal__subtitle">Дата приема:</p>
            <p className="modal__subtitle">Должность:</p>
            <p className="modal__subtitle">Подразделение:</p>
          </div>
          <div className="modal__wrapper hidden">
            <p className="modal__text underline">{userInfo.phone}</p>
            <p className="modal__text underline">{userInfo.email}</p>
            <p className="modal__text">{userInfo.hire_date}</p>
            <p className="modal__text">{userInfo.position_name}</p>
            <p className="modal__text">{userInfo.department}</p>
          </div>
        </div>
        <div className="modal__more-info">
          <p className="modal__subtitle">Дополнительная информация:</p>
          <p className="modal__text wrap">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            semper turpis vitae mauris interdum, ac scelerisque massa posuere.
            Morbi non.
          </p>
        </div>
      </div>
    </section>
  );
}
