import React, { useRef, useState, useEffect } from 'react'
import { MdOutlinePhotoCamera } from "react-icons/md";
import "./styles.css"

export const SingerImageInput = (props) => {
  const {
    name = "image",
    value = "",
    onChangeFunc = (props) => {}
  } = props
  const inputRef = useRef(null)
  const [inputValue, setInputValue] = useState(value)

  const convertImageToBase64 = (file, callback) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result.split(',')[1];
      callback(base64String);
    };
  };

  const onClick = () => {
    inputRef.current.click()
  }

  const onChange = (event) => {
    const file = event.target.files[0];
    convertImageToBase64(file, (base64String) => {
      setInputValue("data:image/png;base64," + base64String)
    })
  }

  useEffect(() => {
    onChangeFunc({
      name,
      value: inputValue
    })
  }, [inputValue])

  return (
    <div>
      <div className="img-container" onClick={onClick}>
        {
          inputValue
            ? <img src={inputValue} alt="Singer Image" />
            : <div className="photo-icon">
                <MdOutlinePhotoCamera />
            </div>
        }
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        style={{
          display: "none"
        }}
        onChange={onChange}
      />
    </div>
  )
}
