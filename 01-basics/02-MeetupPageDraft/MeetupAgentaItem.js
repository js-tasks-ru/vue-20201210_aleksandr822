import { agendaItemIcons, agendaItemTitles } from './script.js'

export const MeetupAgentaItem = {
  name: 'meetup-agenta-item',
  props: {
    item: Object
  },
  template: `
    <div class="meetup-agenda__item">
      <div class="meetup-agenda__item-col">
        <img class="icon" alt="icon" :src="icon" />
      </div>
      <div class="meetup-agenda__item-col">{{ item.startsAt }} - {{ item.endsAt }}</div>
      <div class="meetup-agenda__item-col">
        <h5 class="meetup-agenda__title">{{ defaultTitle }}</h5>
        <p v-if="item.type === 'talk'">
          <span>{{ item.speaker }}</span>
          <span class="meetup-agenda__dot"></span>
          <span class="meetup-agenda__lang">{{ item.language }}</span>
        </p>
        <p v-if="item.description">{{ item.description }}</p>
      </div>
    </div>
  `,
  computed: {
    defaultTitle () {
      if (this.item.title) {
        return this.item.title
      } else {
        return agendaItemTitles[this.item.type]
      }
    },

    icon () {
      return `/assets/icons/icon-${agendaItemIcons[this.item.type]}.svg`
    }
  }
}

