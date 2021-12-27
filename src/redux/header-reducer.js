
let initialState = {

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

let HeaderReducer = (state = initialState , action) => {
    switch (action.type){
        default:
            return state;
    }
}
export default HeaderReducer