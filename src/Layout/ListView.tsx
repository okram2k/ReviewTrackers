import { MouseEvent } from "react";
import formatDate from "../helpers/formatDate";
import { ReactComponent as UserCommentIcon } from "../icons/UserCommentIcon.svg";
import { ReviewData } from "../types/types";
import Stars from "./Stars";

export default function ListView({
  reviewListData,
  selectView,
}: {
  reviewListData?: ReviewData[];
  selectView: (id?: string) => void;
}) {
  return reviewListData ? (
    <>
      <div className="list-page">
        <div className="list-grid">
          {reviewListData?.map((review, index) => (
            <>
              <div
                key={index}
                className="list-card"
                onClick={() => {
                  selectView(review.id);
                }}
              >
                <div className="list-place">{review.place}</div>
                <Stars rating={review.rating} />
                <div className="list-content">{review.content}</div>
                <div className="list-card-bottom">
                  <div className="list-author">{review.author}</div>
                  <div className="list-published_at">
                    {formatDate(review.published_at)}
                  </div>
                </div>
                <div className="list-response">
                  {review.response === "" ? "" : <UserCommentIcon />}
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
