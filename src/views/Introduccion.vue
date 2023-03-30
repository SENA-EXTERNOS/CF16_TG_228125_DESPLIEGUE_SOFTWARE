<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.aling-items-center.mb-5
      .col-lg-7
        p Apreciado aprendiz, bienvenido a este componente formativo, donde se abordarán generalidades y aspectos claves del trabajo con diferentes herramientas de despliegue, para la implementación de sistemas de la información. Es importante tener en cuenta que el proceso de implementación y despliegue de un <i>software</i> es una de las tareas que demanda un grado de coordinación y comunicación eficiente, porque de esto dependerá el correcto funcionamiento del aplicativo, para el usuario final. 
        p Es importante saber cómo realizar una adecuada configuración de los ambientes de producción de las herramientas porque, en muchas ocasiones, el ambiente de desarrollo y pruebas es controlado, pero cuando se llega a la puesta en marcha del sistema en el ambiente real, suceden inconvenientes, los cuales se deben solucionar, teniendo en cuenta el marco de trabajo y las necesidades funcionales del usuario o cliente. Identificar las particularidades de su rol y las responsabilidades que implica, en el proceso de implementación de las herramientas.
        p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
      
      .col-lg-5
        img(src='@/assets/curso/intro/intro-img-01.svg', alt='Texto que describa la imagen')

    .row
      figure.mb-5.mt-3
        .video
         iframe(width="560" height="315" src="https://www.youtube.com/embed/iAA5LmFtlYc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
