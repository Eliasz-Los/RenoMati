<script setup lang="ts">
import Button from 'primevue/button'
import Card from 'primevue/card'
import WorkTilesSection from "@/components/home/WorkTilesSection.vue";
import AnimatedSection from "@/components/shared/ui/AnimatedSection.vue";
</script>

<template>
  <section class="hero">
    <div class="hero__container">
      <div class="hero__grid">
        <div class="hero__copy">

          <AnimatedSection animation="slide-down">
            <p class="hero__eyebrow">Renovatie & afwerking</p>
          </AnimatedSection>

          <AnimatedSection animation="slide-left" :delay="0.4">
            <h1 class="hero__title">
              Wij zorgen ervoor dat uw droomhuis<br />
              tot leven komt.
            </h1>
            <p class="hero__lead">
              Professionele en vriendelijke renovatie- en afwerkingswerken, steeds tegen een scherpe
              prijs en binnen budget.
            </p>

            <div class="hero__actions">
              <Button
                label="Offerte aanvragen"
                icon="pi pi-send"
                severity="info"
                rounded
                as="router-link"
                to="/contact"
              />
            </div>

          </AnimatedSection>

          <AnimatedSection animation="slide-up" :delay="0.8">
          <div class="hero__badges">
            <Card class="hero__badge rm-card-spec">
              <template #content>
                <div class="badge">
                  <i class="pi pi-check-circle badge__icon" aria-hidden="true" />
                  <div>
                    <div class="badge__title">Kwaliteit</div>
                    <div class="badge__text">Strak werk, duurzame afwerking.</div>
                  </div>
                </div>
              </template>
            </Card>
            <Card class="hero__badge rm-card-spec">
              <template #content>
                <div class="badge">
                  <i class="pi pi-clock badge__icon" aria-hidden="true" />
                  <div>
                    <div class="badge__title">Binnen planning</div>
                    <div class="badge__text">Duidelijke afspraken, heldere timing.</div>
                  </div>
                </div>
              </template>
            </Card>
          </div>
        </AnimatedSection>
        </div>

        <AnimatedSection animation="slide-right" :delay="1.2">
          <div class="hero__media">
            <div class="hero__mediaFrame" aria-label="RenoMati preview">
              <img
                class="hero__gif"
                src="/VID-20250912-WA0000.gif"
                alt="RenoMati renovatie preview"
                loading="lazy"
              />
            </div>
          </div>
        </AnimatedSection  >
      </div>
    </div>

    <WorkTilesSection></WorkTilesSection>

  </section>
</template>

<style scoped>
.hero {
  border-radius: 12px;
  padding: 3rem 1rem;
}

.hero__container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 3.25rem 1.25rem;
}

.hero__grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 2.25rem;
  align-items: center;
}

.hero__eyebrow {
  margin: 0 0 0.75rem;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-size: 0.8rem;
}

.hero__title {
  margin: 0;
  font-size: clamp(2.05rem, 3.3vw, 3rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #050b18;
}

.hero__lead {
  margin: 1.1rem 0 0;
  font-size: 1.05rem;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.72);
  max-width: 58ch;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.6rem;
}

.hero__badges {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.85rem;
  margin-top: 1.75rem;
}

.hero__badge :deep(.p-card-body) {
  padding: 0.9rem 1rem;
}

.badge {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
}

.badge__icon {
  font-size: 1.15rem;
  color: var(--rm-reno-blue);
  margin-top: 0.1rem;
}

.badge__title {
  font-weight: 800;
  color: #050b18;
}

.badge__text {
  font-size: 0.92rem;
  color: rgba(0, 0, 0, 0.7);
  margin-top: 0.15rem;
}

.hero__mediaFrame {
  border-radius: 18px;
  border: 1px solid rgba(31, 166, 234, 0.28);
  background: rgba(255, 255, 255, 0.75);
  box-shadow: 0 22px 55px rgba(0, 0, 0, 0.12);
  overflow: hidden;
}

.hero__gif {
  width: 100%;
  height: auto;
  display: block;
}

@media (max-width: 960px) {
  .hero__grid {
    grid-template-columns: 1fr;
  }

  .hero__container {
    padding-top: 2.25rem;
  }

  .hero__badges {
    grid-template-columns: 1fr;
  }
}
</style>

