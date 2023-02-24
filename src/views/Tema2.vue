<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Ambientes de producción o desarrollo

    .row.justify-content-center.align-items-center
      .col-lg-7
        .crd.clr-paleBlue.p-4.mb-4
          p.mb-0 Ahora, en el desarrollo de los productos de #[i software] intervienen diversas etapas, una de ellas es la codificación de los requerimientos funcionales y no funcionales, conocida como desarrollo; posteriormente es la revisión del cumplimiento de dichos requerimientos en el #[i software] y la usabilidad que muestra para los usuarios, que se conoce como aseguramiento de la calidad o pruebas. Por último, es puesto en operación para brindar un servicio a los usuarios que lo utilizarán.
        p El ambiente de desarrollo se usa para integrar el código de los diferentes componentes del equipo de programación, así como los elementos que forman el sistema de información o aplicación, como son: lenguajes, librerías, #[i frameworks], base de datos, entre otros. De igual manera, se puede hacer uso de herramientas que apoyen al entorno de desarrollo, como por ejemplo, el Subversion o el GitLab, que ayudan a gestionar el código fuente, para el control de versiones y su reutilización.
      .col-lg-5
        img(src='@/assets/curso/temas/tema2/tema2-img-01.svg', alt='Texto que describa la imagen')(data-aos="fade-left")

    p.mt-4 Conozcamos los diferentes tipos de entorno:
    
    .puntos-calientes-t2.mt-4
      ImagenInfografica.color-primario
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema2/tema2-img-02.png', alt='Texto que describa la imagen')

        .tarjeta.color-acento-contenido.p-3(x="17.5%" y="29%" numero="1")
          p.mb-3 El entorno de desarrollo propiamente dicho se refiere a la creación del #[i software]. Puede ser manejado a nivel local en el ordenador del programador o en un servidor local. Así mismo, puede ser procesado en herramientas desarrolladas para este tipo de tareas.
          p Es habitual que trabaje un equipo en el desarrollo de un proyecto, lo que hace que se realicen tareas de forma individual. El entorno de integración facilita la unión de los diferentes desarrollos y permite comprobar que los diferentes trabajos no interfieran entre sí.

        .tarjeta.color-acento-contenido.p-3(x="78.2%" y="29%" numero="2")
          p.mb-3 Este tipo de entorno usualmente está ubicado en la nube. La ventaja de contar con un servidor de pruebas, es que permite a otros miembros del equipo y clientes a interactuar con el #[i software] para realizar #[i tests] de funcionalidades del sistema.
          p También se pueden realizar #[i testing] automatizados, su principal objetivo es detectar el mayor número de fallos posible, al no necesitar una persona que realice un testeo manual, permite ahorrar tiempo. Además, la ejecución de pruebas automatizadas permite ejecutar tests durante las 24 horas del día los 7 días de la semana.          

        .tarjeta.color-acento-contenido.p-3(x="17.5%" y="78.5%" numero="3")
          p También llamado entorno de #[i staging], permite trabajar en un entorno con una configuración exactamente igual a la que existe en el entorno de producción. La finalidad de usar este tipo de servidor es simular el entorno de producción, para validar su usabilidad en un entorno real. Del mismo modo, permite poder realizar pruebas de actualizaciones y minimizar las causas que puedan generar caídas del sistema.
        
        .tarjeta.color-acento-contenido.p-3(x="78.2%" y="79%" numero="4")
          p Es el entorno donde, finalmente, se ejecuta el <i>software</i>, el cual es utilizado por el usuario. Este servidor, a diferencia del servidor de pre-producción, debe tener una mayor infraestructura y gran capacidad de manejo de tráfico o de conexiones recurrentes.
          p Si el entorno de producción está bien configurado y se han realizado pruebas automatizadas, por parte del usuario, no debería existir ninguna incidencia en la ejecución del <i>software</i> final.

    p.mt-4 Podemos concluir, entonces, que los entornos de producción son ambientes que poseen una tecnología que permite realizar el despliegue de un aplicativo de <i>software</i> de una manera masiva para ser utilizado por varios usuarios al tiempo; es donde se incluyen los datos de operación y empieza a ser alimentado con datos reales y en condiciones reales de operación. Esto es algo que se debe realizar mediante la transición del entorno de desarrollo, hasta llegar al entorno de producción, donde el <i>software</i> será usado masivamente.
    p.mt-3 A continuación, se presentan unos esquemas de esta transición.

    .acordionA-01
      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
        .row(titulo="Entorno de desarrollo")
          p.mb-2 El entorno de desarrollo utiliza áreas de proyecto en el almacén de objetos de diseño para aislar los efectos del restablecimiento del entorno de pruebas. Cada área de proyecto tiene su propio almacén de objetos de destino y su propia región de #[i Content Platform Engine].
          img(src='@/assets/curso/temas/tema2/tema2-img-03.png', alt='Texto que describa la imagen')

        .row(titulo="Entorno de prueba")
          p.mb-2 Es para probar las soluciones que se han creado en el entorno de desarrollo. Puede tener varios entornos de pruebas, por ejemplo, un entorno de pruebas de rendimiento y un entorno de pruebas de preproducción.
          img(src='@/assets/curso/temas/tema2/tema2-img-04.png', alt='Texto que describa la imagen')

        .row(titulo="Entorno de producción")
          p.mb-2 El entorno de producción está en un dominio de FileNet P8 diferente. En el entorno de producción necesita un único almacén de objetos de transferencia a donde se importan y desde donde se despliegan las soluciones. También necesita entornos de destino donde desplegar las soluciones. Puede desplegar muchas soluciones en un único entorno de destino. Asegúrese de tener suficientes recursos de sistema para el número de casos que prevé tener en cada base de datos.
          img(src='@/assets/curso/temas/tema2/tema2-img-05.png', alt='Texto que describa la imagen')           

    p.mt-4 Pudimos observar los diferentes procesos que debe sufrir un aplicativo desarrollado antes de llevar a producción, donde el usuario final tendrá la oportunidad de probar el sistema y se empieza su prueba real; este proceso de transición no es fácil, por ello se deben seguir todos los pasos y procedimientos necesarios para llevar a cabo de manera eficiente todo lo que se requiera.
    p.mt-3 Para conocer cuáles son las técnicas utilizadas para los procesos de producción, le invitamos a ver el siguiente video.

    .row
      figure.mb-5.mt-3
        .video
         iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-7
        p.mb-2 Lo mencionado anteriormente está muy conectado con permisos de manipulación de la estructura de la base de datos, lo cual solo debe permitirse al administrador de la base de datos y por ningún motivo debe el usuario final modificar, a menos que se requiera bajo algún procedimiento a realizar.
        p.mb-4 Hablemos ahora sobre los reportes, los cuales son estructuras que se encuentran estrechamente relacionadas con la información almacenada en la base de datos del aplicativo; en otras palabras, son consultas que se realizan para obtener datos almacenados en un sistema de información con una configuración y estructura específicas; esto se realiza con el propósito de obtener información ordenada y que pueda servir para la toma de decisión en una organización. Los reportes, a menudo mezclan diferentes aspectos de la información de una organización, es decir, un reporte puede incluir información general, financiera, presupuestal y de recursos humanos al tiempo, para tener una comprensión y datos organizados con un sentido propio.
        p Un ejemplo de ello es cuando una organización desea conocer las facturas que se han emitido en un periodo específico, cada una de estas facturas trae:
      .col-lg-5
        img(src='@/assets/curso/temas/tema2/tema2-img-06.svg', alt='Texto que describa la imagen')(data-aos="flip-left")

    .crd.clr-paleBlue-1.mt-5
      .row.justify-content-center.align-items-center.posicion-slyder
        .col-lg-10
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-4        
              .tarjeta-avatar
                img(src='@/assets/curso/temas/tema2/tema2-img-07.svg' alt='AvatarTop')
                .tarjeta.color-secundario.p-4
                  p.text-center.mt-3 Información del cliente a quien se le realizó dicha factura.
            .col-lg-4  
              .tarjeta-avatar
                img(src='@/assets/curso/temas/tema2/tema2-img-08.svg' alt='AvatarTop')
                .tarjeta.color-secundario.p-4          
                  p.text-center.mt-3 Información de los productos que se encuentran incluidos en dichas facturas.
            .col-lg-4  
              .tarjeta-avatar
                img(src='@/assets/curso/temas/tema2/tema2-img-09.svg' alt='AvatarTop')
                .tarjeta.color-secundario.p-4
                  p.text-center.mt-3 Información de precios, cálculo de subtotales, impuestos y el total de la factura.

    p.mt-4 A esto es a lo que se le llama reporte: la agrupación de diferente tipo de información ubicada en un mismo espacio para interpretarla de una manera más sencilla.
    p.mt-4 Además, en ciertas ocasiones no se limitan a informar sobre una determinada cuestión, sino que también establecen objetivos, elementos persuasivos (como sugerencias o consejos) o incluso la conclusión de una determinada investigación.
    p.mt-3 Es importante tener en cuenta que está información que se despliega en los mismos puede ser de tipo:

    .row.justify-content-center.mt-5.mb-5
      .col-lg-11
        .row.justify-content-center
          .col-lg-6.position-relative
            .crd.crd--avatarHorizontal.crd--color.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img(src="@/assets/curso/temas/tema2/tema2-img-10.svg", alt="alt")
                .col-lg-6.posicion-texto-1
                  h5 Digital
                  p Puede provenir de una base de datos, donde por medio de consultas, se obtiene esta información para mostrarla al usuario.
          .col-lg-6.position-relative                  
            .crd.crd--avatarHorizontal.crd--color.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img(src="@/assets/curso/temas/tema2/tema2-img-11.svg", alt="alt")
                .col-lg-6.posicion-texto-2
                  h5 Impresa
                  p Existe también la posibilidad de imprimir para tener un soporte físico de estos datos.

    .bloque-texto-g.color-primario.p-3.p-sm-1.p-md-5.mb-2 
      .bloque-texto-g__img.bloque-img-2(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-img-12.svg')})`}"
      )
      .bloque-texto-g__texto.p-3
        p.mb-0 Las consultas son sentencias que se ejecutan en un servidor de bases de datos y que generan la información requerida por parte del usuario que la solicite; están conectadas con el lenguaje SQL que significa lenguaje de consulta estructurado, el cual utiliza sentencias y comandos para recuperar la información almacenada, teniendo en cuenta restricciones de datos y condiciones que se deben cumplir para entregarle al usuario final la información solicitada. En el caso de estar trabajando en un entorno de desarrollo la información vendrá del servidor de bases de datos que se esté ejecutando en la base de datos alojada de manera local en la máquina del programador, el cual tendrá acceso a los datos y resultados de manera única, pero en caso de tener desplegado el servidor alojado en una infraestructura de despliegue en la web, está información podrá ser consultada por millones de usuarios al tiempo.

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-7
        p.mb-4 Por ejemplo, supongamos que tiene una tabla denominada Productos y otra tabla denominada Servicios. Ambas tablas tienen campos que contienen el nombre del producto o servicio, el precio, la disponibilidad de garantía del servicio o de garantía del producto, y si el producto o servicio se ofrece de forma exclusiva. Aunque en la tabla Productos se almacena información de garantía del producto y en la tabla Servicios se almacena información de garantía del servicio, la información básica es la misma (si un producto o servicio determinado incluye una garantía de calidad). Puede usar una consulta de unión, como la que se muestra a continuación, para combinar los cuatro campos de las dos tablas:
        ul.color-i.mb-4
          li
            i.fas.fa-play
            | SELECT <i>name, price, warranty_available, exclusive_offer</i> <br/>
            i.fas.fa-play
            | FROM <i>Products</i> <br/> 
            i.fas.fa-play
            | UNION ALL <br/> 
            i.fas.fa-play
            | SELECT <i>name, price, guarantee_available, exclusive_offer</i> <br/> 
            i.fas.fa-play
            | FROM <i>Services</i>  <br/> 

        p Como podemos observar, las consultas nos permiten recuperar la información que se encuentra dentro de la base de datos y luego poder realizar los procedimientos requeridos por la organización.

      .col-lg-5
        img(src='@/assets/curso/temas/tema2/tema2-img-13.svg', alt='Texto que describa la imagen')(data-aos="flip-left")


</template>

<script>
export default {
  name: 'Tema2',
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
