import { useAppDispatch, useAppSelector } from "../app/hooks";
import { toggleShowDetails } from "../features/details/detailsSlice";
import { updateReview } from "../features/review/reviewSlice";
import { selReviewList } from "../features/reviewList/reviewListSlice";
import formatDate from "../helpers/formatDate";
import { ReactComponent as UserCommentIcon } from "../icons/UserCommentIcon.svg";
import Stars from "./Stars";
import "./ListView.css";

export default function ListView() {
  const dispatch = useAppDispatch();
  const reviewList = useAppSelector(selReviewList);
  return reviewList ? (
    <>
      <div className="list-page">
        <div className="list-grid">
          {reviewList?.map((rev, index) => (
            <>
              <div
                key={index}
                className="list-card"
                onClick={() => {
                  dispatch(updateReview({ ...rev }));
                  dispatch(toggleShowDetails());
                }}
              >
                <div className="list-place">{rev.place}</div>
                <Stars rating={rev.rating} />
                <div className="list-content">{rev.content}</div>
                <div className="list-card-bottom">
                  <div className="list-author">{rev.author}</div>
                  <div className="list-published_at">
                    {formatDate(rev.published_at)}
                  </div>
                </div>
                <div className="list-response">
                  {rev.response ? <UserCommentIcon /> : ""}
                </div>
              </div>
            </>
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
