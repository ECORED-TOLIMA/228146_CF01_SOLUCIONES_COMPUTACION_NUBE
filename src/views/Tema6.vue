<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Roles en la ingeniería de requisitos
    p.mb-4(data-aos="fade-down") La ingeniería de requisitos es un proceso colaborativo en el que participan diferentes personas con responsabilidades específicas dentro del proyecto de <em>software</em>. Cada uno de estos participantes aporta información, experiencia o capacidades técnicas que permiten identificar, analizar, documentar y validar los requisitos del sistema.
    figure.mb-4
      img(src='@/assets/curso/tema6/img01.png', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") Los roles en la ingeniería de requisitos representan a los diferentes actores que intervienen durante la definición y gestión de las necesidades del sistema. Su participación es fundamental para garantizar que los requisitos reflejen correctamente los objetivos del negocio, las expectativas de los usuarios y las posibilidades técnicas del equipo de desarrollo.
    .row.justify-content-center.mb-4
      .col.col-lg-auto.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema6/img02.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C05.px-4.py-3
          p.mb-0(data-aos="fade-down") En un proyecto de <em>software</em>, estos roles pueden ser desempeñados por una o varias personas dependiendo del tamaño del proyecto, la organización del equipo y la metodología de desarrollo utilizada. En algunos casos, una misma persona puede asumir más de un rol, especialmente en proyectos pequeños o equipos reducidos.
    .row.justify-content-center.mb-0
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema6/img03.jpg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") La correcta identificación de los roles permite mejorar la comunicación entre los participantes del proyecto, facilitar la toma de decisiones y asegurar que cada requisito tenga un responsable claro para su definición, validación y seguimiento.
        .cajon.cajon.C02.color-secundario.px-4.py-3
          p.mb-0(data-aos="fade-down") Entre los principales roles que intervienen en la ingeniería de requisitos se encuentran los usuarios y actores del sistema, las partes interesadas o <em>stakeholders</em>, el cliente líder o dueño del producto y el equipo de desarrollo junto con el analista de requisitos. Cada uno de estos participantes cumple funciones específicas que contribuyen al éxito del proceso de definición y gestión de requisitos.
    separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Usuarios y actores
    p.mb-4(data-aos="fade-down") En el contexto de la ingeniería de requisitos, los usuarios y los actores representan a las personas o entidades que interactúan con el sistema de <em>software</em> o que se ven afectadas por su funcionamiento. Identificar correctamente a estos participantes es fundamental para comprender las necesidades reales del sistema y garantizar que el <em>software</em> responda a los objetivos del proyecto.
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema6/img04.jpg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-2.order-2
        p.mb-2(data-aos="fade-down") Los usuarios son las personas que utilizan el sistema de manera directa para realizar tareas específicas dentro de su entorno laboral o personal. Ellos interactúan con la interfaz del sistema, introducen información, consultan datos y ejecutan diferentes funciones que permiten cumplir los procesos definidos por la organización. Debido a su experiencia práctica en el uso del sistema, los usuarios constituyen una fuente primaria de información durante la recopilación de requisitos.
        .cajon.cajon.C01.color-primario.px-4.py-2
          p.mb-0(data-aos="fade-down") Por ejemplo, en un sistema de gestión académica, los usuarios pueden ser los aprendices que consultan sus calificaciones, los instructores que registran notas o el personal administrativo que gestiona los registros académicos.
    p(data-aos="fade-down") Por su parte, los actores representan cualquier entidad que interactúa con el sistema para lograr un objetivo determinado. Un actor no necesariamente es una persona; también puede ser otro sistema informático, un dispositivo tecnológico o un servicio externo que intercambia información con el sistema en desarrollo.
    p.mb-4(data-aos="fade-down") Entre los tipos de actores que pueden identificarse en un proyecto de <em>software</em> se encuentran:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-lg-9.position-relative
        .avatar
          figure
            img(src="@/assets/curso/tema6/img05.svg", alt="Imagen decorativa").img240
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema6/img06.svg", alt="Imagen decorativa").img100
            .col
              p.mb-0 Actores humanos, como usuarios finales, administradores del sistema, operadores o supervisores.
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema6/img07.svg", alt="Imagen decorativa").img100
            .col
              p.mb-0 Sistemas externos, como plataformas de pago, servicios de autenticación o sistemas de información de otras organizaciones.
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema6/img08.svg", alt="Imagen decorativa").img100
            .col
              p Dispositivos o equipos, como sensores, terminales móviles o dispositivos de registro de datos.
    p.mb-4(data-aos="fade-down") La identificación de usuarios y actores es especialmente importante en la elaboración de diagramas de casos de uso, ya que estos permiten representar gráficamente las interacciones entre el sistema y quienes participan en su utilización. Esta información facilita la comprensión del funcionamiento del sistema y ayuda a definir con mayor claridad las funcionalidades que debe ofrecer.
    .row.justify-content-center.mb-0
      .col-lg-auto.d-none.d-lg-block
        figure.img95
          img(src='@/assets/curso/tema6/img09.svg', alt='Imagen decorativa')
      .col-lg-9.col-12
        .cajon.cajon.C04.p-4.mb-2
          p.mb-0 Reconocer adecuadamente a los usuarios y actores contribuye a diseñar sistemas más funcionales, comprensibles y alineados con las necesidades reales de quienes interactúan con la solución tecnológica.
    separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 <em>stakeholders</em> o partes interesadas
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/img10.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p En el desarrollo de <em>software</em>, los <em>stakeholders</em> o partes interesadas corresponden a todas las personas, grupos u organizaciones que tienen algún interés en el sistema o que pueden verse afectados por su desarrollo, implementación o funcionamiento. Su participación resulta fundamental durante la ingeniería de requisitos, ya que proporcionan información clave sobre las necesidades del negocio, las restricciones del proyecto y las expectativas del sistema.
    p(data-aos="fade-down") Las partes interesadas no siempre utilizan directamente el sistema, pero influyen en las decisiones relacionadas con su diseño, alcance y funcionamiento. Por esta razón, identificar a los <em>stakeholders</em> desde las etapas iniciales del proyecto permite comprender mejor el contexto organizacional y reducir riesgos asociados a requisitos incompletos o mal interpretados.
    p.mb-4(data-aos="fade-down") Entre los principales tipos de <em>stakeholders</em> que pueden participar en un proyecto de <em>software</em> se encuentran:
    .row.mb-4
      .col-12
        .px-5.py-0
          .row.align-items-center.BG01.p-4.py-0(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.px-4.py-0
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema6/img11.png", alt="Imagen decorativa")
            .col-lg-8.p-5.py-0
              SlyderF.custom.color-acento-botones.p-4(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema6/img12.svg", alt="Imagen decorativa").img100.m-auto
                  p Usuarios finales, quienes interactúan directamente con el sistema en sus actividades cotidianas.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema6/img13.svg", alt="Imagen decorativa").img100.m-auto
                  p Clientes o patrocinadores del proyecto, responsables de financiar o solicitar el desarrollo del sistema.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema6/img14.svg", alt="Imagen decorativa").img100.m-auto
                  p Directivos o gerentes, quienes toman decisiones estratégicas relacionadas con el proyecto.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema6/img15.svg", alt="Imagen decorativa").img100.m-auto
                  p Equipo técnico, incluyendo desarrolladores, arquitectos de <em>software</em> y especialistas en infraestructura.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema6/img16.svg", alt="Imagen decorativa").img100.m-auto
                  p Áreas de soporte o mantenimiento, encargadas de operar y mantener el sistema una vez implementado.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema6/img17.svg", alt="Imagen decorativa").img100.m-auto
                  p Entidades regulatorias o legales, que establecen normas o requisitos de cumplimiento.
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema6/img18.svg', alt='Imagen decorativa')
      .col.col-lg-5.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") La correcta identificación y gestión de los <em>stakeholders</em> permite establecer canales de comunicación efectivos y asegurar que las necesidades del negocio se reflejen adecuadamente en los requisitos del sistema. Además, facilita la validación de los resultados obtenidos durante el desarrollo del <em>software</em>.
        .cajon.cajon.C01.color-primario.px-4.py-2
          p.mb-2(data-aos="fade-down") En muchos proyectos de ingeniería de requisitos se recomienda elaborar una matriz de <em>stakeholders</em>, herramienta que permite identificar a cada parte interesada, su nivel de influencia en el proyecto, sus expectativas y el tipo de participación que tendrá durante el proceso de desarrollo del sistema.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 12.
          span Ejemplo de matriz de <em>stakeholders</em> en un proyecto de <em>software</em>
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Stakeholder
                th(data-aos="fade-down")(style= "width: 20%") Rol o relación con el sistema
                th(data-aos="fade-down")(style= "width: 20%") Nivel de influencia
                th(data-aos="fade-down")(style= "width: 20%") Interés en el proyecto
                th(data-aos="fade-down")(style= "width: 20%") Forma de participación
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Cliente o patrocinador.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Solicita y financia el desarrollo del sistema.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Alto
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Alto
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Define objetivos, aprueba requisitos y valida entregables.
              tr
                td(data-aos="fade-down") Usuarios finales.
                td(data-aos="fade-down") Utilizan el sistema en sus actividades diarias.
                td(data-aos="fade-down") Medio
                td(data-aos="fade-down") Alto
                td(data-aos="fade-down") Proporcionan necesidades, participan en entrevistas y pruebas.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Gerencia o directivos.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Toman decisiones estratégicas sobre el proyecto.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Alto
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Medio
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Revisan avances y aprueban decisiones clave.
              tr
                td(data-aos="fade-down") Equipo de desarrollo.
                td(data-aos="fade-down") Diseña, construye y prueba el sistema.
                td(data-aos="fade-down") Medio
                td(data-aos="fade-down") Alto
                td(data-aos="fade-down") Analiza requisitos, implementa funcionalidades y realiza pruebas.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Área de soporte técnico.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Mantiene el sistema después de su implementación.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Bajo
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Medio
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Aporta información sobre mantenimiento y operación del sistema.
    p.mb-0(data-aos="fade-down") La elaboración de una matriz de <em>stakeholders</em> facilita la identificación de las personas clave que deben participar durante la ingeniería de requisitos. Además, permite definir estrategias de comunicación y participación adecuadas para cada grupo, lo que contribuye a mejorar la comprensión de las necesidades del sistema y a reducir riesgos durante el desarrollo del <em>software</em>.
    separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.3 Cliente líder y dueño del producto
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema6/img19.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") Dentro de la ingeniería de requisitos, el cliente líder y el dueño del producto cumplen un papel fundamental en la definición de las necesidades del sistema y en la toma de decisiones relacionadas con el desarrollo del <em>software</em>. Estas figuras representan los intereses del negocio y aseguran que el sistema que se construye responda a los objetivos organizacionales y a las necesidades reales de los usuarios.
        .cajon.cajon.C01.color-primario.px-4.py-2
          p.mb-2(data-aos="fade-down") El cliente líder corresponde a la persona o representante de la organización que solicita el desarrollo del sistema y actúa como principal punto de contacto entre el equipo de desarrollo y la entidad que requiere la solución tecnológica. Su función consiste en proporcionar información sobre el contexto del negocio, definir prioridades, validar los requisitos identificados y aprobar los entregables generados durante el proyecto.
    p.mb-4(data-aos="fade-down") Entre las principales responsabilidades del cliente líder se encuentran:
    .row.mb-5(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema6/img20.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Definir los objetivos generales del sistema.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema6/img21.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Proporcionar información sobre los procesos del negocio.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema6/img22.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Validar que los requisitos identificados respondan a las necesidades de la organización.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema6/img23.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Aprobar los entregables generados durante el desarrollo del <em>software</em>.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema6/img24.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Facilitar la comunicación entre los diferentes actores del proyecto.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/img25.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Por su parte, el <b>dueño del producto</b> (<em>product owner</em>) es un rol ampliamente utilizado en metodologías ágiles de desarrollo de <em>software</em>. Esta persona es responsable de representar los intereses de los usuarios y del negocio dentro del equipo de desarrollo, asegurando que el producto evolucione de acuerdo con las prioridades definidas.
        br
        br
        p El dueño del producto gestiona y prioriza las funcionalidades que debe tener el sistema, organiza los requisitos en un listado estructurado de trabajo y toma decisiones sobre qué características se desarrollarán primero. De esta manera, orienta el trabajo del equipo hacia la generación de valor para el usuario y para la organización.
    p.text-center(data-aos="fade-down") Entre las funciones principales del dueño del producto se destacan:
    .row.mb-4
      .col-12
        .px-5.py-0
          .row.align-items-center.BG01.p-4.py-0(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.px-4.py-0
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema6/img26.png", alt="Imagen decorativa")
            .col-lg-8.p-4.py-0
              SlyderF.custom.color-acento-botones.p-4(columnas="col-lg-4 col-xl-4")
                .tarjeta.tarjeta--slyder.p-4.px-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema6/img27.svg", alt="Imagen decorativa").img100.m-auto
                  p Definir y priorizar las funcionalidades del sistema.
                .tarjeta.tarjeta--slyder.p-4.px-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema6/img28.svg", alt="Imagen decorativa").img100.m-auto
                  p Representar las necesidades de los usuarios y del negocio.
                .tarjeta.tarjeta--slyder.p-4.px-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema6/img29.svg", alt="Imagen decorativa").img100.m-auto
                  p Mantener actualizado el listado de requisitos o backlog del producto.
                .tarjeta.tarjeta--slyder.p-4.px-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema6/img30.svg", alt="Imagen decorativa").img100.m-auto
                  p Validar que las funcionalidades desarrolladas cumplan con los requisitos establecidos.
                .tarjeta.tarjeta--slyder.p-4.px-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema6/img31.svg", alt="Imagen decorativa").img100.m-auto
                  p Colaborar continuamente con el equipo de desarrollo para aclarar dudas sobre los requisitos.
    p.mb-0(data-aos="fade-down") La participación activa del cliente líder y del dueño del producto permite mantener una comunicación constante entre el equipo técnico y la organización que solicita el sistema. Esta interacción facilita la toma de decisiones, mejora la comprensión de los requisitos y contribuye a que el <em>software</em> desarrollado cumpla con las expectativas del negocio y de los usuarios finales.
    separador
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.4 Equipo de desarrollo y analista
    p.mb-4(data-aos="fade-down") El equipo de desarrollo y el analista de requisitos desempeñan un papel esencial en la ingeniería de requisitos, ya que son responsables de interpretar, analizar y transformar las necesidades del negocio en soluciones tecnológicas que puedan implementarse mediante <em>software</em>. Su trabajo permite convertir las expectativas de los usuarios y las organizaciones en especificaciones técnicas claras y viables.
    figure.mb-4
      img(src='@/assets/curso/tema6/img32.png', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C01.color-primario.px-4.py-3
          p.mb-0(data-aos="fade-down") El equipo de desarrollo está conformado por los profesionales encargados de diseñar, construir, probar e implementar el sistema. Este equipo puede incluir desarrolladores de <em>software</em>, arquitectos de sistemas, diseñadores de interfaces, especialistas en bases de datos y profesionales de pruebas o calidad. Cada uno de estos roles contribuye desde su especialidad al desarrollo del producto tecnológico.
    p.text-center(data-aos="fade-down") Entre las principales responsabilidades del equipo de desarrollo se encuentran:
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-1.order-2
        .cajon.C02.p-4.h-100.w-100
          ol.lista-ol--cuadro.lista-ol--separador
            li
              .lista-ol--cuadro__vineta
                span.text-bold 1
              | Analizar los requisitos definidos durante la ingeniería de requisitos.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 2
              | Diseñar la arquitectura y la estructura técnica del sistema.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 3
              | Implementar las funcionalidades mediante programación.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 4
              | Realizar pruebas para verificar el correcto funcionamiento del <em>software</em>.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 5
              | Participar en la mejora continua del sistema durante su mantenimiento.
      .col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema6/img33.svg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema6/img34.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p.mb-3(data-aos="fade-down") Por su parte, el analista de requisitos cumple una función de enlace entre el negocio y el equipo técnico. Este profesional se encarga de comprender las necesidades de los usuarios, documentarlas de manera estructurada y asegurar que dichas necesidades sean interpretadas correctamente por el equipo de desarrollo.
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0(data-aos="fade-down") El analista también facilita la comunicación entre las diferentes partes interesadas, organiza la información obtenida durante la elicitación de requisitos y valida que los requisitos definidos sean completos, claros y consistentes.
    .row.BG03.justify-content-center.align-items-center.px-3.py-5.mb-0
      .col.col-lg-3.col-8.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema6/img35.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        .row.justify-content-center
          .col
            .tarjeta.tarjeta--blanca.p-4
              p.text-bold(data-aos="fade-down") Entre las funciones principales del analista de requisitos se destacan:
                ul.lista-ul--color.mt-4(data-aos="fade-down")
                  li
                    i.fas.fa-cloud-arrow-down
                    p.mb-0 Identificar y comprender las necesidades de los usuarios y del negocio.
                  li
                    i.fas.fa-cloud-arrow-down
                    p.mb-0 Documentar los requisitos de manera clara y estructurada.
                  li
                    i.fas.fa-cloud-arrow-down
                    p.mb-0 Apoyar el proceso de elicitación mediante entrevistas, reuniones y talleres.
                  li
                    i.fas.fa-cloud-arrow-down
                    p.mb-0 Verificar que los requisitos sean consistentes, completos y comprensibles.
                  li
                    i.fas.fa-cloud-arrow-down
                    p.mb-0 Servir como puente de comunicación entre los <em>stakeholders</em> y el equipo de desarrollo.
    p.mb-0(data-aos="fade-down") La colaboración permanente entre el analista de requisitos y el equipo de desarrollo permite asegurar que las funcionalidades implementadas respondan correctamente a las necesidades del sistema. Además, facilita la resolución de dudas durante el proceso de desarrollo y contribuye a mejorar la calidad del <em>software</em> construido.
</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
