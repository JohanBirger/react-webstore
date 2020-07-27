import React from 'react'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch()

export default function Title({name, title}) {
    return (
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center textTitle">
                <h1 className="text-capitalize font-weight-bold">
                    {name} <strong className="textMainBlack">{title}
                    </strong>
                </h1>
            </div>
            
        </div>
    )
}
