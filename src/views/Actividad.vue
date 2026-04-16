<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<br><b> Objetivo:</b> evaluar la comprensión de los conceptos fundamentales relacionados con el ciclo de vida del <em>software</em>, la ingeniería de requisitos, las técnicas de elicitación, los roles involucrados en el desarrollo de <em>software</em> y las herramientas utilizadas para la captura y modelado de requisitos.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: 'El ciclo de vida del <em>software</em> se define como:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un lenguaje de programación utilizado para desarrollar aplicaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un conjunto de etapas organizadas que guían el desarrollo de un sistema de <em>software</em> desde su concepción hasta su mantenimiento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Una herramienta para diseñar interfaces gráficas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un modelo de base de datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos clave sobre el ciclo de vida del <em>software</em> y la ingeniería de requisitos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de los siguientes corresponde a una fase común del ciclo de vida del <em>software</em>?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Comercialización.', esCorrecta: false },
            { id: 'b', texto: 'Publicidad.', esCorrecta: false },
            { id: 'c', texto: 'Pruebas.', esCorrecta: true },
            { id: 'd', texto: 'Marketing.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos clave sobre el ciclo de vida del <em>software</em> y la ingeniería de requisitos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'El objetivo principal de la fase de definición de requisitos es:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Identificar y documentar las necesidades y expectativas del sistema.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Diseñar la interfaz gráfica del sistema.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Programar todas las funcionalidades del sistema.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Instalar el <em>software</em> en los equipos de los usuarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos clave sobre el ciclo de vida del <em>software</em> y la ingeniería de requisitos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de los siguientes es un resultado típico de la fase de requisitos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Código fuente del sistema.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Documento de especificación de requisitos.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Manual de usuario final.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Campaña de lanzamiento del <em>software</em>.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos clave sobre el ciclo de vida del <em>software</em> y la ingeniería de requisitos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: 'Los requisitos funcionales describen:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cómo debe comportarse el sistema y qué funciones debe realizar.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El diseño visual del sistema.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El presupuesto del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La estructura organizacional de la empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos clave sobre el ciclo de vida del <em>software</em> y la ingeniería de requisitos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: 'Un requisito no funcional hace referencia a:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las funciones principales del sistema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El código de programación utilizado dentro de una empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Las herramientas de hardware.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Características de calidad como seguridad, rendimiento o usabilidad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos clave sobre el ciclo de vida del <em>software</em> y la ingeniería de requisitos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: 'Los requisitos de restricción establecen:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Actividades de mantenimiento del sistema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Límites o condiciones que deben cumplirse durante el desarrollo del <em>software</em>.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Estrategias de marketing del producto dentro de una organización.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Reglas de diseño gráfico.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos clave sobre el ciclo de vida del <em>software</em> y la ingeniería de requisitos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: 'La ingeniería de requisitos se encarga principalmente de:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar bases de datos para la ISO 9001.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Programar aplicaciones móviles.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Configurar servidores.', esCorrecta: false },
            {
              id: 'd',
              texto:
                'Gestionar, analizar y documentar los requisitos de un sistema.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos clave sobre el ciclo de vida del <em>software</em> y la ingeniería de requisitos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: 'Una de las fases de la ingeniería de requisitos es:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Comercialización.', esCorrecta: false },
            { id: 'b', texto: 'Validación de requisitos.', esCorrecta: true },
            { id: 'c', texto: 'Publicidad.', esCorrecta: false },
            { id: 'd', texto: 'Ventas.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos clave sobre el ciclo de vida del <em>software</em> y la ingeniería de requisitos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: 'La elicitación de requisitos consiste en:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El proceso de programación del sistema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La recopilación de información sobre las necesidades del sistema.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El diseño de la base de datos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La instalación del <em>software</em>.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos clave sobre el ciclo de vida del <em>software</em> y la ingeniería de requisitos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: 'La planeación de la elicitación permite:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Determinar cómo se obtendrá la información de los interesados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Diseñar el logotipo del sistema.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Programar el sistema completo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Instalar servidores dentro de la empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos clave sobre el ciclo de vida del <em>software</em> y la ingeniería de requisitos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Cuál de las siguientes es una fuente primaria de información para obtener requisitos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Manual técnico existente.', esCorrecta: false },
            { id: 'b', texto: 'Normas institucionales.', esCorrecta: false },
            { id: 'c', texto: 'Entrevista con usuarios.', esCorrecta: true },
            { id: 'd', texto: 'Documentos archivados.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos clave sobre el ciclo de vida del <em>software</em> y la ingeniería de requisitos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Cuál de las siguientes corresponde a una técnica de elicitación de requisitos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Programación orientada a objetos.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Compilación de código.', esCorrecta: false },
            { id: 'c', texto: 'Renderización.', esCorrecta: false },
            { id: 'd', texto: 'Entrevista.', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos clave sobre el ciclo de vida del <em>software</em> y la ingeniería de requisitos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: 'El cuestionario y la lista de chequeo son ejemplos de:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Instrumentos de recolección de información.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Lenguajes de programación.', esCorrecta: false },
            { id: 'c', texto: 'Sistemas operativos.', esCorrecta: false },
            { id: 'd', texto: 'Modelos de negocio.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos clave sobre el ciclo de vida del <em>software</em> y la ingeniería de requisitos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: 'En ingeniería de requisitos, los usuarios son:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Personas que financian el proyecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Personas que interactúan directamente con el sistema.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Personas que diseñan el hardware.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Personas encargadas del marketing.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos clave sobre el ciclo de vida del <em>software</em> y la ingeniería de requisitos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: 'Los <em>stakeholders</em> corresponden a:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente los programadores del sistema.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Solo los usuarios finales.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Los diseñadores gráficos del sistema.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Todas las personas o grupos interesados o afectados por el sistema.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos clave sobre el ciclo de vida del <em>software</em> y la ingeniería de requisitos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'El dueño del producto (<em>product owner</em>) se caracteriza por:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Diseñar bases de datos.', esCorrecta: false },
            {
              id: 'b',
              texto:
                'Representar los intereses del cliente y priorizar los requisitos del sistema.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Realizar mantenimiento del hardware.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diseñar redes de comunicación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos clave sobre el ciclo de vida del <em>software</em> y la ingeniería de requisitos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: 'Las herramientas de modelado permiten:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Representar gráficamente la estructura y comportamiento del sistema.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ejecutar código automáticamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Instalar aplicaciones en los servidores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diseñar campañas publicitarias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos clave sobre el ciclo de vida del <em>software</em> y la ingeniería de requisitos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: 'Los diagramas de casos de uso se utilizan para:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Representar la estructura de las bases de datos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Diseñar interfaces gráficas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mostrar la interacción entre los usuarios y el sistema.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Crear código fuente.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos clave sobre el ciclo de vida del <em>software</em> y la ingeniería de requisitos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto: 'Las historias de usuario se caracterizan por:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Describir funcionalidades desde la perspectiva del usuario.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Definir estructuras de bases de datos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Representar redes de computadoras.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mostrar el diseño del hardware.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos clave sobre el ciclo de vida del <em>software</em> y la ingeniería de requisitos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Mensaje cuando supera el 70 % de respuestas correctas	Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'Mensaje cuando el porcentaje de respuestas correctas es inferior al 70 %	No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
