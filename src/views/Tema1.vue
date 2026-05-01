<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentos del ciclo de vida del <em>software</em>
    p.mb-4(data-aos="fade-down") El desarrollo de <em>software</em> es un proceso estructurado que requiere planificación, organización y control para garantizar que las soluciones tecnológicas respondan adecuadamente a las necesidades de los usuarios y de las organizaciones. En este contexto, el ciclo de vida del <em>software</em> constituye un marco de referencia que orienta las diferentes etapas necesarias para planificar, construir, probar, implementar y mantener un sistema informático.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p El ciclo de vida del <em>software</em> describe el conjunto de actividades que se realizan desde la identificación de una necesidad o problema hasta la entrega, operación y mantenimiento del sistema desarrollado. Este enfoque permite organizar el trabajo del equipo de desarrollo, establecer responsabilidades, definir tiempos de ejecución y asegurar la calidad del producto final.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C02.color-secundario.p-3
          .row.justify-content-center.align-items-center
            .col.col-lg-9.col-12.order-lg-1.order-2
              p.mb-0(data-aos="fade-down") A través del ciclo de vida del <em>software</em> se busca reducir riesgos, mejorar la gestión del proyecto y garantizar que los requerimientos del sistema se comprendan y se implementen correctamente. Además, facilita la comunicación entre los diferentes actores involucrados, como analistas, desarrolladores, usuarios y demás partes interesadas.
            .col.col-lg-2.col-8.col-md-5.order-lg-2.order-1.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/tema1/img02.svg', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") Comprender los fundamentos del ciclo de vida del <em>software</em> resulta esencial para cualquier proceso de desarrollo, ya que proporciona una visión integral del proyecto y permite aplicar metodologías y modelos que orientan la creación de soluciones tecnológicas eficientes, sostenibles y alineadas con las necesidades del entorno.
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Elementos del ciclo de vida del <em>software</em>
    .row.justify-content-center.mb-0
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3.g-0
        figure
          img(src='@/assets/curso/tema1/img03.png', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") El ciclo de vida del <em>software</em> está compuesto por un conjunto de elementos que permiten organizar y gestionar el desarrollo de un sistema informático de manera estructurada. Estos elementos orientan las actividades que se realizan durante el proceso de desarrollo, facilitan la coordinación entre los miembros del equipo y contribuyen a garantizar que el producto final cumpla con los requisitos definidos.
        .row.mb-4
          .col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/img04.svg', alt='Imagen decorativa')
          .col-lg-10.col-12
            p.mb-0 Cada elemento cumple una función específica dentro del proceso y permite asegurar que el <em>software</em> sea diseñado, construido, evaluado y mantenido de forma adecuada. En conjunto, estos elementos establecen una guía que facilita la planificación de las actividades, el control del progreso del proyecto y el aseguramiento de la calidad del producto desarrollado.
        .cajon.cajon.C01.p-4.mb-3
          p.mb-0(data-aos="fade-down") Entre los principales elementos del ciclo de vida del <em>software</em> se encuentran las actividades, los roles, los artefactos, los procesos y las herramientas, los cuales se describen a continuación.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Elementos del ciclo de vida del <em>software</em>
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Elemento
                th(data-aos="fade-down")(style= "width: 80%") Descripción
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Actividades.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Corresponden a las tareas que se realizan durante el desarrollo del <em>software</em>. Incluyen acciones como analizar requisitos, diseñar el sistema, programar, realizar pruebas, implementar el sistema y efectuar mantenimiento.
              tr
                td(data-aos="fade-down") Roles.
                td(data-aos="fade-down") Representan las responsabilidades que asumen las personas que participan en el proyecto. Algunos roles comunes son analista de requisitos, desarrollador, arquitecto de <em>software</em>, <em>tester</em>, gestor de proyecto y usuario final.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Artefactos.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Son los productos o documentos que se generan durante el proceso de desarrollo. Entre ellos se encuentran los documentos de requisitos, diagramas de diseño, código fuente, planes de prueba, manuales de usuario y reportes técnicos.
              tr
                td(data-aos="fade-down") Procesos.
                td(data-aos="fade-down") Se refieren a la organización estructurada de actividades que se siguen para desarrollar el <em>software</em>. Los procesos establecen cómo se ejecutan las tareas, en qué orden se realizan y cómo se controlan los resultados.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Herramientas.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Son los recursos tecnológicos que apoyan el desarrollo del <em>software</em>. Incluyen entornos de desarrollo, sistemas de control de versiones, herramientas de modelado, plataformas de gestión de proyectos y herramientas de pruebas.
    p.mb-0(data-aos="fade-down") La integración de estos elementos permite que el desarrollo del <em>software</em> se realice de forma organizada y controlada. Cada elemento contribuye a que el proyecto avance de manera estructurada, facilitando la colaboración entre los miembros del equipo y asegurando que el sistema desarrollado cumpla con los estándares de calidad establecidos.
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Modelos del ciclo de vida del <em>software</em>
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema1/img05.png', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        p.mb-2(data-aos="fade-down") Los modelos del ciclo de vida del <em>software</em> representan diferentes formas de organizar y gestionar las etapas del desarrollo de un sistema informático. Cada modelo establece una estructura que orienta cómo se planifican, ejecutan y controlan las actividades del proyecto, desde la definición de los requisitos hasta la entrega y mantenimiento del <em>software</em>.
        .cajon.cajon.C01.color-primario.p-4.mb-2
          p.mb-0(data-aos="fade-down") Estos modelos proporcionan una guía metodológica que ayuda a los equipos de desarrollo a gestionar el trabajo de manera más eficiente, definir responsabilidades, controlar los tiempos de ejecución y reducir los riesgos asociados al desarrollo de sistemas. La elección de un modelo depende de factores como el tamaño del proyecto, la complejidad del sistema, el nivel de incertidumbre en los requisitos y la dinámica del equipo de trabajo.
        p.mb-0(data-aos="fade-down") A lo largo del tiempo se han propuesto diversos modelos para organizar el proceso de desarrollo de <em>software</em>. Algunos de los más utilizados se presentan a continuación.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Principales modelos del ciclo de vida del <em>software</em>
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Modelo
                th(data-aos="fade-down")(style= "width: 35%") Descripción
                th(data-aos="fade-down")(style= "width: 35%") Características principales
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Modelo en cascada.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Es uno de los modelos más tradicionales del desarrollo de <em>software</em>. Las fases del proyecto se ejecutan de manera secuencial, es decir, cada etapa comienza cuando la anterior ha finalizado.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Proceso lineal, documentación detallada, adecuado cuando los requisitos están claramente definidos desde el inicio.
              tr
                td(data-aos="fade-down") Modelo incremental.
                td(data-aos="fade-down") El sistema se desarrolla mediante incrementos o versiones parciales que se van integrando progresivamente hasta completar el producto final.
                td(data-aos="fade-down") Permite entregar funcionalidades de manera gradual, facilita la retroalimentación del usuario y reduce riesgos.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Modelo en espiral.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Combina el desarrollo iterativo con el análisis continuo de riesgos. Cada ciclo del proyecto incluye planificación, análisis, desarrollo y evaluación.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Enfoque orientado a la gestión de riesgos, adecuado para proyectos grandes y complejos.
              tr
                td(data-aos="fade-down") Modelo en V.
                td(data-aos="fade-down") Es una extensión del modelo en cascada que relaciona cada fase del desarrollo con una fase correspondiente de pruebas y validación.
                td(data-aos="fade-down") Alta trazabilidad entre desarrollo y pruebas, adecuado para proyectos que requieren alta calidad y control.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Modelo ágil.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Se basa en ciclos cortos de desarrollo llamados iteraciones o <em>sprints</em>, donde se entregan pequeñas funcionalidades del sistema de forma continua.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Flexibilidad, adaptación al cambio, trabajo colaborativo y retroalimentación constante del cliente.
    p(data-aos="fade-down") Cada uno de estos modelos propone una forma particular de organizar las actividades del desarrollo de <em>software</em>. Aunque comparten etapas similares, difieren en la manera en que se estructuran las fases, la interacción con los usuarios y la forma en que se gestionan los cambios durante el proyecto.
    p.mb-0(data-aos="fade-down") A continuación, se presentan gráficamente algunos modelos del ciclo de vida del <em>software</em>:
    .row
      .col-12
        .px-5.py-4
          .row.align-items-center.BG01(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-5
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema1/img06.png", alt="Imagen decorativa")
            .col-lg-8.p-5
              SlyderF.custom.color-acento-botones.p-4(columnas="col-lg-4 col-xl-4")
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema1/img07.svg", alt="Imagen decorativa").img100.m-auto
                  p Modelo en cascada
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema1/img08.svg", alt="Imagen decorativa").img100.m-auto
                  p Modelo incremental
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema1/img09.svg", alt="Imagen decorativa").img100.m-auto
                  p Modelo en espiral
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema1/img10.svg", alt="Imagen decorativa").img100.m-auto
                  p Modelo en V
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema1/img11.svg", alt="Imagen decorativa").img100.m-auto
                  p Modelo ágil
    p.mb-4(data-aos="fade-down") Cada modelo ofrece ventajas y limitaciones dependiendo del contexto del proyecto. Por esta razón, las organizaciones seleccionan el modelo de desarrollo que mejor se adapta a sus necesidades, recursos y características del sistema que se desea construir.
    .row.justify-content-center.mb-0
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C03.p-3
          .row.justify-content-center.align-items-center
            p.mb-0(data-aos="fade-down") En la actualidad, muchos proyectos de <em>software</em> combinan diferentes enfoques o adoptan metodologías ágiles que permiten responder con mayor rapidez a los cambios en los requisitos y a las necesidades del usuario.
      .col.col-lg-1.col-8.col-md-4.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema1/img12.svg', alt='Imagen decorativa')
    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Fases del ciclo de vida del <em>software</em>
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img13.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") El ciclo de vida del <em>software</em> se estructura en un conjunto de fases que orientan el desarrollo de un sistema informático desde la identificación de una necesidad hasta su implementación y mantenimiento. Cada fase agrupa actividades específicas que permiten planificar, diseñar, construir, evaluar y mantener el <em>software</em> de manera organizada.
    p(data-aos="fade-down") Estas fases facilitan la gestión del proyecto, ya que permiten dividir el proceso de desarrollo en etapas claramente definidas, lo que contribuye a controlar el avance del proyecto, mejorar la comunicación entre los miembros del equipo y asegurar que el producto final cumpla con los requisitos establecidos.
    p.mb-4(data-aos="fade-down") Aunque el número y la denominación de las fases pueden variar según el modelo de desarrollo utilizado, en términos generales el ciclo de vida del <em>software</em> comprende las siguientes fases.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Fases del ciclo de vida del <em>software</em>
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Fase
                th(data-aos="fade-down")(style= "width: 80%") Descripción
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Análisis.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") En esta fase se identifican y analizan las necesidades del usuario o de la organización. Se recopila información sobre los requisitos que debe cumplir el sistema y se definen los objetivos del proyecto.
              tr
                td(data-aos="fade-down") Diseño.
                td(data-aos="fade-down") Se establece la estructura del sistema, definiendo la arquitectura, los componentes, las bases de datos y la forma en que interactuarán los diferentes elementos del <em>software</em>.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Codificación.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") También conocida como fase de desarrollo o programación. En esta etapa los desarrolladores escriben el código fuente del sistema utilizando lenguajes de programación y herramientas de desarrollo.
              tr
                td(data-aos="fade-down") Pruebas.
                td(data-aos="fade-down") Se realizan diferentes tipos de pruebas para verificar que el sistema funcione correctamente, identificar errores y asegurar que el <em>software</em> cumpla con los requisitos definidos.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Validación.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") En esta fase se verifica que el sistema desarrollado satisface las necesidades del usuario y cumple con los objetivos planteados al inicio del proyecto.
              tr
                td(data-aos="fade-down") Mantenimiento.
                td(data-aos="fade-down") Corresponde a las actividades que se realizan después de la implementación del <em>software</em>. Incluye corrección de errores, actualización de funcionalidades y mejoras para adaptar el sistema a nuevas necesidades.
    p.mb-0(data-aos="fade-down") Cada una de estas fases cumple un papel fundamental dentro del proceso de desarrollo del <em>software</em>. La adecuada ejecución de estas etapas permite construir sistemas informáticos más confiables, facilitar su mantenimiento y asegurar que respondan de manera efectiva a las necesidades de los usuarios y de las organizaciones.
    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Objetivos de las fases del ciclo de vida del <em>software</em>
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema1/img14.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p.mb-2(data-aos="fade-down") Las fases del ciclo de vida del <em>software</em> no solo organizan el proceso de desarrollo, sino que también cumplen objetivos específicos que permiten garantizar que el sistema sea construido de manera estructurada, eficiente y alineada con las necesidades del usuario. Cada fase contribuye a alcanzar metas particulares dentro del proyecto, asegurando que el desarrollo del <em>software</em> avance de forma controlada y con resultados verificables.
        .cajon.cajon.C02.color-secundario.p-4.mb-2
          p.mb-0(data-aos="fade-down") El establecimiento de objetivos en cada fase permite orientar las actividades del equipo de desarrollo, facilitar la toma de decisiones y reducir los riesgos asociados al proyecto. Asimismo, estos objetivos ayudan a mantener la coherencia entre los requisitos del sistema, las soluciones diseñadas y el producto final que será implementado.
    p.mb-4(data-aos="fade-down") A continuación, se describen los objetivos asociados a las principales fases del ciclo de vida del <em>software</em>:
    .row.BG02.justify-content-center.align-items-center.px-3.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Análisis")
            .col-12.mb-4.mb-md-0
              p.mb-0 Identificar y comprender las necesidades del usuario o de la organización, definiendo con claridad los requisitos que debe cumplir el sistema.
          .row(numero="2" titulo="Diseño")
            .col-12.mb-4.mb-md-0
              p.mb-0 Establecer la arquitectura y la estructura del sistema, definiendo cómo se organizarán sus componentes y cómo interactuarán entre sí.
          .row(numero="3" titulo="Codificación")
            .col-12.mb-4.mb-md-0
              p.mb-0 Desarrollar el <em>software</em> mediante la implementación del código fuente que materializa las funcionalidades definidas en el diseño.
          .row(numero="4" titulo="Pruebas")
            .col-12.mb-4.mb-md-0
              p.mb-0 Verificar el correcto funcionamiento del sistema, identificando y corrigiendo errores antes de su implementación.
          .row(numero="5" titulo="Validación")
            .col-12.mb-4.mb-md-0
              p.mb-0 Confirmar que el sistema desarrollado satisface los requisitos definidos y responde a las necesidades del usuario.
          .row(numero="6" titulo="Mantenimiento")
            .col-12.mb-4.mb-md-0
              p.mb-0 Garantizar la continuidad y mejora del sistema mediante la corrección de errores, actualización de funcionalidades y adaptación a nuevos requerimientos.
      .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img15.png', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") El cumplimiento de estos objetivos en cada fase permite asegurar un proceso de desarrollo más organizado, mejorar la calidad del <em>software</em> y facilitar su evolución a lo largo del tiempo. De esta manera, el ciclo de vida del <em>software</em> se convierte en una herramienta fundamental para la gestión efectiva de proyectos tecnológicos.

</template>

<script>
export default {
  name: 'Tema1',
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
