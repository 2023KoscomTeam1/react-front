function Topic({ issue_id, topic_name, image_url }) {
  return (
    <div>
      <br />
      <img src={image_url} alt={topic_name} />
      <div>{issue_id}</div>
      <div>{topic_name}</div>
    </div>
  );
}
export default Topic;
