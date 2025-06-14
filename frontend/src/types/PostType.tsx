import type { CommentType } from "./CommentType"

export interface PostType {
    index: string
    fotoUsuario : string
    nomeUsuario : string
    tituloPostagem : string
    localizacaoPostagem : string
    fotoPostagem : string
    contadorVotoPositivo : number
    contadorVotoNegativo : number
    contadorComentarios : number
    commentarios : CommentType[]
}