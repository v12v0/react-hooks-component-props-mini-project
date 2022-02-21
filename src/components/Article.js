import react from "react";

function Article({title , data =  "January 1, 1970" , preview , mintues}){

    return(
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    )

    }
