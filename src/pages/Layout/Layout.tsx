import * as React from 'react'
import Header from './Header'
import Footer from './Footer'
type Props = {children: React.ReactNode}
const Layout:React.FC<Props> = ({children} :Props):JSX.Element => {

return(
    <div>
        <Header />
        {children}
        <Footer />   
    </div>
)
}

export default Layout