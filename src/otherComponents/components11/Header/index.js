import "./Header.css";

export const Header = ({ title, subtitle }) => {
  return (
    <header>
      <h1 className="title">{title}</h1>
      {subtitle ? (
        <h2 className="title">{subtitle}</h2>
      ) : (
        <h2 className="title">Default Value</h2>
      )}
    </header>
  );
};
