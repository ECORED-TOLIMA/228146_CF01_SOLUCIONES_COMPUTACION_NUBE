<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Herramientas para la captura de requisitos
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          p.mb-3 En el desarrollo de <em>software</em>, la captura de requisitos constituye una actividad fundamental dentro de la ingeniería de requisitos, ya que permite identificar, comprender y documentar las necesidades que deben ser atendidas por el sistema. Para facilitar este proceso, se utilizan diversas herramientas que ayudan a representar la información de forma clara, organizada y comprensible para todos los participantes del proyecto.
          .row.mb-0
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema8/img02.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              p.mb-0 Las herramientas para la captura de requisitos permiten describir cómo interactúan los usuarios con el sistema, cuáles son las funcionalidades esperadas y de qué manera se deben atender las necesidades del negocio. Estas herramientas favorecen la comunicación entre analistas, desarrolladores, usuarios y demás partes interesadas, lo que contribuye a reducir ambigüedades y mejorar la calidad de los requisitos definidos.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema8/img01.jpg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema8/img03.svg', alt='Imagen decorativa')
      .col.col-lg-10.col-12.order-lg-2.order-2
        .cajon.cajon.C05.px-4.py-3
          p.mb-0(data-aos="fade-down") Desde los inicios de la <b>ingeniería de <em>software</em></b>, diferentes métodos han sido utilizados para representar los requisitos de un sistema. En los primeros proyectos informáticos, la documentación se realizaba principalmente mediante descripciones textuales extensas. Con el paso del tiempo, surgieron enfoques más estructurados que incorporaron diagramas, modelos visuales y representaciones narrativas que facilitan la comprensión de las funcionalidades del sistema.
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema8/img04.svg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") Durante la década de 1990, el uso de diagramas de modelado se consolidó con la aparición de metodologías orientadas a objetos y del Lenguaje Unificado de Modelado (UML), que permitió representar gráficamente las interacciones entre los usuarios y el sistema. Posteriormente, con la adopción de metodologías ágiles en el desarrollo de <em>software</em>, se popularizó el uso de historias de usuario como una forma sencilla y flexible de describir las necesidades del usuario final.
        .cajon.cajon.C02.color-secundario.px-4.py-3
          p.mb-0(data-aos="fade-down") En la actualidad, las organizaciones combinan diferentes herramientas de captura de requisitos para obtener una visión más completa del sistema que se desea construir. Algunas herramientas permiten representar las interacciones del sistema, otras describen las funcionalidades desde la perspectiva del usuario y otras ayudan a visualizar la experiencia del usuario a través de secuencias gráficas o narrativas.
    p.mb-4(data-aos="fade-down") Entre las herramientas más utilizadas para la captura de requisitos se encuentran los <b>diagramas de casos de uso, las historias de usuario y los <em>storyboard</em></b>, las cuales permiten representar la funcionalidad del sistema desde diferentes perspectivas y facilitan la comunicación entre los diferentes actores del proyecto.
    p.mb-0(data-aos="fade-down") Estas herramientas se analizan en los siguientes apartados, donde se describe su propósito, características y la forma en que contribuyen a la documentación y comprensión de los requisitos del sistema.
    separador
    #t_8_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.1 Diagramas de casos de uso
    p.mb-4(data-aos="fade-down") Los diagramas de casos de uso constituyen una de las herramientas más utilizadas para representar los requisitos funcionales de un sistema. Su propósito principal consiste en describir las interacciones que se establecen entre los usuarios y el sistema, permitiendo comprender qué funcionalidades ofrece el <em>software</em> y cómo se utilizan en diferentes situaciones.
    .row.BG02.justify-content-center.align-items-center.px-3.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema8/img05.jpg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") Este tipo de diagramas forma parte del Lenguaje Unificado de Modelado (UML) y se emplea ampliamente en la ingeniería de <em>software</em> para representar de manera gráfica las acciones que el sistema debe realizar desde la perspectiva del usuario. En lugar de centrarse en aspectos técnicos o en la estructura interna del sistema, los diagramas de casos de uso se enfocan en el comportamiento observable del sistema y en las actividades que los usuarios pueden ejecutar.
        .cajon.cajon.C02.color-secundario.px-4.py-3
          p.mb-0(data-aos="fade-down") Los diagramas de casos de uso permiten identificar claramente quién interactúa con el sistema, qué funciones están disponibles y cómo se relacionan las diferentes funcionalidades. De esta manera, facilitan la comunicación entre analistas, desarrolladores, usuarios y demás partes interesadas, contribuyendo a que todos los participantes del proyecto compartan una visión común sobre el funcionamiento del sistema.
    p.mb-4(data-aos="fade-down") Un diagrama de casos de uso está compuesto por varios elementos que permiten representar las interacciones entre los actores y el sistema.
    .desktop
      .row.mb-5
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema8/img06.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Actor
                p.mb-0 Corresponde a la persona, sistema externo o entidad que interactúa con el sistema. Los actores representan los diferentes tipos de usuarios que utilizan las funcionalidades del <em>software</em>.
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema8/img07.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Caso de uso
                p.mb-0 Representa una funcionalidad o servicio que el sistema ofrece a los usuarios. Cada caso de uso describe una acción específica que el sistema debe realizar.
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema8/img08.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Sistema
                p.mb-0 Se representa mediante un rectángulo que delimita el alcance del sistema. Dentro de este límite se ubican los casos de uso que forman parte del sistema.
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema8/img09.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Relaciones
                p.mb-0 Los actores se conectan con los casos de uso mediante líneas que representan las interacciones. En algunos casos pueden existir relaciones adicionales entre casos de uso, como inclusión o extensión de funcionalidades.
    .movil
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta--BG07.p-4
            figure.mb-3
              img(src='@/assets/curso/tema8/img10.png', alt='Imagen decorativa')
            h4 Actor
            p.mb-0 Corresponde a la persona, sistema externo o entidad que interactúa con el sistema. Los actores representan los diferentes tipos de usuarios que utilizan las funcionalidades del <em>software</em>.
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta--BG07.p-4
            figure.mb-3
              img(src='@/assets/curso/tema8/img11.png', alt='Imagen decorativa')
            h4 Caso de uso
            p.mb-0 Representa una funcionalidad o servicio que el sistema ofrece a los usuarios. Cada caso de uso describe una acción específica que el sistema debe realizar.
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta--BG07.p-4
            figure.mb-3
              img(src='@/assets/curso/tema8/img12.png', alt='Imagen decorativa')
            h4 Sistema
            p.mb-0 Se representa mediante un rectángulo que delimita el alcance del sistema. Dentro de este límite se ubican los casos de uso que forman parte del sistema.
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta--BG07.p-4
            figure.mb-3
              img(src='@/assets/curso/tema8/img13.png', alt='Imagen decorativa')
            h4 Relaciones
            p.mb-0 Los actores se conectan con los casos de uso mediante líneas que representan las interacciones. En algunos casos pueden existir relaciones adicionales entre casos de uso, como inclusión o extensión de funcionalidades.
    p.mb-4(data-aos="fade-down") La construcción de un diagrama de casos de uso suele desarrollarse mediante una serie de pasos que permiten identificar las funcionalidades principales del sistema y las interacciones con los usuarios.
    .row.BG02.justify-content-center.align-items-center.px-3.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Identificar los actores del sistema")
            .col-12.mb-4.mb-md-0
              p.mb-0 En primer lugar, se determinan las personas o sistemas externos que interactúan con el <em>software</em>. Los actores pueden ser usuarios finales, administradores, sistemas externos o dispositivos.
          .row(numero="2" titulo="Identificar los casos de uso")
            .col-12.mb-4.mb-md-0
              p.mb-0 Posteriormente se establecen las funcionalidades que el sistema debe ofrecer. Cada caso de uso representa una acción que el sistema ejecuta para satisfacer una necesidad del usuario.
          .row(numero="3" titulo="Definir el límite del sistema")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se delimita el sistema mediante un rectángulo dentro del cual se ubican los casos de uso. Este límite permite diferenciar lo que pertenece al sistema y lo que corresponde a los actores externos.
          .row(numero="4" titulo="Establecer las relaciones entre actores y casos de uso")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se conectan los actores con los casos de uso que utilizan mediante líneas que representan la interacción.
          .row(numero="5" titulo="Revisar y validar el diagrama")
            .col-12.mb-4.mb-md-0
              p.mb-0 Finalmente se revisa el diagrama con los <em>stakeholders</em> del proyecto para confirmar que las funcionalidades representadas corresponden a las necesidades del sistema.
      .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema8/img14.png', alt='Imagen decorativa')
    .row.cajon.C01.justify-content-center.align-items-stretch.mb-4.p-4
      h4 Ejemplo de diagrama de casos de uso
      p.mb-4(data-aos="fade-down") En un sistema de comercio electrónico pueden identificarse diferentes actores y funcionalidades.
      .row.justify-content-center.mb-4
        .col.col-lg-4.col-12.mb-lg-0.mb-3
          .tarjeta.tarjeta--blanca.px-4.py-2.mb-2.h-100
            P.mb-0 <b>Actor</b>: administrador.
            p.text-bold.mb-0 Casos de uso:
            ul.lista-ul.mb-0
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Registrarse en el sistema.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Iniciar sesión.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Consultar productos.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Agregar productos al carrito.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Realizar compra.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Consultar historial de pedidos.
        .col.col-lg-4.col-12.mb-lg-0.mb-3
          .tarjeta.tarjeta--blanca.px-4.py-2.mb-2.h-100
            P.mb-0 <b>Actor</b>: cliente.
            p.text-bold.mb-0 Casos de uso:
            ul.lista-ul.mb-0
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Gestionar productos.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Actualizar inventario.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Consultar reportes de ventas.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Administrar usuarios.
        .col.col-lg-4.col-8
          figure
            img(src='@/assets/curso/tema8/img15.jpg', alt='Imagen decorativa')
      p.mb-0(data-aos="fade-down") En este ejemplo, el cliente interactúa con el sistema para realizar compras, mientras que el administrador gestiona la información del sistema.
    p.mb-4(data-aos="fade-down") Actualmente existen diversas herramientas que permiten elaborar diagramas de casos de uso de manera gráfica y estructurada.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 15.
          span Herramientas para crear diagramas de casos de uso
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Herramienta
                th(data-aos="fade-down")(style= "width: 80%") Características
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Lucidchart
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Plataforma en línea que permite crear diagramas UML de manera colaborativa.
              tr
                td(data-aos="fade-down") Draw.io (diagrams.net)
                td(data-aos="fade-down") Herramienta gratuita para crear diagramas técnicos y modelos UML.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") StarUML
                td(data-aos="fade-down")(style="background-color: #F0F8FF") <em>software</em> especializado en modelado UML utilizado en proyectos de desarrollo de <em>software</em>.
              tr
                td(data-aos="fade-down") Visual Paradigm
                td(data-aos="fade-down") Plataforma profesional para modelado de sistemas y gestión de proyectos de <em>software</em>.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Microsoft Visio
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Herramienta de diagramación que permite crear diferentes tipos de modelos técnicos.
    p.mb-0(data-aos="fade-down") El uso de diagramas de casos de uso permite comprender de forma clara las funcionalidades que debe ofrecer el sistema y las interacciones con los usuarios. Además, facilita la identificación de requisitos funcionales, mejora la comunicación entre los miembros del equipo y sirve como base para el diseño y desarrollo del <em>software</em>.
    separador
    #t_8_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.2 Historias de usuario
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema8/img16.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Las historias de usuario constituyen una técnica ampliamente utilizada en metodologías ágiles para describir los requisitos del sistema desde la perspectiva de quienes interactúan con él. Su propósito es expresar de manera clara y sencilla una necesidad funcional del usuario, enfocándose en el valor que el sistema debe proporcionar y evitando descripciones técnicas complejas en las etapas iniciales del desarrollo.
        br 
        br 
        p Este enfoque surge en el marco de las metodologías ágiles, especialmente dentro de la metodología <b>Extreme Programming</b>, y posteriormente se consolida como una práctica fundamental en <b>Scrum <em>framework</em></b>, donde las historias de usuario permiten organizar y priorizar los requisitos del producto durante el proceso de desarrollo.
    p.mb-4(data-aos="fade-down") Una historia de usuario se redacta normalmente siguiendo una estructura simple que permite identificar tres elementos fundamentales la persona que necesita la funcionalidad, la acción que desea realizar y el beneficio que obtiene. De forma general, se expresa mediante la siguiente estructura:
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-12.col-lg.mb-4.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema8/img17.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C04(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Como [tipo de usuario]
      .col.col-lg-4.col-12.col-lg.mb-4.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema8/img18.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C04(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Quiero [funcionalidad o acción]
      .col.col-lg-4.col-12.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema8/img19.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C04(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Para [obtener un beneficio o resultado]
    p.mb-4(data-aos="fade-down") Este formato permite que los analistas, desarrolladores y demás participantes del proyecto comprendan fácilmente el propósito de cada funcionalidad del sistema y mantengan el enfoque en las necesidades reales de los usuarios.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema8/img20.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C05.px-4.py-2
          p.mb-0(data-aos="fade-down") Las historias de usuario suelen complementarse con criterios de aceptación, los cuales describen las condiciones que deben cumplirse para considerar que el requisito ha sido implementado correctamente. Estos criterios facilitan la validación del desarrollo y permiten verificar si la funcionalidad satisface las necesidades planteadas.
    p.mb-4(data-aos="fade-down") Para elaborar una historia de usuario de manera adecuada, se puede seguir el siguiente procedimiento:
    .row.justify-content-center.mb-4
      .col.col-lg-8.col-12.mb-md-0.order-lg-1.order-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C03")
          .row(titulo="Identificar el tipo de usuario")
            .col-12.mb-0.mb-md-0
              p.mb-0 Se determina quién interactuará con el sistema, por ejemplo, un cliente, administrador, estudiante o visitante.
          .row(titulo="Definir la funcionalidad requerida")
            .col-12.mb-0.mb-md-0
              p.mb-0 Se establece la acción que el usuario necesita realizar dentro del sistema, como consultar información, registrar datos o realizar una transacción.
          .row(titulo="Determinar el beneficio esperado")
            .col-12.mb-0.mb-md-0
              p.mb-0 Se explica el propósito de la funcionalidad o el valor que aporta al usuario.
          .row(titulo="Redactar la historia de usuario")
            .col-12.mb-0.mb-md-0
              p.mb-0 Se estructura la historia utilizando el formato estándar para que sea comprensible para todos los miembros del equipo.
          .row(titulo="Establecer los criterios de aceptación")
            .col-12.mb-0.mb-md-0
              p.mb-0 Se describen las condiciones que permitirán verificar que la funcionalidad se implementó correctamente.
      .col.col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema8/img21.jpg', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") A continuación, se presentan algunos ejemplos que explican cómo se redactan las historias de usuario en diferentes contextos.
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema8/img22.jpg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C01.px-4.py-3.mb-3
          h4.mb-1(data-aos="fade-down") Ejemplo 1. Plataforma educativa
          p.mb-4 Historia de usuario: como aprendiz de un curso virtual, quiero acceder a los contenidos de cada módulo desde una plataforma en línea, para estudiar los materiales del curso y avanzar en mi proceso de formación.
          .tarjeta.tarjeta--blanca.p-4
            h4.mb-0 Criterios de aceptación:
            ul.lista-ul(data-aos="fade-down")
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 El aprendiz puede ingresar a la plataforma con usuario y contraseña.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 El sistema presenta los módulos organizados por unidades.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 El aprendiz puede abrir los contenidos y revisar los recursos educativos.
              li
                i.lista-ul__vineta
                p.mb-0 El sistema registra el avance del aprendiz.
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema8/img23.jpg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2
        .cajon.cajon.C01.px-4.py-3.mb-3
          h4.mb-1(data-aos="fade-down") Ejemplo 2. Sistema de tienda virtual
          p.mb-4 Historia de usuario: como cliente de una tienda en línea, quiero agregar productos a un carrito de compras, para realizar posteriormente el pago de los artículos seleccionados.
          .tarjeta.tarjeta--blanca.p-4
            h4.mb-4 Criterios de aceptación:
            ul.lista-ul(data-aos="fade-down")
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 El cliente puede seleccionar un producto desde el catálogo.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 El sistema permite añadir el producto al carrito de compras.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 El carrito presenta el listado de productos seleccionados y su precio.
              li
                i.lista-ul__vineta
                p.mb-0 El cliente puede modificar o eliminar productos antes de realizar el pago.
    p.mb-0(data-aos="fade-down") De esta manera, las historias de usuario permiten describir los requisitos del sistema de forma clara, centrada en el usuario y orientada al valor que cada funcionalidad aporta al producto desarrollado.
    separador
    #t_8_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.3 <em>storyboard</em>
    p.mb-4(data-aos="fade-down") El <em>storyboard</em> es una herramienta visual utilizada en la captura y análisis de requisitos que permite representar, mediante una secuencia de escenas o ilustraciones, la forma en que un usuario interactúa con un sistema o aplicación. Su propósito es describir de manera gráfica el flujo de acciones que realiza el usuario, facilitando la comprensión del funcionamiento del sistema antes de su desarrollo.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema8/img24.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") El uso del <em>storyboard</em> tiene origen en la industria cinematográfica, especialmente en los procesos de planificación de animación desarrollados por la empresa Walt Disney Productions, donde se utilizaban secuencias de dibujos para planificar las escenas de una película. Posteriormente, esta técnica fue adoptada en áreas como el diseño de <em>software</em>, la experiencia de usuario y el desarrollo de productos digitales, debido a su capacidad para representar procesos de interacción de forma clara y comprensible.
    .row.justify-content-center.mb-4
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C04.px-4.py-2
          .row.justify-content-center.align-items-center
            p.mb-0(data-aos="fade-down") En ingeniería de requisitos, el <em>storyboard</em> permite presentar cómo se desarrolla una situación de uso del sistema paso a paso. Cada escena representa una acción o momento específico dentro del proceso, lo que facilita la identificación de funcionalidades necesarias, posibles errores o mejoras en la experiencia del usuario.
      .col.col-lg-auto.col-8.col-md-4.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema8/img25.svg', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") Para elaborar un <em>storyboard</em> en el contexto del desarrollo de <em>software</em>, se pueden seguir los siguientes pasos:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema8/img26.svg' alt='AvatarTop')
          h4.text-center Definir el escenario de uso
          p Se identifica la situación o proceso que se desea representar, por ejemplo el registro de un usuario, la compra de un producto o el acceso a información dentro de un sistema.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema8/img27.svg' alt='AvatarTop')
          h4.text-center Identificar al usuario o actor principal
          p Se determina quién interactúa con el sistema dentro del escenario planteado.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema8/img28.svg' alt='AvatarTop')
          h4.text-center Establecer la secuencia de acciones
          p Se describen los pasos que realiza el usuario durante su interacción con el sistema.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema8/img29.svg' alt='AvatarTop')
          h4.text-center Representar visualmente cada escena
          p Cada paso del proceso se representa mediante imágenes, bocetos o diagramas que muestran la interacción entre el usuario y la interfaz del sistema.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema8/img30.svg' alt='AvatarTop')
          h4.text-center Analizar y validar el flujo de interacción
          p El equipo de desarrollo revisa el <em>storyboard</em> para identificar mejoras, validar los requisitos y garantizar que el sistema responda adecuadamente a las necesidades del usuario.
    p.mb-4(data-aos="fade-down") A continuación, se presenta un ejemplo simplificado de <em>storyboard</em> aplicado a un sistema de inscripción a cursos en línea.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 16.
          span Ejemplo de <em>storyboard</em>
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Escena
                th(data-aos="fade-down")(style= "width: 80%") Descripción de la acción
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") 1
                td(data-aos="fade-down")(style="background-color: #F0F8FF") El usuario ingresa a la plataforma educativa desde su navegador.
              tr
                td(data-aos="fade-down") 2
                td(data-aos="fade-down") El usuario introduce su nombre de usuario y contraseña para iniciar sesión.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") 3
                td(data-aos="fade-down")(style="background-color: #F0F8FF") El sistema presenta el panel principal con los cursos disponibles.
              tr
                td(data-aos="fade-down") 4
                td(data-aos="fade-down") El usuario selecciona un curso de su interés.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") 5
                td(data-aos="fade-down")(style="background-color: #F0F8FF") El sistema presenta la información del curso y la opción de inscripción.
              tr
                td(data-aos="fade-down") 6
                td(data-aos="fade-down") El usuario confirma la inscripción y el sistema registra el curso en su perfil.
    p.mb-0(data-aos="fade-down") Este tipo de representación permite que analistas, desarrolladores y usuarios comprendan con mayor facilidad cómo se desarrollará la interacción con el sistema, lo que contribuye a mejorar la definición de los requisitos y a reducir errores durante el proceso de desarrollo del <em>software</em>.

</template>

<script>
export default {
  name: 'Tema8',
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
