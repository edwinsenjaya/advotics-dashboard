import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { favoriteHandler, errorHandler } from "../store/favorite/action";
import Swal from "sweetalert2";

function Card() {
  const dispatch = useDispatch();
  const { errorMessage, dataPhotos } = useSelector((state) => ({
    errorMessage: state.photo.errorMessage,
    dataPhotos: state.photo.dataPhotos,
  }));

  function favBtnHandler(payload) {
    dispatch(favoriteHandler(payload));
    if (errorMessage) {
      Swal.fire("", errorMessage, "info");
      dispatch(errorHandler(""));
    } else Swal.fire("", "Photo successfully added to favorite!", "success");
  }

  const result = dataPhotos.map((el) => {
    return (
      <div key={el.id} className="col">
        <div className="card h-100 border border-dark border-2">
          <div className="row">
            <Link to={`/photo/${el.id}`}>
              <img src={el.urls.small} className="card-img-top" alt="" />
            </Link>
          </div>

          <div className="row card-body d-flex flex-column justify-content-end mx-auto">
            <h6 className="card-title text-center fw-bold">
              Taken by: {el.user.name}
            </h6>
            <span className="rounded text-center fw-normal fst-italic bg-warning text-dark flex-inline mb-2 fs-6">
              Location: {el.user.location || "Not specified"}
            </span>
            <p className="card-text text-center lh-sm text-capitalize">
              {el.alt_description || "No description"}
            </p>
            <div className="text-center">
              <a
                href="#"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  favBtnHandler(el);
                }}
              >
                Add to Favorites
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });

  if (errorMessage) {
    Swal.fire("", errorMessage, "error");
    dispatch(errorHandler(""));
  }

  if (result.length === 0) {
    return (
      <div className="d-flex justify-content-center">
        <div
          className="spinner-grow"
          style={{ width: "8rem", height: "8rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else {
    return result;
  }
}

export default Card;
