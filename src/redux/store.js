// import DialogsReducer from "./dialogs-reducer";
// import ProfileReducer from "./profile-reducer";
//
//
// let store = {
//     _state: {
//         ProfilePage: {
//             PostData: [
//                 {id: 1, message: 'Первое сообщение', likeCount: '0'},
//                 {id: 2, message: '212321312312312', likeCount: '2'},
//                 {id: 3, message: '312312312312', likeCount: '3'}
//             ],
//             NewPostText: 'post-text-1'
//         },
//         DialogPage: {
//             DialogData: [
//                 {
//                     id: '1', message: '1'
//                 },
//                 {
//                     id: '2', message: '3'
//                 },
//                 {
//                     id: '3', message: '3'
//                 },
//                 {
//                     id: '14', message: '4'
//                 },
//             ],
//             UserData: [
//                 {
//                     id: '1', username: 'user1'
//                 },
//                 {
//                     id: '2', username: 'user2'
//                 },
//                 {
//                     id: '3', username: 'user3'
//                 }
//             ],
//             NewMessageText : 'qwe'
//         },
//         Header: {
//             FriendsOnline: [
//                 {
//                     id: '1',
//                     name: 'Viktor',
//                     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl3u3SOjn6AvknsQSo0QLPsHHTR5v7zHHPBg&usqp=CAU'
//                 },
//                 {
//                     id: '2', name: 'Sergey', avatar: 'https://fotogora.ru/img/blog/or/2019/6/21/14752.jpg'
//                 },
//                 {
//                     id: '3',
//                     name: 'Vika',
//                     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Tw4W8-Rysd2bw6IZmTplzTVvYFb0uanq3A&usqp=CAU'
//                 },
//                 {
//                     id: '4',
//                     name: 'Andrew',
//                     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRLjRDrylE_ZBdMzZ_cO8nO8sYFXFFYjOPlQ&usqp=CAU'
//                 },
//             ]
//         }
//
//     },
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//     dispatch(action) {
//         this._state.DialogPage = DialogsReducer(this._state.DialogPage, action);
//         this._state.ProfilePage = ProfileReducer(this._state.ProfilePage, action);
//         this._callSubscriber(this._state);
//     }
// }
//
//
// export default store;
