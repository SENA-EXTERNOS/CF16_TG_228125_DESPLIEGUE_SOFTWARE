<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Actividades, roles  y tipos de despliegue

    p.mt-4.mb-4 Las actividades que se realizan en el proceso de despliegue de un sistema de información requieren que cada miembro del equipo de trabajo ejecute los procesos de acuerdo a su rol dentro del proyecto y adicional a ello cumpla con el cronograma de despliegue el cual establece las actividades, responsable y tiempos que se deben cumplir al realizar dicho proceso.
    p.mb-4 A continuación, veremos algunos procesos que se llevan a cabo para cumplir con este propósito.

    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="Lanzamiento")
        .row.background-3.justify-content-center.align-items-center
          .col-lg-11
            .row.margin-top-tabs
              .col-md-6.mb-4.mb-md-0
                h4 Lanzamiento
                p El lanzamiento es un proceso que se lleva a cabo para colocar en funcionamiento el aplicativo en el sistema o infraestructura de despliegue; este proceso inicia desde que se colocan los archivos que se encuentran de manera local dentro de la máquina del programador, hasta las pruebas de iniciación del aplicativo dentro de la nueva infraestructura, todo este proceso lleva consigo diferentes pasos que se deben realizar, por eso es aconsejable tener cada componente a lanzar de manera organizada. Un ejemplo de ello es: se desea lanzar una aplicación para inventarios que ya se encuentra desarrollada, por una parte, tenemos los archivos de código fuente, por otro lado, tenemos el archivo de #[i script] de la base de datos con los datos iniciales para la puesta en marcha del sistema; y por otro lado tenemos archivos de configuración y complementos que se deben tener en cuenta para realizar este proceso. Ahora bien, al tener todo esto no debemos dejar de lado la configuración del entorno de producción, el cual tiene como objetivo hacer accesible la aplicación para los usuarios que la requieran en todos estos aspectos; se hace una prueba inicial para verificar que todas las configuraciones y carga del sistema se realiza de manera correcta.
            
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema3/tema3-img-02.svg', alt='')
      .py-3.py-md-4(titulo="Instalación y activación")
        .row.background-3.justify-content-center.align-items-center
          .col-lg-11      
            .row.margin-top-tabs
              .col-md-6
                h4 Instalación y activación
                p La instalación y activación del sistema dependen en gran medida al tipo de sistema de información que se esté implementando, por ejemplo, en caso de que el aplicativo necesite copias, los archivos requeridos para su ejecución, en otras palabras, la instalación provee y coloca los archivos necesarios en el servidor de despliegue. En caso de que estemos utilizando una infraestructura como AWS o AZURE para desplegar nuestro aplicativo o en caso de estar realizando el proceso en una máquina, tal como un PC o dispositivo móvil, lo que hace este proceso es colocar los archivos que permiten que el #[i software] se ejecute de manera correcta; ahora, el proceso de activación depende de la negociación establecida para dar acceso al sistema, por ejemplo, licencias o permisos de uso, en este caso como bien sabemos las empresas y #[i software] en general, tienen ciertos procesos de acceder. Si vemos por ejemplo el caso del #[i software] de Office, una vez que se instala, este solicita un código de licencia para activar el sistema y ser utilizado de acuerdo con las políticas y tipo de licencia que el usuario obtuvo; este restringe el uso del sistema y brinda ciertos beneficios a quien lo utiliza, como también encontramos #[i software free], el cual no requiere de una activación sino que puede ser utilizado sin ninguna restricción por parte del usuario final.
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema3/tema3-img-03.svg', alt='')            
      .py-3.py-md-4(titulo="Desactivación")
        .row.background-3.justify-content-center.align-items-center
          .col-lg-11      
            .row.margin-top-tabs
              .col-md-6
                h4 Desactivación
                p La desactivación se realiza de dos maneras, porque depende de cómo se realizó el proceso de negociación con el usuario, es decir, si se realizó bajo la negociación de licencia y esta se ha vencido, el sistema automáticamente niega el acceso y desactiva el usuario, lo que provoca que el usuario no pueda acceder al sistema. Este proceso es el más común para evitar que un usuario utilice un sistema de información sin negociar con el dueño del aplicativo su uso, pero también se puede dar el caso de la desactivación de un sistema por causas tales como errores en los procesos o funciones que realiza; en este caso, si el sistema se encuentra en una plataforma de despliegue se puede desactivar el servicio o detener lo que provoca que el #[i software] no pueda ser accedido por ningún usuario del sistema, esto se utiliza para realizar mantenimiento o mejoras en el sistema como tal.
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema3/tema3-img-04.svg', alt='')            
      .py-3.py-md-4(titulo="Desinstalación")
        .row.background-3.justify-content-center.align-items-center
          .col-lg-11      
            .row.margin-top-tabs
              .col-md-6
                h4 Desinstalación
                p La desinstalación es un proceso que permite borrar completamente los archivos que han sido copiados en un proceso de instalación, esto implica que se borre el rastro de instalación de la aplicación dentro del dispositivo, o en el caso que se realice desde una plataforma de despliegue, borrar las configuraciones y documentos que se utilizaron para colocar en marcha inicialmente el #[i software]. Tenemos que tener presentes las siguientes consideraciones y es que la desinstalación tiene diferentes opciones: una es la desinstalación completa que borra completamente el rastro del aplicativo como tal y adicional a ello, elimina los datos que se hayan generado a través del aplicativo; y la otra es la eliminación del #[i software] pero que se conserven los archivos y datos generados. Este tipo de desinstalaciones se utilizan mucho en el caso de los #[i software] de videojuegos, donde se puede desinstalar el juego pero se conservan las partidas y perfiles creados del usuario para que cuando se realice nuevamente la instalación se conserven estos datos para no iniciar desde cero el proceso de manejo del sistema de información; en este caso, cuando nos referimos a la eliminación de los archivos de instalación, es borrarlos del disco duro del dispositivo, es decir, de manera permanente. En caso que se quiera utilizar nuevamente el aplicativo, se debe realizar el proceso de instalación, es decir, copiar nuevamente los archivos necesarios para que el sistema pueda ejecutarse de nuevo.
              .col-md-6.mb-4.mb-md-0
                figure
                img(src='@/assets/curso/temas/tema3/tema3-img-05.svg', alt='')            
      .py-3.py-md-4(titulo="Actualización")
        .row.background-3.justify-content-center.align-items-center
          .col-lg-11      
            .row.margin-top-tabs
              .col-md-6
                h4 Actualización
                p.mb-3 La actualización es un proceso que consiste en reemplazar archivos o funciones que por algún motivo funcionan mal o han sido mejoradas de acuerdo con las versiones ofrecidas en el sistema. En algunas ocasiones hemos escuchado la expresión “lo actualicé a la versión más reciente”, lo que quiere decir es que se reemplazan los archivos por otros que contienen las nuevas funciones, en algunas ocasiones la actualización incluye archivos que no se encontraban en la versión anterior, es decir, aumenta el tamaño del sistema; por otra parte, también se puede dar el caso que algunos archivos sean obsoletos y se eliminarán para darle paso a los nuevos archivos requeridos por el sistema.
                p.mb-3 Un ejemplo de actualización es el que comentaremos a continuación. Supongamos que una compañía lanzó en 2013 un juego #[i online]. Quienes deseaban jugar con dicha aplicación debían tener instalado el navegador Internet Explorer. En 2015, la empresa presentó una actualización del juego que permitía disfrutarlo también en Google Chrome y en Mozilla Firefox. La actualización, por lo tanto, incrementó el alcance del juego.
                p Por otro lado, la actualización de los programas y demás productos digitales no siempre es algo positivo. En algunos casos, se vuelve necesario instalar nuevas versiones durante muy poco tiempo desde el momento de su lanzamiento, porque la compañía desarrolladora no ha hecho un buen trabajo optimizando su producto y necesita corregir una gran cantidad de errores para que funcione de manera correcta.
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema3/tema3-img-06.svg', alt='')            
      .py-3.py-md-4(titulo="Seguimiento de versiones")
        .row.background-3.justify-content-center.align-items-center
          .col-lg-11      
            .row.margin-top-tabs
              .col-md-6
                h4 Seguimiento de versiones
                p.mb-3 Es un proceso que se realiza para llevar una bitácora de cambios realizados en el código fuente o actualizaciones que ha tenido el sistema; adicional a ello, el control o seguimiento de versiones permite tener una copia de seguridad del proyecto o de una actualización en particular del sistema y en caso que se tengan problemas con los cambios realizados al sistema, se puede proceder a volver a la versión anterior, la cual funciona correctamente y empezar a realizar los diferentes procesos para realizar los cambios requeridos. Si vemos este proceso al detalle, es una ventaja porque permite controlar los cambios que se realizan en el proyecto de #[i software] y en caso que ocurra algún inconveniente, se puede regresar a la versión anterior para ver qué salió mal.
                p En la actualidad existen varias aplicaciones que realizan este proceso, una de ellas es GIT, la cual permite controlar las versiones del código fuente y los cambios que se realizan en el mismo- Git se ha ideado para posibilitar la ramificación y el etiquetado como procesos de primera importancia (a diferencia de SVN) y las operaciones que afectan a las ramas y las etiquetas (como la fusión o la reversión) también se almacenan en el historial de cambios.
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema3/tema3-img-07.svg', alt='')            
      .py-3.py-md-4(titulo="Adaptación")
        .row.background-3.justify-content-center.align-items-center
          .col-lg-11      
            .row.margin-top-tabs
              .col-md-6
                h4 Adaptación
                p.mb-3 Es la capacidad que tiene un sistema de interactuar con otros sistemas y en un ambiente de trabajo de manera fluida, es decir, la adaptación le permite al sistema navegar entre versiones e infraestructura tecnológica. Este proceso, aunque en la mayoría de veces no es tan rápido como se quisiera, contempla la posibilidad de que se realice de manera progresiva. lo cual puede ser positivo o negativo dependiendo de las necesidades que se tengan desde el punto de vista del cliente.
                p Otros ejemplos del #[i software] adaptativo son aquellos que se utilizan para controlar los dispositivos externos que mejoran la experiencia de las personas con movilidad reducida. Un individuo con un uso limitado de las manos puede ser capaz de disfrutar el uso de un ordenador con la ayuda de un ratón o un joystick de gran tamaño y que resulta más fácil de manipular. Las personas con visión limitada se pueden beneficiar de la adición de un escáner que hace que sea posible ampliar el texto que se muestra en la pantalla o posiblemente interpretar un texto en #[i braille] en la voz, en este aspecto estamos viendo la adaptación desde el punto de vista de cómo el sistema puede ajustarse a las necesidades expresadas o necesarias para un cliente o usuario final. Esto en términos de calidad y usabilidad, garantiza que muchos de estos aspectos puedan ser pensados desde los requerimientos iniciales entregados por el usuario, o solo ser un valor agregado que permite la capacidad al sistema de ser operado o llegar a un mayor público.
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema3/tema3-img-08.svg', alt='')            

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        .cajon.color-primario.p-4.mt-4
          p  Aunque sabemos que todos los productos fabricados deben tener la manera de poder retroalimentarse para poder crecer y establecerse en un mercado específico, y comprendiendo que el #[i software] es un producto que requiere de la integración con el usuario y que mediante esa operación puedan surgir nuevas necesidades que a su vez se conviertan en requerimientos para ser incluidas en las próximas versiones del sistema, se hace necesario que se creen los mecanismos para que el usuario participe de una manera más activa en el proceso de construcción y mejora del producto, porque esto permitirá que nuestro sistema perdure por mucho más tiempo en el mercado.
      .col-lg-5
        img(src='@/assets/curso/temas/tema3/tema3-img-09.svg', alt='')

    p.mb-3 Por otra parte, los roles están conectados con las responsabilidades que influyen en un proyecto de <i>software</i> y de acuerdo con la experiencia y formación de cada miembro del equipo de trabajo, aunque en algunas ocasiones una persona puede desarrollar varias funciones, es indispensable que se cuente con los conocimientos y habilidades para cumplir de manera satisfactoria este proceso.
    p.mb-4 Conozcamos varios de estos roles y cuáles son los procesos que ejecutan:

    .row.justify-content-center.mb-4
      .col-lg-5
        img(src='@/assets/curso/temas/tema3/tema3-img-10.svg', alt='')    
      .col-lg-7
        .acordionA-02
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Desarrolladores de aplicaciones")
              p El rol de desarrollador de aplicaciones es uno de los protagonistas en el desarrollo de aplicaciones informáticas porque es el encargado de realizar la codificación del sistema y dar las instrucciones necesarias para que el #[i software] ejecute y cumpla con todos los requisitos funcionales que se negociaron con el cliente. En algunas ocasiones también están involucrados en el proceso de despliegue y de habilitar los entornos de producción requeridos para que el sistema pueda ser visible y utilizado por los usuarios externos, que mediante el uso constante del aplicativo incluyen los datos e información necesaria para que el sistema sea operable en el tiempo. Debemos tener en cuenta que los desarrollos de las aplicaciones se realizan en diferentes lenguajes de programación, por eso se debe tener en cuenta la capacidad de adaptación del desarrollador como también su conocimiento del lenguaje y en cuáles de estos se especializa.
            .row(titulo="Gerentes de lanzamiento")
              p Analiza los resultados del lanzamiento de un nuevo producto. Utiliza la investigación de mercado para entender las necesidades y deseos del cliente en torno del producto. Domina todas las tareas de gestión del equipo de desarrollo de productos. Aunque muchas personas tienen la noción que este proceso no requiere de gran esfuerzo, debemos decir que es un proceso clave para un proyecto de desarrollo de #[i software] debido a la integración entre los diferentes clientes o usuarios del sistema y el producto desarrollado; es la persona que se involucra en este proceso de transición y convierte el producto en lo que es “un producto de calidad que brinda una solución real”.
            .row(titulo="Coordinadores de despliegue")
              p Este rol es el encargado de velar el proceso de pasar el sistema de un ambiente de desarrollo al ambiente de producción; esto involucra muchos procesos, entre ellos, garantizar que el nuevo ambiente proporcione las características técnicas y funcionalidades para que el sistema pueda operar de manera eficiente y brinde al usuario final una experiencia agradable y deseada. Este proceso debe ser ejecutado con mucho cuidado, puesto que en algunas ocasiones es la cara visible del proyecto, es decir, es donde toda la empresa y el cliente están pendientes a conocer realmente la operación del sistema y si este proceso llega a fallar, el producto pierde credibilidad; por ello es indispensable que el coordinador de despliegue se asegure que este proceso quede realizado de la mejor manera.
            .row(titulo="Administrador de sistema")
              p El administrador del sistema es la persona encargada de realizar los procesos de soporte y mantenimiento al aplicativo una vez este ha sido desplegado y se encuentra en el ambiente de producción; es importante destacar las competencias del administrador del sistema, ya que es capaz de dar soluciones a los problemas que se puedan presentar luego de ser implementada la solución todos estos reportes serán tenidos en cuenta en caso que se requiera realizar ciertos cambios en el sistema o fallos en su operación; adicional a ello también es responsable de la creación de usuarios y datos para que la operación del sistema sea posible.
            .row(titulo="Administrador de base de datos")
              p El administrador de base de datos cumple una función primordial en la administración de los datos y seguridad del aplicativo desarrollado, debido a que es el encargado de velar porque la información que se almacena cumpla con los requerimientos de seguridad y disponibilidad; esto hace referencia a la importancia de resguardar los datos producidos a través del aplicativo, de tal manera que no se corrompan o se pierdan. Otro proceso fundamental que lidera el administrador de la base de datos es determinar los permisos de ejecución y de acceso a la información por parte de los usuarios que utilizan el sistema, debe definir permisos y perfiles de usuario de acuerdo con las restricciones que cada uno de ellos pueda presentar.
            .row(titulo="Coordinadores de liberación")
              p La liberación del #[i software], podríamos decir de alguna manera, es la fase final del proceso de entrega del producto final al usuario. Antes de realizar este proceso se debe garantizar que todos los procesos de pruebas, despliegue y adaptación del nuevo sistema al ambiente de producción se han realizado de manera correcta, esto implica también la aplicación de las listas de chequeo para verificar que todos los pasos y procedimientos se realizaron de manera exitosa. Este rol es el encargado de la entrega oficial del sistema desarrollado al usuario final, dando por hecho que aquello en lo cual se sentaron un día a negociar y que fue la base de los requerimientos exigidos por el usuario, se ha cumplido en buenos términos, de allí se firman los documentos oficiales de la entrega del producto totalmente terminado y con puesta en marcha.

    h3 Tipos de despliegue
    p Los tipos de despliegue muestran la manera como un <i>software</i> pasa a producción y, de acuerdo con las necesidades tecnológicas del usuario final, se debe determinar de qué manera se realizará este proceso, aunque existen algunos que pueden variar, de acuerdo con las formas de negociación que se establezcan con el usuario.

    p.mb-4 A continuación, veremos tres tipos de despliegues para proyectos de <i>software</i>:

    .tarjeta.tarjeta--azul.slyderA-01.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-lg-11
            .row.justify-content-center.align-items-center.my-lg-4
              .col-md-6.mb-4.mb-md-0
                h3.mb-3 Autónomo
                p Un despliegue autónomo incluye la base de datos, la consola de gestión y un agente desplegado en un único <i>host</i>. Este despliegue se utiliza normalmente para fines de evaluación y desarrollo, los cuales suelen realizarse para la comprobación del funcionamiento del aplicativo; para este caso particular, solo se cuenta con un <i>host</i> y la consola de administración, lo que quiere decir que es un sistema básico de despliegue y que solo incluirá una dependencia del sistema, la cual será administrada desde la consola y no cuenta con una interfaz de administración que permita realizar este proceso de una manera más sencilla. Se requieren conocimientos técnicos de comandos y rutinas para realizar este tipo de procesos; ahora bien, se comprende también este proceso como la manera más simple de realizar el despliegue de un sistema de información en un ambiente de producción; recordemos que se coloca a disposición del usuario final, para que pueda hacer uso del mismo, de acuerdo con las negociaciones de acceso como, por ejemplo, una VPN o Internet, de acuerdo con las políticas de acceso que se determinen. Es importante agregar que este tipo de despliegues suelen ser sencillos en el sentido que los archivos, tales como bases de datos y de código fuente, se suben de manera rápida al no tener la carga de un entorno de administración complejo.
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema3/tema3-img-12.svg', alt='')

        .row.justify-content-center.align-items-center
          .col-lg-11
            .row.justify-content-center.align-items-center.my-lg-4
              .col-md-6.mb-4.mb-md-0
                h3.mb-3 Instalación de producción normal
                p Una instalación normal coloca la base de datos, la consola de gestión y los agentes en distintos <i>hosts</i>. Este despliegue es el entorno de producción utilizado habitualmente; para estos casos, los <i>hosts</i> o sistemas de soporte de la instalación donde se corre la aplicación, pueden ser muchos, los cuales permiten generar un balance en la carga y eficiencia del sistema. Esto, en términos de rendimiento y velocidad de respuesta, es mucho más eficiente y el usuario final tendrá una mejor experiencia en su utilización; otro aspecto a tener en cuenta es que, al separar cada componente como base de datos, la consola de gestión y agentes en distintos <i>hosts</i>, se tiene un mayor nivel de seguridad.
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema3/tema3-img-13.svg', alt='')
        
        .row.justify-content-center.align-items-center
          .col-lg-11
            .row.justify-content-center.align-items-center.my-lg-4
              .col-md-6.mb-4.mb-md-0
                h3.mb-3 Instalación escalonada
                p.mb-2 En un despliegue escalonado, normalmente hay tres demostraciones normales:
                ol.lista-ol--cuadro.mb-2
                  li 
                    .lista-ol--cuadro__vineta
                      span 1
                    p.mb-0
                      spam| Desarrollo (también denominado 
                      em scratch 
                      | o 
                      em sandbox): 
                      | el personal de desarrollo lo utiliza para crear proyectos nuevos. También se utiliza como el área inicial para las actualizaciones.
                  li 
                    .lista-ol--cuadro__vineta
                      span 2
                    | Prueba: el personal de desarrollo y asesoramiento de calidad lo utilizan para probar el sistema.
                  li 
                    .lista-ol--cuadro__vineta
                      span 3
                    | Producción: lo utiliza todo el personal para ejecutar trabajos en operaciones de negocio cotidianas.
                p Esto es muy importante tenerlo en cuenta, porque al pasar por todos los procesos, desde ambientes de desarrollo hasta producción, se puede visualizar el comportamiento que está teniendo en los mismos y si existe algún problema en alguna de esas etapas se puede corregir antes de que cause algún inconveniente mayor.          

              .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema3/tema3-img-14.svg', alt='')            
  
    
    p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.



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
