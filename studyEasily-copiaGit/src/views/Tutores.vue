<template>
  <div>
    <div class="tutores">
      <div id="nav">
        <img src="@/assets/m1.png" id="icon" alt="User Icon" width="100" /> |
        <router-link to="/about">Home</router-link> |
        <router-link to="/ayuda">Ayuda</router-link> |
        <router-link to="/tutores">Tutores</router-link>|
        <router-link to="/pago">Premiun</router-link>
      </div>
    </div>

    <!-- <h1 class="text-red-900 p-4 font-italic font-bold">Este es para maestros</h1> -->
    <h1 class="text-blueGray-400 p-4 font-italic font-bold">Tutores para el área de: Inglés</h1>
    <!-- Start Slider -->
    <Slider>
      <!-- Content Slide -->
      <Slide>
        <Card
          image="https://st.depositphotos.com/2309453/2657/i/600/depositphotos_26579409-stock-photo-man-writing-on-chalkboard.jpg"
          title="Manuel Alexander Salgado Medrano"
          description="¡Hola! Me llamo Manuel, tengo 23 años y soy de la Unión, El Salvador. Soy Graduado en Estudios Ingleses y poseo varias certificaciones para enseñar inglés como lengua extranjera…"
          :courses="[
            'The parts of speech: Nouns, pronouns, adjectives, verbs, adverbs, prepositions, conjunctions, and interjections.',
            'Grammar.',
            'Vocabulary',
            'Verbs',
            'Listening and pronunciation',
          ]"
          bgColor="bg-red-100"
        />
      </Slide>
      <!-- Finish -->

      <Slide>
        <Card
          image="https://pinion.education/wp-content/uploads/2020/06/039_Serdocente_02.jpg"
          title="Karla Alejandra Morales Peña"
          description="¡Hola a todos! Me llamo Carmen y soy licenciada en Filología Inglesa. Llevo impartiendo clases de inglés y español desde hace aproximadamente 10 años."
          :courses="[
            'Inglés general.',
            'Inglés para los negocios.',
            'Español para extranjeros.',
            'Preparación de exámenes. (Cambridge, TOEIC, TELC)',
            'Preparación de entrevistas de trabajo (en inglés o en español)',
            'Preparación de reuniones de trabajo (en inglés o en español)',
          ]"
          bgColor="bg-red-100"
        />
      </Slide>

      <Slide>
        <Card
          image="https://silviaalava.com/wp-content/uploads/2017/04/Maestros.jpg"
          title="Francisco Nicolas Garay Sorto"
          description="Mi nombre es Francisco, soy Estadounidense. Mi formación base es Ingeniería, pero imparto clases de Inglés y Portugués online. Tengo certificado con un nivel C2 (proficiency), CELTA (Certificate in Teaching English to Speakers of Other Languages)"
          :courses="[
            'Gramática',
            'Inglés para negocios',
            'Vocabulario',
            'Conversación',
            'Redacción',
          ]"
          bgColor="bg-red-100"
        />
      </Slide>
    </Slider>

    <h1 class="text-blueGray-400 p-4 font-italic font-bold">Tutores para el área de: Informática</h1>

    <Slider>
      <Slide>
        <Card
          image="https://cdn.pixabay.com/photo/2020/10/19/18/55/man-5668712_960_720.jpg"
          title=" Mauricio Enrique Pérez Alejo"
          description="Mi nombre es Enrique, soy ingeniero informático y tengo especialización en seguridad informática. Soy experto en monitoreo de servidores y equipos de infraestructura de telecomunicaciones por más de 5 años. Tengo experiencia en configuración y mantenimiento de servidores GNU/Linux incluyendo distribuciones Debian, Gentoo, Red hat y otras.
"
          :courses="['Informática', 'Redes IP', 'Linux', 'Server']"
          bgColor="bg-blue-100"
        />
      </Slide>

      <Slide>
        <Card
          image="https://st.depositphotos.com/1011643/2198/i/600/depositphotos_21987605-stock-photo-primary-male-teacher-in-classroom.jpg"
          title="Luka Enmanuel Paz Funes"
          description="Soy ingeniero técnico informático y profesor de ciclos de FP (ASIR, DAW, SMR) y de secundaria desde hace varios años. Tengo numerosos cursos de tecnologías educativas. Dispongo de B2 de Inglés."
          :courses="[
            'Informática',
            'Linux ',
            'Windows',
            'Redes IP',
            'Cloud Computing',
            'Server',
            'MAC OS X',
            'Intelligence Systems',
          ]"
          bgColor="bg-blue-100"
        />
      </Slide>

      <Slide>
        <Card
          image="https://st3.depositphotos.com/3332767/13489/i/600/depositphotos_134893690-stock-photo-portrait-of-a-male-teacher.jpg"
          title="Carlos Manrique Juárez Alvarado"
          description="Hola, soy profesor de informática en todas sus especialidades, así como de formación cívica y ética, tengo amplia experiencia en informática en nivel básico, medio superior y superior."
          :courses="[
            'Informática',
            'Informática',
            'Cloud Computing',
            'Windows',
          ]"
          bgColor="bg-blue-100"
        />
      </Slide>
    </Slider>

    <h1 class="text-blueGray-400 p-4 font-italic font-bold">Tutores para el área de: Álgebra</h1>

    <Slider>
      <Slide>
        <Card
          image="https://www.cvexpres.com/wp-content/uploads/2019/01/trabajar-como-maestro-en-inglaterra-requisitos-e-informacion.jpg"
          title=" Lorena Elizabeth Martínez Morataya"
          description="Hola soy Lorena y soy graduada en Matemáticas. Proporcionó material extra, metodologías de estudio y sobre todo te acompaño a disfrutar de las matemáticas y conseguir tus objetivos. Aprovecha mi ayuda y ponte al día.
