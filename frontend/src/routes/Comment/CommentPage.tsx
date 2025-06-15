import { useParams } from "react-router-dom";

export const CommentPage = () => {
    const { id } = useParams();

    return <div>Comentários da postagem: {id}</div>;
}