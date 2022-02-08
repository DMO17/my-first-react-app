export const Card = ({ imageUrl, description }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="" />
      <p>{description}</p>
      <a href="https://reactjs.org/">REACT</a>
    </div>
  );
};
