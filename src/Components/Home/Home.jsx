import React, { useEffect, useState } from "react";
import home from "./Home.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading/Loading";
import card from "../GameCard/GameCard.module.css";

export default function Home() {
  const [popularGames, setpopularGames] = useState(null);
  useEffect(() => {
    if (popularGames == null) {
      getPopularGames();
    }
    return () => {
      if (popularGames != null) {
        setpopularGames(null);
      }
    };
  }, [popularGames]);

  async function getPopularGames() {
    try {
      const { data } = await axios.get(
        `https://free-to-play-games-database.p.rapidapi.com/api/games`,
        {
          headers: {
            "X-RapidAPI-Key":
              "f3b657b4b6msh29bdeec556b6a4fp1cb671jsnf9ed5d0a6636",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
          },
          params: { "sort-by": "popularity" },
        }
      );
      setpopularGames(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <section>
        <div className=" text-center ">
          <div className={`${home.intro}  `}>
            <h1>
              Find & track the best{" "}
              <span className="text-info">free-to-play</span> games!
            </h1>
            <p className="text-white-50 fw-light fs-5 mt-1">
              Track what you've played and search for what to play next! Plus
              get free premium loot!
            </p>
            <Link
              className="btn btn-outline-secondary btn-md ml-0 text-capitalize w-auto d-inline-block"
              to={"/game/all"}
            >
              browser game
            </Link>
          </div>
        </div>
      </section>

      <section className="my-5">
        <div className="container">
          <h3 className="opacity-50">
            <i class="fa-solid fa-robot me-2"></i>
            Personalized Recommendations
          </h3>

          <div className="row mt-5">
            {popularGames ? (
              popularGames.slice(0, 3).map((game, idx) => {
                return (
                  <>
                    <Link
                      className="col-md-4 text-decoration-none text-white"
                      to={`/game/gameDetails/${game.id}`}
                      key={idx}
                    >
                      {" "}
                      <div >
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
                                <h4
                                  className={`${card.textTruncate} opacity-50`}
                                >
                                  {game.title}
                                </h4>
                                <span className="badge text-bg-primary p-2">
                                  Free
                                </span>
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
              })
            ) : (
             <><Loading/></>
            )}
          </div>
        </div>
      </section>

      
    </>
  );
}
