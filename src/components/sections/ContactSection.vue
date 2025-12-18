<template>
  <section class="game-section contact-section">
    <Particles />
    <div class="contact-content">
      <h2 class="contact-title">// Let's Connect</h2>
      <p class="contact-description">
        Thanks for exploring my interactive portfolio! Feel free to reach out through any of these channels.
      </p>
      <div class="contact-methods">
        <ContactMethod
          icon="fas fa-envelope"
          label="Email"
          value="arber_begu@hotmail.com"
          href="mailto:arber_begu@hotmail.com"
        />
        <ContactMethod
          icon="fab fa-linkedin"
          label="LinkedIn"
          value="linkedin.com/in/arber-begu"
          href="https://www.linkedin.com/in/arber-begu-481228224/"
        />
        <ContactMethod
          icon="fab fa-github"
          label="GitHub"
          value="https://github.com/ArberBegu3"
          href="https://github.com/ArberBegu3"
        />
      </div>
      <div class="game-complete">
        <h3>🎉 Level Complete! 🎉</h3>
        <p>Thanks for exploring my portfolio!</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Particles from '../Particles.vue'
import ContactMethod from '../ContactMethod.vue'
</script>

<style scoped>
.game-section {
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-section {
  background: linear-gradient(135deg, #a8a8a8 0%, #002c7e 100%);
}

.contact-content {
  max-width: 800px;
  padding: 2rem 1rem;
  z-index: 2;
  width: 100%;
  margin: 0 auto;
  text-align: center;
}

.contact-title {
  font-size: 3rem;
  color: var(--accent-color);
  text-shadow: 0 0 20px var(--accent-color);
  margin-bottom: 0.8rem;
  text-align: center;
}

.contact-description {
  font-size: 1.3rem;
  color: var(--text-light);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.contact-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 0.5rem;
}

.game-complete {
  text-align: center;
  background: rgba(0, 0, 0, 0.8);
  padding: 2rem;
  border-radius: 10px;
  border: 2px solid var(--success-color);
}

.game-complete h3 {
  color: var(--success-color);
  font-size: 2rem;
  margin-bottom: 1rem;
  text-shadow: 0 0 20px var(--success-color);
}

.game-complete p {
  color: var(--text-light);
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  
  .contact-methods {
    gap: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .contact-method {
    justify-content: center;
    padding: 1rem;
  }

  .contact-title {
    font-size: 2rem;
  }

  .contact-description {
    font-size: 1.1rem;
  }

  .game-complete h3{
    font-size: 1.5rem;
  }
}
</style>
