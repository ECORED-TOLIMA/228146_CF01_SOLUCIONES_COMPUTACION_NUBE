<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo aborda los fundamentos del ciclo de vida del <em>software</em> y el papel de la ingeniería de requisitos en el desarrollo de sistemas informáticos. A lo largo del contenido se analizan las etapas que permiten planificar, analizar y construir soluciones tecnológicas, iniciando con la definición y gestión de requisitos, su importancia y los resultados que se obtienen durante esta fase. Asimismo, se presentan los diferentes tipos de requisitos, los roles que intervienen en el proceso y las fases de la ingeniería de requisitos. Finalmente, se exploran técnicas, fuentes de información y herramientas utilizadas para la captura, modelado y documentación de requisitos, tales como diagramas de casos de uso, historias de usuario y <em>storyboard</em>, que facilitan la comprensión de las necesidades del sistema y su adecuada implementación en contextos reales de desarrollo de <em>software</em>.
    .row.justify-content-center
      .col.col-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se presenta un esquema de los principales contenidos del componente formativo, describiendo los fundamentos del ciclo de vida del <em>software</em>, la definición y tipos de requisitos, así como los procesos de ingeniería y elicitación de requisitos. También se incluyen los roles que participan en el proceso y las principales herramientas utilizadas para el modelado y la captura de requisitos, como los diagramas de casos de uso, las historias de usuario y el <em>storyboard</em>.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
