import Image from 'next/image'

import { subscribeToNewsletter } from 'lib/newsletter'
import * as S from './styled'
import { useState } from 'react'

const Newsletter = () => {

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState(null)

  const _subscribe = async (ev) => {
    const result = await subscribeToNewsletter(email)
    setMessage(result)
    if (result.status !== 'success') {
      setTimeout(() => {
        setMessage(null)
      }, 1500)
    }
  }

  return (
    <>
     <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-6">
          <S.Callout>
            <S.Title>
              BlueGreen News!
              <S.Name>com deploy de sexta</S.Name>
            </S.Title>
            <S.Text>
              Um nerd viciado em tecnologia e muito volátil. 
              Vou do mundo Java, para as profundezas do unix, 
              terminando em mecânica para montar um chevette de drift.. 
              e detalhe: em uma semana.
              
              Não acredita em mim? Se inscreva na minha newsletter semanal
              e venha comigo nessa jornada.
            </S.Text>
          </S.Callout>
          {
            message ? (
              <div className="row">
                <div className="col-12">
                  <div className={`alert alert-${message.status}`}>
                    {message.message}
                  </div>
                </div>
              </div>
            ) : (
              <div className="row align-items-center">
                <div className="col-8">
                  <input 
                    type="email"
                    className="form-control"
                    placeholder="Insira seu email..." 
                    aria-label="Newsletter via email"
                    onChange={(ev) => setEmail(ev.target.value)}
                  />
                </div>
                <div className="col-4">
                  <button 
                    type="button" 
                    className="btn btn-primary btn-sm"
                    onClick={_subscribe}
                  >
                    Inscrever-se
                  </button>
                </div>
              </div>
            )
          }
        </div>
        <div className="col-12 col-md-6">
          <S.ImageContainer>
            <Image 
              src={'/assets/icons/studies.png'} 
              alt="Minha foto de avatar"
              className="img-fluid img-newsletter"
              width={479} height={242} 
            />
          </S.ImageContainer>
        </div>
      </div>
     </div>
    </>
  )
}

export default Newsletter
