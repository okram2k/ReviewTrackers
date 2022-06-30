import { useAppDispatch } from "../app/hooks";
import { toggleShowDetails } from "../features/details/detailsSlice";
import { updateReview } from "../features/review/reviewSlice";
import formatDate from "../helpers/formatDate";
import { ReviewState } from "../types/types";
import { ReactComponent as UserCommentIcon } from "../icons/UserCommentIcon.svg";
import Stars from "./Stars";

export default function Card({ rev }: { rev: ReviewState }) {
  const dispatch = useAppDispatch();
  return (
    <>
      <div
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
  );
}
