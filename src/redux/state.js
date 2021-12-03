import {rerenderALlTree} from "../render";

let state = {
    ProfilePage : {
        PostData : [
            {id:1, message : 'Первое сообщение' ,  likeCount : '0'},
            {id:2, message : '212321312312312' ,  likeCount : '2'},
            {id:3, message : '312312312312' ,  likeCount : '3'}
        ]
    },
    DialogPage : {
        DialogData : [
            {
                id:'1',message:'1'
            },
            {
                id:'2',message:'3'
            },
            {
                id:'3',message:'3'
            },
            {
                id:'14',message:'4'
            },
        ],
        UserData : [
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
    Header : {
        FriendsOnline : [
            {
                id:'1' , name:'Viktor' , avatar :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl3u3SOjn6AvknsQSo0QLPsHHTR5v7zHHPBg&usqp=CAU'
            },
            {
                id:'2' , name:'Sergey' , avatar :'https://fotogora.ru/img/blog/or/2019/6/21/14752.jpg'
            },
            {
                id:'3' , name:'Vika' , avatar :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Tw4W8-Rysd2bw6IZmTplzTVvYFb0uanq3A&usqp=CAU'
            },
            {
                id:'4' , name:'Andrew' , avatar :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRLjRDrylE_ZBdMzZ_cO8nO8sYFXFFYjOPlQ&usqp=CAU'
            },
        ]
    }

}
export let addNewPost = (NewPostText) =>{
    let NewPost = {id:4 ,message : NewPostText ,  likeCount: '221312312'}

    state.ProfilePage.PostData.push(NewPost);
    rerenderALlTree(state);
}
export default state;