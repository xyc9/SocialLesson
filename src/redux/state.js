let store = {
    _state: {
        ProfilePage: {
            PostData: [
                {id: 1, message: 'Первое сообщение', likeCount: '0'},
                {id: 2, message: '212321312312312', likeCount: '2'},
                {id: 3, message: '312312312312', likeCount: '3'}
            ],
            NewPostText: 'post-text-1'
        },
        DialogPage: {
            DialogData: [
                {
                    id: '1', message: '1'
                },
                {
                    id: '2', message: '3'
                },
                {
                    id: '3', message: '3'
                },
                {
                    id: '14', message: '4'
                },
            ],
            UserData: [
                {
                    id: '1', username: 'user1'
                },
                {
                    id: '2', username: 'user2'
                },
                {
                    id: '3', username: 'user3'
                }
            ]
        },
        Header: {
            FriendsOnline: [
                {
                    id: '1',
                    name: 'Viktor',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl3u3SOjn6AvknsQSo0QLPsHHTR5v7zHHPBg&usqp=CAU'
                },
                {
                    id: '2', name: 'Sergey', avatar: 'https://fotogora.ru/img/blog/or/2019/6/21/14752.jpg'
                },
                {
                    id: '3',
                    name: 'Vika',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Tw4W8-Rysd2bw6IZmTplzTVvYFb0uanq3A&usqp=CAU'
                },
                {
                    id: '4',
                    name: 'Andrew',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRLjRDrylE_ZBdMzZ_cO8nO8sYFXFFYjOPlQ&usqp=CAU'
                },
            ]
        }

    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log(123123)
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === 'ADD-NEW-POST') {
            let NewPost = {id: 4, message: this._state.ProfilePage.NewPostText, likeCount: '0'}
            this._state.ProfilePage.PostData.push(NewPost);
            this._state.ProfilePage.NewPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.ProfilePage.NewPostText = action.NewText;
            this._callSubscriber(this._state);
        }
    }
}


export default store;
window.store = store;