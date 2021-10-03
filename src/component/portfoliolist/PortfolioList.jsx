import "./portfoliolist.scss";

export default function Portfoliolist({ title, active, setSelected, id }) {
  return (
    <li
      className={active ? "portfoliolist active" : "portfolio"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
