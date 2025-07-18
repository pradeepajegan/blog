// const BlogId = ({ params }) => {
//   const id = params.blogId;

//   return (
//     <div className="detail-container">
//       <img src={`/image${id}.jpg`} className="detail-image" />
//       <p>This is the description for Blog {id}.</p>
//     </div>
//   );
// };
// export default BlogId;
"use client";
import { useParams } from "next/navigation";

const BlogId = () => {
  const params = useParams();
  const id = params.blogId;

  return (
    <div className="detail-container">
      <img src={`/image${id}.jpg`} className="detail-image" />
      <p>This is the description for Blog {id}.</p>
    </div>
  );
};

export default BlogId;
