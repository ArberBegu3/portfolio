<template>
  <section class="game-section projects-section">
    <Particles />
    <div class="projects-content">
      <h2 class="projects-title">// Game Portfolio</h2>
      <div class="projects-grid">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </div>
    <div class="portal" @click="$emit('next')" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Particles from '../Particles.vue'
import ProjectCard from '../ProjectCard.vue'
import { PROJECTS_DATA } from '../../constants'

defineEmits<{
  next: []
}>()

const projects = ref(PROJECTS_DATA)
</script>

<style scoped>
.game-section {
  width: 100vw;
  height: auto;
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.projects-section {
  background: linear-gradient(135deg, #0f244e 0%, #3f4246 50%, #2d3748 100%);
}

.projects-content {
  max-width: 1400px;
  width: 100%;
  height: 100vh;
  padding: 6vh 0 0 1rem;
  padding-top: 6vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}

.projects-title {
  font-size: 2.5rem;
  color: var(--accent-color);
  text-shadow: 0 0 20px var(--accent-color);
  margin: 0 0 1.5rem 0;
  text-align: center;
  flex-shrink: 0;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  max-height: 80vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 3rem;
}

.projects-grid::-webkit-scrollbar {
  width: 8px;
}

.projects-grid::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.projects-grid::-webkit-scrollbar-thumb {
  background: var(--accent-color);
  border-radius: 4px;
}

.projects-grid::-webkit-scrollbar-thumb:hover {
  background: #ffd700;
}

.portal {
  position: absolute;
  bottom: 50px;
  right: 100px;
  width: 80px;
  height: 80px;
  background: radial-gradient(circle, var(--accent-color) 0%, transparent 70%);
  border-radius: 50%;
  cursor: pointer;
  animation: pulse 2s infinite;
  transition: transform 0.3s ease;
}

.portal:hover {
  transform: scale(1.2);
}

@keyframes pulse {
  0% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  100% {
    opacity: 0.6;
    transform: scale(1);
  }
}

/* ===========================
   TABLET & BELOW (<=1024px)
   =========================== */
@media (max-width: 1024px) {
  .projects-content {
    height: auto;
    overflow-y: visible;
  }

  .projects-title {
    display: none;
  }

  .projects-grid {
    grid-template-columns:1fr 1fr;
    max-height: none;
    overflow-y: visible;
    padding-bottom: 0;
  }
}

/* ===========================
   SMALL TABLET / PHONE (<=768px)
   =========================== */
@media (max-width: 768px) {
  .projects-content {
    margin-top: 5rem;
    padding: 1.5rem;
  }

  .projects-title {
    font-size: 1.8rem;
  }

  .projects-grid {
    gap: 1rem;
    padding: 2rem;
    height: auto;
  }
}

/* ===========================
   MOBILE (<=480px)
   =========================== */
@media (max-width: 480px) {

  .projects-content{
    height: fit-content;
    margin: 13rem 0 0 0;
  }

  .projects-title {
    font-size: 1.5rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 0.8rem;
    padding-bottom: 160px;
  }
}

</style>
