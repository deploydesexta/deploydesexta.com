import { NextSeo } from 'next-seo'

import {
  BLOG_HOST,
  BLOG_TITLE,
} from 'lib/constants'

const AboutPage = () => (
  <>
    <NextSeo
      title={`Sobre mim | ${BLOG_TITLE}`}
      description="Saiba um pouco mais sobre o desenvolvedor por trás deste blog."
      openGraph={{
        type: 'website',
        locale: 'en_US',
        url: `https://${BLOG_HOST}`,
        site_name: BLOG_TITLE,
        title: BLOG_TITLE,
        images: [
          {
            url: `https://${BLOG_HOST}/assets/img/blog-cover.png`,
            width: 1200,
            height: 630,
            alt: `${BLOG_TITLE} Blog`,
          }
        ]
      }}
    />
    <div className="container">
      <h1 className="gotham-medium">Sobre mim</h1>
      <p className="gotham-light">
        Sou Full Stack 💻 desde 2014, onde comecei minha jornada com 
        projetos Spring Framework escritos em Java 7 para o Back-end e 
        uma salada de fruta de ChaplinJs Controllers com BackboneJs MVVM no Front-end.
      </p>
      <p className="gotham-light">
        Alguns anos depois, veio a Era dos monolítos com Spring Boot + Java 8 provendo REST APIs para SPAs em Angular Js. 
        Nesse meio tempo, explorei o mundo mobile onde trabalhei como desenvolvedor Android e iOS.
      </p>
      <p className="gotham-light">
        Em dezembro de 2017, entrei para o Mercado Livre onde comecei a explorar o mundo de microserviços
        em larga escala, pude participar do desenvolvimento de um produto muito chave para a companhia que
        conta com mais de 100 microserviços, 300K RPM de leitura, 30K usuários concorrentes ativos, 
        gestão de 1BI documentos fiscais e mantendo um excelente UPTIME e baixa latência.
      </p>
      <p className="gotham-light">
        Hoje em dia meu foco não é mais tanto contribuir ativamente código, mas sim ajudar os desenvolvedores 
        e Tech Leads a desenvolverem suas skills técnicas, garantindo a construição de serviços escaláveis na Cloud ⚡ 
        e que vão de encontro com os objetivos da empresa.
      </p>
      <p className="gotham-light">
        No meu período livre, trabalho na minha Startup Contrata Show e compartilhando conteúdo aqui.
      </p>
      <p className="gotham-light">
        Tech Lead brasileiro 🇧🇷
      </p>
      <p className="gotham-light">
        💬 Converse comigo sobre: 
        Clean Architecture, Functional Programming, Vavr, Arrow Kt, Kotlin, Java, 
        Reactive Stack, SOLID, Spring Boot, Spring Cloud, Web Development, 
        JavaScript, VueJs, React, SSR, NodeJS, DevOps, AWS, Maven, Gradle, etc..
      </p>
      
      <blockquote className="gotham-light">
      “I love programming. I enjoy the challenge to not only make a working program, but to do so with style. Programming is like poetry. It conveys a message, not only to the computer, but to those who modify and use your program. With a program, you build your own world with your own rules. You create your world according to your conception of both the problem and the solution. Masterful programmers create worlds with programs that are clear and succinct, much like a poem or essay.”
      Jonathan Bartlett (Programming from the Ground Up, p. 7).
      </blockquote>

      <h2 className="gotham-medium">Contato</h2>
      <p className="gotham-light">
        Você pode entrar em contato comigo através de qualquer uma das minhas
        redes sociais.
      </p>
    </div>
  </>
)

export default AboutPage
