import React, { useState, useEffect } from "react";
import { useGetSingerById } from "../../hooks/useGetSingerById";
import {Link} from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";
import { useCreateUpdateOrDeleteSinger } from "../../hooks/useCreateUpdateOrDeleteSinger";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { Input } from "../../components/Commons/Input";
import "./styles.css"

export const CreateOrEditSingerContainer = ({ id = '' }) => {
  const {
    singer,
    loadingSinger
  } = useGetSingerById(id)
  const {
    createSinger,
    loadingProcess
  } = useCreateUpdateOrDeleteSinger()
  const [formState, setFormState] = useState({})
  const initialValues = {
    id: null,
    name: "",
    age: 0,
    birthday: "",
    musicType: [],
    description: "",
    inABand: false,
    bandName: "",
    infoLink: "",
    nationality: "",
    image: ""
  }

  const onChangeFunc = ({name, value}) => {
    console.log('III', name, value)
    let currentValues = formState
    currentValues[name] = value

    setFormState(currentValues)
  }

  useEffect(() => {
    console.log('UE')
    if (singer?.id) {
      setFormState(singer)
    } else {
      setFormState(initialValues)
    }
  }, [singer?.id])

  useEffect(() => {
    console.log('FFF', formState)
  }, [formState])

  return (
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
          {singer?.name || "Registry Singer"}
        </h1>
      </div>

      <div className="form-container">
        <div className="img-container">
          {
            formState?.image
              ? <img src={formState?.image} alt="Singer Image" />
              : <div className="photo-icon">
                <MdOutlinePhotoCamera />
              </div>
          }
        </div>

        <div className="form-input-container">
          <form>
            <div className="basic-info-section">
              <Input
                name="name"
                value={formState?.name}
                onChangeFunc={onChangeFunc}
                label="Name"
              />

              <Input
                name="image"
                value={formState?.image}
                onChangeFunc={onChangeFunc}
                label="Image Url"
              />
            </div>


            <div className="birth-and-age-section">
              <Input
                name="age"
                value={formState?.age || 0}
                onChangeFunc={onChangeFunc}
                label="Age"
                type="number"
              />

              <Input
                name="birthday"
                value={formState?.birthday}
                onChangeFunc={onChangeFunc}
                label="Birthday"
                type="date"
              />

              <Input
                name="nationality"
                value={formState?.nationality}
                onChangeFunc={onChangeFunc}
                label="Nationality"
              />
            </div>

            <Input
              name="infoLink"
              value={formState?.infoLink}
              onChangeFunc={onChangeFunc}
              label="Info Link"
            />

            <Input
              name="description"
              value={formState?.description}
              onChangeFunc={onChangeFunc}
              type="textarea"
              label="Description"
            />

          </form>
        </div>
      </div>
    </div>
  )
}
