import React from "react";
import './styles.css'
import { Link } from 'react-router-dom'

export const Table = (props) => {
  const {
    list = [],
    header = [],
    actions = []
  } = props

  return (
    <table style={{ width: "100%" }} >
      <tr>
        {
          header.map((head, index) => (
            <td key={index}>
              <p className="header-label">{head.label}</p>
            </td>
          ))
        }
        {
          actions.length > 0 &&
          <td>
            <p className="header-label">Actions</p>
          </td>
        }
      </tr>

      {
        list.map((item, index) => (
          <tr key={index}>
            {
              header.map((head, index) => (
                <td key={index}>
                  <div className="content">
                    {
                      head.component ? head.component(item) : item[head.field]
                    }
                  </div>
                </td>
              ))
            }
            {
              actions.map((action, index) => (
                <td key={index}>
                  <div className="content">
                    {
                      action?.route
                        ? <Link to={action.route + item.id}>
                          <button
                            style={action.style}
                          >
                            {action.icon}
                          </button>
                        </Link>
                        : action?.handler &&
                        <button
                          style={action.style}
                          onClick={() => action.handler()}
                        >
                          {action.icon}
                        </button>
                    }
                  </div>
                </td>
              ))
            }
          </tr>
        ))
      }

    </table>
  )
}
