import { MeetupAgentaItem } from './MeetupAgentaItem.js'

export const MeetupAgenta = {
  name: 'meetup-agenta',
  components: {
    MeetupAgentaItem
  },
  props: {
    agenta: Array
  },
  template: `
    <div class="meetup-agenda">
      <p class="meetup-agenda__empty">Программа пока пуста, но когда-нибудь в ней обязательно что-нибудь появится!</p>
      <meetup-agenta-item v-for="(items, id) in agenta" :key="id" :item="items"/>
    </div>
  `
}
