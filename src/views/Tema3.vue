<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Requisitos en el desarrollo de <em>software</em>
    p.mb-4(data-aos="fade-down") Los requisitos en el desarrollo de <em>software</em> representan las necesidades, condiciones y características que un sistema debe cumplir para satisfacer las expectativas de los usuarios y los objetivos de una organización. Estos requisitos describen tanto las funciones que el sistema debe realizar como las condiciones bajo las cuales debe operar.
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema3/img01.png', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-2
          p.mb-0(data-aos="fade-down") La correcta identificación y documentación de los requisitos constituye una de las actividades más importantes dentro del proceso de desarrollo de <em>software</em>, ya que establece las bases para las fases de diseño, implementación, pruebas y mantenimiento del sistema. Cuando los requisitos se definen de manera clara y estructurada, se facilita la comunicación entre los diferentes actores del proyecto y se reduce el riesgo de errores durante el desarrollo.
        p.mb-0(data-aos="fade-down") En general, los requisitos se clasifican en diferentes tipos según el aspecto del sistema que describen. Entre los más comunes se encuentran los requisitos funcionales, que definen las funciones o servicios que el sistema debe ofrecer; los requisitos no funcionales, que establecen las condiciones de calidad o restricciones de operación del sistema; y los requisitos de restricción, que imponen limitaciones técnicas, normativas o tecnológicas que deben cumplirse durante el desarrollo.
    p.mb-0(data-aos="fade-down") Esta clasificación permite organizar la información de manera estructurada y facilita el análisis, la documentación y la validación de los requisitos durante el proceso de desarrollo del <em>software</em>.
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Requisitos funcionales
    .row.justify-content-center.mb-4
      .col.col-lg-3.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema3/img02.svg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-1.order-2
        .row.mb-3
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema3/img03.svg', alt='Imagen decorativa')
          .col-lg-10.col-12
            p.mb-0 Los requisitos funcionales describen las funciones, servicios y comportamientos que el sistema debe proporcionar para satisfacer las necesidades de los usuarios y cumplir con los objetivos del negocio. En otras palabras, definen qué debe hacer el sistema frente a determinadas entradas o acciones realizadas por los usuarios.
        .cajon.cajon.C01.color-primario.p-4.mb-2
          p.mb-0(data-aos="fade-down") Estos requisitos especifican las operaciones que el sistema debe ejecutar, la forma en que procesa la información y las respuestas que debe generar ante diferentes situaciones. Por esta razón, constituyen uno de los elementos centrales en la definición del sistema, ya que permiten comprender las funcionalidades que serán implementadas durante el desarrollo del <em>software</em>.
        p.mb-0(data-aos="fade-down") Generalmente, los requisitos funcionales se redactan de forma clara y precisa utilizando expresiones como “el sistema debe permitir”, “el sistema debe registrar” o “el sistema debe generar”. Este tipo de redacción facilita su comprensión y permite que posteriormente se definan los casos de prueba que verificarán si las funcionalidades han sido implementadas correctamente.
    p.mb-4(data-aos="fade-down") A continuación, se presentan algunas categorías comunes de requisitos funcionales que suelen identificarse durante el desarrollo de un sistema de <em>software</em>:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Categorías de requisitos funcionales
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Categoría
                th(data-aos="fade-down")(style= "width: 35%") Descripción
                th(data-aos="fade-down")(style= "width: 35%") Ejemplo
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Autenticación y control de acceso.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Funcionalidades relacionadas con la identificación de usuarios y la gestión de permisos dentro del sistema.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") El sistema debe permitir que los usuarios inicien sesión mediante usuario y contraseña y bloquear la cuenta después de tres intentos fallidos.
              tr
                td(data-aos="fade-down") Gestión de datos (CRUD).
                td(data-aos="fade-down") Funciones que permiten crear, consultar, actualizar y eliminar información dentro del sistema.
                td(data-aos="fade-down") El sistema debe permitir registrar, consultar, modificar y eliminar información de clientes.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Procesamiento y cálculo.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Operaciones automáticas que transforman o procesan datos según reglas definidas por el negocio.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") El sistema debe calcular automáticamente el valor total de una compra incluyendo impuestos y descuentos.
              tr
                td(data-aos="fade-down") Reportes y consultas.
                td(data-aos="fade-down") Funcionalidades que permiten generar informes o consultar información almacenada en el sistema.
                td(data-aos="fade-down") El sistema debe generar reportes de ventas por rango de fechas en formato PDF o Excel.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Notificaciones y alertas.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Mecanismos mediante los cuales el sistema comunica eventos o cambios importantes a los usuarios.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") El sistema debe enviar una notificación por correo electrónico cuando se registre una nueva solicitud.
    p.mb-0(data-aos="fade-down") La correcta definición de los requisitos funcionales permite que el equipo de desarrollo comprenda con claridad las funcionalidades que el sistema debe implementar. Además, facilita la planificación del desarrollo, la elaboración de casos de prueba y la validación del sistema, garantizando que el <em>software</em> responda adecuadamente a las necesidades de los usuarios y de la organización.
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Requisitos no funcionales
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img04.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Los requisitos no funcionales describen las condiciones, características y restricciones que determinan cómo debe funcionar el sistema. A diferencia de los requisitos funcionales, que especifican las acciones o servicios que el sistema debe realizar, los requisitos no funcionales establecen criterios relacionados con el rendimiento, la seguridad, la disponibilidad, la usabilidad y otros aspectos de calidad del <em>software</em>.
    p.mb-4(data-aos="fade-down") Este tipo de requisitos define el comportamiento global del sistema y establece parámetros que permiten evaluar su desempeño y calidad durante su operación. En muchos casos, los requisitos no funcionales determinan el nivel de eficiencia, confiabilidad y seguridad que debe tener el sistema para cumplir con las expectativas de los usuarios y de la organización.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C02.color-secundario.p-3
          .row.justify-content-center.align-items-center
            p.mb-0(data-aos="fade-down") Para que puedan ser evaluados correctamente, los requisitos no funcionales deben formularse de manera medible y verificable, especificando valores concretos o condiciones que permitan comprobar su cumplimiento durante las pruebas del sistema.
    p.mb-4(data-aos="fade-down") A continuación, se presentan algunas de las categorías más comunes de requisitos no funcionales.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span Categorías de requisitos no funcionales
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Categoría
                th(data-aos="fade-down")(style= "width: 35%") Descripción
                th(data-aos="fade-down")(style= "width: 35%") Ejemplo
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Rendimiento.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Se refiere a la velocidad de respuesta del sistema, su capacidad de procesamiento y el tiempo necesario para ejecutar determinadas operaciones.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") El sistema debe responder las consultas de los usuarios en menos de 2 segundos.
              tr
                td(data-aos="fade-down") Disponibilidad.
                td(data-aos="fade-down") Indica el tiempo durante el cual el sistema debe estar operativo y accesible para los usuarios.
                td(data-aos="fade-down") El sistema debe estar disponible el 99.9 % del tiempo durante el año.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Seguridad.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Establece mecanismos de protección de la información y control de acceso al sistema.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Las contraseñas deben almacenarse mediante mecanismos de cifrado seguros.
              tr
                td(data-aos="fade-down") Usabilidad.
                td(data-aos="fade-down") Hace referencia a la facilidad con la que los usuarios pueden aprender a utilizar el sistema e interactuar con él.
                td(data-aos="fade-down") El sistema debe permitir que los usuarios completen el registro en menos de tres minutos.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Escalabilidad.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Capacidad del sistema para soportar un aumento en la cantidad de usuarios o en el volumen de datos sin afectar su rendimiento.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") El sistema debe soportar hasta 10.000 usuarios concurrentes.
              tr
                td(data-aos="fade-down") Portabilidad.
                td(data-aos="fade-down") Capacidad del sistema para funcionar en diferentes plataformas, dispositivos o sistemas operativos.
                td(data-aos="fade-down") La aplicación debe funcionar en dispositivos móviles, tabletas y navegadores <em>web</em> modernos.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Mantenibilidad.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Facilidad para realizar modificaciones, correcciones o mejoras en el <em>software</em> después de su implementación.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") El sistema debe permitir actualizaciones del <em>software</em> sin afectar la operación del servicio.
              tr
                td(data-aos="fade-down") Accesibilidad.
                td(data-aos="fade-down") Permite que el sistema pueda ser utilizado por personas con diferentes capacidades o limitaciones.
                td(data-aos="fade-down") La interfaz debe cumplir con estándares de accesibilidad para personas con discapacidad visual.
    p.mb-0(data-aos="fade-down") La identificación adecuada de los requisitos no funcionales permite garantizar que el sistema no solo cumpla con las funciones solicitadas, sino que también ofrezca un nivel adecuado de calidad, seguridad y eficiencia. Estos requisitos influyen directamente en las decisiones de diseño, arquitectura y tecnología utilizadas durante el desarrollo del <em>software</em>.
    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Requisitos de restricción
    .row.BG02.justify-content-center.align-items-center.px-3.mb-4(data-aos="flip-up")
      .col-lg-8.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
        p.mb-4(data-aos="fade-down") Los requisitos de restricción establecen limitaciones o condiciones que deben cumplirse durante el desarrollo o funcionamiento del sistema de <em>software</em>. Estas restricciones pueden estar relacionadas con aspectos técnicos, normativos, organizacionales o de recursos, y determinan el marco dentro del cual debe diseñarse e implementarse el sistema.
        .row.mb-3
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema3/img06.svg', alt='Imagen decorativa')
          .col-lg-10.col-12
            .cajon.cajon.C04.p-4.mb-2
              p.mb-0 A diferencia de los requisitos funcionales y no funcionales, que describen lo que el sistema debe hacer y cómo debe comportarse, los requisitos de restricción definen condiciones externas o internas que limitan las decisiones de diseño, las tecnologías a utilizar o las formas de implementación del sistema.
        p.mb-4(data-aos="fade-down") Este tipo de requisitos es importante porque permite asegurar que el <em>software</em> se desarrolle respetando normas legales, políticas organizacionales, estándares tecnológicos o limitaciones de infraestructura. Su adecuada identificación evita problemas futuros relacionados con el incumplimiento de regulaciones, incompatibilidades tecnológicas o dificultades de integración con otros sistemas.
        p.mb-0(data-aos="fade-down") Las restricciones pueden presentarse en diferentes ámbitos, como se describe a continuación.
      .col-lg-3.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img05.svg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7.
          span Tipos de requisitos de restricción
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Tipo de restricción
                th(data-aos="fade-down")(style= "width: 35%") Descripción
                th(data-aos="fade-down")(style= "width: 35%") Ejemplo
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Tecnológica.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Limita las tecnologías, plataformas o herramientas que pueden utilizarse en el desarrollo del sistema.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") El sistema debe desarrollarse utilizando tecnología de código abierto y ejecutarse en servidores Linux.
              tr
                td(data-aos="fade-down") Legal o normativa.
                td(data-aos="fade-down") Establece el cumplimiento de leyes, reglamentos o normas vigentes relacionadas con el manejo de información o el funcionamiento del sistema.
                td(data-aos="fade-down") El sistema debe cumplir con la Ley 1581 de 2012 sobre protección de datos personales en Colombia.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Organizacional.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Define políticas internas de la organización que deben respetarse durante el desarrollo o implementación del sistema.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") El sistema debe integrarse con los sistemas corporativos existentes de la organización.
              tr
                td(data-aos="fade-down") Operativa.
                td(data-aos="fade-down") Determina condiciones relacionadas con la infraestructura o el entorno donde operará el sistema.
                td(data-aos="fade-down") El sistema debe funcionar en entornos con conectividad limitada a Internet.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Económica.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Impone límites relacionados con el presupuesto disponible para el desarrollo o mantenimiento del sistema.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") El sistema debe desarrollarse utilizando herramientas que no requieran licencias comerciales adicionales.
    p.mb-0(data-aos="fade-down") La definición clara de los requisitos de restricción permite orientar el proceso de desarrollo dentro de un marco de condiciones previamente establecidas. Estas restricciones influyen en la planificación del proyecto, en la selección de tecnologías y en las decisiones de diseño, garantizando que el sistema desarrollado sea viable desde el punto de vista técnico, organizacional y legal.
</template>

<script>
export default {
  name: 'Tema3',
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
