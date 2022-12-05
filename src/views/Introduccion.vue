<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.aling-items-center
      .col-lg-7
        p.mb-3 Apreciado aprendiz, bienvenido a este componente formativo que está orientado al trabajo con las diferentes herramientas de despliegue para la implementación de sistemas de información. Es importante tener en cuenta que el proceso de implementación y despliegue de un software es una de las tareas que demanda un grado de coordinación y comunicación eficiente, porque de esto dependerá el correcto funcionamiento del aplicativo para el usuario final. Otro aspecto importante es realizar una adecuada configuración de los ambientes de producción de la herramienta, porque en muchas ocasiones el ambiente de desarrollo y pruebas es controlado, pero cuando se llega a la puesta en marcha del sistema en el ambiente real, suceden inconvenientes, los cuales se deben solucionar teniendo en cuenta el marco de trabajo y las necesidades funcionales del usuario o cliente. Por este motivo trabajaremos los diferentes roles y sus responsabilidades en el proceso de implementación de la herramienta, un trabajo conjunto entre los diferentes autores para realizar el tipo de despliegue correcto para que la herramienta tenga su mayor eficiencia.
        p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.        
      .col-lg-5
        img(src='@/assets/curso/intro/intro-img-01.svg', alt='Texto que describa la imagen')

    .row
      figure.mb-5.mt-3
        .video
         iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
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
