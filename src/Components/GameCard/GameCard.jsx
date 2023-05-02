import React from 'react'
import card from "./GameCard.module.css"
import { Link } from 'react-router-dom';

export default function GameCard({game , idx}) {
  return (
    <>
      <Link
        className="col-md-3 text-decoration-none text-white"
        to={`/game/gameDetails/${game.id}`}
        key={idx}
      >
        <div>
          <div
            className={`${card.card} card h-100 bg-transparent`}
            role="button"
          >
            <div className="card-body ">
              <figure className="position-relative">
                <img
                  className="card-img-top object-fit-cover h-100"
                  src={game.thumbnail}
                  alt={game.title}
                />
              </figure>

              <figcaption>
                <div className="hstack justify-content-between">
                  <h4 className={`${card.textTruncate} opacity-50`}>
                    {game.title}
                  </h4>
                  <span className="badge text-bg-primary p-2">Free</span>
                </div>

                <p
                  className={
                    card.textTruncate +
                    " card-text small text-center opacity-50"
                  }
                >
                  {game.short_description}
                </p>
              </figcaption>
            </div>

            <footer
              className={`card-footer small hstack justify-content-between`}
            >
              <span className="badge badge-color opacity-50 bg-white text-dark ">
                {game.genre}
              </span>
              <span className="badge badge-color opacity-50 ">
                {game.platform === "Web Browser" ? (
                  <>
                    <i class="fa-solid fa-window-maximize text-white fs-6"></i>
                    <span className="ms-2">{game.platform}</span>
                  </>
                ) : (
                  <>
                    <i class="fa-brands fa-windows text-white fs-6"></i>
                    <span className="ms-2">{game.platform}</span>
                  </>
                )}
              </span>
            </footer>
          </div>
        </div>
      </Link>
    </>
  );
}

      ;
