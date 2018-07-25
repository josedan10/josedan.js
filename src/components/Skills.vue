<template>
  <section data-aos="fade-up" data-aos-duration="2000" class="skills">
    <h1 class="display-4">Skills</h1>
    <div class="content">

        <div v-bind:key="index" v-for="(skill, index) in skills" :data-aos="(index % 2) ? 'flip-right' : 'flip-left'"  data-aos-duration="1500" data-aos-delay="500" class="skill d-flex">

            <!-- Render Skills  -->

            <Skill :index="index" :name="skill.name" :list="skill.list">
              <FrontendAsset slot="asset" v-if="skill.name === 'Frontend'"></FrontendAsset>
              <BackendAsset slot="asset" v-else-if="skill.name === 'Backend'"></BackendAsset>
              <ProgrammingAsset slot="asset" v-else-if="skill.name === 'Programming Languages'"></ProgrammingAsset>
              <img class="mx-auto img-fluid" slot="asset" src="../assets/Nazly.jpg" alt="design" v-else-if="skill.name === 'Design'" />
            </Skill>
        </div>
    </div>
  </section>
</template>

<script>
  import Skill from './Skill';
  import BackendAsset from '../assets/backend.svg';
  import FrontendAsset from './FrontendAsset';
  import ProgrammingAsset from '../assets/programming.svg';

  export default {
    name: 'Skills',
    components: {
      Skill,
      BackendAsset,
      FrontendAsset,
      ProgrammingAsset
    },
    data: () => {
      return {
        skills: [
          {
            name: 'Frontend',
            list: [
              {
                name: 'React.js',
                lvl: 3
              },
              {
                name: 'jQuery',
                lvl: 3
              },
              {
                name: 'Bootstrap',
                lvl: 3
              },
              {
                name: 'Vue.js',
                lvl: 3
              },
              {
                name: 'React Native',
                lvl: 2
              }
            ]
          },
          {
            name: 'Backend',
            list: [
              {
                name: 'Laravel',
                lvl: 2
              },
              {
                name: 'Codeigniter',
                lvl: 2
              },
              {
                name: 'MySQL',
                lvl: 2
              },
              {
                name: 'SQL Server',
                lvl: 2
              },
              {
                name: 'Ruby on Rails',
                lvl: 1
              }
            ]
          },
          {
            name: 'Programming Languages',
            list: [
              {
                name: 'Python',
                lvl: 3
              },
              {
                name: 'Javascript',
                lvl: 3
              },
              {
                name: 'Ruby',
                lvl: 2
              },
              {
                name: 'C++',
                lvl: 2
              },
              {
                name: 'PHP',
                lvl: 2
              },
              {
                name: 'Visual Basic',
                lvl: 2
              },
              {
                name: 'C#',
                lvl: 1
              },
              {
                name: 'Java',
                lvl: 1
              }
            ]
          },
          {
            name: 'Design',
            list: [
              {
                name: 'Inkscape',
                lvl: 2,
                small: 'Graphic vector software editor'
              },
              {
                name: 'GIMP',
                lvl: 2,
                small: 'Image editor'
              },
              {
                name: 'Gravit Designer',
                lvl: 2,
                small: 'Graphic vector software editor'
              }
            ]
          }
        ]
      };
    }
  };
</script>
