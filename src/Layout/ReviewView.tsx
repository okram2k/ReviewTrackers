import React, { useState } from "react";
import Stars from "./Stars";
import { ReactComponent as ReturnIcon } from "../icons/ReturnIcon.svg";
import { ReactComponent as EditIcon } from "../icons/EditIcon.svg";
import { ReactComponent as SaveIcon } from "../icons/SaveIcon.svg";
import formatDate from "../helpers/formatDate";
import { ReviewData } from "../types/types";

export default function ReviewView({
  toggleShowReview,
  review,
  handleFormChange,
  saveResponse,
}: {
  toggleShowReview: React.Dispatch<React.SetStateAction<boolean>>;
  review?: ReviewData;
  handleFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  saveResponse: () => void;
}) {
  const [editMode, toggleEditMode] = useState(false);
  return review ? (
    <>
      <div className="review-page">
        <div className="review-card">
          <div className="review-place">{review.place}</div>
          <Stars rating={review.rating} />
          <div className="review-content">{review.content}</div>
          <div className="card-bottom">
            <div className="author">{review.author}</div>
            <div className="date">{formatDate(review.published_at)}</div>
          </div>
        </div>
        <div className="response-card">
          <div className="response-content">
            {editMode ? (
              <input
                name="response"
                type="text"
                placeholder="Enter Response Here"
                value={review.response}
                style={{ width: "80%" }}
                onChange={handleFormChange}
              />
            ) : (
              review.response
            )}
          </div>
          <div
            className="response-return"
            onClick={() => {
              toggleShowReview(false);
            }}
          >
            <ReturnIcon />
          </div>
          <div
            className="response-dots"
            onClick={() => {
              if (editMode) {
                saveResponse();
              }
              toggleEditMode(!editMode);
            }}
          >
            {editMode ? <SaveIcon /> : <EditIcon />}
          </div>
          <div className="card-bottom">
            <div className="author">
              {editMode ? (
                <input
                  type="text"
                  name="response_author"
                  placeholder="Author"
                  value={review.response_author}
                  onChange={handleFormChange}
                />
              ) : (
                review.response_author
              )}
            </div>
            <div className="date">{formatDate(review.response_date)}</div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
}
