<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Elicitación de requisitos
    p.mb-4(data-aos="fade-down") La elicitación de requisitos corresponde al proceso mediante el cual se identifican, recopilan y comprenden las necesidades, expectativas y restricciones de los interesados en relación con un sistema o producto de <em>software</em>. Esta etapa permite descubrir qué debe hacer el sistema, cómo debe comportarse y cuáles son las condiciones bajo las cuales debe operar.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p En el contexto de la ingeniería de <em>software</em>, la elicitación se considera una de las actividades más importantes dentro de la Ingeniería de requisitos, ya que de la calidad de la información obtenida dependen las fases posteriores de análisis, especificación y validación.
        br
        br
        p Durante este proceso se interactúa con diferentes actores, como usuarios finales, clientes, expertos del dominio, desarrolladores y responsables del negocio. Cada uno aporta información valiosa sobre el funcionamiento esperado del sistema, los problemas actuales y las oportunidades de mejora.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C02.color-secundario.p-3
          .row.justify-content-center.align-items-center
            .col.col-lg-9.col-12.order-lg-1.order-2
              p.mb-0(data-aos="fade-down") La elicitación no consiste únicamente en preguntar qué necesita el cliente, sino también en analizar el contexto organizacional, identificar requisitos implícitos, resolver ambigüedades y descubrir necesidades que los propios usuarios pueden no haber expresado de forma explícita. Para lograrlo, se utilizan diversas técnicas de investigación, comunicación y análisis que facilitan la comprensión integral del problema.
            .col.col-lg-auto.col-8.col-md-5.order-lg-2.order-1.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/tema5/img02.svg', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") Además, este proceso suele ser iterativo, lo que significa que la información recopilada se revisa, valida y complementa continuamente a medida que se obtiene una mejor comprensión del sistema y de su entorno. De esta manera, la elicitación contribuye a reducir errores tempranos, mejorar la calidad de los requisitos y aumentar la probabilidad de éxito del proyecto de <em>software</em>.
    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Planeación de la elicitación
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema5/img08.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") La planeación de la elicitación corresponde al proceso mediante el cual se organiza y prepara la obtención de información necesaria para identificar y comprender los requisitos de un sistema. En esta etapa se establecen los objetivos de la recolección de información, se identifican los actores involucrados y se determinan las técnicas y recursos que se utilizarán para obtener los requisitos de manera estructurada y eficiente.
        .cajon.cajon.C01.color-primario.px-4.py-3
          p.mb-0(data-aos="fade-down") Una adecuada planeación permite optimizar el tiempo, reducir ambigüedades y garantizar que la información recopilada sea pertinente para el desarrollo del <em>software</em>. Además, facilita la coordinación entre analistas, usuarios, expertos del dominio y demás interesados, lo que contribuye a construir una visión compartida del sistema que se desea desarrollar.
    p.mb-4(data-aos="fade-down") Dentro de la planeación de la elicitación se consideran varios aspectos fundamentales:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema5/img03.svg' alt='AvatarTop')
          h4.text-center Definición de objetivos de la elicitación
          p Se determina qué información se necesita obtener y cuál es el alcance del sistema o producto a desarrollar.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema5/img04.svg' alt='AvatarTop')
          h4.text-center Identificación de los interesados (<em>stakeholders</em>)
          p Se reconocen las personas o grupos que interactúan con el sistema o que tienen interés en su desarrollo, como usuarios finales, administradores, clientes o expertos del dominio.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema5/img05.svg' alt='AvatarTop')
          h4.text-center Selección de técnicas de elicitación
          p Se definen los métodos que se utilizarán para recolectar información, como entrevistas, talleres, cuestionarios o análisis de documentos.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema5/img06.svg' alt='AvatarTop')
          h4.text-center Planificación de actividades
          p Se establece un cronograma de reuniones, sesiones de trabajo y actividades de recolección de información.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema5/img07.svg' alt='AvatarTop')
          h4.text-center Definición de recursos y herramientas
          p Se determinan los instrumentos y medios que se emplearán para registrar y analizar la información obtenida.
    p.mb-0(data-aos="fade-down") Una planeación adecuada de la elicitación contribuye a mejorar la calidad de los requisitos identificados, ya que permite abordar de forma sistemática las necesidades de los usuarios y del negocio. De esta manera, se reducen los riesgos de interpretaciones incorrectas, cambios frecuentes o inconsistencias en los requisitos durante las etapas posteriores del desarrollo de <em>software</em>.
    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Fuentes de información
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img09.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Las fuentes de información corresponden a los medios o actores de los cuales se obtiene el conocimiento necesario para identificar y comprender los requisitos de un sistema. Estas fuentes permiten conocer las necesidades reales del negocio, los procesos existentes, las expectativas de los usuarios y las restricciones que pueden afectar el desarrollo del <em>software</em>.
    p(data-aos="fade-down") Durante la elicitación de requisitos, el analista de sistemas debe identificar diferentes fuentes de información que aporten perspectivas diversas sobre el sistema a desarrollar. Utilizar múltiples fuentes contribuye a obtener una visión más completa del problema, reducir ambigüedades y validar la información recolectada.
    p.mb-4(data-aos="fade-down") Entre las principales fuentes de información utilizadas en la ingeniería de requisitos se encuentran:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 9.
          span Fuentes de información para la elicitación de requisitos
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Fuente de información
                th(data-aos="fade-down")(style= "width: 35%") Descripción
                th(data-aos="fade-down")(style= "width: 35%") Ejemplo
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Usuarios finales.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Personas que utilizarán directamente el sistema y conocen las tareas que deben realizarse en el proceso operativo.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Funcionarios que registran información en un sistema de gestión académica.
              tr
                td(data-aos="fade-down") Clientes o patrocinadores.
                td(data-aos="fade-down") Personas o áreas responsables de solicitar el desarrollo del sistema y definir los objetivos del proyecto.
                td(data-aos="fade-down") Gerencia de una empresa que solicita un sistema de control de inventarios.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Expertos del dominio.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Profesionales con amplio conocimiento sobre el área de negocio donde se implementará el sistema.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Un contador que orienta los requisitos de un sistema contable.
              tr
                td(data-aos="fade-down") Documentación existente.
                td(data-aos="fade-down") Documentos institucionales o técnicos que describen procesos, normas o procedimientos actuales.
                td(data-aos="fade-down") Manuales de operación, reglamentos, diagramas de procesos.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Sistemas existentes.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Sistemas actuales o anteriores que permiten identificar funcionalidades, procesos y limitaciones.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Un sistema antiguo de registro de clientes que se desea actualizar.
              tr
                td(data-aos="fade-down") Observación del entorno de trabajo.
                td(data-aos="fade-down") Análisis directo de cómo los usuarios realizan sus actividades en el contexto real.
                td(data-aos="fade-down") Observar cómo un operador registra pedidos en una empresa.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Normativas y estándares.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Leyes, regulaciones o estándares técnicos que deben cumplirse en el sistema.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Normas de seguridad de la información o regulaciones de protección de datos.
    .row.justify-content-center.mb-0
      .col.col-lg-auto.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema5/img10.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C01.px-4.py-3
          p.mb-0(data-aos="fade-down") El análisis de diferentes fuentes de información permite obtener una visión más completa de las necesidades del sistema. Al contrastar la información proveniente de usuarios, documentos y procesos existentes, el equipo de desarrollo puede identificar requisitos más claros, reducir ambigüedades y asegurar que el <em>software</em> responda de manera efectiva a las necesidades del contexto organizacional.
    separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Técnicas de elicitación
    .row.justify-content-center.mb-4
      .col.col-lg-6.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema5/img11.svg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-1.order-2
        p.mb-3(data-aos="fade-down") Las técnicas de elicitación corresponden a los métodos utilizados para obtener, descubrir y comprender los requisitos del sistema a partir de las diferentes fuentes de información. Estas técnicas permiten al equipo de desarrollo interactuar con usuarios, clientes y expertos del dominio con el fin de identificar necesidades, problemas, expectativas y restricciones que deben ser consideradas durante el desarrollo del <em>software</em>.
        .cajon.cajon.C01.color-primario.px-4.py-3
          p.mb-0(data-aos="fade-down") La selección de la técnica adecuada depende del contexto del proyecto, la disponibilidad de los participantes, la complejidad del sistema y el tipo de información que se requiere obtener. En muchos proyectos es común combinar varias técnicas para lograr una comprensión más completa de los requisitos.
    p.mb-4(data-aos="fade-down") A continuación, se presentan algunas de las técnicas de elicitación más utilizadas en proyectos de desarrollo de <em>software</em>.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 10.
          span Técnicas de elicitación de requisitos
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Técnica
                th(data-aos="fade-down")(style= "width: 35%") Descripción
                th(data-aos="fade-down")(style= "width: 35%") Ejemplo de aplicación
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Entrevistas.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Conversaciones estructuradas o semiestructuradas con usuarios, clientes o expertos del dominio para obtener información detallada sobre procesos, necesidades y expectativas del sistema.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Entrevistar a un jefe de área para conocer cómo se gestionan actualmente los pedidos en una empresa.
              tr
                td(data-aos="fade-down") Cuestionarios o encuestas.
                td(data-aos="fade-down") Instrumentos con preguntas previamente diseñadas que permiten recopilar información de un grupo amplio de personas de manera rápida.
                td(data-aos="fade-down") Enviar un cuestionario a los usuarios de una plataforma para identificar dificultades en su uso.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Observación directa.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Consiste en analizar cómo los usuarios realizan sus actividades en el entorno real de trabajo para comprender los procesos y detectar necesidades.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Observar cómo un empleado registra información en un sistema de atención al cliente.
              tr
                td(data-aos="fade-down") Talleres o reuniones de trabajo.
                td(data-aos="fade-down") Espacios colaborativos en los que participan diferentes actores para discutir necesidades, procesos y funcionalidades del sistema.
                td(data-aos="fade-down") Reunión entre usuarios, analistas y desarrolladores para definir los requisitos de un sistema de inventario.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Análisis de documentos.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Revisión de documentos existentes que describen procesos, normas o procedimientos relacionados con el sistema.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Analizar manuales de procedimientos o reglamentos institucionales.
              tr
                td(data-aos="fade-down") Prototipado.
                td(data-aos="fade-down") Creación de representaciones preliminares del sistema que permiten a los usuarios visualizar funcionalidades y proponer mejoras.
                td(data-aos="fade-down") Presentar un prototipo de interfaz para validar cómo se registrará la información en el sistema.
    p.mb-0(data-aos="fade-down") El uso adecuado de estas técnicas facilita la identificación de requisitos más claros y precisos, lo que contribuye a reducir errores durante el desarrollo del <em>software</em>. Asimismo, promueve la participación activa de los diferentes actores involucrados en el proyecto y mejora la comprensión de las necesidades del sistema que se desea construir.
    separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.4 Instrumentos de recolección de información
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema5/img12.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") Los instrumentos de recolección de información corresponden a los recursos utilizados para registrar, organizar y documentar los datos obtenidos durante la aplicación de las técnicas de elicitación. Estos instrumentos permiten sistematizar la información recopilada, facilitar su análisis y asegurar que los requisitos identificados queden documentados de manera clara y estructurada.
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0(data-aos="fade-down") El uso de instrumentos adecuados contribuye a mantener un registro confiable de las necesidades expresadas por los usuarios y demás participantes del proyecto. Además, permiten dar seguimiento a las decisiones tomadas durante el proceso de levantamiento de requisitos y sirven como evidencia del proceso de análisis realizado por el equipo de desarrollo.
    p.mb-4(data-aos="fade-down") A continuación, se presentan algunos de los instrumentos más utilizados en la recolección de información para la ingeniería de requisitos.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 11.
          span Instrumentos de recolección de información en la elicitación de requisitos
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Instrumento
                th(data-aos="fade-down")(style= "width: 35%") Descripción
                th(data-aos="fade-down")(style= "width: 35%") Ejemplo de uso
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Guion de entrevista.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Documento que contiene las preguntas previamente estructuradas que guían el desarrollo de una entrevista con usuarios o expertos. Permite asegurar que se aborden todos los temas relevantes para el proyecto.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Lista de preguntas preparada para entrevistar al responsable de un proceso administrativo dentro de una organización.
              tr
                td(data-aos="fade-down") Cuestionario.
                td(data-aos="fade-down") Conjunto organizado de preguntas que se aplican a un grupo de personas con el fin de recopilar información de manera sistemática. Puede incluir preguntas abiertas o cerradas.
                td(data-aos="fade-down") Formulario aplicado a los usuarios de un sistema para identificar dificultades en el uso de una plataforma.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Lista de chequeo.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Herramienta que permite verificar si determinados aspectos, requisitos o condiciones se cumplen dentro de un proceso o sistema.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Lista utilizada para confirmar que un sistema cumple con determinados requisitos funcionales o de seguridad.
              tr
                td(data-aos="fade-down") Acta de reunión.
                td(data-aos="fade-down") Documento que registra la información discutida durante una reunión, incluyendo acuerdos, decisiones y tareas asignadas a los participantes.
                td(data-aos="fade-down") Registro de una reunión entre el cliente y el equipo de desarrollo para definir funcionalidades del sistema.
    p.mb-0(data-aos="fade-down") La utilización de estos instrumentos facilita la organización de la información obtenida durante el proceso de elicitación, permite mantener una trazabilidad de los requisitos identificados y contribuye a mejorar la comunicación entre los diferentes actores involucrados en el desarrollo del <em>software</em>.
    separador
    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.5 Principios y buenas prácticas
    p.mb-4(data-aos="fade-down") La elicitación de requisitos es una de las actividades más críticas dentro del desarrollo de <em>software</em>, ya que de ella depende que el sistema responda realmente a las necesidades de los usuarios. Diversos estudios en ingeniería de <em>software</em> han evidenciado que una gran parte de los errores en los sistemas se originan por requisitos incompletos, ambiguos o mal interpretados durante las primeras etapas del proyecto.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          p.mb-4 Históricamente, en los primeros proyectos de desarrollo de <em>software</em>, especialmente entre las décadas de 1960 y 1970, era común que los equipos comenzaran a programar sin realizar una adecuada identificación de requisitos. Esta situación provocaba retrasos, sobrecostos y sistemas que no cumplían con las expectativas del cliente. A partir de estas experiencias surgieron metodologías y buenas prácticas orientadas a mejorar la captura y gestión de los requisitos.
          .row.mb-0
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema5/img15.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              p.mb-0 En la actualidad, la ingeniería de requisitos establece un conjunto de principios que orientan la forma en que debe realizarse la elicitación para obtener información clara, completa y verificable.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema5/img13.jpg', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") Entre los principales principios y buenas prácticas se destacan los siguientes:
    .row.BG02.justify-content-center.align-items-center.px-3.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Comprender el contexto del sistema")
            .col-12.mb-4.mb-md-0
              p Antes de recopilar requisitos, es importante conocer el entorno organizacional, los procesos existentes y las necesidades reales del negocio.
          .row(numero="2" titulo="Involucrar a los actores adecuados")
            .col-12.mb-4.mb-md-0
              p La participación de usuarios, expertos del dominio, responsables del negocio y equipo técnico permite obtener diferentes perspectivas sobre el sistema que se desea desarrollar.
          .row(numero="3" titulo="Escuchar activamente a los usuarios")
            .col-12.mb-4.mb-md-0
              p Durante entrevistas o reuniones, es fundamental prestar atención a las necesidades expresadas por los usuarios y evitar suposiciones sobre el funcionamiento del sistema.
          .row(numero="4" titulo="Evitar ambigüedades en los requisitos")
            .col-12.mb-4.mb-md-0
              p Los requisitos deben redactarse de manera clara, precisa y comprensible para todos los participantes del proyecto.
          .row(numero="5" titulo="Validar continuamente la información obtenida")
            .col-12.mb-4.mb-md-0
              p La información recopilada debe revisarse con los usuarios para confirmar que refleja correctamente sus necesidades y expectativas.
          .row(numero="6" titulo="Documentar adecuadamente los requisitos")
            .col-12.mb-4.mb-md-0
              p Mantener registros claros facilita la comunicación entre los miembros del equipo y permite realizar seguimiento durante el desarrollo del sistema.
          .row(numero="7" titulo="Gestionar los cambios de manera controlada")
            .col-12.mb-4.mb-md-0
              p Los requisitos pueden modificarse durante el proyecto; por ello, es necesario contar con mecanismos para registrar y evaluar estos cambios.
      .col-lg-5.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema5/img14.svg', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") Un aspecto relevante que suele mencionarse en la ingeniería de <em>software</em> es que <b>corregir un error en los requisitos puede ser hasta cien veces más costoso cuando el sistema ya está en producción</b>. Por esta razón, dedicar tiempo y esfuerzo a una adecuada elicitación y validación de requisitos resulta fundamental para el éxito de cualquier proyecto de <em>software</em>.

</template>

<script>
export default {
  name: 'Tema5',
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
