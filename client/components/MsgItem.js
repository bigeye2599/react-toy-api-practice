const MsgItem = ({ userId, timeStamp, text }) => (
  <li className="messages__item">
    <h3>
      {userId}{" "}
      <sub>
        {new Date(timeStamp).toLocaleString("ko-KR", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })}
      </sub>
    </h3>

    {text}
  </li>
);

export default MsgItem;
