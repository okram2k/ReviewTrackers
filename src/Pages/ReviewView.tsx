import React, { useState } from "react";
import Stars from "./Stars";
import { ReactComponent as ReturnIcon } from "../icons/ReturnIcon.svg";
import { ReactComponent as EditIcon } from "../icons/EditIcon.svg";
import { ReactComponent as SaveIcon } from "../icons/SaveIcon.svg";
import { ReactComponent as CancelIcon } from "../icons/CancelIcon.svg";
import formatDate from "../helpers/formatDate";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectReview, updateReview } from "../features/review/reviewSlice";
import { updateList } from "../features/reviewList/reviewListSlice";
import { toggleShowDetails } from "../features/details/detailsSlice";
import "./ReviewView.css";

export default function ReviewView() {
  const review = useAppSelector(selectReview);
  const initialFormState = {
    response: review.response,
    response_author: review.response_author,
  };
  const [form, updateForm] = useState(initialFormState);

  const [editMode, toggleEditMode] = useState(false);
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateForm({ ...form, [e.currentTarget.name]: e.currentTarget.value });
  };
  const dispatch = useAppDispatch();

  function saveResponse() {
    if (form.response_author && form.response) {
      const rev = {
        ...review,
        ...form,
        response_date: new Date().toDateString(),
      };
      dispatch(updateReview(rev));
      dispatch(updateList(rev));
    }
  }
  function clearForm() {
    updateForm(initialFormState);
  }
  function goBack() {
    //clear out review data when returning
    dispatch(
      updateReview({
        id: "",
        author: "",
        place: "",
        published_at: "",
        rating: 0,
        content: "",
        response: "",
        response_author: "",
        response_date: "",
      })
    );
    dispatch(toggleShowDetails());
  }

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
                value={form.response}
                style={{ width: "80%" }}
                onChange={handleFormChange}
              />
            ) : (
              review.response
            )}
          </div>
          <div className="response-return">
            <button
              title="Return"
              className="return-button"
              onClick={() => {
                goBack();
              }}
            >
              <ReturnIcon />
            </button>
          </div>
          <div className="response-buttons">
            {editMode ? (
              <>
                <button
                  title="Cancel"
                  className="cancel-button"
                  onClick={() => {
                    toggleEditMode(!editMode);
                    clearForm();
                  }}
                >
                  <CancelIcon />
                </button>
                <button
                  title="Save"
                  className="save-button"
                  onClick={() => {
                    toggleEditMode(!editMode);
                    saveResponse();
                  }}
                >
                  <SaveIcon />
                </button>
              </>
            ) : (
              <button
                title="Edit"
                className="edit-button"
                onClick={() => toggleEditMode(!editMode)}
              >
                <EditIcon />
              </button>
            )}
          </div>
          <div className="card-bottom">
            <div className="author">
              {editMode ? (
                <input
                  type="text"
                  name="response_author"
                  placeholder="Author"
                  value={form.response_author}
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
    <>
      <div className="review-page">
        <div className="review-card">
          <div className="review-place">No Data</div>
          <div className="response-return">
            <button
              title="Return"
              className="return-button"
              onClick={() => {
                goBack();
              }}
            >
              <ReturnIcon />
            </button>
          </div>
          <Stars rating={0} />
          <div className="review-content">No Data</div>
          <div className="card-bottom">
            <div className="author">No Data</div>
            <div className="date">No Data</div>
          </div>
        </div>
      </div>
    </>
  );
}
