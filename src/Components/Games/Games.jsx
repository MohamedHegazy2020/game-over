import React, { useEffect, useState } from "react";
import GameCard from "../GameCard/GameCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "./../Loading/Loading";

export default function Games() {
  const { filter, value } = useParams();

  const [allGames, setallGames] = useState(null);

  useEffect(() => {
    if (allGames == null) {
      getGames();
    }
    return () => {
      if (allGames != null) {
        setallGames(null);
      }
    };
  });

  function getFilterData() {
    switch (filter) {
      case "category":
        return { category: value };
      case "platform":
        return { platform: value };
      case "sort-by":
        return { "sort-by": value };

      default:
        return {};
    }
  }
  async function getGames() {
    try {
      const { data } = await axios.get(
        `https://free-to-play-games-database.p.rapidapi.com/api/games`,
        {
          headers: {
            "X-RapidAPI-Key":
              "f3b657b4b6msh29bdeec556b6a4fp1cb671jsnf9ed5d0a6636",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
          },
          params: getFilterData(),
        }
      );
      setallGames(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="container my-5">
        <div className="row gy-3">
          {" "}
          {allGames ? (
            allGames.map((game, idx) => {
              return (
                <>
                  <GameCard game={game} idx={idx} />
                </>
              );
            })
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </>
  );
}
