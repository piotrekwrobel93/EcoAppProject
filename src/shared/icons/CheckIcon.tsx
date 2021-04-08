import * as React from 'react'

type Props = {
    width?: string | number,
    height?: string | number,
    fill?: string,
    style?: any
}
const CheckIcon:React.FC<Props> = ({width, height, fill, style} :Props):JSX.Element => {

return(
    <React.Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" style={style} width={width || "24"} height={height || "24"} fill={fill || "#000"} viewBox="0 0 24 24">
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z"/>
        </svg>    
    </React.Fragment>
    )
}

export default CheckIcon