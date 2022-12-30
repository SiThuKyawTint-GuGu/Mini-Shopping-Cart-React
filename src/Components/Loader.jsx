import React from 'react'

const Loader = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5 pt-5">
          <div className="col-1 mt-5 pt-5">
            <div
              className="spinner-grow d-flex"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loader