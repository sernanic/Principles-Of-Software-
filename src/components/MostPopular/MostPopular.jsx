// import React, { Component, useEffect } from 'react'
// // import Modal from 'react-modal';
// import firebase from '../../firebase/index'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Modal from 'react-bootstrap/Modal'
// import Button from 'react-bootstrap/Button'
// import Image from 'react-bootstrap/Image'
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
// import CarouselItem from './CarouselItem'
// class MostPopular extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             show: false,
//             posts: [],
//             descend: { column: "views", direction: "desc" },
//             index: 0,
//             direction: null,
//         }
//         this.GetViewCount = this.GetViewCount.bind(this);
//         this.handleClose = this.handleClose.bind(this);
//         this.handleShow = this.handleShow.bind(this);
//         this.GetMostPopularPost = this.GetMostPopularPost.bind(this)
//         this.handleSelect = this.handleSelect.bind(this)
//         this.CarouselItemFunc = this.CarouselItemFunc.bind(this)
//     }


//     GetMostPopularPost = () => {


//         // const userInfo = GetuserInfo()
//         console.log('displayName', firebase.auth().currentUser.displayName);

//         firebase.firestore().collection(firebase.auth().currentUser.displayName).doc("posts").collection('allResearchPost')
//             .orderBy('views', 'desc').limit(15)
//             .onSnapshot((snapshot) => {
//                 const newPost = snapshot.docs.map((doc) => ({
//                     id: doc.id,
//                     ...doc.data(),

//                 }))
//                 this.setState({ posts: newPost });
//             })
//     }

//     GetViewCount = () => {

//         var id = this.props.id
//         const docRef = firebase.firestore().collection('fau').doc('posts')
//             .collection('allResearchPost').doc(id)
//         docRef.get().then(function (doc) {

//             const docRef = firebase.firestore().collection('fau').doc('posts')
//                 .collection('allResearchPost').doc(id)
//             const categoryRef = firebase.firestore().collection('fau').doc('posts')
//                 .collection(doc.data().category).doc(id)

//             docRef.update({
//                 views: doc.data().views + 1
//             })
//             categoryRef.update({
//                 views: doc.data().views + 1
//             })
//             console.log(doc.data().views + 1);

//         }).catch(function (error) {
//             console.log(error);
//             console.log(error.message);
//         });
//     }
//     handleClose = () => {
//         this.setState({ show: false });
//         this.GetViewCount()
//     }
//     handleShow = () => this.setState({ show: true });
//     handleSelect(selectedIndex, e) {
//         this.setState({
//             index: selectedIndex,
//             direction: e.direction,
//         });
//     };

//     CarouselItemFunc =()=>
//         {
//             console.log('these are the posts',this.state.posts);
            
//             {this.state.posts.map((post) =>{
//                     return(
//                         <CarouselItem key={post.id}
//                         imageUrl={post.imageUrl}
//                         opportunityName={post.position}
//                         categoryName={post.category}
//                         description={post.description}
//                         professorName={post.professorName}
//                         datePosted = {post.datePosted} />
//                     )
//                 }    
//             )}
//         }
    
//     render() {
        
//         console.log('hello');
//         return (
//             // <Carousel>
//             //     <div>
//             //         <img src="assets/1.jpeg" />
//             //         <p className="legend">Legend 1</p>
//             //     </div>
//             // </Carousel>
//             <div>hello</div>
            
//         )
//     }

// }

// export default MostPopular