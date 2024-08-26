// import Loading from "./loading";
import Detail from './detail';
import axios from "axios";
export default async function MainDetail({ params }) {
  const { id } = params;

  const res = await axios.get('https://api.imgflip.com/get_memes');
  const memes = res.data.data.memes;

  
  const item = memes.find(meme => meme.id === id);

//   if (!item) {
//     return <div>Product nahi mila</div>;
//   }
// if (Loading) {
//   return <Loading />; 

  return (
    <div>
      <Detail item={item} />
      {/* <Loading/> */}
    </div>
  );
}
