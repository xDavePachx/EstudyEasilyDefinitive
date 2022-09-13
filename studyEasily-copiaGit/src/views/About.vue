<template >
  <div id="about" class="about" align="center">
    <div id="nav">
      <img src="@/assets/m1.png" id="icon" alt="User Icon" width="100" /> 
      <router-link to="/register">Register</router-link> |
      <router-link to="/ayuda">Ayuda</router-link> |
      <router-link to="/tutores">Tutores</router-link>
      
    </div>
    <router-view />
    <div>
      <h1>Introducción</h1>
      <h5 style="width: 38rem" align="justify">
        Study Easily es una página web que permite a los usuarios obtener
        información y contendios de diferentes áreas, básicamente es un
        repositorio de contenidos, mediante la cual se pretende contribiur a la
        mejor del aprendizaje.
      </h5>

      <h5 style="width: 38rem" align="justify">
        Así mismo el estudiante encontrará cursos de las áreas establecidas, lo
        que les permitirá adentrarse a cada continido que se les dificulte, con
        atención especializadas. Por otra parte los libros y contenidos
        disponibles serán accesible para todo usuario que ingrese a la
        plataforma, todo con el objetivo de contribuir con la adquisición de
        aprendizaje.
      </h5>
    </div>

    <br />
    <br />
    <h1>Materias disponibles</h1>

    <br />
    <br />

    <div class="card" style="width: 48rem">
      <img src="@/assets/m2.jpg" class="card-img-top" />
      <div class="card-body">
        <h4>Álgebra</h4>
        <p class="card-text" align="justify">
          La matemática es una ciencia formal que, partiendo de axiomas y
          siguiendo el razonamiento lógico, estudia las propiedades, estructuras
          abstractas y relaciones entre entidades abstractas como números,
          figuras geométricas, iconos, glifos o símbolos en general
        </p>
      </div>
    </div>
    <br />
    <br />
    <div class="card" style="width: 48rem">
      <img src="@/assets/m4.jpg" class="card-img-top" />
      <div class="card-body">
        <h4>Fisica</h4>
        <p class="card-text" align="justify">
          La ciencia es un conjunto de conocimientos verificables sobre una
          materia o un ámbito específico. Es el conjunto de técnicas, métodos y
          leyes que se utilizan o se utilizaron para alcanzar un conocimiento.
          De esta manera es como el hombre ha podido comprender un poco más
          sobre sí mismo y su posición en el mundo. El conocimiento nos hace
          conscientes y la conciencia es la capacidad para conocer nuestro
          entorno.
        </p>
      </div>
    </div>
    <br />
    <div class="card" style="width: 48rem">
      <img src="@/assets/m6.jpg" class="card-img-top" />
      <div class="card-body">
        <h4>Ingles</h4>
        <p class="card-text" align="justify">
          El idioma inglés es una lengua germánica occidental que surgió en los
          reinos anglosajones de Inglaterra y se extendió hasta el Norte en lo
          que se convertiría en el sudeste de Escocia, bajo la influencia del
          Reino de Northumbria.
        </p>
      </div>
    </div>
    <br />
    <div class="card" style="width: 48rem">
      <img src="@/assets/m7.jpg" class="card-img-top" />
      <div class="card-body">
        <h4>Informatica</h4>
        <p class="card-text" align="justify">
          es el área de la ciencia que se encarga de estudiar la administración
          de métodos, técnicas y procesos con el fin de almacenar, procesar y
          transmitir información y datos en formato digital. De esta manera, la
          informática se refiere al procesamiento automático de información
          mediante dispositivos electrónicos y sistemas computacionales.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#about {
  background: white;
}

h1 {
  color: #4C5A88;
}

h5 {
  color: #4C5A88;
}

/*      */

@media (max-width: 768px) {
  .navbar-collapse {
    position: absolute;
    top: 54px;
    left: 0;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 15px;
    width: 100%;
  }
  .navbar-collapse.collapsing {
    height: auto;
    -webkit-transition: left 0.3s ease;
    -o-transition: left 0.3s ease;
    -moz-transition: left 0.3s ease;
    transition: left 0.3s ease;
    left: -100%;
  }
  .navbar-collapse.show {
    left: 0;
    -webkit-transition: left 0.3s ease-in;
    -o-transition: left 0.3s ease-in;
    -moz-transition: left 0.3s ease-in;
    transition: left 0.3s ease-in;
  }
}
</style>
