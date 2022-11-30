import MainLayout from './MainLayout';
import CatalogHeader from '../components/UI/CatalogHeader'
const CatalogLayout = ({children}) => {
 return(
    <MainLayout>
        <CatalogHeader/>
        
        {children}
    </MainLayout>
 )
}

export default CatalogLayout
