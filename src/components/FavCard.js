import { Link } from "react-router-dom";

function FavCard(props) {
  const result = props.dataFav.map((el) => {
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
            <p className="card-text text-center lh-sm text-capitalize">
              Likes: {el.likes}
            </p>
          </div>
        </div>
      </div>
    );
  });

  return result;
}

export default FavCard;
