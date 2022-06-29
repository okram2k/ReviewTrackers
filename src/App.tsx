import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ListView from "./Layout/ListView";
import Header from "./Layout/Header";
import ReviewView from "./Layout/ReviewView";
import { ReviewData } from "./types/types";

function App() {
  const [reviewListData, updateReviewListData] = useState<ReviewData[]>();
  const [review, updateReview] = useState<ReviewData>();
  const [showReview, toggleShowReview] = useState(false);

  useEffect(() => {
    //load data and add blank responses to each data
    async function loadData() {
      const data = await import("./data/reviews.json");
      console.log(data);
      updateReviewListData(
        data.default.map((review) => ({
          ...review,
          response: "",
          response_author: "",
          response_date: "",
        }))
      );
    }
    loadData();
  }, []);

  function selectView(id?: string) {
    const selectedReview = reviewListData?.filter((review) => review.id === id);
    if (selectedReview && selectedReview.length > 0) {
      updateReview(selectedReview[0]);
      toggleShowReview(true);
    }
  }

  function saveResponse() {
    if (review?.response_author !== "" && review?.response !== "") {
      const updatedReview = { ...review, response_date: new Date().toString() };
      let tempReviewListData = reviewListData;
      if (tempReviewListData) {
        tempReviewListData[
          tempReviewListData.findIndex((el) => el.id === updatedReview.id)
        ] = updatedReview;
      }
      updateReviewListData(tempReviewListData);
      updateReview(updatedReview);
    }
  }

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    const target = e.currentTarget.name;
    updateReview({ ...review, [target]: newValue });
  };

  return (
    <div className="App">
      <Header />
      {!showReview && (
        <ListView reviewListData={reviewListData} selectView={selectView} />
      )}
      {showReview && (
        <ReviewView
          toggleShowReview={toggleShowReview}
          review={review}
          handleFormChange={handleFormChange}
          saveResponse={saveResponse}
        />
      )}
    </div>
  );
}

export default App;
