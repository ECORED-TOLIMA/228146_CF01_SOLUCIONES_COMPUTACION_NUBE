<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Fase de definición de requisitos
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          p.mb-3 La fase de definición de requisitos constituye una de las etapas más importantes dentro del ciclo de vida del <em>software</em>, ya que en ella se identifican, analizan y documentan las necesidades que el sistema debe satisfacer. En esta fase se busca comprender con claridad qué espera el usuario del sistema, cuáles son las funcionalidades que debe ofrecer y qué restricciones o condiciones deben tenerse en cuenta durante su desarrollo.
          .row.mb-0
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema2/img02.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              p.mb-0 Durante este proceso se recopila información proveniente de diferentes fuentes, como usuarios, clientes, expertos del dominio y documentos organizacionales. A partir de esta información se establecen los requisitos del sistema, los cuales describen de manera detallada las funciones que el <em>software</em> debe realizar y las características que debe cumplir para responder a las necesidades planteadas.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema2/img01.png', alt='Imagen decorativa')
    .row.justify-content-center.mb-0
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema2/img03.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2
        p.mb-2(data-aos="fade-down") La correcta definición de los requisitos es fundamental para el éxito de un proyecto de <em>software</em>, ya que permite establecer una base clara para las fases posteriores del desarrollo, como el diseño, la programación y las pruebas. Cuando los requisitos están bien definidos, el equipo de desarrollo puede comprender mejor los objetivos del sistema y reducir la posibilidad de errores, retrabajos o cambios inesperados durante el proceso de construcción del <em>software</em>.
        .tarjeta.tarjeta--C01.p-4.mb-2
          p.mb-0(data-aos="fade-down") Asimismo, esta fase favorece la comunicación entre los diferentes actores involucrados en el proyecto, como usuarios, analistas, desarrolladores y gestores del proyecto, facilitando la construcción de una visión compartida sobre el sistema que se desea desarrollar. De esta manera, la fase de definición de requisitos se convierte en un elemento clave para garantizar que el <em>software</em> final responda de manera efectiva a las necesidades de la organización y de sus usuarios.
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Alcance de la fase de requisitos
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema2/img04.png', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") El alcance de la fase de requisitos se refiere al conjunto de actividades orientadas a identificar, comprender, analizar y documentar las necesidades que debe satisfacer el sistema de <em>software</em>. En esta etapa se busca establecer con claridad qué debe hacer el sistema, cuáles son sus funcionalidades principales y qué condiciones o restricciones deben considerarse durante su desarrollo.
        p.mb-0(data-aos="fade-down") Esta fase permite delimitar el problema que se desea resolver mediante el sistema, así como definir los límites del proyecto. De esta manera, se establece qué aspectos serán incluidos dentro del desarrollo del <em>software</em> y cuáles quedarán fuera de su alcance, evitando ambigüedades o interpretaciones incorrectas durante las etapas posteriores del proyecto.
    p.mb-4(data-aos="fade-down") Dentro del alcance de esta fase se desarrollan diversas actividades que permiten comprender las necesidades de los usuarios y transformarlas en requisitos claramente definidos. Entre las principales actividades se encuentran:
    .row.justify-content-center
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/img05.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Identificación de necesidades del usuario
            h5.t2.mb-2 Identificación de necesidades del usuario
            p.mb-0 Consiste en reconocer los problemas, expectativas y objetivos que los usuarios esperan resolver mediante el sistema de <em>software</em>.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/img06.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Recolección de información
            h5.t2.mb-2 Recolección de información
            p.mb-0 Se obtiene información relevante a partir de diferentes fuentes, como entrevistas con usuarios, análisis de documentos existentes, observación de procesos o reuniones con expertos del dominio.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/img07.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Análisis de requisitos
            h5.t2.mb-2 Análisis de requisitos
            p.mb-0 Se examina la información recopilada con el fin de comprender las funcionalidades que debe ofrecer el sistema y las restricciones que deben considerarse.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/img08.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Documentación de requisitos
            h5.t2.mb-2 Documentación de requisitos
            p.mb-0 Los requisitos identificados se organizan y registran de manera estructurada, permitiendo que todos los miembros del equipo comprendan las características que debe tener el sistema.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/img09.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Validación de requisitos
            h5.t2.mb-2 Validación de requisitos
            p.mb-0 Se revisan los requisitos junto con los usuarios o las partes interesadas para asegurar que representan correctamente sus necesidades y expectativas.
    p.mb-0(data-aos="fade-down") El alcance de la fase de requisitos permite establecer una base sólida para el desarrollo del <em>software</em>, ya que facilita la comprensión del problema, orienta el trabajo del equipo de desarrollo y contribuye a que el sistema final responda de manera adecuada a las necesidades de los usuarios y de la organización.
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Importancia de la definición de requisitos
    p.mb-4(data-aos="fade-down") La definición de requisitos es una etapa fundamental en el desarrollo de <em>software</em>, ya que permite establecer con claridad las necesidades que el sistema debe satisfacer. Cuando los requisitos se identifican y documentan de manera adecuada, el equipo de desarrollo puede comprender mejor el problema que se desea resolver y diseñar soluciones que respondan a las expectativas de los usuarios.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img10.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Una adecuada definición de requisitos contribuye a reducir errores durante el proceso de desarrollo, evitar malentendidos entre los participantes del proyecto y disminuir los costos asociados a cambios o retrabajos en etapas posteriores. Además, facilita la planificación del proyecto, ya que permite estimar con mayor precisión los recursos, el tiempo y el esfuerzo necesarios para desarrollar el sistema.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C02.color-secundario.p-3
          .row.justify-content-center.align-items-center
            .col.col-lg-9.order-lg-1.order-2
              p.mb-0(data-aos="fade-down") Asimismo, los requisitos bien definidos sirven como referencia para las fases de diseño, desarrollo y pruebas, ya que establecen los criterios que permitirán verificar si el <em>software</em> cumple con las funcionalidades y características esperadas. De esta manera, la definición de requisitos se convierte en un elemento clave para garantizar la calidad del producto final.
            .col.col-lg-auto.col-8.order-lg-2.order-1.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/tema2/img11.svg', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") Entre los principales aspectos que evidencian la importancia de la definición de requisitos se encuentran los siguientes:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema2/img12.svg' alt='AvatarTop')
          h4.text-center Claridad en los objetivos del sistema
          p Permite definir qué problema se desea resolver y cuáles son las funcionalidades que debe ofrecer el <em>software</em>.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema2/img13.svg' alt='AvatarTop')
          h4.text-center Mejor comunicación entre los participantes del proyecto
          p Facilita la comprensión compartida entre usuarios, analistas, desarrolladores y demás actores involucrados.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema2/img14.svg' alt='AvatarTop')
          h4.text-center Reducción de riesgos en el desarrollo
          p Disminuye la posibilidad de errores, cambios inesperados o interpretaciones incorrectas durante el proceso de construcción del <em>software</em>.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema2/img15.svg' alt='AvatarTop')
          h4.text-center Base para el diseño y desarrollo del sistema
          p Los requisitos constituyen el punto de partida para definir la arquitectura del sistema y desarrollar sus funcionalidades.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema2/img16.svg' alt='AvatarTop')
          h4.text-center Referencia para la validación del <em>software</em>
          p Permite verificar que el sistema desarrollado cumple con las necesidades y expectativas definidas inicialmente.
    p.mb-0(data-aos="fade-down") Por estas razones, la definición de requisitos es considerada una de las actividades más críticas dentro del ciclo de vida del <em>software</em>, ya que influye directamente en la calidad, funcionalidad y éxito del sistema desarrollado.
    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Resultados de la fase de requisitos
    figure.mb-4
      img(src='@/assets/curso/tema2/img17.png', alt='Imagen decorativa')
    p(data-aos="fade-down") Al finalizar la fase de definición de requisitos se generan diversos productos o entregables que permiten comprender con claridad qué debe hacer el sistema y cuáles son las necesidades que debe satisfacer. Estos resultados sirven como base para el diseño, desarrollo y pruebas del <em>software</em>.
    p.mb-4(data-aos="fade-down") A continuación, se presentan algunos de los principales resultados de esta fase:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Principales resultados de la fase de requisitos
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Resultado
                th(data-aos="fade-down")(style= "width: 35%") Descripción
                th(data-aos="fade-down")(style= "width: 35%") Ejemplo
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Documento de requisitos del sistema.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Contiene la descripción detallada de las funcionalidades, restricciones y características del sistema.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Documento donde se especifica que el sistema debe permitir registrar usuarios, iniciar sesión y generar reportes.
              tr
                td(data-aos="fade-down") Casos de uso.
                td(data-aos="fade-down") Describen cómo interactúan los usuarios con el sistema para realizar determinadas tareas.
                td(data-aos="fade-down") Caso de uso “Registrar cliente”, donde el usuario ingresa datos personales y el sistema guarda la información.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Historias de usuario.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Descripciones breves de las necesidades del usuario desde su perspectiva.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") “Como administrador, deseo consultar los registros de ventas para analizar el rendimiento del negocio”.
              tr
                td(data-aos="fade-down") Diagramas de requisitos.
                td(data-aos="fade-down") Representaciones gráficas que permiten visualizar las interacciones y funcionalidades del sistema.
                td(data-aos="fade-down") Diagrama de casos de uso que presenta la relación entre el usuario y las funciones del sistema.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Validación de requisitos.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Confirmación de que los requisitos definidos reflejan las necesidades de los interesados.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Revisión del documento de requisitos por parte del cliente y aprobación para iniciar el diseño del sistema.
    p.mb-0(data-aos="fade-down") En conjunto, estos resultados permiten establecer una base clara y estructurada para las siguientes etapas del desarrollo del <em>software</em>. La correcta documentación y validación de los requisitos facilita la comprensión del sistema que se desea construir, reduce ambigüedades y contribuye a que el equipo de desarrollo cuente con la información necesaria para avanzar hacia las fases de diseño, construcción y pruebas de manera organizada y coherente.
    
</template>

<script>
export default {
  name: 'Tema2',
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
