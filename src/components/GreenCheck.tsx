import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


function GreenCheck() {
    return (
        <span className="d-inline-block align-middle">
            < div
                className="mx-2 bg-success text-white rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: '25px', height: '25px' }
                }
            >
                {/* Checkmark Icon */}
                < FontAwesomeIcon icon={faCheck} size="1x" />
            </div>
        </span>
    );
}

export default GreenCheck