import React from 'react'
import './colorCardTrying.css'

const ColorCardTrying = (props) => {

    return (
        <div className='cards'>
            {
                Array(4).fill('gray').map((color, i) =>
                    <div
                        className='circle'
                        key={color + i}
                        style={{ background: !props.hide && (props.colors[i] || 'gray') }} >

                    </div>
                )

            }
            {props.withclear &&
                <button
                    className='delete'
                    onClick={() => { props.onClick() }}
                >
                    x
                </button>}
            {props.stats &&
                <div className='stats'>
                    CC :{props.stats.cc}
                    <br />
                    CW :{props.stats.cr}
                </div>
            }

        </div>
    )
}

export default ColorCardTrying
