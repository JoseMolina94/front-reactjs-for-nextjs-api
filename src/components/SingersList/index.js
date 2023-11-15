import React from 'react'
import { Table } from "../Commons/Table";
import { Tag } from "../Commons/Tag"
import { FaEye } from "react-icons/fa";

export const SingersList = (props) => {
  const {
    singers = [],
    loading = false
  } = props

  const SingerImage = (row) => {
    return (
      <div
        style={{
          width: "70px",
          height: "70px",
          overflow: "hidden"
        }}
      >
        <img
          style={{
            width: "70px",
            height: "auto"
          }}
          src={row.image}
          alt={row.name}
        />
      </div>
    )
  }

  const BandOrSoloistField = (row) => {
    return (
      <div>
        {
          row.inABand ? row.bandName : "Soloist"
        }
      </div>
    )
  }

  const MusicalGenresField = (musicType = []) => {
    return (
      <div>
        <div
          style={{
            display: "flex",
            gap: "5px"
          }}
        >
          {
            musicType.map((type, index) => (
              <Tag
                text={type}
                key={index}
                style={{
                  fontSize: "12px"
                }}
              />
            ))
          }
        </div>
      </div>
    )
  }

  const header = [
    { label: "Picture", field: "image", component: (row) => SingerImage(row) },
    { label: "Name", field: "name" },
    { label: "Age", field: "age" },
    { label: "BirthDay", field: "birthday" },
    { label: "Nationality", field: "nationality" },
    { label: "Musical Genres", field: "musicType", component: (row) => MusicalGenresField(row.musicType) },
    { label: "Band/Soloist", field: "band", component: (row) => BandOrSoloistField(row) }
  ]

  const actions = [
    { label: "View Details", route: "/singer-details/", icon: <FaEye />, style: { backgroundColor: "blue" } }
  ]

  return ( !loading &&
    <div>
      <h1
        style={{
          borderBottom: "1px solid #D6D6D6",
          lineHeight: "64px"
        }}
      >
        Singers
      </h1>
      <Table
        list={singers}
        header={header}
        actions={actions}
      />
    </div>
  );
}
