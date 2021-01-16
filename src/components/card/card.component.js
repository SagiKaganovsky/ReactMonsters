import "./card.styles.css";
export const Card = ({id, name, email}) =>
(<div className="card-container">
    <img crossOrigin="anonymous" alt="monster" src={`https://robohash.org/${id}?set=set2&180x180`} />
    <h1>{name}</h1>
    <p>{email}</p>
</div>)