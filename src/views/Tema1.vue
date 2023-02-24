<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Herramientas de despliegue

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        p Comencemos hablando de las herramientas de despliegue, las cuales permiten realizar uno de los procesos que tienen mayor importancia en el desarrollo de aplicaciones informáticas, realizar un seguimiento y mantenimiento del código fuente del aplicativo. Adicional a ello, permiten la integración de módulos del sistema como también la puesta en marcha de los aplicativos de #[i software] desarrollados bajo la premisa de cobros, pero siempre conservando un mejor nivel adquisitivo para el usuario o cliente final del aplicativo.
        .cajon.color-acento-botones.p-4.mt-4
          .row.justify-content-center.align-items-center
            .col-lg-4
              img(src='@/assets/curso/temas/tema1/tema1-img-01.svg', alt='Texto que describa la imagen').tam-movil-img
            .col-lg-8
              p.mb-3 Antes de continuar, respondamos la siguiente pregunta: ¿qué es el proceso de integración continua?
              p Es una práctica habitual en el desarrollo de software que consiste en integrar, frecuentemente, mejoras en el código de un proyecto, una vez estas hayan sido validadas; acción que se lleva a cabo, normalmente, varias veces al día, con el objetivo de detectar errores lo antes posible.

          p Cada cambio que realiza un desarrollador (sea una resolución de un bug, la creación de una nueva funcionalidad, etc.), se comprueba compilando el código fuente y obteniendo un ejecutable (llamado build). Si es validado, será incorporado al código fuente y desplegado.
      .col-lg-5
        img(src='@/assets/curso/temas/tema1/tema1-img-02.svg', alt='Texto que describa la imagen')(data-aos="fade-left")

    p Teniendo claro el concepto anterior, conozcamos algunas herramientas de despliegue:

    .clr-background-1.mt-3.mb-4
      .row.justify-content-center.align-items-center.margin-puntos
        .col-lg-11
          .puntos-calientes-t1
            ImagenInfografica.color-primario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/temas/tema1/tema1-img-04.png', alt='Texto que describa la imagen')

              .tarjeta.color-acento-contenido.p-3(x="7.5%" y="68%" numero="+")
                p Es una herramienta para realizar los procesos de integración continua, en proyectos de desarrollo de <i>software;</i> adicional a esto, permite realizar pruebas para garantizar el correcto funcionamiento del aplicativo. Funciona como un servidor centralizado que provee los servicios de alojamiento de código fuente y permite que varios usuarios puedan trabajar en él, de manera simultánea, garantizando que pueda ser utilizado por equipos de desarrollo, en todo el mundo. Con Jenkins, las organizaciones aceleran el proceso de desarrollo y entrega de <i>software</i> a través de la automatización. Mediante sus centenares de <i>plugins</i>, se puede implementar en diferentes etapas del ciclo de vida del desarrollo, como la compilación, la documentación, el testeo o el despliegue.

              .tarjeta.color-acento-contenido.p-3(x="27.2%" y="68%" numero="+")
                p Es un sistema de integración continua, gratuita para proyectos <i>Open Source</i> y de pago, para proyectos privados. Se integra sin problemas con <i>GitHub</i> y automáticamente ejecuta el pipeline definido en cada <i>push</i> o <i>pull requests</i>, el cual permite el testeo de aplicaciones codificadas en Ruby, Node, Objective-C, Go, Java, C# y F# entre otros lenguajes de programación. Una de las particularidades que posee es que puede ser conectado o integrado a los repositorios de código que se encuentren alojados en <i>GitHub</i>, dándole un control abierto al equipo de desarrollo para gestionar las operaciones realizadas en el código elaborado, aunque esto no se pueda ver interesante desde un principio; si lo observamos a fondo, genera, de alguna manera, competitividad en los equipos de desarrollo.
                p Cuenta con aproximadamente 300.000 proyectos y 235.000 usuarios probando los mismos. Estos números hablan sobre la importancia de la herramienta y lo robusta que es. Agregado a esto, algunas de las compañías más importantes que utilizan Travis son: Facebook, Heroku, Mozilla, Rails, Twitter, Zendesk, Slack.
                p En la página oficial se puede encontrar documentación paso a paso con variados lenguajes. Además, Travis-CI cuenta con una comunidad activa muy grande y, por ende, encontrar soluciones a problemáticas es bastante común.

              .tarjeta.color-acento-contenido.p-3(x="48%" y="68%" numero="+")
                p Es una herramienta que se utiliza para el despliegue de sistemas de información de diferentes tipos; está soportada por la empresa Amazon, la cual ofrece los servicios de bases de datos relacionales y no relacionales, subir servicios para páginas web y dar soporte a las mismas, creación de máquinas virtuales, manejo de inteligencia artificial, entre otros servicios. Esta plataforma ha tomado bastante fuerza en los últimos años, debido a sus precios competitivos que se ajustan, de acuerdo con la necesidad del cliente o empresa que requiere de estos servicios. Otro de los aspectos que se debe tener en cuenta es que esta empresa cuenta con diferentes certificaciones en el ámbito de seguridad de la información y soporte técnico, lo cual es una ventaja, porque si lo vemos desde el punto de vista de infraestructura, las empresas, anteriormente, tenían que mantener los costos de una infraestructura compleja 24/7 y contratar personal altamente calificado para mantenerla; en términos de costos, esto es bastante enorme, sin hablar de las certificaciones de operación. El servicio de Amazon entra dentro de la tendencia<i> cloud computing</i>, la cual tiene como objetivo ofrecer esa misma infraestructura, pero por fuera de la empresa y, para que esta pueda acceder a la misma, lo que requiere es una buena conectividad; en términos de mantenimiento, es una ventaja competitiva y ni decir del soporte, porque al momento en que se contrata este tipo de servicios, se incluye el soporte técnico, el cual es de primera calidad.

              .tarjeta.color-acento-contenido.p-3(x="67.2%" y="68%" numero="+")
                p.mb-3 Es un producto de Microsoft que proporciona funciones de control de versiones, informes, gestión de requisitos, gestión de proyectos, compilaciones automatizadas, pruebas y gestión de versiones. Cubre todo el ciclo de vida de la aplicación y habilita las capacidades de DevOps; una de las características fundamentales de este servicio es el control de versionamiento, el cual permite realizar un seguimiento bastante detallado de cada movimiento que se realiza dentro del proyecto. Regularmente, cuando se realiza seguimiento al proyecto, se utilizan diferentes herramientas para lograr un control de manera completa, en este caso, esta herramienta integra lo mejor de todas esas herramientas en un solo sitio, lo cual permite que se puedan realizar diferentes tareas y facilitar el proceso de control del proyecto en cualquier momento.
                p.mb-3 Los partidarios de DevOps describen varias ventajas técnicas y empresariales con las que, en última instancia, se consiguen clientes más satisfechos. Entre algunas de las ventajas de DevOps se incluyen las siguientes (NetApp, s.f.):
                ul.color-i
                  li
                    i.fas.fa-play
                    |         Una mejor y más rápida entrega de productos.
                  li
                    i.fas.fa-play
                    |         Resolución de problemas en menos tiempo y con menor complejidad.
                  li
                    i.fas.fa-play
                    |         Mejor escalabilidad y disponibilidad.
                  li
                    i.fas.fa-play
                    |         Entornos de funcionamiento más estables.
                  li
                    i.fas.fa-play
                    |         Mejor utilización de los recursos.
                  li
                    i.fas.fa-play
                    |         Mayor automatización.
                  li
                    i.fas.fa-play
                    |         Mayor visibilidad de resultados del sistema.
                  li
                    i.fas.fa-play.fa-xs
                    |         Mayor innovación.  


              .tarjeta.color-acento-contenido.p-3(x="89%" y="68%" numero="+")
                p.mb-3 Es una plataforma que se aloja en la web y tiene como propósito brindar servicios <i>GIT</i> y <i>DEVOPS</i>, para que desarrolladores e integradores de código puedan realizar pruebas y despliegue de código fuente, a nivel general. Esta plataforma también tiene la posibilidad de realizar control de código, lo cual es una ventaja bastante significativa, debido a que integra lo mejor de las herramientas de integración y, permite que, en una misma suite, se tenga la posibilidad de realizar todas estas operaciones en un mismo lugar.
                p.mb-3 Gitlab es un #[i software] que va mejorando y creciendo con diversas funcionalidades interesantes, que son listadas a continuación (Turingears, s.f.):
              
                ul.color-i
                  li
                    i.fas.fa-play
                    |         Permite autentificar servicios como LDAP.
                  li
                    i.fas.fa-play
                    |         Tiene distintos tipos de acceso y permisos (uso de roles y grupos) y restringiendo a ciertos usuarios.
                  li
                    i.fas.fa-play
                    |         Los usuarios pueden acceder al proyecto a través de la web y por SSH.
                  li
                    i.fas.fa-play
                    |         Seguimiento de incidencias y comentarios de un proyecto.

                  li
                    i.fas.fa-play
                    |         Capacidad para importar repositorios existentes, ya sea GitHub o algunos otros.
                  li
                    i.fas.fa-play
                    |         Interfaz web para interaccionar con GitLab permitiéndonos trabajar de una manera intuitiva.
                  li
                    i.fas.fa-play
                    |         Historial de modificaciones del proyecto.

    .bloque-texto-g.color-blanca.tam-tarjeta-color.p-3.p-sm-1.p-md-5    
      .bloque-texto-g__img.bloque-texto-img1-1(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-img-05.svg')})`}"
      )
      .bloque-texto-g__texto.bloque-texto-tema1-1.p-3
        p.mb-0 Continuemos hablando un poco más sobre GitLab. La ventaja principal es que facilita notablemente el desarrollo de software ágil entre varios equipos. De esta manera, varios desarrolladores pueden trabajar simultáneamente en un proyecto y editar, por ejemplo, diferentes funciones de forma paralela. La protocolización continua de todos los procesos, garantiza que no se pierda ninguna modificación del código, ni que se sobreescriba de forma no intencionada. También es posible deshacer rápidamente los cambios ya aplicados, en esta nueva tendencia del agilismo, donde las metodologías de desarrollo ágil como Scum, Kanban y XP, permiten la integración del usuario en los procesos de desarrollo del producto de software. Así se garantiza que el proceso de integración se realice de manera mucho más detallada y con el cliente, teniendo en cuenta que es el protagonista en el proceso de construcción del producto.<br/>
      .bloque-texto-g__texto.bloque-texto-tema1-2
        p.mb-1 Entre las funciones más importantes de GitLab se encuentran las siguientes:<br/> 
        ul.color-i
          li
            i.fas.fa-play
              p.mb-0                   Interfaz fácil de usar.<br/>        
          li
            i.fas.fa-play
              p.mb-0                   Las ramificaciones pueden permanecer privadas o publicarse.<br/> 
          li
            i.fas.fa-play
              p.mb-0                   Posibilidad de gestionar varios repositorios.<br/> 
          li
            i.fas.fa-play
            p.mb-0                     Revisión de códigos.<br/>  
          li
            i.fas.fa-play
            p.mb-0                     Localización integrada de errores y problemas.<br/> 
          li
            i.fas.fa-play
            p.mb-0                     Integración continua y entrega continua integradas de forma gratuita.<br/> 
          li
            i.fas.fa-play
            p.mb-0                     Wikis de proyectos.<br/>  
          li
            i.fas.fa-play
            p.mb-0                     Creación sencilla de fragmentos de código para dividir partes del código.                                                                                             

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-11
        p GitLab está basado en un código fuente abierto y de acceso libre. En el año 2013 se creó una versión Enterprise propia para empresas, por lo que ahora hay dos modelos de uso:               

    .row.justify-content-center.align-items-center.mt-4
      .col-lg-9
        .row.justify-content-center.align-items-center
          .col-sm-6.col-lg-4.mb-4.mb-lg-0
            .tarjeta--boton.color-secundario1.p-4
              .row.justify-content-center.mb-3
                .col-7
                  img(src='@/assets/curso/temas/tema1/tema1-img-06.png', alt='Texto que describa la imagen').posicion-avatar
              p.text-small.text-center.posicion-txt-tar <b> GitLab CE: <i>Community-Edition</i> (gratuita).</b>

          .col-sm-6.col-lg-4.mb-4.mb-lg-0.margin-top-tar
            .tarjeta--boton.color-secundario1.p-4
              .row.justify-content-center.mb-3
                .col-7
                  img(src='@/assets/curso/temas/tema1/tema1-img-07.png', alt='Texto que describa la imagen').posicion-avatar   
              p.text-small.text-center.posicion-txt-tar <b> GitLab EE: <i>Enterprise-Edition</i> (de pago).</b>

    .row.justify-content-center.align-items-center.mt-4
      .col-lg-11
        p Ambas versiones están basadas en la licencia de código abierto MIT. La <i>Enterprise-Edition</i> cuenta con algunas funciones adicionales en comparación con la <i>Community</i>. En este contexto, <i>GitLab</i> ofrece tres modelos de suscripción en función del alcance de las funciones adicionales deseadas.


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
