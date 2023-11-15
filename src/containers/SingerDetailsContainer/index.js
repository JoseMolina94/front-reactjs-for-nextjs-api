import React from "react";
import {useGetSingerById} from "../../hooks/useGetSingerById";
import { InfoLabel } from "../../components/Commons/InfoLabel";
import { Tag } from "../../components/Commons/Tag";
import { MdOutlineArrowBack } from "react-icons/md";
import { Link } from 'react-router-dom';
import './style.css'

export const SingerDetailsContainer = ({singerId = ''}) => {
  const {
    singer,
    loading
  } = useGetSingerById(singerId)

  return ( !loading &&
      <div>
        <div className="header" >

            <div
              className="icon"
              style={{
                fontSize: "32px"
              }}
            >
              <Link to="/">
                <MdOutlineArrowBack />
              </Link>
            </div>

          <h1 className="singer-name">
            {singer?.name}
          </h1>
        </div>


        <div className="container">
          <div className="img-container">
            <img src={singer?.image} alt={singer?.name} />
          </div>

          <div>
            <div className="info-container">

              <InfoLabel
                infoValue={singer?.age}
                label="Age"
              />

              <InfoLabel
                label="Birthday"
                infoValue={singer?.birthday}
              />

              <InfoLabel
                label="Nationality"
                infoValue={singer?.nationality}
              />

              {
                singer.inABand
                  ? <InfoLabel label="Band" infoValue={singer?.bandName} />
                  : <p> Is a Soloist </p>
              }

              <div>
                <p>
                  <strong>Musical genres:</strong>
                </p>

                {
                  singer?.musicType &&
                  <div className="musical-genres-list" style={{marginTop: "10px"}}>
                    {
                      singer.musicType.map((type, index) => (
                        <Tag text={type} key={index} />
                      ))
                    }
                  </div>
                }
              </div>

              <InfoLabel
                isLink
                label="Link To Info"
                infoValue={singer?.infoLink || "It does not have an information link"}
              />

              <div className="description">
                <p>
                  <strong>
                    Description:
                  </strong>
                </p>
                <p>
                  {singer?.description}
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
  )
}
