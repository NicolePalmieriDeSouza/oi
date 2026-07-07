//Atividade: limitar numero de likes do usuario, Alimentar post com dados do backend/banco
import { BiLike, BiDislike } from "react-icons/bi";
import "./postbox.css"
import { useState } from "react";

function PostBox(title, text){
    const [countLike, setCountLike] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);
    const handleLike = () => {
        if (hasLiked) return;
        setCountLike (countLike + 1);
        setHasLiked(true);
    };

return (
        <div className="title">
            {title}
            <div className="corpo"> 
                <p>{text}</p>
            </div>
            <footer> 
                <p>  
                    <BiLike 
                        className={`btnLike ${hasLiked ? "liked" : ""}`} 
                        onClick={handleLike} 
                    /> 
                    {countLike} 
                </p>
            </footer>
        </div>
    );
}

export default PostBox;