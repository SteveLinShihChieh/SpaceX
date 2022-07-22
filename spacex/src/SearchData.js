import React from "react";
import { useQuery, gql } from "@apollo/client";
import urlParser from "js-video-url-parser";

const GET_SPACE = gql`
  {
    launchesPast(limit: 20) {
      id
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
        mission_patch
      }
    }
  }
`;

const handleInput = (e) => {
  return urlParser.create({
    videoInfo: urlParser.parse(e),
    format: "embed",
  });
};

const SearchData = (value) => {
  const { loading, error, data } = useQuery(GET_SPACE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.launchesPast.map(
    ({ id, mission_name, links }) =>
      mission_name.includes(value.value) && (
        <div key={id}>
          <h3>mission: {mission_name}</h3>
          <iframe
            width="90%"
            height="400vh"
            title={id}
            src={handleInput(links.video_link)}
            allowFullScreen
            muted
          ></iframe>

          {/* <video
            width="90%"
            height="400vh"
            controls
            src={handleInput(links.video_link)}
            preload="true"
            type="video/mp4"
            muted
            poster={links.mission_patch}
          ></video> */}
        </div>
      )
  );
};

export default SearchData;
