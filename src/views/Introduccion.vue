<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/intro/img01.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.px-4.py-3.mb-4
          p.mb-0(data-aos="fade-down") El desarrollo de soluciones tecnológicas exige comprender cómo se estructura y gestiona un proyecto de <em>software</em> desde sus etapas iniciales. En este contexto, el ciclo de vida del <em>software</em> y la ingeniería de requisitos permiten identificar las necesidades de los usuarios y transformarlas en especificaciones claras que orientan el desarrollo de sistemas.
        p.mb-4(data-aos="fade-down") Este componente presenta los fundamentos del ciclo de vida del <em>software</em>, la importancia de la definición de requisitos y los roles que intervienen en este proceso. Asimismo, aborda las técnicas, fuentes de información y herramientas utilizadas para la elicitación, análisis y documentación de requisitos.
        p.mb-0(data-aos="fade-down") A través de estos contenidos, se ofrece una visión general de cómo se identifican, organizan y representan los requisitos en proyectos de <em>software</em>, permitiendo comprender su papel dentro del proceso de desarrollo y la manera en que contribuyen a la construcción de soluciones tecnológicas pertinentes y funcionales.
    p.mb-4(data-aos="fade-down") Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
    .row.justify-content-center.align-items-center           
      .col.col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/cXMmrEWCm5c?si=NtxYvHe-uP2YGjzr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
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
