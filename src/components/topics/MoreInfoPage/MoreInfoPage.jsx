import React, { useState, Component, useEffect } from 'react'
import './card.css'
import M from "materialize-css";
import 'bootstrap/dist/css/bootstrap.min.css';

const MoreInfoPage = props => {
    M.AutoInit();

    const SORT_OPTIONS = {
        "POST_ASC": { column: "datePosted", direction: "asc" },
        "POST_DESC": { column: "datePosted", direction: "desc" },
    }

    function UserPost(sortBy = "POST_DESC") {
        const [posts, setPosts] = useState([])

        useEffect(() => {

            console.log(firebase.auth().currentUser.displayName);

            const unsubscribe = firebase.firestore().collection(firebase.auth().currentUser.displayName)
                .doc("posts").collection("allResearchPost").where("category", "==", props.categoryName)
                .onSnapshot((snapshot) => {
                    const newPost = snapshot.docs.map((doc) =>
                        ({
                            id: doc.id,
                            ...doc.data()
                        }))
                    setPosts(newPost)
                })
            return () => unsubscribe()
        }, [sortBy])
        return posts
    }

    const posts = UserPost()
    return (
        <div style={{ alignContent: 'center' }}>
    
            <div className="Card waves-effect waves-light" >
                <img style={{ height: '100%' }} src={props.imageUrl} height="100" width="150" />
            </div>
            <div className="Info">
                <p className="offeredCategory" style={{ marginTop: '-8px' }}>{props.categoryName}</p>
            </div>
        </div>
    )
}

   

}

export default MoreInfoPage