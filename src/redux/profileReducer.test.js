import profileReducer, {addPost} from "./profileReducer";

it('new post should be added', () => {
    let action = addPost('Test')
    let initialState = {
        postsInfo: [
            {
                id: 1,
                userImg: "https://sun9-42.userapi.com/impg/c858532/v858532203/10b1e2/FgqHOcY_PiM.jpg?size=1080x1080&quality=96&sign=49365d7493b4c4c5512ce04ee0d26676&type=album",
                userName: "Максим Ветлугин",
                message: "На ссд лучше всего игры держать так же как и систему , и больше проекты чтоб работа с ними была быстрее а на жестком важные файлы и просто какие-то файлы чтоб не забивать ссд",
                postImage: "https://sun1.is74.userapi.com/impg/bxZj91ROk6XQ7TjDeLnyFjfqL21Ndbna8xO8oA/2I4InhKUC_Y.jpg?size=537x358&quality=96&sign=d93e1df50bd9a80ae2334156d1878cc2&type=album"
            },
            {
                id: 2,
                userImg: "https://vk.com/images/camera_200.png",
                userName: "Иван Новиков",
                message: "Привчедел"
            },
            {
                id: 3,
                userImg: "https://sun9-29.userapi.com/impg/4rwzV4E1IqPabM2dEhS9RlTLI_GXSgFgt11x0g/eL3XT3CfxGg.jpg?size=600x778&quality=96&sign=b87581f4de8c35ce52adbb32f5a2a0e2&type=album",
                userName: "Василий Глазырин",
                message: "сука как поворачивать в ворлд едит если я не знаю градусы"
            },
            {
                id: 4,
                userImg: "https://sun9-61.userapi.com/impg/KUlL2nnqJOZNF0tLnUVQZe-AfecK0CgBgEaLEw/csFRNfsfgGs.jpg?size=543x1080&quality=96&sign=cbe68261ce14bd9291d67127a6df960e&type=album",
                userName: "Денис Дан",
                message: "если шо я беседу не читал, там вопрос шо лучше ссд или хдд, что отвечать если я считаю что один под одно другой под другое"
            },
            {
                id: 5,
                userImg: "https://sun9-42.userapi.com/impg/c858532/v858532203/10b1e2/FgqHOcY_PiM.jpg?size=1080x1080&quality=96&sign=49365d7493b4c4c5512ce04ee0d26676&type=album",
                userName: "Максим Ветлугин",
                message: "",
                postImage: "https://sun9-72.userapi.com/impg/7PMvbH4sOpKr1GIM2KFXW6ENhj3r_y3Y7wK6RA/HNrOqetXMLE.jpg?size=1080x531&quality=96&sign=3471eb513aaaa9f2726bdbcd7cf9e74f&type=album"
            }
        ]
    }
    let newState = profileReducer(initialState, action)
    expect(newState.postsInfo.length).toBe(6)
})
