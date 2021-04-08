import * as React from 'react'

type Props = {
    width: string | number,
    height: string | number,
    fill: string
}
const EcoPoints:React.FC<Props> = ({width, height, fill} :Props):JSX.Element => {

return(
    <React.Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" width={width || "24"} height={height || "24"} fill={fill || "#000"} viewBox="0 0 24 24">
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.326 18.266l-4.326-2.314-4.326 2.313.863-4.829-3.537-3.399 4.86-.671 2.14-4.415 2.14 4.415 4.86.671-3.537 3.4.863 4.829z"/>
        </svg>
    </React.Fragment>
)
}

export default EcoPoints