import Image from "next/image"

import * as S from './styled'

const SelfPresentation = () => (
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-3">
        <S.ImageContainer>
          <Image 
            src={'/assets/icons/cartoon.png'} 
            alt="Minha foto de avatar" 
            width={200} height={140} 
          />
        </S.ImageContainer>
      </div>
      <div className="col-12 col-md-9">
        <S.Hello>Prazer! Me chamo Gabriel.</S.Hello>
        <S.Text>
          Trabalho com tecnologia desde 2014 e atulamente sou 
          <span className="gotham-bold"> Engineer Manager </span> 
          no <span className="gotham-bold" style={{color: '#fccf00'}}> Mercado Livre </span>.
          As minhas intenções com esse blog é documentar meus aprendizados 
          e compartilhar com você o conhecimento obtido nessa jornada infinita de conteúdo tech.
        </S.Text>
      </div>
    </div>
  </div>
)

export default SelfPresentation