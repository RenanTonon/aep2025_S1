export interface Comentario {
  fotoUsuario: string;
  nomeUsuario: string;
  commentario: string;
}

export interface PostType {
  idPostagem: string;  
  fotoUsuario: string;
  nomeUsuario: string;
  tituloPostagem: string;
  localizacaoPostagem: string;
  fotoPostagem: string;
  contadorVotoPositivo: number;
  contadorVotoNegativo: number;
  contadorComentarios: number;
  commentarios: Comentario[];  
}