<template>

  <!-- Remove the container if you want to extend the Footer to full width. -->
  <div>
    <div id="nav">
      <img src="@/assets/m1.png" id="icon" alt="User Icon" width="100" /> |
      <router-link to="/">Login</router-link> |
      <router-link to="/about">Home</router-link> |
      <router-link to="/ayuda">Ayuda</router-link> |
      <router-link to="/tutores">Tutores</router-link>
      
    </div>
    <router-view />
    <footer class="bg-primary text-center text-lg-start text-white">
      <!-- Grid container -->
      <div class="container p-4">
        <!--Grid row-->
        <div class="row my-4">
          <!--Grid column-->
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <div
              class="
                rounded-circle
                bg-white
                shadow-1-strong
                d-flex
                align-items-center
                justify-content-center
                mb-4
                mx-auto
              "
              style="width: 150px; height: 150px"
            >
              <img src="@/assets/m1.png" height="120" alt="" loading="lazy" />
            </div>
            <p class="text-center">
              En caso de asistencia puedes consultar nuestros diferentes medios,
              como nuestras redes sociales o por medio de nuestro contacto
              empresarial.
            </p>
            <ul class="list-unstyled d-flex flex-row justify-content-center">
              <li>
                <a class="text-white px-2" href="#!">
                  <i class="fab fa-facebook-square"></i>
                </a>
              </li>
              <li>
                <a class="text-white px-2" href="#!">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a class="text-white ps-2" href="#!">
                  <i class="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
          <!--Grid column-->
          <!--Grid column-->
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase mb-4">Preguntas frecuentes</h5>
            <ul class="list-unstyled">
              <li class="mb-2">
                <a href="#!" class="text-white"
                  ><i class="fas fa-paw pe-3"></i>Cuando me inscribo el cobro es automatico?</a
                >
              </li>
              <li class="mb-2">
                <a href="#!" class="text-white"
                  ><i class="fas fa-paw pe-3"></i>Como puedo cancelar mi inscripcion?</a
                >
              </li>
              <li class="mb-2">
                <a href="#!" class="text-white"
                  ><i class="fas fa-paw pe-3"></i>Hay horarios accesibles para los que trabajamos?</a
                >
              </li>
              <li class="mb-2">
                <a href="#!" class="text-white"
                  ><i class="fas fa-paw pe-3"></i>Como puedo trabajar con ustedes?</a
                >
              </li>
              <li class="mb-2">
                <a href="#!" class="text-white"
                  ><i class="fas fa-paw pe-3"></i>Tienen ofertas?</a
                >
              </li>
              <li class="mb-2">
                <a href="#!" class="text-white"
                  ><i class="fas fa-paw pe-3"></i>Algun programa de becas?</a
                >
              </li>
              <li class="mb-2">
                <a href="#!" class="text-white"
                  ><i class="fas fa-paw pe-3"></i>Voluntariado?</a
                >
              </li>
            </ul>
          </div>
          <!--Grid column-->
          <!--Grid column-->
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase mb-4">Informacion</h5>
            <ul class="list-unstyled">
              <li class="mb-2">
                <a href="#!" class="text-white"
                  ><i class="fas fa-paw pe-3"></i>Informacion general</a
                >
              </li>
              <li class="mb-2">
                <a href="#!" class="text-white"
                  ><i class="fas fa-paw pe-3"></i>Materias</a
                >
              </li>
              <li class="mb-2">
                <a href="#!" class="text-white"
                  ><i class="fas fa-paw pe-3"></i>Datos</a
                >
              </li>
              <li class="mb-2">
                <a href="#!" class="text-white"
                  ><i class="fas fa-paw pe-3"></i>Trabajo</a
                >
              </li>
              <li class="mb-2">
                <a href="#!" class="text-white"
                  ><i class="fas fa-paw pe-3"></i></a
                >
              </li>
              <li class="mb-2">
                <a href="#!" class="text-white"
                  ><i class="fas fa-paw pe-3"></i>Contactos</a
                >
              </li>
            </ul>
          </div>
          <!--Grid column-->
          <!--Grid column-->
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase mb-4">Contactos</h5>
            <ul class="list-unstyled">
              <li>
                <p><i class="fas fa-phone pe-2"></i>+ 503 7856-8790</p>
              </li>
              <li>
                <p>
                  <i class="fas fa-envelope pe-2 mb-0"></i>Andersond.checo@gmail.com
                </p>
              </li>
              <li>
                <p>
                  <i class="fas fa-envelope pe-2 mb-0">Yoshy.floresg17@gmail.com</i>
                </p>
              </li>
              <li>
                <p>
                  <i class="fas fa-envelope pe-2 mb-0">Victoralvarez.ra@gmail.com</i>
                </p>
              </li>
            </ul>
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->
      </div>
      <!-- Grid container -->
      <!-- Copyright -->
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
        © 2022 Copyright:
        <a class="text-white" href="">StudyEasily</a>
      </div>
      <!-- Copyright -->
    </footer>
  </div>
  <!-- End of .container -->
</template>

<style scoped>
</style>