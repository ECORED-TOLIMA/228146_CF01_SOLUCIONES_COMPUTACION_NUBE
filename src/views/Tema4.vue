<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Ingeniería de requisitos
    p.mb-4(data-aos="fade-down") La ingeniería de requisitos es una disciplina fundamental dentro del desarrollo de <em>software</em> que se encarga de identificar, analizar, documentar, validar y gestionar los requisitos de un sistema. Su objetivo principal consiste en comprender con claridad las necesidades de los usuarios y traducirlas en especificaciones que orienten el diseño y la construcción del <em>software</em>.
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema4/img01.jpg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-2.order-2
        p.mb-3(data-aos="fade-down") Esta disciplina actúa como un puente entre los usuarios, los clientes y el equipo de desarrollo, permitiendo que las expectativas del negocio se transformen en soluciones tecnológicas viables. Cuando los requisitos se definen de forma clara y estructurada, el equipo de desarrollo puede comprender mejor el problema que debe resolverse, lo que facilita la toma de decisiones durante el diseño y la implementación del sistema.
        .cajon.cajon.C01.color-primario.px-4.py-3
          p.mb-0(data-aos="fade-down") Uno de los principales retos en el desarrollo de <em>software</em> consiste en interpretar correctamente las necesidades de los usuarios. En muchos proyectos, los clientes expresan sus requerimientos de forma general o ambigua, lo que puede generar interpretaciones incorrectas si no se aplica un proceso sistemático de análisis. La ingeniería de requisitos permite reducir estos riesgos mediante el uso de métodos, técnicas y herramientas que facilitan la comunicación entre todas las partes involucradas.
    p(data-aos="fade-down") Dentro de esta disciplina se realizan diversas actividades orientadas a comprender el problema, definir las funcionalidades del sistema y establecer las condiciones bajo las cuales debe operar. Estas actividades permiten producir documentos, modelos y especificaciones que sirven como base para las siguientes etapas del ciclo de vida del <em>software</em>.
    p.mb-4(data-aos="fade-down") Entre los principales objetivos de la ingeniería de requisitos se encuentran los siguientes:
    .row.mb-4
      .col-12
        .px-5.py-0
          .row.align-items-center.BG01(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema4/img02.png", alt="Imagen decorativa")
            .col-lg-8.p-5.py-0
              SlyderF.custom.color-acento-botones.p-4(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema4/img03.svg", alt="Imagen decorativa").img100.m-auto
                  p Comprender las necesidades y expectativas de los usuarios y de la organización.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema4/img04.svg", alt="Imagen decorativa").img100.m-auto
                  p Definir de manera clara y estructurada las funcionalidades que debe ofrecer el sistema.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema4/img05.svg", alt="Imagen decorativa").img100.m-auto
                  p Establecer criterios que permitan verificar y validar el funcionamiento del <em>software</em>.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema4/img06.svg", alt="Imagen decorativa").img100.m-auto
                  p Facilitar la comunicación entre los diferentes actores involucrados en el proyecto.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema4/img07.svg", alt="Imagen decorativa").img100.m-auto
                  p Reducir riesgos asociados a interpretaciones incorrectas o cambios tardíos en los requisitos.
    p.mb-4(data-aos="fade-down") La ingeniería de requisitos también contribuye a mejorar la calidad del <em>software</em>, ya que permite detectar inconsistencias, omisiones o ambigüedades en las especificaciones antes de iniciar las etapas de diseño y desarrollo. De esta manera, se disminuyen los costos asociados a correcciones posteriores y se incrementa la probabilidad de que el sistema final cumpla con los objetivos del proyecto.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .cajon.cajon.C02.color-secundario.p-4
          .row.justify-content-center.align-items-center
            p.mb-0(data-aos="fade-down") En el contexto del desarrollo moderno de <em>software</em>, la ingeniería de requisitos se aplica tanto en metodologías tradicionales como en enfoques ágiles, adaptando sus técnicas y prácticas a las características del proyecto. En metodologías ágiles, por ejemplo, los requisitos suelen documentarse mediante historias de usuario, mientras que en enfoques tradicionales se utilizan especificaciones más detalladas.
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Áreas de la ingeniería de requisitos
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema4/img08.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2
        .row.mb-3
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema4/img09.svg', alt='Imagen decorativa')
          .col-lg-10.col-12
            p.mb-0 La ingeniería de requisitos se organiza en diferentes áreas que agrupan las actividades necesarias para identificar, analizar, documentar, validar y gestionar los requisitos de un sistema de <em>software</em>. Cada una de estas áreas cumple una función específica dentro del proceso y permite estructurar el trabajo del equipo de desarrollo de manera ordenada.
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0(data-aos="fade-down") Estas áreas facilitan la comprensión de las necesidades del usuario, la definición precisa de los requisitos y el control de los cambios que puedan presentarse durante el desarrollo del proyecto. En conjunto, permiten garantizar que el <em>software</em> responda adecuadamente a los objetivos del negocio y a las expectativas de los usuarios.
    p.mb-4(data-aos="fade-down") Las principales áreas de la ingeniería de requisitos se presentan a continuación.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 8.
          span Áreas de la ingeniería de requisitos
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Área
                th(data-aos="fade-down")(style= "width: 35%") Descripción
                th(data-aos="fade-down")(style= "width: 35%") Ejemplo
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Elicitación de requisitos.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Consiste en la identificación y recopilación de las necesidades, expectativas y problemas que los usuarios esperan resolver mediante el sistema.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Realizar entrevistas con los usuarios para identificar las funcionalidades que debe incluir el sistema.
              tr
                td(data-aos="fade-down") Análisis de requisitos.
                td(data-aos="fade-down") Implica examinar la información obtenida para comprender los requisitos, detectar inconsistencias, eliminar ambigüedades y priorizar las funcionalidades del sistema.
                td(data-aos="fade-down") Analizar los requisitos recopilados para determinar cuáles son críticos y cuáles pueden implementarse en fases posteriores.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Especificación de requisitos.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Se encarga de documentar los requisitos de manera clara, estructurada y comprensible para todos los miembros del proyecto.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Elaborar un documento de especificación de requisitos del <em>software</em> donde se describen las funcionalidades del sistema.
              tr
                td(data-aos="fade-down") Validación de requisitos.
                td(data-aos="fade-down") Busca confirmar que los requisitos definidos reflejan realmente las necesidades del usuario y que son correctos, completos y comprensibles.
                td(data-aos="fade-down") Revisar los requisitos con los usuarios para verificar que representan adecuadamente sus necesidades.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Gestión de requisitos.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Permite controlar los cambios que puedan surgir en los requisitos durante el desarrollo del proyecto, asegurando su trazabilidad y actualización.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Registrar cambios solicitados por el cliente y evaluar su impacto en el proyecto.
    .row.justify-content-center.mb-0
      .col.col-lg-3.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema4/img10.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .row.mb-3
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema4/img11.svg', alt='Imagen decorativa')
          .col-lg-10.col-12
            p.mb-0 Estas áreas se encuentran estrechamente relacionadas y se desarrollan de forma iterativa durante el proyecto. La información obtenida en una etapa puede requerir revisiones o ajustes en otras áreas, lo que permite mejorar progresivamente la definición de los requisitos.
        .cajon.cajon.C02.px-4.py-3
          p.mb-0(data-aos="fade-down") Una adecuada aplicación de estas áreas contribuye a reducir errores en la interpretación de los requisitos, mejorar la comunicación entre los actores del proyecto y facilitar la construcción de sistemas de <em>software</em> que respondan de manera efectiva a las necesidades del usuario.
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Fases de la ingeniería de requisitos
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img12.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") La ingeniería de requisitos se desarrolla mediante una serie de fases que permiten identificar, analizar, documentar y controlar los requisitos de un sistema de <em>software</em>. Estas fases organizan el trabajo del equipo de desarrollo y facilitan la comprensión de las necesidades de los usuarios, garantizando que el sistema cumpla con los objetivos del proyecto.
    p(data-aos="fade-down") Aunque en la práctica algunas actividades pueden realizarse de manera iterativa, las fases de la ingeniería de requisitos suelen seguir una secuencia lógica que orienta el proceso de definición de los requisitos.
    p.mb-4(data-aos="fade-down") A continuación, se describen las principales fases:
    .row.justify-content-center.mb-4
      .col.col-lg-8.col-12.mb-md-0.order-lg-2.order-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C03")
          .row(titulo="Elicitación de requisitos")
            .col-12.mb-0.mb-md-0
              p Corresponde al proceso de recopilación de información sobre las necesidades, expectativas y problemas que el sistema debe resolver. En esta fase se utilizan diferentes técnicas como entrevistas, encuestas, observación del trabajo de los usuarios o análisis de documentos existentes.
          .row(titulo="Análisis de requisitos")
            .col-12.mb-0.mb-md-0
              p Consiste en examinar y organizar la información obtenida durante la elicitación. El objetivo es comprender los requisitos, identificar inconsistencias, resolver ambigüedades y establecer prioridades entre las diferentes funcionalidades del sistema.
          .row(titulo="Especificación de requisitos")
            .col-12.mb-0.mb-md-0
              p En esta fase los requisitos se documentan de forma clara, estructurada y comprensible para todos los miembros del proyecto. La especificación puede incluir descripciones textuales, modelos, diagramas o historias de usuario que permitan representar el comportamiento esperado del sistema.
          .row(titulo="Validación de requisitos")
            .col-12.mb-0.mb-md-0
              p Tiene como propósito verificar que los requisitos definidos representan correctamente las necesidades del usuario y que son completos, coherentes y viables desde el punto de vista técnico. Esta fase suele realizarse mediante revisiones, prototipos o reuniones de validación con los <em>stakeholders</em>.
          .row(titulo="Gestión de requisitos")
            .col-12.mb-0.mb-md-0
              p Se encarga de controlar y administrar los cambios que puedan surgir en los requisitos durante el desarrollo del proyecto. Incluye actividades como el seguimiento de modificaciones, el análisis de impacto y la actualización de la documentación correspondiente.
      .col.col-lg-4.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/img13.png', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") En conjunto, estas fases permiten estructurar el proceso de definición de requisitos, mejorar la comunicación entre los actores del proyecto y asegurar que el <em>software</em> desarrollado responda de manera efectiva a las necesidades del usuario y de la organización.
    .row.cajon.C01.justify-content-center.p-4.mb-0(data-aos="flip-up")
      .col-lg-8.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
        p.mb-2(data-aos="fade-down") Uno de los ejemplos más conocidos sobre la importancia de una correcta definición de requisitos ocurrió durante el desarrollo del sistema de equipaje del aeropuerto internacional de Denver en la década de 1990. El proyecto buscaba automatizar completamente el manejo de equipajes mediante un complejo sistema informático y mecánico. Sin embargo, debido a problemas en la definición y gestión de los requisitos, el sistema presentó múltiples fallos, retrasos y sobrecostos.
        .col.col-12
          .cajon.cajon.C04.p-4.mb-2
            .row
              .col-lg-auto.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/tema4/img15.svg', alt='Imagen decorativa')
              .col-lg-9.col-12
                p.mb-0 El proyecto se retrasó aproximadamente 16 meses y generó pérdidas superiores a 560 millones de dólares, convirtiéndose en un caso ampliamente estudiado en ingeniería de <em>software</em>. Este ejemplo evidencia que una inadecuada gestión de requisitos puede afectar seriamente el éxito de un proyecto tecnológico.
        p.mb-0(data-aos="fade-down") Por esta razón, la ingeniería de requisitos se considera una de las etapas más críticas dentro del desarrollo de <em>software</em>, ya que permite comprender con claridad qué necesita el usuario y cómo debe responder el sistema a dichas necesidades.
      .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/img14.png', alt='Imagen decorativa')
</template>

<script>
export default {
  name: 'Tema4',
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
