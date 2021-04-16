import * as React from 'react'

type Props = {
    width?: number,
    height?: number,
    fill?: string,
    onClick?: () => void
}
const ViewIcon:React.FC<Props> = ({width, height, fill, onClick} :Props):JSX.Element => {

return(
    <React.Fragment>            
        <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick}  width={width || "24"} height={height || "24"} fill={fill || '#333'} viewBox="0 0 24 24">
            <path d="M11 11h-11v-11h11v11zm13 0h-11v-11h11v11zm-13 13h-11v-11h11v11zm13 0h-11v-11h11v11z"/>
        </svg>
    </React.Fragment>
)
}

export default ViewIcon