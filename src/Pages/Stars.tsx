import "./Stars.css";

export default function stars({ rating = 0 }: { rating?: number }) {
  if (rating > 5) {
    rating = 5;
  }
  if (rating < 0) {
    rating = 0;
  }
  let starString = "⭐".repeat(rating);
  let noStarString = "⭐".repeat(5 - rating);

  return (
    <>
      <div className="some-stars">{starString}</div>
      <div className="no-stars">{noStarString}</div>
    </>
  );
}
