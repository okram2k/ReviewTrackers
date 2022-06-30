import { useAppSelector } from "../app/hooks";
import { selReviewList } from "../features/reviewList/reviewListSlice";
import formatDate from "../helpers/formatDate";
import Stars from "./Stars";
import "./ListView.css";
import Card from "./Card";

export default function ListView() {
  const reviewList = useAppSelector(selReviewList);
  return reviewList ? (
    <>
      <div className="list-page">
        <div className="list-grid">
          {reviewList?.map((rev, index) => (
            <Card key={index.toString()} rev={rev} />
          ))}
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="list-page">
        <div className="list-grid">
          <div className="list-card">
            <div className="list-place">No Data</div>
            <Stars rating={0} />
            <div className="list-content">No Data</div>
            <div className="list-card-bottom">
              <div className="list-author">No Data</div>
              <div className="list-published_at">{formatDate()}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
