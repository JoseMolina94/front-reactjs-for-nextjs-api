import React, { useState, useEffect } from "react";
import { useGetSingerById } from "../../hooks/useGetSingerById";
import {Link} from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";
import { useCreateUpdateOrDeleteSinger } from "../../hooks/useCreateUpdateOrDeleteSinger";
import { SingerImageInput } from "../../components/SingerImageInput";
import { Input } from "../../components/Commons/Input";
import { CheckBox } from "../../components/Commons/CheckBox";
import "./styles.css"

export const CreateOrEditSingerContainer = ({ id = '' }) => {
  const {
    singer
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
    console.log('III', value)
    let currentValues = formState
    currentValues[name] = value

    setFormState({...currentValues})
  }

  const onSubmit = async () => {
    if (validate()) {
      const response = await createSinger(formState)
      console.log("created: ", response)
    }
  }

  const validate = () => {
    if (formState.name && formState.birthday && formState.age && formState.nationality) {
      return true
    }
    return false
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
    <form>
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
          <SingerImageInput
            name="image"
            value={formState?.image}
            onChangeFunc={onChangeFunc}
          />

          <div className="form-input-container">
            <Input
              name="name"
              value={formState?.name}
              onChangeFunc={onChangeFunc}
              label="Name"
              required
            />

            <div className="birth-and-age-section">
              <Input
                name="age"
                value={formState?.age || 0}
                onChangeFunc={onChangeFunc}
                label="Age"
                type="number"
                required
              />

              <Input
                name="birthday"
                value={formState?.birthday}
                onChangeFunc={onChangeFunc}
                label="Birthday"
                type="date"
                required
              />

              <Input
                name="nationality"
                value={formState?.nationality}
                onChangeFunc={onChangeFunc}
                label="Nationality"
                required
              />
            </div>

            <Input
              name="infoLink"
              value={formState?.infoLink}
              onChangeFunc={onChangeFunc}
              label="Info Link"
            />

            <div className="band-info-section">
              <CheckBox
                name="inABand"
                value={formState?.inABand}
                onChangeFunc={onChangeFunc}
                label="In a Band?"
                style={{
                  height: "20px",
                  width: "20px"
                }}
              />

              {
                formState.inABand &&
                  <Input
                    name="bandName"
                    value={formState?.bandName}
                    onChangeFunc={onChangeFunc}
                    label="Band Name"
                  />
              }
            </div>

            <Input
              name="description"
              value={formState?.description}
              onChangeFunc={onChangeFunc}
              type="textarea"
              label="Description"
              required
            />

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center"
              }}
            >
              <button
                onClick={() => onSubmit()}
                className="save-btn"
                disabled={loadingProcess}
              >
                Save
              </button>
            </div>

          </div>
        </div>
      </div>
    </form>
  )
}
