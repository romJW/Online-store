import { useParams } from "@remix-run/react";


export default function StairsType() {
  const params = useParams();
  const id = params.stairsdId;

  return(
     <p>{id} i</p>
  )
}