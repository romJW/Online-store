import MainLayout from "../layouts/MainLayout";
import CatalogPreviewCard from "../components/UI/CatalogPreviewCard";
export default function Catalog() {
  return (
  <MainLayout>
    <CatalogPreviewCard title="Террасная доска" colors={['catalogColor.png','catalogColor.png','catalogColor.png','catalogColor.png','catalogColor.png',]}/>
     </MainLayout>  
  );
}
