<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Herramientas de modelado de requisitos
    p.mb-4(data-aos="fade-down") Las herramientas de modelado de requisitos son recursos que permiten representar de manera gráfica y estructurada la información obtenida durante la ingeniería de requisitos. Su utilización facilita la comprensión de las necesidades del sistema, mejora la comunicación entre los miembros del equipo y permite documentar de forma clara el comportamiento esperado del <em>software</em>.
    .row.justify-content-center.mb-4
      .col.col-lg-auto.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema7/img01.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C05.px-4.py-3
          p.mb-0(data-aos="fade-down") En el desarrollo de proyectos de <em>software</em>, el modelado de requisitos se utiliza para describir cómo interactúan los usuarios con el sistema, qué procesos se ejecutan, qué información se maneja y cómo se relacionan los diferentes componentes del sistema. Estas representaciones permiten transformar descripciones textuales complejas en esquemas visuales que resultan más fáciles de interpretar.
    p.mb-4(data-aos="fade-down") Las herramientas de modelado ayudan a organizar la información del proyecto, identificar relaciones entre los diferentes elementos del sistema y detectar posibles inconsistencias en los requisitos definidos. Además, permiten que los diferentes actores del proyecto, como analistas, desarrolladores, diseñadores y usuarios, compartan una visión común sobre el funcionamiento del sistema.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          p.mb-1(data-aos="fade-down") Entre los beneficios más importantes del uso de herramientas de modelado en la ingeniería de requisitos se destacan:
          .tarjeta.tarjeta--blanca.px-4.py-3.mb-2
            ul.lista-ul--color.mb-0
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Facilitan la comprensión de los requisitos mediante representaciones visuales.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Permiten estructurar y organizar la información del sistema.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Mejoran la comunicación entre los miembros del equipo de proyecto.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Apoyan la validación de requisitos con usuarios y <em>stakeholders</em>.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Contribuyen a identificar errores o inconsistencias en etapas tempranas del desarrollo.
          p.mb-0(data-aos="fade-down") El uso de herramientas de modelado resulta especialmente útil en proyectos de <em>software</em> complejos, donde intervienen múltiples actores, procesos y componentes tecnológicos. En estos casos, los modelos permiten representar de forma clara las interacciones del sistema y sirven como base para las etapas posteriores de diseño e implementación.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema7/img02.jpg', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") En los siguientes apartados se presentan los principales tipos de herramientas de modelado utilizadas en la ingeniería de requisitos, así como las características que las hacen útiles dentro del proceso de desarrollo de <em>software</em>.
    separador
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.1 Tipos de herramientas de modelado
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema7/img03.jpg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2
        p.mb-3(data-aos="fade-down") Las herramientas de modelado de requisitos son aplicaciones o recursos que permiten representar de forma visual y estructurada los diferentes elementos de un sistema de <em>software</em>. Estas herramientas facilitan la comprensión del sistema, ya que permiten organizar la información, identificar relaciones entre componentes y comunicar de manera clara los requisitos definidos durante el proceso de desarrollo.
        .cajon.cajon.C01.color-primario.px-4.py-3.mb-3
          p.mb-0(data-aos="fade-down") El uso de herramientas de modelado permite representar gráficamente procesos, estructuras de datos, interacciones entre actores y comportamiento del sistema. Gracias a estas representaciones, los equipos de desarrollo pueden analizar con mayor claridad el funcionamiento del sistema antes de iniciar la fase de implementación.
        p.mb-0(data-aos="fade-down") Existen diferentes tipos de herramientas de modelado, las cuales se utilizan dependiendo del tipo de información que se desea representar y del enfoque metodológico del proyecto.
    p.mb-4(data-aos="fade-down") Entre los principales tipos de herramientas de modelado utilizadas en ingeniería de <em>software</em> se encuentran:
    .tarjeta.tarjeta--C02.p-4.mb-4
      LineaTiempoC.color-acento-botones(text-small)(data-aos="flip-up")
        .row.py-5.px-4(titulo="a.")
          .col-lg-5.mb-4.mb-md-0.order-lg-2.order-2
            h4 Herramientas de modelado UML
            p.mb-0 Permiten representar diferentes aspectos del sistema mediante diagramas estandarizados del Lenguaje Unificado de Modelado (UML). Estas herramientas facilitan la creación de diagramas de casos de uso, diagramas de clases, diagramas de secuencia, diagramas de actividades y diagramas de componentes.
          .col-lg-7.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema7/img04.jpg', alt='Imagen decorativa')
        .row.py-5.px-4(titulo="a.")
          .col-lg-5.mb-4.mb-md-0.order-lg-2.order-2
            h4 Herramientas de modelado de procesos
            p.mb-0 Se utilizan para representar el flujo de actividades dentro de un sistema o proceso de negocio. Estas herramientas permiten visualizar cómo se desarrollan las tareas, qué actores participan y cómo se relacionan las diferentes actividades del proceso.
          .col-lg-7.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema7/img05.jpg', alt='Imagen decorativa')
        .row.py-5.px-4(titulo="b.")
          .col-lg-5.mb-4.mb-md-0.order-lg-2.order-2
            h4 Herramientas de modelado de datos
            p.mb-0 Permiten representar la estructura de los datos que utilizará el sistema. Mediante estas herramientas se elaboran diagramas entidad–relación, modelos de bases de datos y estructuras de almacenamiento de información.
          .col-lg-7.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema7/img06.jpg', alt='Imagen decorativa')
        .row.py-5.px-4(titulo="c.")
          .col-lg-5.mb-4.mb-md-0.order-lg-2.order-2
            h4 Herramientas de prototipado
            p.mb-0 Facilitan la creación de representaciones visuales de las interfaces del sistema antes de su desarrollo definitivo. A través de prototipos se pueden evaluar aspectos de usabilidad, navegación y diseño de la interfaz.
          .col-lg-7.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema7/img07.jpg', alt='Imagen decorativa')
        .row.py-5.px-4(titulo="d.")
          .col-lg-5.mb-4.mb-md-0.order-lg-2.order-2
            h4 Herramientas de modelado colaborativo
            p.mb-0 Permiten que varios miembros del equipo trabajen simultáneamente en la construcción de modelos del sistema. Estas herramientas facilitan la comunicación entre los participantes del proyecto y el seguimiento de cambios realizados en los modelos.
          .col-lg-7.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema7/img08.jpg', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") A continuación, se presenta una tabla con algunos ejemplos de herramientas utilizadas para el modelado de sistemas en proyectos de <em>software</em>.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 13.
          span Ejemplos de herramientas de modelado de requisitos
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Tipo de herramienta
                th(data-aos="fade-down")(style= "width: 35%") Ejemplos
                th(data-aos="fade-down")(style= "width: 35%") Uso principal
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Modelado UML.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") StarUML, Visual Paradigm y Enterprise Architect.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Elaboración de diagramas del sistema.
              tr
                td(data-aos="fade-down") Modelado de procesos.
                td(data-aos="fade-down") Bizagi Modeler y Lucidchart.
                td(data-aos="fade-down") Representación de procesos y flujos de trabajo.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Modelado de datos.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") MySQL Workbench y ER/Studio.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Diseño de bases de datos.
              tr
                td(data-aos="fade-down") Prototipado.
                td(data-aos="fade-down") Figma, Balsamiq y Adobe XD.
                td(data-aos="fade-down") Diseño de interfaces y prototipos.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Modelado colaborativo.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Miro, Draw.io y Lucidchart.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Trabajo colaborativo en diagramas.
    p.mb-0(data-aos="fade-down") La utilización de herramientas de modelado contribuye a mejorar la comprensión del sistema y facilita la comunicación entre los miembros del equipo de desarrollo y las partes interesadas. Además, permite documentar de manera clara la estructura y el comportamiento del <em>software</em> antes de iniciar su construcción.
    separador
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.2 Características de las herramientas de modelado
    p.mb-4(data-aos="fade-down") Las herramientas de modelado de requisitos presentan un conjunto de características que facilitan la representación, análisis y documentación de los diferentes elementos de un sistema de <em>software</em>. Estas herramientas permiten estructurar la información del proyecto, visualizar relaciones entre componentes y apoyar la toma de decisiones durante las etapas iniciales del desarrollo.
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema7/img09.jpg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        p.mb-3(data-aos="fade-down") Una de sus principales características es la representación gráfica, ya que permiten expresar ideas, procesos y estructuras del sistema mediante diagramas y esquemas visuales. Este tipo de representación facilita la comprensión del sistema tanto para el equipo técnico como para los usuarios o partes interesadas que participan en el proyecto.
        .row.mb-3
          .col-lg-1.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema7/img10.svg', alt='Imagen decorativa')
          .col-lg-11.col-12
            .cajon.cajon.C01.p-4.py-2.mb-0
              p.mb-0 Otra característica importante es la estandarización de modelos, lo que significa que muchas herramientas utilizan notaciones reconocidas internacionalmente, como el Lenguaje Unificado de Modelado (UML) o modelos de procesos. Esto permite que los diagramas elaborados puedan ser comprendidos por diferentes profesionales del área de desarrollo de <em>software</em>.
        p.mb-0(data-aos="fade-down") Las herramientas de modelado también ofrecen facilidades de documentación, ya que permiten almacenar información relacionada con los elementos del sistema, como descripciones de requisitos, relaciones entre componentes, reglas de negocio y especificaciones técnicas. De esta manera, se genera una base de conocimiento que puede ser utilizada durante todo el ciclo de vida del <em>software</em>.
    p.mb-4(data-aos="fade-down") Asimismo, muchas herramientas cuentan con funcionalidades de trabajo colaborativo, lo que permite que varios miembros del equipo participen en la construcción y revisión de los modelos del sistema. Esta característica favorece la comunicación entre analistas, desarrolladores, diseñadores y otros actores involucrados en el proyecto.
    .row.justify-content-center.mb-4
      .col.col-lg-auto.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema7/img11.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C05.px-4.py-3
          p.mb-0(data-aos="fade-down") Otra característica relevante es la capacidad de actualización y trazabilidad, ya que las herramientas permiten modificar los modelos cuando cambian los requisitos del sistema y mantener un registro de las versiones o cambios realizados. Esto facilita el control del proyecto y la gestión de los requisitos a lo largo del desarrollo.
    p.mb-4(data-aos="fade-down") A continuación, se presentan algunas características comunes de las herramientas de modelado utilizadas en proyectos de <em>software</em>.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 14.
          span Características de las herramientas de modelado de requisitos
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Característica
                th(data-aos="fade-down")(style= "width: 80%") Descripción
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Representación visual.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Permiten expresar el funcionamiento del sistema mediante diagramas y modelos gráficos.
              tr
                td(data-aos="fade-down") Uso de estándares.
                td(data-aos="fade-down") Utilizan notaciones reconocidas como UML u otros modelos de representación de sistemas.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Documentación estructurada.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Facilitan el registro y organización de la información relacionada con los requisitos del sistema.
              tr
                td(data-aos="fade-down") Trabajo colaborativo.
                td(data-aos="fade-down") Permiten que varios miembros del equipo participen en la creación y revisión de los modelos.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Trazabilidad de cambios.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Registran modificaciones realizadas en los modelos y permiten gestionar versiones del proyecto.
              tr
                td(data-aos="fade-down") Integración con otras herramientas.
                td(data-aos="fade-down") Algunas herramientas se integran con sistemas de desarrollo, gestión de proyectos o repositorios de código.
    .row.mb-0
      .col-lg-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema7/img12.svg', alt='Imagen decorativa')
      .col-lg-11.col-12
        p.mb-0 Estas características convierten a las herramientas de modelado en un recurso fundamental dentro de la ingeniería de requisitos, ya que facilitan la comprensión del sistema, mejoran la comunicación entre los participantes del proyecto y permiten documentar de manera clara la estructura y el comportamiento del <em>software</em>.

</template>

<script>
export default {
  name: 'Tema7',
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
