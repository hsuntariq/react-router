import React from "react";

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="title col-lg-6 d-flex flex-column justify-content-center align-item-center">
            <h1>This is the Title</h1>
            <p className="text-secondary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              aliquid iusto? Cumque at eum saepe expedita? Rem atque vero ullam
              id dolorem? Temporibus in possimus eligendi suscipit. Vel,
              repellendus reprehenderit.7
            </p>
            <button className="btn btn-success mb-2">Login</button>
            <button className="btn btn-outline-danger">Sign Up</button>
          </div>
          <div className="col-lg-6">
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                backgroundPosition: "center center",
              }}
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