"
          :courses="[
            'Álgebra',
            'Estadística',
            'Matemáticas básicas',
            'Álgebra lineal',
            'Análisis numérico',
            'Matemáticas aplicadas',
          ]"
          bgColor="bg-green-100"
        />
      </Slide>

      <Slide>
        <Card
          image="https://st2.depositphotos.com/1518767/7327/i/600/depositphotos_73276431-stock-photo-teacher-writing-on-notepad-at.jpg"
          title="Johanna Elizabeth Pérez García"
          description="Soy una persona que me gusta enseñar y considero que se nos olvida el valor y la importancia de ello, basándonos en contenidos en vez de en la forma de transmitirlos, cuando ambas partes de la educación son igual de valiosas."
          :courses="[
            'Matemáticas',
            'Álgebra',
            'Matemáticas básicas',
            'Álgebra lineal',
            'Trigonometría',
            'Cálculo',
            'Geometría',
          ]"
          bgColor="bg-green-100"
        />
      </Slide>

      <Slide>
        <Card
          image="http://www.elegircarrera.net/blog/wp-content/uploads/2017/04/me-gusta-mi-profesor-1024x682.jpg"
          title="José Omar Benavides Ortega"
          description="Hola soy Omar, licenciado en matemáticas aplicadas y con un máster en ciencias matemáticas. He impartido cursos de álgebra lineal, cálculo, análisis matemático, geometría, ecuaciones diferenciales."
          :courses="[
            'Matemáticas',
            'Álgebra',
            'Matemáticas básicas',
            'Álgebra lineal',
            'Matemáticas aplicadas',
            'Trigonometría',
            'Cálculo',
          ]"
          bgColor="bg-green-100"
        />
      </Slide>
    </Slider>

    <h1 class="text-blueGray-400 p-4 font-italic font-bold">Tutores para el área de: Física</h1>

    <Slider>
      <Slide>
        <Card
          image="https://eldemocrata.com/wp-content/uploads/2020/05/150520-maestros.jpg"
          title="Cristina M. Hernández Palacio"
          description="Tengo un título en física. Enseñé matemáticas y física en escuelas secundarias y electrónica en escuelas técnicas. Tengo cuarenta años de experiencia docente. Puedo dar clases de matemáticas y física para estudiantes de secundaria y universitarios para cualquier tipo de facultad.
"
          :courses="[
          'Contenidos y cursos',
          'Física',
          'Termodinámica',
          'Física Molecular',
          'Física básica',
          'Fisicoquímica',
          'Física cuántica'
          ]"
          bgColor="bg-pink-100"
        />
      </Slide>

      <Slide>
        <Card
          image="https://us.123rf.com/450wm/ostill/ostill1206/ostill120600053/14388074-un-hombre-cauc%C3%A1sico-profesor-de-la-ense%C3%B1anza-de-la-lectura-de-un-estudio-de-maestro-de-libro-antiguo.jpg"
          title="Jonathan Martínez Paz"
          description="Soy estudiante de último año de la carrera de ciencias Física Matemáticas. Cuento con experiencia de 3 años dando clases de física, matemáticas y química a nivel elemental hasta bachillerato."
          :courses="[
            'Física',
            'Electromagnetismo',
            'Matemáticas Termodinámica',
            'Álgebra Biofísica',
            'Física de fluidos',
            'Física Experimental',
            'Física básica',
          ]"
          bgColor="bg-pink-100"
        />
      </Slide>

      <Slide>
        <Card
          image="https://d1pc5hp1w29h96.cloudfront.net/magefan_blog/Las_10_mejores_plataformas_de_aprendizaje_a_distancia_para_maestros.jpg"
          title="Ana Leticia Contreras"
          description="¡Hola! Soy Ana, licenciada en Física y doctora en Física experimental en el área de Física Atómica y Molecular. Actualmente me dedico a la investigación, pero siempre intento sacar tiempo para dedicarme a mi otra gran pasión, la enseñanza."
          :courses="[
          'Física',
          'Electromagnetismo',
          'Termodinámica',
          'Física Experimental', 
          'Física básica'
          ]"
          bgColor="bg-pink-100"
        />
      </Slide>
    </Slider>
  </div>
</template>

<script>
import Slider from "../components/Slider/index.vue";
import Slide from "../components/Slider/Slide.vue";
import Card from "../components/Card.vue";

export default {
  name: "Tutores",
  components: {
    Slider,
    Slide,
    Card,
  },
};
</script>
