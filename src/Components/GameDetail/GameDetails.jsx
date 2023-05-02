import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import ScreenShotsSlider from "../ScreenShotsSlider/ScreenShotsSlider";
import details from './GameDetail.module.css'

export default function GameDetails() {
  const { id } = useParams();
  const [gameDetails, setgameDetails] = useState(null);

  useEffect(() => {
    if (gameDetails == null) {
      getGameDetails();
    }
  });

  async function getGameDetails() {
    try {
      const { data } = await axios.get(
        `https://free-to-play-games-database.p.rapidapi.com/api/game`,
        {
          headers: {
            "X-RapidAPI-Key":
              "f3b657b4b6msh29bdeec556b6a4fp1cb671jsnf9ed5d0a6636",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
          },
          params: { id: id },
        }
      );
      setgameDetails(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {gameDetails ? (
        <>
          <section
            className={details.bg}
            id={"details"}
            style={{
              backgroundImage: `url(${gameDetails.thumbnail})`,
            }}
          >
            <div className={details.layer}>
              <div className={"container pt-5 "}>
                <div className="row g-4" id="detailsContent">
                  <div className="col-md-4">
                    <img
                      src={gameDetails.thumbnail}
                      className="w-100 "
                      alt="imageDetails"
                    />

                    <div className="row flex-row px-2 justify-content-between align-items-center">
                      <span className="badge text-bg-primary p-3  w-auto ">
                        Free
                      </span>
                      <Link
                        className="btn btn-primary w-75  p-2 my-3  "
                        target="_blank"
                        to={gameDetails.freetogame_profile_url}
                      >
                        Show Game
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-8 ">
                    <div className="opacity-50">
                      <h1 className="my-2">{gameDetails.title}</h1>
                      <h5 className="my-3"> About {gameDetails.title}</h5>

                      <p className="small">{gameDetails.description}</p>
                    </div>
                    {gameDetails.minimum_system_requirements ? (
                      <div className="opacity-50 my-3">
                        {" "}
                        <h3>Minimum System Requirements</h3>
                        <p>
                          <span className="fw-bold me-2 text-capitalize">
                            OS :
                          </span>
                          {gameDetails.minimum_system_requirements.os}
                        </p>
                        <p>
                          <span className="fw-bold me-2 text-capitalize">
                            processor :
                          </span>
                          {gameDetails.minimum_system_requirements.processor}
                        </p>
                        <p>
                          <span className="fw-bold me-2 text-capitalize">
                            memory :
                          </span>
                          {gameDetails.minimum_system_requirements.memory}
                        </p>
                        <p>
                          <span className="fw-bold me-2 text-capitalize">
                            graphics :
                          </span>
                          {gameDetails.minimum_system_requirements.graphics}
                        </p>
                        <p>
                          <span className="fw-bold me-2 text-capitalize">
                            storage :
                          </span>
                          {gameDetails.minimum_system_requirements.storage}
                        </p>
                      </div>
                    ) : (
                      <></>
                    )}

                    <div>
                      <h3 className="opacity-50">
                        {gameDetails.title + " ScreenShots"}
                      </h3>
                      <ScreenShotsSlider src={gameDetails.screenshots} />
                    </div>

                    {/* additional info */}

                    <div className="opacity-50 my-3">
                      <h3>Additional Information</h3>

                      <div className="row">
                        <div className="col-6 col-md-4">
                          <p>
                            <span className="d-block mb-2 text-muted  text-capitalize  ">
                              title :
                            </span>
                            {gameDetails.title}
                          </p>
                        </div>{" "}
                        <div className="col-6 col-md-4">
                          <p>
                            <span className="d-block mb-2 text-muted  text-capitalize  ">
                              developer :
                            </span>
                            {gameDetails.developer}
                          </p>
                        </div>{" "}
                        <div className="col-6 col-md-4">
                          <p>
                            <span className="d-block mb-2 text-muted  text-capitalize  ">
                              publisher :
                            </span>
                            {gameDetails.publisher}
                          </p>
                        </div>{" "}
                        <div className="col-6 col-md-4">
                          <p>
                            <span className="d-block mb-2 text-muted  text-capitalize  ">
                              release date :
                            </span>
                            {gameDetails.release_date}
                          </p>
                        </div>
                        <div className="col-6 col-md-4">
                          <p>
                            <span className="d-block mb-2 text-muted  text-capitalize  ">
                              genre :
                            </span>
                            {gameDetails.genre}
                          </p>
                        </div>
                        <div className="col-6 col-md-4">
                          <p>
                            <span className="d-block mb-2 text-muted  text-capitalize  ">
                              platform :
                            </span>
                            {gameDetails.platform === "Web Browser" ? (
                              <>
                                <i class="fa-solid fa-window-maximize text-white fs-6"></i>
                                <span className="ms-2">
                                  {gameDetails.platform}
                                </span>
                              </>
                            ) : (
                              <>
                                <i class="fa-brands fa-windows text-white fs-6"></i>
                                <span className="ms-2">
                                  {gameDetails.platform}
                                </span>
                              </>
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <Loading />
        </>
      )}
    </>
  );
}
